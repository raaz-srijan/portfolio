import React, { useEffect, useState, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';

const fullCode = `const developer = () => {
  return \${import.meta.env.VITE_APP_NAME};
};
developer();`;
const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCode, setShowCode] = useState(true);
  const [showName, setShowName] = useState(false);

  const indexRef = useRef(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedText(fullCode);
      setTimeout(() => {
        setShowCode(false);
        setShowName(true);
      }, 300);
      return;
    }

    const typeFast = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const progress = timestamp - startTimeRef.current;

      const targetDuration = 600;
      const charsToShow = Math.floor((progress / targetDuration) * fullCode.length);

      if (charsToShow > indexRef.current) {
        indexRef.current = Math.min(charsToShow, fullCode.length);
        setDisplayedText(fullCode.substring(0, indexRef.current));
      }

      if (indexRef.current < fullCode.length) {
        requestAnimationFrame(typeFast);
      } else {
        setTimeout(() => {
          setShowCode(false);
          setTimeout(() => setShowName(true), 200);
        }, 200);
      }
    };

    requestAnimationFrame(typeFast);

    return () => {
      startTimeRef.current = null;
      indexRef.current = 0;
    };
  }, []);

  const isTyping = indexRef.current < fullCode.length && showCode;

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl relative">
          <h1
            className={`font-heading text-6xl md:text-8xl font-bold leading-[1.1]
              transition-all duration-1000 ease-out
              ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            SRIJAN <br />
            <span className="text-accent-muted">RAJ SHAKYA</span>
          </h1>

          <pre
            className={`absolute inset-0 font-mono text-lg md:text-xl text-text-secondary/90 
              leading-snug pointer-events-none select-none
              transition-opacity duration-500 ease-out
              ${showCode ? 'opacity-100' : 'opacity-0'}`}
          >
            <code className="relative">
              {displayedText}
              {isTyping && (
                <span className="inline-block w-[2px] h-6 bg-accent-muted ml-1 align-middle animate-cursor" />
              )}
            </code>
          </pre>

          <div
            className={`mt-12 transition-all duration-1000 ease-out delay-300
              ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-lg md:text-xl text-text-secondary mt-8 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#projects" className="btn-primary">
                View Work
              </a>
              <a href="#contact" className="btn-secondary">
                Let’s Talk
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />
    </section>
  );
};

export default Hero;