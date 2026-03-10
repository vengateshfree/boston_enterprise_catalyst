import React from "react";


import logocryst  from '../assets/logocryst.png';
// import logocryst  from './assets/logocryst.png';

function Footer() {
  return (
    // Changed bg-[#0C1320] to bg-blue-900
    <footer className="w-full bg-blue-900 text-blue-100 py-12 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* <div className="bg-white text-blue-900 font-bold w-8 h-8 flex items-center justify-center rounded-lg">
                C
              </div> */}

                              <img src={logocryst} alt="Catalyst Suite Logo" className="h-12 w-12" />
              <h1 className="text-2xl font-bold text-white">
                Catalyst<span className="text-blue-300">Suite</span>
              </h1>
            </div>
            <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold mb-4">
              BOSTON TECH INDIA
            </p>
            <p className="text-blue-200/80 leading-relaxed max-w-sm">
              Empowering Education & Enterprise with next-gen AI infrastructure and audit-ready compliance tools.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-blue-200/80 text-sm">
              <li><a href="#" className="hover:text-white transition">Unified Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition">Audit Agents</a></li>
              <li><a href="#" className="hover:text-white transition">Cost Optimization</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-blue-200/80 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Campus Partners</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300/60">
          <p>© 2025 Boston Tech India. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;