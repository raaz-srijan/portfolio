import React from "react";
import { PERSONAL_INFO } from "../constants";
import { me } from "../constants/images";

const About = () => {
  return (
    <section id="about" className="section border-b border-border-color">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="section-title">About Me</h2>

            <p className="text-xl text-text-secondary leading-relaxed mb-6">
              I'm a front-end developer based in {PERSONAL_INFO.location},
              focused on building modern, responsive, and user-friendly web
              applications. I specialize in React, Tailwind, and other modern
              web technologies to create interfaces that are both efficient and
              visually engaging.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I approach every project with attention to detail, clean code
              practices, and a mindset to deliver solutions that meet both
              business goals and user needs. My goal is to help teams and
              clients bring their ideas to life effectively and professionally.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and staying up-to-date with
              modern web trends.
            </p>
          </div>

          {/* Profile Image */}
          <div className="relative aspect-square glass rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-10" />
            
            <img
              src={me}
              alt="Profile"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;