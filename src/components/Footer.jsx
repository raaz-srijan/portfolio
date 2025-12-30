import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border-color">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} Srijan Raj Shakya. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs text-text-secondary uppercase tracking-widest font-semibold">
          <span>Built with React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
