
import { Code, Database, Zap, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: ['React.js', 'Tailwind CSS', 'Next.js', 'JavaScript', 'TypeScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: ['Flask', 'Express.js', 'Node.js', 'Python', 'REST APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Automation & AI',
      icon: Zap,
      skills: ['n8n', 'SerpAPI', 'Gemini API', 'OpenAI tools', 'Custom AI Agents'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Database & Tools',
      icon: Wrench,
      skills: ['Firebase', 'MongoDB', 'GitHub', 'Postman', 'VS Code', 'Google AI Studio'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, intelligent applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-2 bg-slate-700/50 rounded-lg text-gray-300 text-sm border border-slate-600/30 hover:border-cyan-400/50 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
