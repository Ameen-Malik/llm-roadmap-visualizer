// src/data/roadmapData.ts

export type ContentType = 'Live' | 'Recorded' | 'Live (Combined)' | 'Recorded (Combined)' | 'Assignment';

export interface RoadmapItem {
  title: string;
  type: ContentType;
  description?: string;
}

export interface RoadmapConcept {
  title: string;
  items: RoadmapItem[];
}

export interface RoadmapSubmodule {
  title: string;
  concepts: RoadmapConcept[];
}

export interface RoadmapModule {
  title: string;
  submodules: RoadmapSubmodule[];
}

export const roadmapData: RoadmapModule[] = [
  {
    title: "LLM Module",
    submodules: [
      {
        title: "Full-Stack LLM",
        concepts: [
          {
            title: "Introduction",
            items: [
              { title: "Introduction to Programming", type: "Recorded" },
              { title: "OPT", type: "Recorded" },
              { title: "Orientation + Introduction to Full Stack", type: "Live (Combined)" },
            ],
          },
          {
            title: "UI",
            items: [{ title: "UI Building (Practical)", type: "Live" }],
          },
          {
            title: "API",
            items: [
              { title: "Intro to APIs (theory)", type: "Live (Combined)" },
              { title: "Intro to Fast API (theory+code)", type: "Recorded" },
              { title: "Building APIs with Fast API (practical)", type: "Live" },
            ],
          },
          {
            title: "Database",
            items: [
              { title: "Domain Modeling, ERD and Intro to Database (Theory)", type: "Live (Combined)" },
              { title: "Connecting the Dots & Database: Supabase (SQL) (Practical)", type: "Live" },
            ],
          },
          {
            title: "LLM",
            items: [
              { title: "Intro to LLM & Prompt Engineering (Theory)", type: "Live (Combined)" },
              { title: "LLM (Pre recorded series) (Theory)", type: "Recorded (Combined)" },
              { title: "Prompt Engineering: Building LLM wrappers (Practical)", type: "Live" },
            ],
          },
          {
            title: "AI accelerated full stack",
            items: [
              { title: "Lovable/cursor recorded", type: "Recorded (Combined)" },
              { title: "Building apps with AI (Lovable and Cursor)", type: "Live (Combined)" },
              { title: "Intro to GitHub and Open Source (HuggingFace)", type: "Live (Combined)" },
              { title: "MVP Building", type: "Live" },
              { title: "Mini-Capstone Project", type: "Assignment" },
            ],
          },
        ],
      },
      {
        title: "Augmented LLM",
        concepts: [
          {
            title: "Tools",
            items: [
              { title: "Function and Tool Calling and Intro to MCP (Theory)", type: "Live (Combined)" },
              { title: "Function and Tool Calling in LLM (Theory)", type: "Recorded (Combined)" },
              { title: "Intro to MCP (Theory)", type: "Recorded (Combined)" },
              { title: "Function and Tool Calling + MCP (Practical)", type: "Live" },
            ],
          },
          {
            title: "Retrieval",
            items: [
              { title: "Introduction to Retrieval-Augmented Generation (RAG) (theory)", type: "Live (Combined)" },
              { title: "Building RAG apps with LlamaIndex (Practical)", type: "Live" },
              { title: "Advanced RAG", type: "Live (Combined)" },
            ],
          },
        ],
      },
      {
        title: "LLM Workflows",
        concepts: [
          {
            title: "LLM Workflows",
            items: [
              { title: "Intro to LLM Workflows amd Chains (Theory)", type: "Live (Combined)" },
              { title: "Intro to LLM Workflows and Chains (Practical)", type: "Live" },
              { title: "Decision-Making Frameworks for Choosing Between Fine-Tuning and RAG", type: "Live (Combined)" },
              { title: "Building and Architecting GenAI Applications", type: "Live (Combined)" },
            ],
          },
        ],
      },
      {
        title: "Fine-tuning LLM",
        concepts: [
          {
            title: "Fine-tuning LLM",
            items: [
              { title: "Introduction to fine-tuning models.", type: "Live (Combined)" },
              { title: "Data Preparation Techniques for Fine-tuning", type: "Live (Combined)" },
              { title: "LLM Fine-tuning Process and Hands-on Demo", type: "Live (Combined)" },
              { title: "Evaluation Techniques and Deployment", type: "Live (Combined)" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Capstone Projects",
    submodules: [
      {
        title: "Capstone Projects",
        concepts: [
          {
            title: "Projects",
            items: [
                { title: "AI Copilot for Educators", type: "Assignment" },
                { title: "RuralRise OS", type: "Assignment" },
                { title: "CreatorPulse", type: "Assignment" },
                { title: "Enux -- Github for Entrepreneurs", type: "Assignment" },
                { title: "EliteBuilders", type: "Assignment" },
                { title: "Custom Capstone", type: "Assignment" },
            ]
          }
        ]
      }
    ]
  },
  {
    title: "AI Agents Module",
    submodules: [
      {
        title: "Agents",
        concepts: [
            {
                title: "Agent Lectures",
                items: [
                    { title: "Introduction to AI Agents", type: "Live (Combined)" },
                    { title: "Building your first AI agent", type: "Live" },
                    { title: "Deep Dive: AI Agent Components & Design Patterns", type: "Live (Combined)" },
                    { title: "Understanding Multi-Agent Systems", type: "Live (Combined)" },
                    { title: "Hands-on Building AI Agents", type: "Live" },
                    { title: "Applying Guardrails, Monitoring and Evaluation", type: "Live (Combined)" },
                ]
            }
        ]
      }
    ]
  }
];
