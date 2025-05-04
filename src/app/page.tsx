// src/app/page.tsx
import { sampleFeedback } from '@/data/sampleFeedback';
import ScoreGauge from '@/components/ScoreGauge';
import StrengthsWeaknesses from '@/components/StrengthsWeaknesses';
import AnalysisRadarChart from '@/components/AnalysisRadarChart';
import MetricDisplay from '@/components/MetricDisplay';
import QuestionAnalysisCard from '@/components/QuestionAnalysisCard';

export default function Home() {
  const feedback = sampleFeedback; // Load the sample data

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24 bg-gray-100">
      <div className="z-10 max-w-7xl w-full font-sans text-sm">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">AI Interview Feedback Report</h1>
        <p className="text-center text-gray-600 mb-8">
          Analysis for {feedback.intervieweeName} on {new Date(feedback.interviewDate).toLocaleDateString()}
        </p>

        {/* 1. Overall Summary Section */}
        <section className="mb-12 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Overall Summary</h2>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1 flex justify-center">
              <ScoreGauge score={feedback.overall.score} category={feedback.overall.category} />
            </div>
            <div className="md:col-span-2">
              <StrengthsWeaknesses
                strengths={feedback.overall.strengths}
                areasForImprovement={feedback.overall.areasForImprovement}
              />
            </div>
          </div>
        </section>

        {/* Analysis Sections Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">

          {/* 2. Non-Verbal Analysis Section */}
          <section className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Non-Verbal Analysis</h2>
            <AnalysisRadarChart data={feedback.nonVerbal.radarData} title="Non-Verbal Dimensions" />
            <div className="grid grid-cols-2 gap-4 mt-6">
              <MetricDisplay label="Eye Contact" value={feedback.nonVerbal.eyeContact} unit="%" info="Target: 70-90%" />
              <MetricDisplay label="Posture" value={feedback.nonVerbal.posture} />
              <MetricDisplay label="Facial Engagement" value={feedback.nonVerbal.facialEngagement} />
              <MetricDisplay label="Gestures" value={feedback.nonVerbal.gestures} />
            </div>
            {/* Add Timeline highlights placeholder if needed */}
          </section>

          {/* 3. Delivery Analysis Section */}
          <section className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Delivery Analysis</h2>
            <AnalysisRadarChart data={feedback.delivery.radarData} title="Delivery Dimensions" />
            <div className="grid grid-cols-2 gap-4 mt-6">
              <MetricDisplay label="Confidence Score" value={feedback.delivery.confidence} unit="/100" />
              <MetricDisplay
                label="Speaking Pace"
                value={feedback.delivery.paceWPM}
                unit=" WPM"
                info={`Optimal: ${feedback.delivery.optimalPaceRange[0]}-${feedback.delivery.optimalPaceRange[1]}`}
              />
              <MetricDisplay
                label="Filler Words"
                value={feedback.delivery.fillerWordsPerMinute}
                unit="/min"
                benchmark={feedback.delivery.benchmarkFillerWords}
                benchmarkLabel="Target"
              />
              <MetricDisplay label="Tone Variation" value={feedback.delivery.toneVariation} />
              <MetricDisplay label="Articulation" value={feedback.delivery.articulation} />
            </div>
            {/* Add Transcript integration placeholder */}
          </section>
        </div>

        {/* 4. Content Analysis Section */}
        <section className="mb-12 p-6 bg-white rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Content Analysis</h2>
          {feedback.content.radarData && (
            <div className="mb-8 max-w-md mx-auto"> {/* Constrain radar chart width */}
              <AnalysisRadarChart data={feedback.content.radarData} title="Overall Content Scores" />
            </div>
          )}
          <h3 className="text-xl font-semibold mb-3 text-gray-600">Question-by-Question Breakdown</h3>
          <div>
            {feedback.content.questionBreakdown.map(qAnalysis => (
              <QuestionAnalysisCard key={qAnalysis.id} analysis={qAnalysis} />
            ))}
          </div>
          {/* Add Word Cloud comparison placeholder */}
        </section>

      </div>
    </main>
  );
}