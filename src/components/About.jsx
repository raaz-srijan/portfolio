import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About = () => {
  return (
    <section id="about" className="section border-b border-border-color">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="section-title">About Me</h2>

            <p className="text-xl text-text-secondary leading-relaxed mb-6">
              I'm a front-end developer based in {PERSONAL_INFO.location}, focused on building modern, responsive, and user-friendly web applications. I specialize in React, Tailwind, and other modern web technologies to create interfaces that are both efficient and visually engaging.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I approach every project with attention to detail, clean code practices, and a mindset to deliver solutions that meet both business goals and user needs. My goal is to help teams and clients bring their ideas to life effectively and professionally.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying up-to-date with modern web trends.
            </p>
          </div>

          {/* Optional Avatar / Illustration */}
          <div className="relative aspect-square glass rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-10" />
            <div className="flex items-center justify-center h-full text-text-secondary group-hover:scale-105 transition-transform duration-700">
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
