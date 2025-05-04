// src/components/StrengthsWeaknesses.tsx
import React from 'react';
// Consider adding icons later with: npm install react-icons
// import { FaCheckCircle, FaWrench } from 'react-icons/fa';

interface StrengthsWeaknessesProps {
  strengths: string[];
  areasForImprovement: string[];
}

const StrengthsWeaknesses: React.FC<StrengthsWeaknessesProps> = ({ strengths, areasForImprovement }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-4 border rounded-lg bg-green-50 border-green-200 shadow-sm">
        <h3 className="text-lg font-semibold mb-2 text-green-800 flex items-center">
          {/* <FaCheckCircle className="mr-2 text-green-600" /> */}
          ✅ Strengths
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {strengths.map((item, index) => (
            <li key={`strength-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-yellow-50 border-yellow-200 shadow-sm">
        <h3 className="text-lg font-semibold mb-2 text-yellow-800 flex items-center">
          {/* <FaWrench className="mr-2 text-yellow-600" /> */}
          🔧 Areas for Improvement
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {areasForImprovement.map((item, index) => (
            <li key={`improvement-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StrengthsWeaknesses;