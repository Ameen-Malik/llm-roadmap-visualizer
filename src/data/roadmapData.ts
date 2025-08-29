
export type ContentType = 'Live' | 'Recorded' | 'Live (Combined)' | 'Recorded (Combined)' | 'Assignment' | 'Practice Set';

export interface RoadmapItem {
  title: string;
  type: ContentType;
  description?: string;
}

export interface RoadmapSubmodule {
  title: string;
  items: RoadmapItem[];
}

export interface RoadmapModule {
  title: string;
  submodules: RoadmapSubmodule[];
}

export const roadmapData: RoadmapModule[] = [
  {
    title: "Full Stack LLM",
    submodules: [
      {
        title: "Introduction",
        items: [
          {
            title: "Introduction to Programming",
            type: "Recorded"
          },
          {
            title: "OPT",
            type: "Recorded"
          },
          {
            title: "Orientation + Introduction to Full Stack",
            type: "Live (Combined)"
          }
        ]
      },
      {
        title: "UI",
        items: [
          {
            title: "UI Building (Practical)",
            type: "Live"
          },
          {
            title: "UI of Chatbot",
            type: "Assignment"
          }
        ]
      },
      {
        title: "API",
        items: [
          {
            title: "Intro to APIs (theory)",
            type: "Recorded (Combined)"
          },
          {
            title: "Building apps with UI and API",
            type: "Recorded"
          },
          {
            title: "Intro to Fast API (theory+code)",
            type: "Recorded"
          },
          {
            title: "Building APIs with Fast API (practical)",
            type: "Live"
          },
          {
            title: "APIs for Chatbot",
            type: "Assignment"
          }
        ]
      },
      {
        title: "LLM",
        items: [
          {
            title: "Intro to LLM & Prompt Engineering (Theory)",
            type: "Live (Combined)"
          },
          {
            title: "LLM (Pre recorded series) (Theory)",
            type: "Recorded (Combined)"
          },
          {
            title: "Prompt Engineering: Building LLM wrappers (Practical)",
            type: "Live"
          },
          {
            title: "Invisible software",
            type: "Practice Set"
          }
        ]
      },
      {
        title: "Database",
        items: [
          {
            title: "Intro to Database: Domain Modeling & ER Diagrams (Theory & Practical)",
            type: "Live (Combined)"
          },
          {
            title: "Database: Supabase (SQL) (Practical)",
            type: "Live"
          },
          {
            title: "Create a domain model, ER, Schema DB of practice set 1,2",
            type: "Practice Set"
          }
        ]
      },
      {
        title: "AI accelerated full stack",
        items: [
          {
            title: "Lovable/cursor recorded",
            type: "Recorded (Combined)"
          },
          {
            title: "Building apps with AI (Lovable and Cursor)",
            type: "Live (Combined)"
          },
          {
            title: "Intro to GitHub and Open Source (HuggingFace)",
            type: "Live (Combined)"
          },
          {
            title: "Push all your assignments and practice set to GitHub",
            type: "Practice Set"
          },
          {
            title: "MVP Building",
            type: "Live"
          }
        ]
      }
    ]
  },
  {
    title: "Augmented LLM",
    submodules: [
      {
        title: "Tools",
        items: [
          {
            title: "Function and Tool Calling in LLM (Theory)",
            type: "Live (Combined)"
          },
          {
            title: "Function and Tool Calling in LLM (Theory)",
            type: "Recorded (Combined)"
          },
          {
            title: "Function and Tool Calling in LLM (Practical)",
            type: "Live"
          }
        ]
      },
      {
        title: "Retrieval",
        items: [
          {
            title: "Introduction to Retrieval-Augmented Generation (RAG) (theory)",
            type: "Live (Combined)"
          },
          {
            title: "Building RAG apps with LlamaIndex (Practical)",
            type: "Live"
          }
        ]
      },
      {
        title: "Memory",
        items: [
          {
            title: "Introduction to Memory: Short term, long term, episodic (theory + practical)",
            type: "Live (Combined)"
          }
        ]
      }
    ]
  },
  {
    title: "LLM Workflows",
    submodules: [
      {
        title: "LLM Workflows", 
        items: [
          {
            title: "Intro to LLM Workflows (Theory)",
            type: "Live (Combined)"
          },
          {
            title: "Intro to LLM Workflows (Practical)",
            type: "Live"
          },
          {
            title: "Decision-Making Frameworks for Choosing Between Fine-Tuning and RAG",
            type: "Live (Combined)"
          }
        ]
      }
    ]
  },
  {
    title: "Capstone Project",
    submodules: [
      {
        title: "Capstone Project",
        items: [
          {
            title: "LLM App Building & Capstone Discussion",
            type: "Live (Combined)"
          },
          {
            title: "Architecting AI applications with insights from Tejas.",
            type: "Live (Combined)"
          }
        ]
      }
    ]
  },
  {
    title: "LLM Fine Tuning",
    submodules: [
      {
        title: "LLM Fine Tuning",
        items: [
          {
            title: "Introduction to fine-tuning models.",
            type: "Live (Combined)"
          },
          {
            title: "Fine-tuning processes and their evaluation.",
            type: "Live (Combined)"
          },
          {
            title: "Data preparation techniques for fine-tuning.",
            type: "Live (Combined)"
          },
          {
            title: "Advanced fine-tuning techniques PEFT",
            type: "Live (Combined)"
          }
        ]
      }
    ]
  },
  {
    title: "Agents",
    submodules: [
      {
        title: "Agents",
      items: [
        {
          title: "Introduction to AI Agents",
          type: "Live (Combined)"
        },
        {
          title: "Building your first AI agent",
          type: "Live"
        },
        {
          title: "Deep Dive: AI Agent Components & Design Patterns",
          type: "Live (Combined)"
        },
        {
          title: "Understanding Multi-Agent Systems",
          type: "Live (Combined)"
        },
        {
          title: "Hands-on Building AI Agents",
          type: "Live"
        },
        {
          title: "Applying Guardrails, Monitoring and Evaluation",
          type: "Live (Combined)"
        // title: "Agents",
        // items: [
        //   {
        //     title: "Introduction to AI Agents",
        //     type: "Live (Combined)"
        //   },
        //   {
        //     title: "Agentic Design Patterns",
        //     type: "Live (Combined)"
        //   },
        //   {
        //     title: "Building a ReAct Agent from Scratch",
        //     type: "Live (Combined)"
        //   },
        //   {
        //     title: "Introduction to Multi-Agent Framework",
        //     type: "Live (Combined)"
        //   },
        //   {
        //     title: "Introduction to AutoGen, CrewAI, Agent SDK",
        //     type: "Live (Combined)"
        //   },
        //   {
        //     title: "Applications of AI Agents and Case Studies",
        //     type: "Live (Combined)"
          }
        ]
      }
    ]
  }
];
