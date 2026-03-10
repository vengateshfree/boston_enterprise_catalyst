import React from 'react'

function Start() {
  return (
    <>
    <section className="flex flex-col items-center text-center bg-gradient-to-r from-blue-50 to-cyan-50 py-20 px-6 md:px-20 rounded-3xl shadow-lg">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
    Start Monitoring Your Infrastructure Today
  </h2>
  <p className="text-gray-700 text-lg md:text-xl max-w-xl mb-8">
    Deploy <span className="font-semibold text-blue-600">CatalystSuite</span> and gain instant visibility into your entire infrastructure stack.
  </p>
  <a
    href="#request-demo"
    className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
  >
    Request Demo
  </a>
</section>
    </>
  )
}

export default Start