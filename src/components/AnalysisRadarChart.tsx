// src/components/AnalysisRadarChart.tsx
"use client"; // Required for Recharts components

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface RadarDataPoint {
  subject: string;
  score: number;
  fullMark: number;
}

interface AnalysisRadarChartProps {
  data: RadarDataPoint[];
  title: string;
}

const AnalysisRadarChart: React.FC<AnalysisRadarChartProps> = ({ data, title }) => {
  if (!data || data.length === 0) {
    return <div className="text-gray-500">No data available for {title} radar chart.</div>;
  }

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white h-80"> {/* Set fixed height */}
      <h3 className="text-lg font-semibold mb-2 text-center text-gray-700">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} /> {/* Assuming fullMark is always 100 */}
          <Radar name="Score" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Tooltip />
          {/* <Legend /> Optional: if multiple data series */}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalysisRadarChart;