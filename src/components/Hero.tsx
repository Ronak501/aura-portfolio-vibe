
import { ArrowDown, Github, Linkedin, Mail, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Profile image placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            RT
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block text-white mb-2">Hello, I'm</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ronak Talaviya
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code className="text-purple-400 w-5 h-5" />
            <p className="text-lg md:text-xl text-gray-300">
              Computer Engineering Student & AI Enthusiast
            </p>
          </div>
          
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Building smart solutions with AI, automation, and modern web technologies at SCET
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              View My Projects
            </Button>
            <Button variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300">
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-cyan-400/10">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-cyan-400/10">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-cyan-400/10">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
