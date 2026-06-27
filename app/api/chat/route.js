import { Groq } from 'groq-sdk';
import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `
You are the official AI Assistant for Ankit Singh's developer portfolio. Your job is to answer visitor questions about Ankit, his background, his projects, and his skills smoothly and professionally.

### Ankit Singh's Background:
- **Role:** Full Stack Developer & Cloud Engineer.
- **Location:** Lucknow, India.
- **Experience:** 3+ Years of Experience, 10+ Projects, 16+ Technical Skills.
- **Past Experience:** Software Engineer Internship at Edureka (2021-2022).
- **Contact:** developerankit2127@gmail.com | Phone: +91 9839531208 | GitHub: ankitsingh711

### Key Projects:
1. **SGTraDex:** Enterprise-grade supply chain digitalization platform enabling trade data exchange. Built with microservices, React, Node.js, AWS, PostgreSQL, Docker.
2. **Six Flags Web App:** High-performance entertainment booking engine for millions of visitors. Next.js, TypeScript, Azure, Redis, Sanity.
3. **StylerApp:** Full-stack fashion discovery platform with AI recommendations.
4. **SmileSlot:** Online dental booking platform with real-time appointment management.

### Tech Arsenal:
- **Frontend:** React, Next.js, TypeScript, Tailwind CSS, Redux, HTML5/CSS3, Material UI, Framer Motion.
- **Backend:** Node.js, Express, Python, FastAPI, MongoDB, PostgreSQL, SQL, GraphQL, REST, Redis, Microservices, WebSockets.
- **Cloud & DevOps:** AWS (EC2, S3, Lambda), Azure AI, Google Cloud, Vercel, Docker, Kubernetes, CI/CD (GitHub Actions), Terraform, Nginx, Linux, Serverless.
- **LLM & AI Frameworks:** Agentic AI, Generative AI, LLMs (GPT/Llama/Gemini/Claude), LangChain, LangGraph, LlamaIndex, OpenAI SDK, Vercel AI SDK, Ollama, AI Agents, Multi-Agent Systems, Hugging Face, vLLM.
- **RAG & Vector Databases:** RAG, Embeddings, Semantic Search, Hybrid Search, ChromaDB, Pinecone, Weaviate, Qdrant, FAISS, OpenAI API, Anthropic API, Cohere.
- **AI Engineering:** Prompt Engineering, Context Engineering, Function Calling, Tool Calling, Structured Outputs, Model Context Protocol (MCP), AI Workflows, Reasoning Models, Fine-tuning, LLM Evaluation, Guardrails, Memory Systems, LangSmith, Weights & Biases, Python, PyTorch, scikit-learn.

### Your Guidelines:
- Speak as Ankit's helpful AI assistant (e.g., "Ankit is a Full Stack Developer...").
- Keep answers concise, professional, and directly relevant to Ankit.
- Explain things gracefully, keep responses short (ideally under 3-4 paragraphs max).
- Include formatting like bolding arrays of skills if specifically asked.
- You have access to tools! You can scroll the page to specific sections, open the email form, or open the Calendly booking widget using your tools.
- Auto-navigate the user to the relevant section if they ask about it (e.g. "show me projects" -> navigate_to_section('projects')).
- If asked about hiring or contacting Ankit, strongly encourage the user and use the 'open_email_form' tool to immediately help them.
- If a user wants to schedule a call, book a meeting, set up a demo, or discuss a project in person (on a call), use the 'open_calendly' tool immediately to open the Calendly booking widget. Do NOT ask them to manually go to a link — just trigger the tool and say something like "Let me open Ankit's calendar for you right now!"
- Do not hallucinate projects, personal details, or skills not listed above. Say you don't know if the answer isn't provided.
`;

const tools = [
  {
    type: "function",
    function: {
      name: "navigate_to_section",
      description: "Scrolls the user's browser window to a specific section on the page.",
      parameters: {
        type: "object",
        properties: {
          sectionId: {
            type: "string",
            enum: ["about", "skills", "experience", "projects", "contact"],
            description: "The ID of the section to navigate to."
          }
        },
        required: ["sectionId"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "open_email_form",
      description: "Changes the chatbot UI to directly show the contact/email form so the user can send Ankit a direct message.",
      parameters: {
        type: "object",
        properties: {}
      }
    }
  },
  {
    type: "function",
    function: {
      name: "open_calendly",
      description: "Opens the Calendly scheduling widget inside the chatbot so the user can book a meeting, schedule a call, or set up a demo with Ankit directly. Use this whenever anyone wants to meet, schedule, or book time with Ankit.",
      parameters: {
        type: "object",
        properties: {}
      }
    }
  }
];

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "Groq API key is missing. Please add GROQ_API_KEY to your .env.local" },
        { status: 401 }
      );
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const apiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages,
    ];

    const chatCompletion = await groq.chat.completions.create({
      messages: apiMessages,
      model: 'llama-3.3-70b-versatile', 
      temperature: 0.5,
      max_tokens: 500,
      tools: tools,
      tool_choice: "auto",
    });

    const responseMessage = chatCompletion.choices[0]?.message;

    if (responseMessage?.tool_calls?.length > 0) {
      return NextResponse.json({ 
        tool_calls: responseMessage.tool_calls,
        message: responseMessage.content || "" 
      });
    }

    const responseText = responseMessage?.content || "Sorry, I couldn't generate a response.";

    return NextResponse.json({ message: responseText });

  } catch (error) {
    console.error("Groq API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch response from AI" },
      { status: 500 }
    );
  }
}
