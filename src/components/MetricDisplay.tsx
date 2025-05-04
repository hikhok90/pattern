// src/components/MetricDisplay.tsx
import React from 'react';

interface MetricDisplayProps {
    label: string;
    value: string | number;
    unit?: string;
    benchmark?: string | number;
    benchmarkLabel?: string;
    info?: string; // Additional qualitative info
}

const MetricDisplay: React.FC<MetricDisplayProps> = ({ label, value, unit, benchmark, benchmarkLabel = "Target", info }) => {
  return (
    <div className="p-3 border rounded-lg bg-gray-50 shadow-sm text-center">
      <div className="text-sm font-medium text-gray-500">{label}</div>
      <div className="text-2xl font-bold text-gray-800">
        {value}{unit && <span className="text-lg text-gray-600">{unit}</span>}
      </div>
      {benchmark !== undefined && (
        <div className="text-xs text-gray-500">{benchmarkLabel}: {benchmark}{unit}</div>
      )}
      {info && (
         <div className="text-sm text-blue-600 mt-1">{info}</div>
      )}
    </div>
  );
};

export default MetricDisplay;