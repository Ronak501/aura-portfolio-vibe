
import { Brain, Code, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code, label: 'Web Development', description: 'React, Next.js, Full-stack' },
    { icon: Brain, label: 'AI/ML Integration', description: 'OpenAI, Gemini, Custom models' },
    { icon: Zap, label: 'Automation', description: 'n8n workflows, Smart tools' },
    { icon: Lightbulb, label: 'Innovation', description: 'Real-world problem solving' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg"></div>
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm Ronak Talaviya, a passionate 2nd-year Computer Engineering student at SCET with an insatiable curiosity for technology. 
                My journey began with simple web pages and has evolved into creating AI-powered solutions that solve real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From building finance tracking systems to developing AI-generated perfume recommendations based on health data, 
                I believe in using code to make daily life smarter and more efficient. Every project is an opportunity to learn, 
                innovate, and push the boundaries of what's possible.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg"></div>
                What Drives Me
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm fascinated by the intersection of AI, automation, and human experience. Whether it's creating intelligent 
                chatbots for fact-checking or building scent recommendation engines, I love exploring how technology can 
                understand and enhance human needs in unexpected ways.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="group bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.label}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
