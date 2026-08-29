import React from 'react'
import { projects } from '../data/portfolioData'

function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-effect p-6 hover:border-blue-400 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-6 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
                {project.image}
              </div>

              {/* Project Content */}
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 text-sm rounded-full border border-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <ul className="text-slate-400 text-sm space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 border-2 border-blue-600 hover:bg-blue-600 text-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-200"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
