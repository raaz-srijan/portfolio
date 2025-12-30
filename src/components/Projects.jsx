import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="section bg-[#080808]">
      <div className="container">
        <h2 className="section-title">Selected Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Image Wrapper */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video bg-surface-color border border-border-color transition-all duration-500 group-hover:border-border-hover">
                
                {project.images?.[0] ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 
                               group-hover:scale-105 group-hover:opacity-60"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-text-secondary text-sm">
                    No Preview Image
                  </div>
                )}

                <div
                  className="
                    absolute inset-0 flex items-center justify-center gap-4
                    bg-black/40 backdrop-blur-sm
                    opacity-0 translate-y-4
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-500 ease-out
                  "
                >
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-5 py-2 rounded-full text-sm font-semibold
                        bg-white text-black
                        hover:bg-accent-muted hover:text-black
                        transition-colors
                      "
                    >
                      Live
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-5 py-2 rounded-full text-sm font-semibold
                        border border-white/30 text-white
                        hover:bg-white hover:text-black
                        transition-colors
                      "
                    >
                      GitHub
                    </a>
                  )}
                </div>

                <div className="absolute top-4 right-4 flex gap-2">
                  {project.techStack?.stack?.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] uppercase tracking-wider font-semibold border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-white text-accent-muted transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-2 max-w-md">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
