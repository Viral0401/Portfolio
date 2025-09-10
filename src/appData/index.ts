// Data for portfolio
import {
  JavaScriptIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  TypescriptIcon,
  PythonIcon,      
  PostgreSQLIcon,  
  TensorFlowIcon, 
  SQLIcon 
} from '../utils/icons'

// Education Data
import { Uni1Logo, Uni2Logo } from '@/utils/images'
export const education = [
  {
    priority: 1,
    title: 'Masters in Computer Engineering',
    shortDescription:
      'Relevant Coursework: Machine Learning, Computing Systems Architecture, Real Time Embedded Systems',
    cover: Uni1Logo,
    duration: '2025-2027',
    institute: 'New York University',
  },
  {
    priority: 2,
    title: 'Bachelors of Technology in Information Technology',
    shortDescription:
      'Relevant Coursework: Data Structures and Algorithms, Advanced Data Structures, Design and Analysis of Algorithms, Artificial Intelligence, Database Management Systems, Probability and Statistics, Computer Networks, Operating Systems, Software Engineering, Big Data Analysis, Data Warehousing and Mining',
    cover: Uni2Logo,
    duration: '2021-2025',
    institute: 'University of Mumbai',
  },
]


// Project Data
import { FitzenLogo } from '@/utils/images'
export const projects = [
  {
    priority: 1,
    title: 'viral',
    shortDescription:
      'A groundbreaking project that revolutionizes the way we approach technology. Built with cutting-edge tools for maximum efficiency, it sets new industry standards.',
    cover: FitzenLogo,
    livePreview: 'https://example.com/alpha',
    type: 'Client Work 🙍‍♂️',
    siteAge: '1 month old',
  },
  {
    priority: 2,
    title: 'Project Beta',
    shortDescription:
      'Project Beta is a static technical blog site built with GatsbyJS. I share tips on topics like building reusable components in React, explaining JavaScript methods and concepts, Node.js scripts, and more.',
    cover:
      'https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    livePreview: 'https://example.com/beta',
  },
  {
    priority: 3,
    title: 'Project Epsilon',
    shortDescription:
      'A collection of engaging coding challenges designed to help developers improve their ReactJS skills by writing functional business logic. Your task is to make it functional by writing business logic, to improve your frontend skills',
    cover:
      'https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    type: 'Free 🔥',
    livePreview: 'https://example.com/epsilon',
    githubLink: 'https://github.com/example/ReactJS-Coding-Challenges',
    githubStars: '40 Stars',
    numberOfSales: '138 Sales',
  },
  {
    priority: 4,
    title: 'Ejucationzz',
    shortDescription:
      'Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed. Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed.',
    cover:
      'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'New 🔥',
    livePreview: 'https://example.com/Ejucationzz',
    siteAge: '4 months old',
    visitors: '100 Visitors',
    githubLink: '',
    earned: '',
  },
]

// Service Data
import { SimpplLogo } from '@/utils/images'
import { IITPatna } from '@/utils/images'
import { InvexiLogo } from '@/utils/images'   
import { NezalLogo } from '@/utils/images'
import { DrishyaLogo } from '@/utils/images'
import { InITLogo } from '@/utils/images' 

export const serviceData = [
  {
    icon: SimpplLogo,
    title: 'SimPPL',
    position: 'Founding AI Engineer',
    date: 'June 2024- July 2025',
    shortDescription: `• Engineered a production-grade RAG platform with automated document ingestion, API-based external context
                      enrichment, memory-aware query handling, citation tracking, and a web-search AI agent surfaced via a streamlined UI.

                      • This system powered SimPPL's internal grant & fellowship writing platform, increasing application throughput by
                      30% and strengthening fundraising capacity through scalable, citation-backed pipeline automation.

                      • Developed the MVP for an AI-powered audience analytics platform, scaling it to pilot with grants from Mozilla and
                      Google, enabling New York Public Radio to segment audiences and guide engagement strategy for 20K+ users.

                      • Engineered a multi-agent debate system from scratch using LangChain to explore new methods for content
                      moderation on 'X', by using LLM agents to to autonomously evaluate content safety. The resulting research was
                      accepted for presentation at the Stanford Trust and Safety Research Conference.`,
  },
  {
    icon: IITPatna,
    title: 'Indian Institute of Technology',
    position: 'ML Research Intern',
    date: 'June 2024- April 2025',
    shortDescription: ` • Developed multi-task models with 6 ablation variants, comprising SciBERT, BERT-Base, and Bi-LSTM, connected to multiple attention blocks to determine aspect categories and their sentiments for any given review.
                        • Implemented GraphRAG using Neo4j to assess peer review consistency, leveraging knowledge graphs and counterfactual reasoning at word, sentence, and aspect levels to improve transparency and reliability in review processes.
                        • Authored research that leverages Chain-of-Thought (CoT) reasoning in LLMs to automatically classify the quality of academic peer reviews, contributing the novel InsightfulPeer dataset to benchmark and improve the integrity of scholarly evaluation.
                        • Developed the 'Co-Reviewer' agentic AI framework to systematically benchmark LLM-generated peer reviews against human experts, quantifying the alignment gap and identifying critical limitations in AI performance such as optimism bias and a lack of contextual depth.` ,
  },
  {
    icon: InvexiLogo,
    title: 'Invexi',
    position: 'AI & Software Engineering Intern',
    date: 'Dec 2023 - May 2024',
    shortDescription: `• Led the development of an AI-powered video generation platform, architecting the backend services in Python and Flask.
                        • Built a dynamic and responsive user interface for the video platform using React and managed the data infrastructure with PostgreSQL.
                        • Engineered a Chrome extension with TypeScript and GoLang to automate the collection of product data for market research.
                        • The automation tool successfully reduced manual research time for the team by 35%, increasing overall efficiency.`,
  },
  {
    icon: NezalLogo,
    title: 'Nezal Herbocare',
    position: 'Data Science Intern',
    date: 'September 2023 - November 2023',
    shortDescription: `• Engineered and automated an ETL (Extract, Transform, Load) pipeline using Python and Pandas to ingest, clean, and process historical sales and inventory data, ensuring data integrity for downstream analysis.
                        • Conducted in-depth Exploratory Data Analysis (EDA) to identify key trends and patterns, performing feature engineering to prepare the dataset for predictive modeling.
                        • Developed and implemented an AI-driven, time-series forecasting model using Scikit-learn to accurately predict quarterly sales, which formed the core of the new inventory management strategy.
                        • Translated model outputs into actionable insights by creating Tableau dashboards, leading to a 20% improvement in operational efficiency and a 25% reduction in inventory shortages through data-driven decision-making.`,
  },
  {
    icon: DrishyaLogo,
    title: 'Drishya Solutions',
    position: 'Software Developer Intern',
    date: 'June 2023 - September 2023',
    shortDescription: `• Architected and developed a custom, full-stack CRM platform to manage operations for a stock market analysis class with over 500 students.
                        • Designed the complete relational database schema and built the backend APIs responsible for efficiently querying and managing sensitive user data.
                        • Engineered a critical 3-way KYC verification process (PAN, Aadhaar, and Demat) that ensured 100% regulatory compliance and eliminated fraudulent sign-ups.`,
 },
{
    icon: InITLogo,
    title: 'DJ InIT.AI',
    position: 'Chairperson',
    date: 'September 2024 - May 2025',
    shortDescription: `• Led the college's AI club as Chairperson, organizing technical initiatives and student engagement activities.
                       • Conducted specialized bootcamp sessions on machine learning, AI, and data science to foster technical skill development.
                       • Successfully organized and managed an AI hackathon that attracted over 1,000 registrations from participants across the region.`,
},
]

// Skill List
export const skillList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Python',
    icon: PythonIcon,
  },
  {
    name: 'SQL',
    icon: SQLIcon,
  },
  {
    name: 'PostgreSQL',
    icon: PostgreSQLIcon,
  },
  {
    name: 'TensorFlow',
    icon: TensorFlowIcon,
  },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Education', href: '#education' },
  { title: 'Experiences', href: '#services' },
  { title: 'Projects', href: '#projects' },
  { title: 'Research', href: '#research' },
  {
    title: 'Skills',
    href: '#skills',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]


// Add this to the end of your file

export const researchData = [
  {
    id: "stanford",
    title: "Multi-agent Debates for Deliberative Content Moderation on X",
    publishedAt: "2025",
    venue: "Stanford's Trust and Safety Research Conference",
    year: "2025",
    status: "Accepted" as const,
    keyPoints: [
      "Proposed a novel framework for multi-agent debates to enhance content moderation on social media platforms."
    ],
    // githubUrl: "https://github.com/yourusername/game-ml-research",
    proofUrl: "https://drive.google.com/file/d/1QtoG1KuWrwIZde260U-h8DQeSDruFqny/view?usp=drive_link"
  },

    {
    id: "IIT1",
    title: "Not all peers are significant - A Dataset Exhaustive vs Trivial Scientific Peer Reviews Leveraging Chain-of-Thought Reasoning.",
    publishedAt: "2025",
    venue: "Scientometrics, Springer",
    year: "2025",
    status: "Accepted" as const,
    keyPoints: [
      "Constructed InsightfulPeer, a peer review classification dataset leveraging Chain-of-Thought reasoning with LLMs (LlaMa-3.1, GPT-4, Mixtral, Gemma) and evaluated model human agreement using Cohen's and Fleiss' Kappa.",
    ],
    // paperUrl: "#",
    githubUrl: "https://github.com/PrabhatkrBharti/InsightfulPeer-CoT",
    proofUrl: "https://drive.google.com/file/d/1V0BPE3ylWm_lbhIZQsByUZXzj4DjK1M5/view?usp=drive_link"
  },

    {
    id: "IIT2",
    title: "ConsistentPeer - Reviewers Through GraphRAG-Driven Counterfactuals to Measure Consistency in Peer Review",
    publishedAt: "2025",
    venue: "International Journal of Data Science and Analytics, Springer",
    year: "2025",
    status: "Minor Revision" as const,
    keyPoints: [
      "Proposed a novel knowledge graph based framework to evaluate consistency in peer reviews by correlating review text, confidence scores, and ratings, incorporating counterfactual reasoning to detect and resolve inconsistencies."
    ],
    // paperUrl: "#",
    githubUrl: "https://github.com/PrabhatkrBharti/ConsistentPeer",
    // proofUrl: "#"
  },

    {
    id: "IIT3",
    title: "Co-Reviewer - Are LLMs on the Same Page as Human Reviewers? An Agentic AI Framework for Evaluating Review Quality and Consensus",
    publishedAt: "2025",
    venue: "Scientometrics, Springer",
    year: "2025",
    status: "Minor Revision" as const,
    keyPoints: [
      "Designed Co-Reviewer, a multi agent LLM framework for collaborative peer review generation and refinement; evaluated its outputs against human reviews across informativeness, sentiment, and editorial decision alignment."
    ],
    // paperUrl: "#",
    githubUrl: "https://github.com/PrabhatkrBharti/Co-Reviewer",
    // proofUrl: "#"
  },

  {
    id: "IIT4",
    title: "PeerGauge - a Dataset for Peer Review Disagreement and Severity Gauge",
    publishedAt: "2025",
    venue: "Language Resources and Evaluation, Springer",
    year: "2025",
    status: "Under Review" as const,
    keyPoints: [
      "Built PeerGauge, a 28k-pair peer review contradiction severity dataset (-5 to +5 scale) from ICLR/NeurIPS, and benchmarked models (RoBERTa, LSTM, SciBERT, LLMs) for automated severity prediction."
    ],
    // paperUrl: "#",
    githubUrl: "https://github.com/PrabhatkrBharti/PeerGauge",
    // proofUrl: "#"
  },

   {
    id: "Packagenius",
    title: "Gen AI Driven Sustainable Packaging solution",
    publishedAt: "2025",
    venue: "Lecture Notes in Networks and Systems, Springer",
    year: "2025",
    status: "Published" as const,
    keyPoints: [
      "Developed a generative AI model to optimize sustainable packaging solutions, focusing on material efficiency and waste reduction."
    ],
    // paperUrl: "#",
    githubUrl: "https://github.com/Viral0401/Packagenius",
    proofUrl: "https://drive.google.com/file/d/1M-fkGGhhioX3kbJ6vJVXK2VwtFuE_vrt/view?usp=drive_link"
  },

  {
    id: "IPD",
    title: "Revolutionizing Phobia Treatment: The Role of Augmented Reality in Exposure Therapy",
    publishedAt: "2024",
    venue: "Intenational Conference on Artificial Intelligence Trends and Pattern Recognition, IEEE",
    year: "2025",
    status: "Published" as const,
    keyPoints: [
      "Investigated the application of augmented reality (AR) in exposure therapy for phobias, highlighting its potential to enhance therapeutic outcomes."
    ],
    paperUrl: "https://ieeexplore.ieee.org/document/10960229",
    // githubUrl: "https://github.com/yourusername/game-ml-research",
    // // proofUrl: "#"
  },

  {
    id: "InIT",
    title: "Enhanced Storytelling for Children Using an Artificial Intelligence-Based Approach",
    publishedAt: "2025",
    venue: "Discover Education, Springer",
    year: "2025",
    status: "Minor Revision" as const,
    keyPoints: [
      "Developed an AI-driven platform to create personalized and interactive storytelling experiences for children, enhancing engagement and learning outcomes."
    ],
    // paperUrl: "#",
    // githubUrl: "https://github.com/yourusername/game-ml-research",
    // proofUrl: "#"
  },

  {
    id: "NLP",
    title: "NeutralABSA: Enhancing Neutral Sentiment Classification in Aspect Based Sentiment Analysis",
    publishedAt: "2025",
    venue: "Applied Intelligence, Springer",
    year: "2025",
    status: "Under Review" as const,
    keyPoints: [
      "Proposed a novel approach for neutral sentiment classification in aspect-based sentiment analysis, leveraging advanced NLP techniques."
    ],
    // paperUrl: "#",
    // githubUrl: "https://github.com/yourusername/game-ml-research",
    // proofUrl: "#"
  },

]// Add this to your existing appData/index.ts file

// Update your existing enhancedSkillCategories to include interests

// Updated enhancedSkillCategories with better organization

export const enhancedSkillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "Java", "HTML", "CSS", "JavaScript", "TypeScript", "SQL", "Go"]
  },
  {
    title: "Libraries & Frameworks",
    skills: ["React.js", "Node.js", "Express.js", "Next.js", "Flask", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "PyTorch", "TensorFlow", "Tailwind"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "MySQL", "Redis", "SQLite"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "AWS", "Azure", "Docker", "Kubernetes", "Tableau", "Kafka", "Spark", "Hadoop"]
  },
  {
    title: "Interests",
    skills: ["Data Science", "Artificial Intelligence", "Software Engineering", "Data Engineering", "Data Analysis", "Research", "Finance"]
  }
];



export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']
