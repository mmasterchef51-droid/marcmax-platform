export interface Agent {
  id: string;
  codename: string;
  designation: string;
  name: string;
  specialty: string;
  description: string;
  logicBlock: {
    title: string;
    content: string;
    capabilities: string[];
  };
  tools: {
    name: string;
    icon: string;
    category: string;
  }[];
  stats: {
    processing: number;
    memory: number;
    efficiency: number;
    uptime: number;
  };
  color: string;
}

export const agents: Agent[] = [
  {
    id: "zephyr",
    codename: "ZEPHYR",
    designation: "AGENT-01",
    name: "The Archivist",
    specialty: "Semantic Memory & ChromaDB Retrieval",
    description: "Long-term memory specialist managing vector-based knowledge storage and semantic search operations.",
    logicBlock: {
      title: "The Memory Core",
      content: "Zephyr maintains the 50,000-line semantic memory layer, handling vector embeddings, context retrieval, and cross-session knowledge persistence. The agent processes natural language queries into ChromaDB-compatible embeddings, enabling sub-100ms retrieval of relevant historical context.",
      capabilities: [
        "Vector embedding generation (768-dim)",
        "Semantic similarity search",
        "Long-term context persistence",
        "Memory decay & relevance scoring",
        "Cross-conversation knowledge linking"
      ]
    },
    tools: [
      { name: "Python", icon: "Code2", category: "Language" },
      { name: "ChromaDB", icon: "Database", category: "Vector DB" },
      { name: "OpenAI", icon: "Brain", category: "Embeddings" },
      { name: "LangChain", icon: "Link", category: "Framework" },
      { name: "NumPy", icon: "Calculator", category: "Compute" }
    ],
    stats: {
      processing: 98,
      memory: 95,
      efficiency: 92,
      uptime: 99.9
    },
    color: "#00f2ff"
  },
  {
    id: "cortex",
    codename: "CORTEX",
    designation: "AGENT-02",
    name: "The Strategist",
    specialty: "Task Orchestration & Global Logic",
    description: "Central command unit responsible for workflow decomposition, agent coordination, and strategic decision making.",
    logicBlock: {
      title: "The Neural Command Layer",
      content: "Cortex implements the 50,000-line orchestration engine using directed acyclic graphs (DAGs) for task dependency management. The agent analyzes complex objectives, decomposes them into sub-tasks, and routes operations to specialized agents based on capability matching and load balancing.",
      capabilities: [
        "Task decomposition & DAG scheduling",
        "Agent capability matching",
        "Workflow state machines",
        "Dependency resolution",
        "Parallel execution coordination"
      ]
    },
    tools: [
      { name: "TypeScript", icon: "Code", category: "Language" },
      { name: "Node.js", icon: "Server", category: "Runtime" },
      { name: "RxJS", icon: "Zap", category: "Streams" },
      { name: "GraphLib", icon: "GitGraph", category: "Graph" },
      { name: "Bull Queue", icon: "Layers", category: "Queue" }
    ],
    stats: {
      processing: 96,
      memory: 88,
      efficiency: 98,
      uptime: 99.99
    },
    color: "#ffaa00"
  },
  {
    id: "nexus",
    codename: "NEXUS",
    designation: "AGENT-03",
    name: "The Bridge",
    specialty: "API Bridging & External Integrations",
    description: "Integration specialist managing external API communications, protocol translation, and system interoperability.",
    logicBlock: {
      title: "The Integration Gateway",
      content: "Nexus handles the 50,000-line API abstraction layer, providing unified interfaces to 31+ external services. The agent manages authentication flows, rate limiting, fallback chains, and protocol translations between REST, GraphQL, WebSocket, and gRPC endpoints.",
      capabilities: [
        "Multi-protocol API abstraction",
        "Circuit breaker patterns",
        "Request batching & deduplication",
        "OAuth & JWT token management",
        "Real-time webhook processing"
      ]
    },
    tools: [
      { name: "TypeScript", icon: "Code", category: "Language" },
      { name: "Axios", icon: "Globe", category: "HTTP" },
      { name: "Socket.io", icon: "Radio", category: "WebSocket" },
      { name: "Zod", icon: "Shield", category: "Validation" },
      { name: "GraphQL", icon: "Share2", category: "Query" }
    ],
    stats: {
      processing: 94,
      memory: 90,
      efficiency: 96,
      uptime: 99.95
    },
    color: "#00d4e0"
  },
  {
    id: "spark",
    codename: "SPARK",
    designation: "AGENT-04",
    name: "The Operator",
    specialty: "Rapid-Fire Browser Automation",
    description: "Real-time execution specialist with sub-second response times and advanced browser automation capabilities.",
    logicBlock: {
      title: "The Rapid Execution Engine",
      content: "Spark controls the 50,000-line browser automation layer built on Playwright and Chrome DevTools Protocol. The agent executes 200+ predefined browser skills including form manipulation, DOM analysis, screenshot capture, and network interception—all within sub-100ms response times.",
      capabilities: [
        "Playwright automation (200+ skills)",
        "CDP (Chrome DevTools Protocol)",
        "Real-time DOM manipulation",
        "Network request interception",
        "Visual regression testing"
      ]
    },
    tools: [
      { name: "Node.js", icon: "Server", category: "Runtime" },
      { name: "Playwright", icon: "Chrome", category: "Browser" },
      { name: "Puppeteer", icon: "Mouse", category: "Automation" },
      { name: "WebRTC", icon: "Video", category: "Streaming" },
      { name: "Jest", icon: "TestTube", category: "Testing" }
    ],
    stats: {
      processing: 99,
      memory: 85,
      efficiency: 94,
      uptime: 99.9
    },
    color: "#f59e0b"
  },
  {
    id: "titan",
    codename: "TITAN",
    designation: "AGENT-05",
    name: "The Heavy",
    specialty: "Heavy Computation & Model Parallelism",
    description: "Compute-intensive operations specialist handling ML inference, batch processing, and GPU-accelerated workloads.",
    logicBlock: {
      title: "The Compute Cluster",
      content: "Titan manages the 50,000-line high-performance computing layer, orchestrating GPU/CPU resources for model inference, vector operations, and batch data processing. The agent implements automatic model parallelism and dynamic batching to maximize throughput while respecting thermal constraints.",
      capabilities: [
        "GPU-accelerated inference (CUDA)",
        "Model parallelism & sharding",
        "Dynamic batching",
        "Ray distributed computing",
        "AVX2 SIMD optimization"
      ]
    },
    tools: [
      { name: "Python", icon: "Code2", category: "Language" },
      { name: "PyTorch", icon: "Flame", category: "ML" },
      { name: "CUDA", icon: "Cpu", category: "GPU" },
      { name: "Ray", icon: "Zap", category: "Distributed" },
      { name: "TensorFlow", icon: "Brain", category: "ML" }
    ],
    stats: {
      processing: 97,
      memory: 92,
      efficiency: 90,
      uptime: 99.8
    },
    color: "#ef4444"
  },
  {
    id: "vanguard",
    codename: "VANGUARD",
    designation: "AGENT-06",
    name: "The Shield",
    specialty: "Security, Failsafes & Hardware Throttling",
    description: "System guardian monitoring security protocols, enforcing safety boundaries, and managing thermal protection.",
    logicBlock: {
      title: "The Protection Layer",
      content: "Vanguard implements the 50,000-line security and safety framework, providing real-time thermal monitoring, sandboxed execution environments, and intrusion detection. The agent operates at the kernel level with eBPF hooks to enforce hardware safety policies and prevent system compromise.",
      capabilities: [
        "Real-time thermal monitoring",
        "Automatic CPU throttling",
        "Sandboxed code execution",
        "eBPF kernel-level hooks",
        "Security policy enforcement"
      ]
    },
    tools: [
      { name: "Rust", icon: "Cog", category: "Language" },
      { name: "eBPF", icon: "Shield", category: "Kernel" },
      { name: "Seccomp", icon: "Lock", category: "Sandbox" },
      { name: "Prometheus", icon: "Activity", category: "Metrics" },
      { name: "AppArmor", icon: "ShieldCheck", category: "Security" }
    ],
    stats: {
      processing: 93,
      memory: 96,
      efficiency: 99,
      uptime: 100
    },
    color: "#22c55e"
  }
];

export function getAgentById(id: string): Agent | undefined {
  return agents.find(agent => agent.id === id);
}

export function getAllAgents(): Agent[] {
  return agents;
}
