import React from "react";
import { FaRocket, FaPalette, FaClock } from "react-icons/fa6";

const valueProps = [
  {
    title: "Built for Scale",
    desc: "Handle thousands of telemetry streams concurrently without breaking a sweat.",
    icon: <FaRocket size={28} className="text-blue-600" />,
    bg: "bg-blue-50 ",
  },
  {
    title: "Beautiful & Intuitive",
    desc: "A modern, dark-mode-first interface that engineers actually enjoy using.",
    icon: <FaPalette size={28} className="text-blue-600" />,
    bg: "bg-blue-50 ",
  },
  {
    title: "Fast Time-to-Value",
    desc: "Deploy in minutes with automated scripts and gain full infrastructure visibility immediately.",
    icon: <FaClock size={28} className="text-blue-600" />,
    bg: "bg-blue-50 ",
  },
];

function ValuePro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm">
            💡 Why Choose CatalystSuite?
          </h2>
          <h3 className="text-3xl font-extrabold text-gray-900 mt-2">
            The Value You Get
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {valueProps.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5 p-6 md:p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all group"
            >
              <div
                className={`flex-shrink-0 w-16 h-16 flex items-center bg-blue-50 text-blue-600 justify-center rounded-xl ${item.bg} group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuePro;