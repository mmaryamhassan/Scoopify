import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 px-4 py-3 md:py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">

        {/* Left: Navigation */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 text-xs md:text-sm text-neutral-300">
          <a href="#services" className="hover:text-pink-400 transition-colors">Services</a>
          <a href="#support" className="hover:text-pink-400 transition-colors">Support</a>
          <a href="#faq" className="hover:text-pink-400 transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
        </nav>

        {/* Right: Social */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-neutral-400 hidden sm:inline">Follow us</span>
          <div className="flex gap-3">
            {[
              { icon: FaFacebookF, url: 'https://facebook.com' },
              { icon: FaInstagram, url: 'https://instagram.com' },
              { icon: FaTwitter, url: 'https://twitter.com' },
              { icon: FaGithub, url: 'https://github.com' },
            // eslint-disable-next-line no-unused-vars
            ].map(({ icon: Icon, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-neutral-700/50 hover:bg-pink-500/20 
                        text-neutral-300 hover:text-pink-400 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-2 md:mt-3 text-center text-[0.7rem] text-neutral-500">
        © 2025 MH • All rights reserved
      </div>
    </footer>
  );
};

export default Footer;