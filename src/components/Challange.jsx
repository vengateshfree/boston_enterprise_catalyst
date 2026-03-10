import React from 'react'
import { FaServer, FaClipboardCheck, FaUserGraduate, FaHandHoldingDollar } from "react-icons/fa6";

function Challange() { // Keeping filename as is to avoid breaking imports
  const problems = [
    {
      icon: <FaServer size={24} />,
      title: "Exam-Day Crashes",
      description: "Legacy infrastructure fails under the sudden load of 10,000+ students logging in simultaneously for finals."
    },
    {
      icon: <FaClipboardCheck size={24} />,
      title: "Grant Compliance",
      description: "Manual auditing for research grants is slow and error-prone, risking future funding opportunities."
    },
    {
      icon: <FaUserGraduate size={24} />,
      title: "Lab Availability",
      description: "Computer Science labs are physically limited, preventing students from accessing required high-performance computing."
    },
    {
      icon: <FaHandHoldingDollar size={24} />,
      title: "Budget Bleed",
      description: "Over-provisioning servers 'just in case' leads to 40% wasted budget on idle resources during semester breaks."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm">The Challenge</h2>
          <h3 className="text-3xl font-extrabold text-gray-900 mt-2">Why Universities Struggle with IT</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, idx) => (
            <div key={idx} className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-blue-900/5 hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Challange