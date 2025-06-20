
import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-700/50 bg-slate-900/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ronak Talaviya
              </div>
            </div>
            <p className="text-gray-400">
              © {currentYear} All rights reserved. Built with{' '}
              <Heart size={16} className="inline text-red-400" /> and lots of curiosity.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-cyan-400/10"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-cyan-400/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-cyan-400/10"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
