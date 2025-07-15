import React from "react";
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center text-muted-foreground text-sm">
          <p className="flex items-center justify-center gap-4">
            <a
              href="https://github.com"
              className="hover:text-primary transition-colors duration-200 inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
