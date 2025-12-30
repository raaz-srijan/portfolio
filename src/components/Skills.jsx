import React from 'react';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="section py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="hidden lg:flex lg:flex-col lg:justify-center lg:min-h-[600px]">
            <h2
              className="writing-mode-vertical-rl rotate-180 text-5xl font-heading font-bold text-accent-muted tracking-widest uppercase"
              style={{ writingMode: 'vertical-rl' }}
            >
              Technical Expertise
            </h2>
          </div>

          <h2 className="lg:hidden section-title text-center">Technical Expertise</h2>

          <div className="hidden lg:block w-px bg-white/10 self-stretch" />

          <div className="flex-1 space-y-16">
            {SKILLS.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-6">
                <span className="inline-block px-4 py-2 bg-accent-muted/20 border border-accent-muted/30 rounded-full text-sm font-semibold text-accent-muted uppercase tracking-wider">
                  {skillGroup.category}
                </span>

                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-5">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center gap-2 cursor-default"
                    >
                      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 
                        group-hover:bg-white group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-accent-muted/20 
                        group-hover:border-accent-muted/40">
                        <skill.icon
                          size={28}
                          className="text-text-secondary group-hover:text-black transition-colors duration-300"
                        />
                      </div>

                      <span className="text-sm font-medium text-text-secondary text-center max-w-full truncate
                        opacity-0 invisible
                        group-hover:opacity-100 group-hover:visible
                        translate-y-1 group-hover:translate-y-0
                        transition-all duration-300 ease-out">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;