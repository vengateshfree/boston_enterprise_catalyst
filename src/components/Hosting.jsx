import React from 'react'
import { FaBuildingColumns, FaFlask, FaGraduationCap } from "react-icons/fa6";

function Hosting() {
  const plans = [
    {
      title: "Department VPS",
      desc: "For individual faculties or small labs.",
      icon: <FaGraduationCap size={28} />,
      features: ["Up to 1,000 Users", "99.9% Uptime SLA", "Basic Audit Logs"],
      button: "Contact Sales",
      highlight: false
    },
    {
      title: "Campus Cloud",
      desc: "Unified infrastructure for the entire university.",
      icon: <FaBuildingColumns size={28} />,
      features: ["Unlimited Users", "Exam Auto-Scaling", "AI Compliance Agents", "24/7 Priority Support"],
      button: "Schedule Demo",
      highlight: true
    },
    {
      title: "Research HPC",
      desc: "High Performance Computing for grants.",
      icon: <FaFlask size={28} />,
      features: ["GPU Acceleration", "Data Sovereignty", "Grant Usage Reports"],
      button: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm">Deployment Models</h2>
          <h3 className="text-3xl font-extrabold text-gray-900 mt-2">Flexible Hosting for Academia</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative p-8 rounded-2xl transition-all duration-300 flex flex-col h-full ${
              plan.highlight 
                ? "bg-gradient-to-b from-blue-900 to-blue-800 text-white shadow-2xl scale-105 z-10" 
                : "bg-white border border-gray-200 text-gray-900 shadow-lg hover:border-blue-200"
            }`}>
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                plan.highlight ? "bg-white/10 text-white" : "bg-blue-50 text-blue-600"
              }`}>
                {plan.icon}
              </div>

              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className={`text-sm mb-8 ${plan.highlight ? "text-blue-100" : "text-gray-500"}`}>{plan.desc}</p>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <span className={`mr-3 ${plan.highlight ? "text-blue-300" : "text-blue-600"}`}>✔</span>
                    {feat}
                  </li>
                ))}
              </ul>


              <a href="https://demo.tekki.cloud/" target="_blank" >

              <button className={`w-full py-3 rounded-xl font-bold cursor-pointer transition ${
                plan.highlight 
                  ? "bg-white text-blue-900 hover:bg-blue-50" 
                  : "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}>
                {plan.button}
              </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hosting