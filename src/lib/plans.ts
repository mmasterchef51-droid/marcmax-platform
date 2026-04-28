// Plan configuration and access control utilities

export type PlanTier = 0 | 1 | 2 | 3 | 4 | 5;

export interface Plan {
  id: string;
  name: string;
  tier: PlanTier;
  price: string;
  dailyRequests: number;
  dailyTokens: number;
  features: {
    downloads: boolean;
    projectExports: boolean;
    highSpeed: boolean;
    prioritySupport: boolean;
    dedicatedInstance: boolean;
    allAgents: boolean;
  };
}

// Plan definitions
export const PLANS: Record<string, Plan> = {
  recruit: {
    id: "recruit",
    name: "RECRUIT",
    tier: 0,
    price: "$0",
    dailyRequests: 10,
    dailyTokens: 50000,
    features: {
      downloads: false,
      projectExports: false,
      highSpeed: false,
      prioritySupport: false,
      dedicatedInstance: false,
      allAgents: false,
    },
  },
  soldier: {
    id: "soldier",
    name: "SOLDIER",
    tier: 1,
    price: "$15",
    dailyRequests: 50,
    dailyTokens: 250000,
    features: {
      downloads: true,
      projectExports: false,
      highSpeed: false,
      prioritySupport: false,
      dedicatedInstance: false,
      allAgents: false,
    },
  },
  "squad-leader": {
    id: "squad-leader",
    name: "SQUAD LEADER",
    tier: 2,
    price: "$45",
    dailyRequests: 200,
    dailyTokens: 1000000,
    features: {
      downloads: true,
      projectExports: true,
      highSpeed: true,
      prioritySupport: false,
      dedicatedInstance: false,
      allAgents: true,
    },
  },
  general: {
    id: "general",
    name: "GENERAL",
    tier: 3,
    price: "$150",
    dailyRequests: 1000,
    dailyTokens: 5000000,
    features: {
      downloads: true,
      projectExports: true,
      highSpeed: true,
      prioritySupport: true,
      dedicatedInstance: false,
      allAgents: true,
    },
  },
  elite: {
    id: "elite",
    name: "MARCORAEX ELITE",
    tier: 4,
    price: "$500",
    dailyRequests: 5000,
    dailyTokens: 25000000,
    features: {
      downloads: true,
      projectExports: true,
      highSpeed: true,
      prioritySupport: true,
      dedicatedInstance: true,
      allAgents: true,
    },
  },
  payg: {
    id: "payg",
    name: "TACTICAL PAYG",
    tier: 5,
    price: "$2 + usage",
    dailyRequests: Infinity,
    dailyTokens: Infinity,
    features: {
      downloads: true,
      projectExports: true,
      highSpeed: true,
      prioritySupport: true,
      dedicatedInstance: false,
      allAgents: true,
    },
  },
};

// User session type (simulated)
export interface UserSession {
  currentPlan: PlanTier;
  planId: string;
  requestsUsed: number;
  tokensUsed: number;
  billingCycle: {
    start: string;
    end: string;
  };
}

// Default session for simulation
export const DEFAULT_SESSION: UserSession = {
  currentPlan: 0, // Recruit by default
  planId: "recruit",
  requestsUsed: 4,
  tokensUsed: 25000,
  billingCycle: {
    start: new Date().toISOString(),
    end: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days for trial
  },
};

// Access control utilities
export class AccessControl {
  private session: UserSession;

  constructor(session: UserSession = DEFAULT_SESSION) {
    this.session = session;
  }

  getCurrentPlan(): Plan {
    return PLANS[this.session.planId] || PLANS.recruit;
  }

  canDownload(): boolean {
    return this.getCurrentPlan().features.downloads;
  }

  canExportProjects(): boolean {
    return this.getCurrentPlan().features.projectExports;
  }

  hasHighSpeed(): boolean {
    return this.getCurrentPlan().features.highSpeed;
  }

  hasPrioritySupport(): boolean {
    return this.getCurrentPlan().features.prioritySupport;
  }

  getRemainingRequests(): number {
    const plan = this.getCurrentPlan();
    if (plan.dailyRequests === Infinity) return Infinity;
    return Math.max(0, plan.dailyRequests - this.session.requestsUsed);
  }

  getRemainingTokens(): number {
    const plan = this.getCurrentPlan();
    if (plan.dailyTokens === Infinity) return Infinity;
    return Math.max(0, plan.dailyTokens - this.session.tokensUsed);
  }

  getRequestUsagePercent(): number {
    const plan = this.getCurrentPlan();
    if (plan.dailyRequests === Infinity) return 0;
    return (this.session.requestsUsed / plan.dailyRequests) * 100;
  }

  getTokenUsagePercent(): number {
    const plan = this.getCurrentPlan();
    if (plan.dailyTokens === Infinity) return 0;
    return (this.session.tokensUsed / plan.dailyTokens) * 100;
  }

  isLocked(feature: keyof Plan["features"]): boolean {
    return !this.getCurrentPlan().features[feature];
  }

  getUpgradePath(): string {
    const currentTier = this.session.currentPlan;
    if (currentTier < 4) {
      return `/plans#${this.getNextPlanId()}`;
    }
    return "/contact";
  }

  private getNextPlanId(): string {
    const tierOrder = ["recruit", "soldier", "squad-leader", "general", "elite", "payg"];
    const currentIndex = tierOrder.indexOf(this.session.planId);
    if (currentIndex < tierOrder.length - 1) {
      return tierOrder[currentIndex + 1];
    }
    return "elite";
  }
}

// Format numbers for display
export function formatNumber(num: number): string {
  if (num === Infinity) return "∞";
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
  return num.toString();
}

// Format tokens for display
export function formatTokens(tokens: number): string {
  if (tokens === Infinity) return "∞";
  if (tokens >= 1000000) return `${Math.floor(tokens / 1000000)}M`;
  if (tokens >= 1000) return `${Math.floor(tokens / 1000)}k`;
  return tokens.toString();
}
