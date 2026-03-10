import React from 'react'
import Particles from './ParticleStyle/Particles'

function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-white flex items-center justify-center">

      {/* 🟦 Particles Background Layer – Always at the very back */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Particles
          particleColors={['#5c5cf7', '#5c5cf7']}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div>

      <div
        className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
        from-blue-100 via-white to-white opacity-90"
      ></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 blur-[100px] rounded-full mix-blend-multiply z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 blur-[120px] rounded-full mix-blend-multiply z-10"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-20">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Next-Gen Education Infrastructure
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-8 leading-[1.15]">
          CatalystSuite -
          <span className="pl-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
           Enterprise Infrastructure Monitoring 
          </span> Simplified
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
     Gain complete visibility, intelligent alerting, and automated control over your entire IT ecosystem — from bare-metal servers to containerized applications.
     </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="#ai-demos"
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300"
          >
            Try Audit Agents
          </a>
          <a
            href="#features"
            className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition shadow-sm"
          >
            View Platform
          </a>
        </div>
</div>
      </div>
    </section>
  )
}

export default Hero
