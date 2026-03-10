import React, { useState } from 'react'
import { FaStar, FaBrain } from "react-icons/fa6";

function LiveAgent() {
  const [upscaleInput, setUpscaleInput] = useState('');
  const [specOutput, setSpecOutput] = useState(null);
  const [upscaleOutput, setUpscaleOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [workloadInput, setWorkloadInput] = useState('');

  // Mock Data: Workload Architect
  const generateSpecs = async () => {
    if (!workloadInput) return alert("Please describe your workload first.");
    setIsGenerating(true);
    setTimeout(() => {
      setSpecOutput({
        vcpu: "32 vCPU",
        ram: "128 GB DDR5",
        power_watts: "650W",
        cooling_btu: "2218 BTU/hr",
        reasoning: "Optimized for high-concurrency student portals and exam management systems."
      });
      setIsGenerating(false);
    }, 1500); 
  };

  // Mock Data: Upscale Intelligence
  const runUpscaleAnalysis = async () => {
    if (!upscaleInput) return alert("Please paste server stats to analyze.");
    setIsAnalyzing(true);
    setTimeout(() => {
      setUpscaleOutput(`### 🎓 Audit & Optimization Report
**Critical Finding**: 35% of resources idle outside exam hours.
- **Action**: Implement auto-scaling for "Lab Cluster A".
- **Compliance**: Data residency confirmed on-prem.
- **Savings**: Estimated **$12,000/year** in energy costs.`);
      setIsAnalyzing(false);
    }, 1500);
  };

  const parseMarkdown = (text) => {
    return text
      .replace(/### (.*?)$/gm, '<h3 class="font-semibold mt-2 mb-2 text-blue-900">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-700">$1</strong>')
      .replace(/- (.*?)$/gm, '<li class="text-gray-700 ml-4">$1</li>');
  };

  return (
    <section id="ai-demos" className="py-24 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm">Interactive Demo</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold mt-3 text-gray-900">Live Infrastructure Intelligence</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience how our agents handle complex University IT scenarios in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Workload Architect */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5 border border-blue-100 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-600/20">
                <FaStar size={20} />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Provisioning Agent</h4>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">Simulate requirements for new deployments (e.g., LMS, Student Portal).</p>
            
            <textarea 
              value={workloadInput} 
              onChange={(e) => setWorkloadInput(e.target.value)} 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none h-32" 
              placeholder="Ex: Hosting Moodle for 5,000 concurrent students during finals week..." 
            />

            <button 
              onClick={generateSpecs} 
              disabled={isGenerating} 
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition shadow-md"
            >
              {isGenerating ? 'Analyzing Requirements...' : 'Generate Spec Recommendation'}
            </button>

            {specOutput && (
              <div className="mt-6 bg-slate-50 rounded-xl p-5 border border-slate-200 animate-fade-in-up">
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(specOutput).filter(([k]) => k !== 'reasoning').map(([key, val]) => (
                    <div key={key} className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                      <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{key.replace('_', ' ')}</div>
                      <div className="font-mono text-gray-900 font-semibold">{val}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-xs text-blue-700 bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <strong>Analysis:</strong> {specOutput.reasoning}
                </div>
              </div>
            )}
          </div>

          {/* Upscale Intelligence */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5 border border-blue-100 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-600/20">
                <FaBrain size={20} />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Audit & Upscale Agent</h4>
            </div>

            <p className="text-gray-600 text-sm mb-4">Paste utilization logs to check for cost savings and audit compliance.</p>

            <textarea 
              value={upscaleInput} 
              onChange={(e) => setUpscaleInput(e.target.value)} 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-mono focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition resize-none h-32" 
              placeholder="Ex: Lab Cluster B: 15% CPU avg, 90% Peak RAM, Energy usage high..." 
            />

            <button 
              onClick={runUpscaleAnalysis} 
              disabled={isAnalyzing} 
              className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition shadow-md"
            >
              {isAnalyzing ? 'Running Audit...' : 'Run Optimization Audit'}
            </button>

            {upscaleOutput && (
              <div className="mt-6 bg-white rounded-xl p-5 border border-gray-200 shadow-inner h-full animate-fade-in-up">
                <div className="prose prose-sm prose-blue" dangerouslySetInnerHTML={{ __html: parseMarkdown(upscaleOutput) }} />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default LiveAgent;