'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('chat'); // 'chat' | 'email'

  // Chat State
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Ankit's AI assistant. Ask me anything about his skills, projects, or background!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);

  // Email State
  const [emailData, setEmailData] = useState({ email: '', message: '' });
  const [emailStatus, setEmailStatus] = useState('idle'); // idle | sending | success | error

  // Auto-scroll chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, view]);

  // -- CHAT LOGIC --
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Build the list of messages locally WITHOUT side-effect messages from earlier, or just keep string content
    const userMsg = { role: 'user', content: input.trim() };
    const latestMessages = [...messages, userMsg];
    
    setMessages(latestMessages);
    setInput('');
    setIsTyping(true);

    try {
      // Send only pure text messages back to API for context
      const cleanMessages = latestMessages.map(m => ({
        role: m.role,
        content: m.content.replace(/\n\*.*?\*$/, "").trim() // Remove our internal action logs before sending
      })).slice(-10);

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: cleanMessages }), 
      });

      const data = await res.json();
      
      if (res.ok) {
        if (data.tool_calls) {
          let actionMessage = data.message || "";
          for (const tool of data.tool_calls) {
            if (tool.function.name === 'navigate_to_section') {
              try {
                const args = JSON.parse(tool.function.arguments);
                const sectionId = args.sectionId;
                const el = document.getElementById(sectionId);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  actionMessage += `\n*🧭 Navigating to ${sectionId} section...*`;
                }
              } catch(e) {}
            } else if (tool.function.name === 'open_email_form') {
              setView('email');
              actionMessage += `\n*✉️ Opening direct email form...*`;
            }
          }
          setMessages((prev) => [...prev, { role: 'assistant', content: actionMessage.trim() }]);
        } else {
          setMessages((prev) => [...prev, { role: 'assistant', content: data.message }]);
        }
      } else {
        setMessages((prev) => [...prev, { role: 'assistant', content: `[Error]: ${data.error}` }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'assistant', content: "Sorry, I couldn't reach the server right now." }]);
    } finally {
      setIsTyping(false);
    }
  };

  // -- EMAIL LOGIC --
  const handleSendEmail = async (e) => {
    e.preventDefault();
    if (!emailData.email.trim() || !emailData.message.trim()) return;

    setEmailStatus('sending');
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Chatbot User',
          email: emailData.email,
          subject: 'Message via AI Chatbot Widget',
          message: emailData.message,
        }),
      });

      if (!res.ok) throw new Error('Failed to send email');

      setEmailStatus('success');
      setTimeout(() => {
        setEmailStatus('idle');
        setEmailData({ email: '', message: '' });
        setView('chat'); // Go back to chat
      }, 3000);

    } catch (error) {
      console.error('Error sending email:', error);
      setEmailStatus('error');
      setTimeout(() => setEmailStatus('idle'), 3000);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg hover:shadow-glow hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center z-[1000]"
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
        style={{ pointerEvents: isOpen ? 'none' : 'auto' }}
        aria-label="Open AI Chatbot"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-[350px] sm:w-[400px] h-[550px] max-h-[80vh] bg-surface/95 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden z-[1001]"
          >
            {/* Header */}
            <div className="bg-transparent py-5 px-6 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  AI
                </div>
                <div>
                  <h3 className="text-on-background font-manrope font-semibold text-sm">Ankit&apos;s AI Proxy</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-on-surface-variant text-[10px] font-inter uppercase tracking-wider">Online (Groq)</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {view === 'chat' ? (
                  <button 
                    onClick={() => setView('email')}
                    className="p-1.5 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors flex items-center justify-center"
                    title="Direct Mail"
                    aria-label="Send Direct Mail"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                ) : (
                  <button 
                    onClick={() => setView('chat')}
                    className="text-xs font-inter font-medium bg-surface-variant text-on-surface px-3 py-1.5 rounded-lg hover:bg-surface-variant-high transition-colors"
                  >
                    Back to Chat
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors rounded-full hover:bg-outline-variant/10"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth">
              {view === 'chat' && (
                <>
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                      <div className={`px-5 py-3.5 rounded-2xl max-w-[85%] text-[13px] md:text-sm font-inter leading-relaxed whitespace-pre-wrap ${
                        msg.role === 'user' 
                          ? 'bg-primary text-white rounded-br-sm shadow-md' 
                          : 'bg-surface-container-highest text-on-surface rounded-bl-sm shadow-sm'
                      }`}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex items-start">
                      <div className="px-5 py-4 bg-surface-container-highest rounded-2xl rounded-bl-sm flex items-center justify-center gap-1.5 w-[72px] shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/70 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/70 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/70 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} className="h-1" />
                </>
              )}

              {view === 'email' && (
                <div className="h-full flex flex-col justify-center animate-in fade-in zoom-in duration-300">
                  <h4 className="text-on-background font-manrope font-semibold text-lg mb-2">Send Direct Email</h4>
                  <p className="text-on-surface-variant text-xs mb-6 font-inter">Skip the chat and send an email straight to Ankit's personal inbox.</p>
                  
                  <form onSubmit={handleSendEmail} className="space-y-4 w-full">
                    <div>
                      <input 
                        type="email" 
                        placeholder="Your Email Address" 
                        required
                        disabled={emailStatus !== 'idle'}
                        value={emailData.email}
                        onChange={(e) => setEmailData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-surface-container-highest text-on-surface text-sm px-5 py-4 rounded-[1rem] focus:ring-2 focus:ring-primary/50 focus:outline-none disabled:opacity-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] transition-all"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="How can I help you?" 
                        rows={4}
                        required
                        disabled={emailStatus !== 'idle'}
                        value={emailData.message}
                        onChange={(e) => setEmailData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full bg-surface-container-highest text-on-surface text-sm px-5 py-4 rounded-[1.25rem] focus:ring-2 focus:ring-primary/50 focus:outline-none resize-none disabled:opacity-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] transition-all"
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={emailStatus !== 'idle'}
                      className="w-full bg-primary text-white font-medium py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {emailStatus === 'sending' ? 'Sending...' : emailStatus === 'success' ? '✓ Sent Successfully' : emailStatus === 'error' ? 'Failed - Try Again' : 'Send Message'}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Input Footer */}
            {view === 'chat' && (
              <div className="p-4 px-5 pb-6 bg-gradient-to-t from-surface via-surface/95 to-transparent shrink-0">
                <form onSubmit={handleSendMessage} className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isTyping}
                    placeholder="Ask about Ankit..."
                    className="w-full bg-surface-container-highest text-on-surface text-sm px-6 py-4 pr-[3.5rem] rounded-[2rem] focus:ring-2 focus:ring-primary/50 focus:outline-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] dark:shadow-none disabled:opacity-50 transition-all font-inter placeholder:text-on-surface-variant/50"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full disabled:opacity-40 hover:bg-primary/90 transition-all shadow-md active:scale-95"
                  >
                    <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
