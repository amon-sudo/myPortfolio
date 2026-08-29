import React from 'react'
import { skills } from '../data/portfolioData'

function Skills() {
  const SkillCategory = ({ title, items, color }) => (
    <div className="glass-effect p-8 rounded-xl">
      <h3 className={`text-2xl font-bold mb-6 ${color}`}>
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {items.map((skill, idx) => (
          <div
            key={idx}
            className="p-3 bg-slate-800 bg-opacity-50 rounded-lg hover:bg-opacity-100 transition-all duration-200 text-slate-300 hover:text-white text-center border border-slate-700 hover:border-blue-500"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory
            title="Frontend"
            items={skills.frontend}
            color="text-blue-400"
          />
          <SkillCategory
            title="Backend"
            items={skills.backend}
            color="text-purple-400"
          />
          <SkillCategory
            title="Tools & Platforms"
            items={skills.tools}
            color="text-pink-400"
          />
        </div>

        {/* Proficiency Summary */}
        <div className="mt-12 glass-effect p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-8 text-white">Expertise Level</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-300">Frontend Development</span>
                <span className="text-blue-400 font-semibold">90%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 w-[90%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-300">Backend Development</span>
                <span className="text-purple-400 font-semibold">85%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-purple-400 w-[85%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-300">Database Design</span>
                <span className="text-pink-400 font-semibold">80%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-pink-500 to-pink-400 w-[80%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-300">DevOps & Deployment</span>
                <span className="text-green-400 font-semibold">75%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-400 w-[75%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
