import React from "react";
import { MdComputer, MdDashboard, MdNotifications, MdOutlineStorage, MdSettings, MdBarChart } from "react-icons/md";

const features = [
  {
    title: "Real-Time Host Monitoring",
    desc: "Monitor CPU, memory, and disk usage instantly across all servers.",
    icon: <MdComputer size={26} />,
  },
  {
    title: "Application & Container Metrics",
    desc: "Track health and status of containers and services effortlessly.",
    icon: <MdDashboard size={26} />,
  },
  {
    title: "Customizable Dashboards",
    desc: "Build tailored views and charts to visualize your infrastructure.",
    icon: <MdBarChart size={26} />,
  },
  {
    title: "Intelligent Alerts",
    desc: "Receive notifications for critical events directly to your team.",
    icon: <MdNotifications size={26} />,
  },
  {
    title: "Centralized Logging",
    desc: "Aggregate logs and events in one place for quick analysis.",
    icon: <MdOutlineStorage size={26} />,
  },
  {
    title: "Lifecycle Management",
    desc: "Provision, discover, and secure servers with minimal effort.",
    icon: <MdSettings size={26} />,
  },
];

function Catalyst() {
  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm">
            Platform Capabilities
          </h2>
          <h3 className="text-3xl font-extrabold text-gray-900 mt-2">
            Built for Higher Education
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all group relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalyst;