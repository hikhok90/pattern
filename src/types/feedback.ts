// src/types/feedback.ts

export interface OverallImpression {
    score: number; // e.g., 0-100
    category: 'Poor' | 'Fair' | 'Good' | 'Excellent';
    strengths: string[];
    areasForImprovement: string[];
  }
  
  export interface NonVerbalMetrics {
    eyeContact: number; // Percentage 0-100
    posture: 'Closed' | 'Neutral' | 'Open and Upright';
    facialEngagement: 'Low' | 'Moderate' | 'High' | 'Engaged';
    gestures: 'Distracting' | 'Minimal' | 'Used effectively';
    // Data for Radar Chart
    radarData: { subject: string; score: number; fullMark: number }[];
  }
  
  export interface DeliveryMetrics {
    confidence: number; // Score 0-100 or 1-5
    paceWPM: number;
    optimalPaceRange: [number, number];
    fillerWordsPerMinute: number;
    benchmarkFillerWords: number;
    toneVariation: 'Monotone' | 'Some Variation' | 'Engaging';
    articulation: 'Mumbled' | 'Mostly Clear' | 'Clear';
     // Data for Radar Chart
    radarData: { subject: string; score: number; fullMark: number }[];
  }
  
  export interface ContentMetricScores {
    relevance: number; // Score 1-5 or 0-100
    clarity: number;
    conciseness: number;
    keywordUsage: number; // Could be a percentage match
    structure: number;
    technicalDepth?: number; // Optional
  }
  
  export interface QuestionAnalysis {
    id: string | number;
    question: string;
    answerTranscript: string;
    scores: ContentMetricScores;
    keywordsFound: string[];
    keywordsMissed: string[];
    structureDetected?: 'STAR' | 'Other' | 'None';
  }
  
  export interface ContentAnalysis {
     overallScores: ContentMetricScores; // Average or overall assessment
     questionBreakdown: QuestionAnalysis[];
     // Data for Radar Chart (Overall Content)
     radarData?: { subject: string; score: number; fullMark: number }[];
  }
  
  // Main feedback structure
  export interface InterviewFeedbackData {
    interviewId: string;
    intervieweeName: string;
    interviewDate: string; // ISO date string preferably
    overall: OverallImpression;
    nonVerbal: NonVerbalMetrics;
    delivery: DeliveryMetrics;
    content: ContentAnalysis;
    // Optional: Add videoUrl, transcriptUrl etc. later
  }