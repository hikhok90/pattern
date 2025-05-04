// src/components/QuestionAnalysisCard.tsx
import React from 'react';
import { QuestionAnalysis as QuestionAnalysisType } from '@/types/feedback'; // Rename import

interface QuestionAnalysisCardProps {
  analysis: QuestionAnalysisType;
}

const QuestionAnalysisCard: React.FC<QuestionAnalysisCardProps> = ({ analysis }) => {
  // Helper to display scores (e.g., simple text, could be bars later)
  const renderScores = (scores: QuestionAnalysisType['scores']) => {
    return Object.entries(scores).map(([key, value]) => (
      <span key={key} className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
        {key.charAt(0).toUpperCase() + key.slice(1)}: {value}/100 {/* Assuming scores are 0-100 */}
      </span>
    ));
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white mb-4">
      <h4 className="font-semibold text-blue-700 mb-1">Q: {analysis.question}</h4>
      <p className="text-sm text-gray-600 italic mb-2 truncate hover:whitespace-normal" title={analysis.answerTranscript}>
        A: {analysis.answerTranscript}
      </p>
      <div className="mb-2">
        <h5 className="text-xs font-semibold text-gray-500 mb-1">Scores:</h5>
        {renderScores(analysis.scores)}
      </div>
       {analysis.structureDetected && (
           <div className="mb-2">
               <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                   Structure: {analysis.structureDetected} Detected
               </span>
           </div>
       )}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <h5 className="font-semibold text-green-700 mb-1">Keywords Found:</h5>
          {analysis.keywordsFound.length > 0 ? (
            analysis.keywordsFound.map((kw, i) => <span key={i} className="inline-block bg-green-100 text-green-800 mr-1 mb-1 px-1.5 py-0.5 rounded">{kw}</span>)
          ) : <span className="text-gray-500">None</span>}
        </div>
        <div>
          <h5 className="font-semibold text-red-700 mb-1">Keywords Missed:</h5>
          {analysis.keywordsMissed.length > 0 ? (
             analysis.keywordsMissed.map((kw, i) => <span key={i} className="inline-block bg-red-100 text-red-800 mr-1 mb-1 px-1.5 py-0.5 rounded">{kw}</span>)
           ) : <span className="text-gray-500">None</span>}
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysisCard;