export type LayerKind = 'input' | 'mlai' | 'llm1' | 'llm2' | 'output'

export interface DegreeInfo {
  title: string
  affiliation: string
  dates: string
  description: string
}

export interface NodeDetail {
  id: string
  layer: LayerKind
  layerLabel: string
  title: string
  affiliation: string
  dates: string
  description: string
  highlights: string[]
  skills?: string[]
  degrees?: DegreeInfo[]
  link?: string
  linkText?: string
}

export interface NodeData {
  id: string
  layer: LayerKind
  label: string
  sublabel: string
  icon: string
  color: string
  detail: NodeDetail
}

export const trustworthyAINodes: NodeData[] = [
  {
    id: 'uiuc',
    layer: 'input',
    label: 'University of Illinois',
    sublabel: 'Urbana-Champaign',
    icon: '🎓',
    color: '#5b8fb9',
    detail: {
      id: 'uiuc',
      layer: 'input',
      layerLabel: 'Input Layer',
      title: 'University of Illinois Urbana-Champaign',
      affiliation: 'Education',
      dates: '',
      description: '',
      highlights: [],
      degrees: [
        {
          title: 'Information Science Degree',
          affiliation: 'University of Illinois Urbana-Champaign',
          dates: 'B.S. · Minors: Computer Science, Game Studies & Design',
          description: 'Earned a Bachelor\'s degree in Information Science with minors in Computer Science and Game Studies & Design. Built a strong foundation in data systems, human-centered computing, machine learning, and deep neural networks, with a focus on applied AI systems and real-world deployment.',
        },
        {
          title: 'Information Management Degree',
          affiliation: 'University of Illinois Urbana-Champaign',
          dates: 'M.S.',
          description: 'Currently expanding research and product-oriented projects in large language models (LLMs), focusing on trustworthy AI, uncertainty quantification, and real-world AI system design.',
        },
      ],
    },
  },
  // ML/AI Layer - 2 nodes
  {
    id: 'class-imbalance',
    layer: 'mlai',
    label: 'Binary Classification',
    sublabel: 'Class Imbalance',
    icon: '⚖️',
    color: '#c77b9a',
    detail: {
      id: 'class-imbalance',
      layer: 'mlai',
      layerLabel: 'ML/AI Layer',
      title: 'Data Imbalance Solutions Using Pseudo-Cluster and Two-Step Classification Methods',
      affiliation: 'Research',
      dates: 'IEEE Big Data 2024',
      description: 'Data imbalance remains a fundamental challenge in machine learning, particularly in binary classification where traditional models often favor the majority class and underperform on minority data. To address this issue, I proposed two clustering-based methods — Pseudo-Cluster Classification (PCC) and Pseudo-Cluster Two-Step Classification (PCTC). These approaches partition the majority class into structured sub-clusters, improving class representation and enhancing generalization for minority instances. Experimental results demonstrate consistent improvements over standard classification approaches, particularly in Macro F1-score and MCC, highlighting stronger performance on under-represented classes.',
      highlights: [
        'Pseudo-Cluster Classification (PCC) method',
        'Pseudo-Cluster Two-Step Classification (PCTC) method',
        'Improved Macro F1-score and MCC metrics',
        'Accepted at IEEE International Conference on Big Data 2024',
      ],
      skills: ['Machine Learning', 'Binary Classification', 'Clustering', 'Class Imbalance'],
      link: 'https://ieeexplore.ieee.org/abstract/document/10825430',
    },
  },
  {
    id: 'long-tailed',
    layer: 'mlai',
    label: 'Long-tailed Classification',
    sublabel: 'Computer Vision',
    icon: '🔬',
    color: '#9b7bc7',
    detail: {
      id: 'long-tailed',
      layer: 'mlai',
      layerLabel: 'ML/AI Layer',
      title: 'Long-tailed Classification in Computer Vision',
      affiliation: 'Research',
      dates: 'Under Review',
      description: 'Real-world datasets are rarely balanced. Minority classes are often under-represented, leading to unfair and unreliable models. BESTI introduces a structured sampling and Bayesian trust-weighted ensemble framework for long-tailed multi-class classification. By training specialized models across different imbalance levels and aggregating them using class-wise reliability estimates, BESTI improves both overall accuracy and minority-class performance.',
      highlights: [
        'BESTI framework: structured sampling and Bayesian trust-weighted ensemble',
        'Specialized models across different imbalance levels',
        'Class-wise reliability estimates',
        'Under review at International Joint Conference on Neural Networks (IJCNN)',
      ],
      skills: ['Deep Learning', 'Computer Vision', 'Long-tailed Learning', 'Ensemble Methods'],
    },
  },
  // LLM Research Layer - 2 nodes
  {
    id: 'llm-uncertainty',
    layer: 'llm1',
    label: 'Uncertainty Quantification',
    sublabel: 'in LLM',
    icon: '📊',
    color: '#6a9fb5',
    detail: {
      id: 'llm-uncertainty',
      layer: 'llm1',
      layerLabel: 'LLM Research Layer',
      title: 'Uncertainty Quantification in LLM',
      affiliation: 'Research',
      dates: 'WWW 2026',
      description: 'Large Language Models can be unsafe in medical settings when user queries are ambiguous. In high-stakes healthcare scenarios, underspecified inputs introduce irreducible uncertainty — leading to incorrect or misleading answers. In this work, we formalize input ambiguity as aleatoric uncertainty (AU) and introduce CV-MedBench, the first benchmark designed to systematically study ambiguity in Medical QA. Our analysis reveals that AU is linearly encoded within LLM hidden representations, enabling direct detection from internal activations. Building on this insight, we propose an efficient Clarify-Before-Answer framework with AU-Probe, a lightweight module that detects ambiguity without fine-tuning or multiple forward passes. The model proactively requests clarification before answering, significantly improving safety and reliability. Across four open LLMs, our framework achieves an average accuracy improvement of 9.48% over strong baselines.',
      highlights: [
        'CV-MedBench: first benchmark for ambiguity in Medical QA',
        'AU-Probe: lightweight module for ambiguity detection',
        'Clarify-Before-Answer framework',
        '9.48% average accuracy improvement over baselines',
        'Accepted at The Web Conference 2026 (WWW 2026)',
      ],
      skills: ['LLMs', 'Uncertainty Quantification', 'Medical AI', 'Safety'],
      link: 'https://arxiv.org/abs/2601.17284',
    },
  },
  {
    id: 'llm-rag-style',
    layer: 'llm1',
    label: 'Effect of Documents',
    sublabel: 'Style and Tone in RAG',
    icon: '📝',
    color: '#5b9db8',
    detail: {
      id: 'llm-rag-style',
      layer: 'llm1',
      layerLabel: 'LLM Research Layer',
      title: 'When Irrelevant Evidence Helps: Stylistic Bias in RAG Systems',
      affiliation: 'Research',
      dates: 'Ongoing',
      description: 'Retrieval-Augmented Generation (RAG) systems are known to be fragile to irrelevant or misleading context. However, our preliminary findings reveal a surprising phenomenon: even when retrieved documents are largely content-irrelevant, certain styles of writing can increase factuality scores. This project investigates whether stylistic features — such as tone, confidence, narrative framing, or academic language — can systematically bias LLM outputs toward more "fact-like" generations, even in the absence of relevant evidence. To study this, we construct a style-based retrieval framework using stylistic embeddings originally developed for authorship verification. Instead of retrieving documents based on semantic relevance, we retrieve them based on stylistic similarity to predefined anchors (e.g., Academic, Confident, Hedged, Narrative). We then evaluate how different stylistic signals influence factuality metrics in RAG settings. Our goal is to uncover a new epistemic bias in LLMs: the possibility that style alone can inflate perceived factual accuracy.',
      highlights: [
        'Stylistic bias in RAG systems',
        'Style-based retrieval framework',
        'Stylistic embeddings for authorship verification',
        'Investigation of epistemic bias in LLMs',
        'Ongoing research project',
      ],
      skills: ['LLMs', 'RAG', 'Stylistic Analysis', 'Bias Detection'],
    },
  },
  // LLM Project Layer - 3 nodes
  {
    id: 'pact',
    layer: 'llm2',
    label: 'PACT',
    sublabel: 'Privacy & Control',
    icon: '🛡️',
    color: '#3d7a95',
    detail: {
      id: 'pact',
      layer: 'llm2',
      layerLabel: 'LLM Project Layer',
      title: 'PACT: Personalized Assessment & Control for Trustworthy LLM Privacy',
      affiliation: 'Project',
      dates: 'Ongoing',
      description: 'As LLMs become embedded in everyday workflows, users face increasing uncertainty about what personal information can be safely shared with cloud-based systems. PACT (Personalized Assessment & Control for Trustworthy LLM Privacy) is an ongoing research project that I take charge in. It explores human-centered privacy protection for LLM interactions. Rather than relying on fixed definitions of sensitive information, PACT enables users to define their own privacy preferences before their prompts are sent to cloud models. The framework incorporates a multi-layer privacy assessment pipeline that detects different categories of sensitive information — including identity, nationality, health, financial attributes, and geolocation — using techniques such as PII detection, sensitive-topic classification, and domain-specific tagging. Based on user-defined settings, sensitive components are selectively masked or transformed while preserving the semantic intent of the query. PACT aims to move beyond one-size-fits-all privacy filtering toward adaptive, user-aligned privacy protection that balances utility, control, and trust.',
      highlights: [
        'Multi-layer privacy assessment pipeline',
        'User-defined privacy preferences',
        'PII detection and sensitive-topic classification',
        'Selective masking while preserving semantic intent',
        'Human-centered privacy protection',
      ],
      skills: ['LLMs', 'Privacy', 'Human-Centered Design', 'PII Detection'],
    },
  },
  {
    id: 'cyberbullying',
    layer: 'llm2',
    label: 'Cyberbullying Comment',
    sublabel: 'Cleaning Agent',
    icon: '🔍',
    color: '#2e6a85',
    detail: {
      id: 'cyberbullying',
      layer: 'llm2',
      layerLabel: 'LLM Project Layer',
      title: 'Cyberbullying Comment Cleaning Agent',
      affiliation: 'Project',
      dates: 'Completed',
      description: 'Cyberbullying remains a major concern in digital spaces, especially among youth. While most moderation systems focus on flagging or blocking harmful content, they rarely intervene in ways that promote empathy, accountability, or de-escalation. This project explores how a culturally aware LLM can proactively intervene in cyberbullying scenarios. Instead of simply detecting harmful messages, the system classifies the type of cyberbullying (e.g., age, ethnicity, gender, religion) and generates role-specific, context-sensitive responses aimed at education and reflection rather than punishment. The system is structured into three layers: Context Enrichment — integrates message content, demographic metadata, and bullying classification. Cultural Attunement & Empathy — generates constructive interventions tailored to user background and emotional tone. Human-in-the-Loop Oversight — collects user feedback on empathy, helpfulness, cultural sensitivity, and trust. An A/B evaluation compared a culturally tuned model with an untuned baseline. Surprisingly, the untuned model was often perceived as more empathetic and culturally sensitive. These findings highlight the volatility of instruction tuning and suggest that cultural adaptation alone does not guarantee better user experience without robust human feedback and iterative refinement. This project contributes to ongoing research in human-centered, value-sensitive AI design for socially sensitive applications.',
      highlights: [
        'Culturally aware LLM for cyberbullying intervention',
        'Three-layer system: Context Enrichment, Cultural Attunement, Human-in-the-Loop',
        'Role-specific, context-sensitive responses',
        'A/B evaluation revealing instruction tuning volatility',
        'Human-centered, value-sensitive AI design',
      ],
      skills: ['LLMs', 'Cyberbullying Detection', 'Cultural Sensitivity', 'Human-Centered AI'],
      link: 'https://github.com/5a6r1na/cyberbullying_tuned',
      linkText: 'View Codes',
    },
  },
  {
    id: 'cline-center',
    layer: 'llm2',
    label: 'AI Scheduler',
    sublabel: 'Startup Competition',
    icon: '🚀',
    color: '#1f5a75',
    detail: {
      id: 'cline-center',
      layer: 'llm2',
      layerLabel: 'LLM Project Layer',
      title: 'AI Scheduler, Startup Competition',
      affiliation: 'Project',
      dates: 'Ongoing',
      description: 'This project is a voice-driven AI scheduling system designed to convert natural speech into structured database operations through a layered multi-agent architecture. The system prioritizes robustness, ambiguity handling, and safe execution, enabling reliable CRUD operations via voice interaction.',
      highlights: [
        'Designed a multi-agent orchestration pipeline for structured voice-to-database interaction',
        'Implemented hierarchical intent routing (L1–L3) for domain-aware task classification',
        'Built a CRUD-specialized agent layer for slot extraction and ambiguity resolution',
      ],
      skills: ['AI', 'Multi-Agent', 'Voice', 'CRUD', 'Startup'],
    },
  },
  // Output Layer - 1 node
  {
    id: 'trustworthy-ai',
    layer: 'output',
    label: 'Trustworthy AI',
    sublabel: 'Goal',
    icon: '🌐',
    color: '#4a9b8e',
    detail: {
      id: 'trustworthy-ai',
      layer: 'output',
      layerLabel: 'Output Layer',
      title: 'Trustworthy AI Systems',
      affiliation: 'Goal',
      dates: '—',
      description: 'Building AI systems that are technically robust, fair, transparent, and aligned with human values.',
      highlights: [
        'Robustness and reliability',
        'Fairness and equity',
        'Transparency and explainability',
        'Human values alignment',
      ],
      skills: ['Trustworthy AI', 'Ethics', 'Robustness', 'Fairness'],
    },
  },
]

/** Connection pairs: [fromId, toId]. Each node connects to all nodes in the previous layer. */
export const connections: [string, string][] = [
  // Input -> ML/AI Layer
  ['uiuc', 'class-imbalance'],
  ['uiuc', 'long-tailed'],
  // ML/AI -> LLM Research Layer
  ['class-imbalance', 'llm-uncertainty'],
  ['class-imbalance', 'llm-rag-style'],
  ['long-tailed', 'llm-uncertainty'],
  ['long-tailed', 'llm-rag-style'],
  // LLM Research -> LLM Project Layer
  ['llm-uncertainty', 'pact'],
  ['llm-uncertainty', 'cyberbullying'],
  ['llm-uncertainty', 'cline-center'],
  ['llm-rag-style', 'pact'],
  ['llm-rag-style', 'cyberbullying'],
  ['llm-rag-style', 'cline-center'],
  // LLM Project -> Output Layer
  ['pact', 'trustworthy-ai'],
  ['cyberbullying', 'trustworthy-ai'],
  ['cline-center', 'trustworthy-ai'],
]
