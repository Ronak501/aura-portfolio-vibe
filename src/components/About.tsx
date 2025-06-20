
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: Globe, description: 'React, Vue, TypeScript, Tailwind CSS' },
    { name: 'Backend Development', icon: Database, description: 'Node.js, Python, PostgreSQL, MongoDB' },
    { name: 'Mobile Development', icon: Smartphone, description: 'React Native, Flutter' },
    { name: 'DevOps & Tools', icon: Code, description: 'Docker, AWS, Git, CI/CD' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-white">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                Started as a curious computer science student and evolved into a full-stack developer 
                who believes in the power of clean code and intuitive design. I've worked with startups 
                and established companies, always focusing on delivering exceptional user experiences.
              </p>
            </div>
            
            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-white">What I Do</h3>
              <p className="text-gray-300 leading-relaxed">
                I specialize in building modern web applications using cutting-edge technologies. 
                From responsive frontends to scalable backends, I create solutions that are both 
                beautiful and performant.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass-effect rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <skill.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{skill.name}</h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
