// src/components/ScoreGauge.tsx
import React from 'react';

interface ScoreGaugeProps {
  score: number; // 0-100
  category: string;
}

const ScoreGauge: React.FC<ScoreGaugeProps> = ({ score, category }) => {
  const getScoreColor = (s: number): string => {
    if (s < 40) return 'bg-red-500';
    if (s < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const colorClass = getScoreColor(score);

  return (
    <div className="text-center p-4 border rounded-lg shadow-md bg-white">
      <div className="relative w-32 h-16 mx-auto mb-2">
         {/* Simple Bar Representation */}
         <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
               className={`h-full ${colorClass} transition-all duration-500 ease-out`}
               style={{ width: `${score}%` }}
            ></div>
         </div>
      </div>
       <div className={`text-4xl font-bold ${colorClass.replace('bg-', 'text-')}`}>{score}<span className="text-xl text-gray-500">/100</span></div>
      <div className="text-lg font-semibold text-gray-700">{category}</div>
    </div>
  );
};

export default ScoreGauge;