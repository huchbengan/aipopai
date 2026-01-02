
export type Page = 'landing' | 'radar' | 'hub' | 'lab' | 'accounts';

export interface ViralVideo {
  id: string;
  thumbnail: string;
  title: string;
  creator: string;
  views: string;
  tags: string[];
}

export interface ViralHubVideo extends ViralVideo {
  category: string;
  growthRate: string;
  summary: string;
  dna: {
    hook: string;
    visualStyle: string;
    audioStrategy: string;
  };
}

export interface ScriptLine {
  id: number;
  time: string;
  text: string;
  score: number;
  suggestion: string;
}

export interface AnalysisReport {
  hookScore: number;
  retentionScore: number;
  shareability: number;
  insights: {
    hook: string;
    script: string;
    strategy: string;
  };
  breakdown: ScriptLine[];
}
