import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

const SOCIALS = [
  { icon: SiGithub, label: 'GitHub', url: PERSONAL_INFO.github },
  { icon: SiLinkedin, label: 'LinkedIn', url: PERSONAL_INFO.linkedin },
  { icon: SiInstagram, label: 'Instagram', url: PERSONAL_INFO.instagram },
];

const Contact = () => {
  return (
    <section id="contact" className="section bg-[#080808]">
      <div className="container text-center">
        <h2 className="section-title">Get In Touch</h2>

        <div className="max-w-2xl mx-auto">
          <p className="text-xl text-text-secondary mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-3xl md:text-5xl font-heading font-medium hover:text-accent-muted transition-colors break-all"
          >
            {PERSONAL_INFO.email}
          </a>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mt-16">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex flex-col items-center cursor-pointer"
              >
                <div className="
                  w-14 h-14 flex items-center justify-center rounded-2xl
                  bg-white/5 backdrop-blur-sm border border-white/10
                  transition-all duration-300
                  group-hover:bg-white group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-accent-muted/20
                ">
                  <social.icon
                    size={28}
                    className="text-text-secondary group-hover:text-black transition-colors duration-300"
                  />
                </div>
                <span className="
                  mt-2 text-sm font-medium text-text-secondary opacity-0
                  translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-300
                ">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
