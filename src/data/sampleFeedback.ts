// src/data/sampleFeedback.ts
import { InterviewFeedbackData } from '@/types/feedback';

export const sampleFeedback: InterviewFeedbackData = {
  interviewId: 'int-12345',
  intervieweeName: 'Jane Doe',
  interviewDate: new Date().toISOString(),
  overall: {
    score: 78,
    category: 'Good',
    strengths: [
      'Clear communication on technical topics.',
      'Good use of examples (STAR method observed).',
      'Positive and engaged attitude.',
    ],
    areasForImprovement: [
      'Reduce usage of filler words ("um", "like").',
      'Maintain more consistent eye contact.',
      'Provide slightly more concise answers to behavioral questions.',
    ],
  },
  nonVerbal: {
    eyeContact: 75, // percentage
    posture: 'Open and Upright',
    facialEngagement: 'Engaged',
    gestures: 'Used effectively',
    radarData: [
      { subject: 'Eye Contact', score: 75, fullMark: 100 },
      { subject: 'Posture', score: 90, fullMark: 100 }, // Representing 'Open' qualitatively
      { subject: 'Facial Engage', score: 85, fullMark: 100 }, // Representing 'Engaged'
      { subject: 'Gestures', score: 80, fullMark: 100 }, // Representing 'Effective'
    ],
  },
  delivery: {
    confidence: 85, // Score 0-100
    paceWPM: 155,
    optimalPaceRange: [140, 160],
    fillerWordsPerMinute: 4,
    benchmarkFillerWords: 2, // Target benchmark
    toneVariation: 'Engaging',
    articulation: 'Clear',
    radarData: [
      { subject: 'Confidence', score: 85, fullMark: 100 },
      { subject: 'Pace', score: 90, fullMark: 100 }, // Score based on proximity to optimal range
      { subject: 'Filler Words', score: 40, fullMark: 100 }, // Inverted score (lower count = higher score) -> (benchmark/actual)*100 or similar logic
      { subject: 'Tone', score: 90, fullMark: 100 }, // Representing 'Engaging'
      { subject: 'Articulation', score: 95, fullMark: 100 }, // Representing 'Clear'
    ],
  },
  content: {
    overallScores: {
        relevance: 85,
        clarity: 90,
        conciseness: 75,
        keywordUsage: 80,
        structure: 88,
        technicalDepth: 82
    },
    questionBreakdown: [
      {
        id: 1,
        question: 'Tell me about a challenging project you worked on.',
        answerTranscript: 'Well, um, there was this one project where we had to integrate a legacy system... (full transcript)... so we used the STAR method, situation was X, task was Y, action Z, and the result was positive.',
        scores: { relevance: 90, clarity: 85, conciseness: 70, keywordUsage: 85, structure: 95, technicalDepth: 80 },
        keywordsFound: ['integrate', 'legacy system', 'challenging', 'result'],
        keywordsMissed: ['agile', 'refactoring'],
        structureDetected: 'STAR',
      },
      {
        id: 2,
        question: 'How do you handle disagreements within a team?',
        answerTranscript: 'Like, I think it is important to listen to everyone... (full transcript)... communication is key.',
        scores: { relevance: 80, clarity: 95, conciseness: 80, keywordUsage: 75, structure: 80 },
        keywordsFound: ['listen', 'communication', 'team'],
        keywordsMissed: ['conflict resolution', 'compromise'],
      },
    ],
     radarData: [ // Overall content radar
       { subject: 'Relevance', score: 85, fullMark: 100 },
       { subject: 'Clarity', score: 90, fullMark: 100 },
       { subject: 'Conciseness', score: 75, fullMark: 100 },
       { subject: 'Keywords', score: 80, fullMark: 100 },
       { subject: 'Structure', score: 88, fullMark: 100 },
       { subject: 'Tech Depth', score: 82, fullMark: 100 },
    ],
  },
};