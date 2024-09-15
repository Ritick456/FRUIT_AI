


import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-cyan-100 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Fruit.Ai</h1>
      <p className="text-gray-600 mb-8">
        Whether you're looking to discover new fruits, understand their nutritional
        values, or find the perfect fruit for your diet, our AI-driven chatbot is
        here to assist. We provide personalized fruit recommendations tailored to
        your health needs, making it easier for you to integrate the best fruits
        into your daily routine.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        About
      </button>
    </div>
  </div>
  )
}

export default About