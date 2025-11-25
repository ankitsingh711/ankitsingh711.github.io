import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CodeEditorPage from './components/CodeEditor/CodeEditorPage';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot/ChatBot';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import AccessibilityToolbar from './components/Accessibility/AccessibilityToolbar';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/code-editor" element={<CodeEditorPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <ChatBot />
          <ScrollToTop />
          <AccessibilityToolbar />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 