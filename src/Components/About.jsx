import React from 'react'
import { about } from '../data/portfolioData'


function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Side */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full glass-effect p-1 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-9xl">
                <a src= "pic.jpg" alt="Profile"></a>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">
              {about.name}
            </h3>
            <p className="text-xl text-blue-400 font-semibold mb-6">
              {about.title}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {about.bio}
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 border-l-4 border-blue-500 pl-4">
              {about.summary}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-effect p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">6+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="glass-effect p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">20+</div>
                <div className="text-sm text-slate-400">Projects Delivered</div>
              </div>
              <div className="glass-effect p-4 text-center">
                <div className="text-2xl font-bold text-pink-400">15+</div>
                <div className="text-sm text-slate-400">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
