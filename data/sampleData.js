// data/sampleData.js
export const sampleInterviewData = {
    overall: {
      score: 78,
      scoreCategory: "Good",
      strengths: [
        "Clearly articulated project contributions using specific examples.",
        "Effectively used the STAR method for behavioral questions.",
        "Demonstrated genuine enthusiasm and interest in the role and company.",
      ],
      areasForImprovement: [
        "Provide more quantitative results when describing achievements.",
        "Slightly elevated use of filler words ('um', 'like') when thinking.",
        "Could maintain more consistent eye contact, especially during pauses.",
      ],
    },
    nonVerbal: {
      // Scores out of 10 for radar chart simplicity
      eyeContact: 7, // Represents 70% consistency -> 7/10
      posture: 9,    // Represents 'Open' -> 9/10
      facialExpressions: 8, // Represents 'Engaged' -> 8/10
      gestures: 8,   // Represents 'Appropriate' -> 8/10
      // Qualitative descriptions for display
      eyeContactDesc: "Fairly Consistent (70%)",
      postureDesc: "Open and Upright",
      facialExpressionsDesc: "Engaged",
      gesturesDesc: "Appropriate Hand Gestures",
    },
    delivery: {
      // Scores out of 10 for radar chart simplicity
      confidence: 8,
      speakingPace: 7, // Represents 'Just Right' (155 WPM) -> 7/10 (normalized scale)
      fillerWords: 6, // Represents low usage (inverted scale: 10 - usage_score) -> 6/10
      tone: 8, // Represents 'Engaging' -> 8/10
      articulation: 9, // Represents 'Clear' -> 9/10
       // Qualitative/Quantitative descriptions for display
      confidenceDesc: "Generally Confident",
      speakingPaceWPM: 155,
      speakingPaceDesc: "Just Right",
      fillerWordsPerMinute: 6,
      fillerWordsDesc: "Slightly High",
      toneDesc: "Engaging and Varied",
      articulationDesc: "Clear",
    },
    content: [ // Array per question analyzed
      {
        id: 1,
        question: "Tell me about a challenging project.",
        answerTranscriptSnippet: "Well, um, we had this project where the deadline was moved up significantly. My role involved coordinating with three different teams...",
        relevance: 9, // score 1-10
        clarity: 7,
        conciseness: 6,
        keywordsFound: ["deadline", "project", "teams", "coordinating"],
        keywordsMissed: ["agile", "risk assessment", "budget"],
        structureDetected: "STAR Method",
        technicalDepth: 7,
        feedback: "Good structure, but could add more detail on the technical challenges and specific outcomes.",
      },
      {
        id: 2,
        question: "Why are you interested in this role?",
        answerTranscriptSnippet: "I'm really excited about this opportunity because your company is a leader in X, and I admire your focus on Y. My skills in Z align well...",
        relevance: 9,
        clarity: 9,
        conciseness: 8,
        keywordsFound: ["opportunity", "excited", "leader", "skills align"],
        keywordsMissed: ["company values", "specific product mention"],
        structureDetected: null, // N/A or "Direct Answer"
        technicalDepth: null, // N/A
        feedback: "Strong enthusiasm and clear connection of skills. Could mention specific company values or products.",
      }
    ],
  };