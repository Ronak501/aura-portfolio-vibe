
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Real-time Finance Tracker',
      description: 'A comprehensive finance tracking platform with real-time updates, expense categorization, and insightful analytics to help users manage their financial goals effectively.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'Chart.js'],
      category: 'Web Development',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'AI Fact-Checking Chatbot',
      description: 'An intelligent chatbot that verifies information in real-time using custom AI agents, McGuire API integration, and automated fact-checking workflows.',
      tech: ['n8n', 'McGuire API', 'Custom AI Agents', 'NLP'],
      category: 'AI & Automation',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'College Task Management System',
      description: 'A comprehensive task management platform designed for college HOD and Faculty to streamline academic workflows, assignment tracking, and student progress monitoring.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      category: 'Full Stack',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'AI-Generated Perfume Recommender',
      description: 'Groundbreaking research project that generates personalized scent recommendations based on user health data, mood analysis, and AI-driven fragrance profiling.',
      tech: ['Python', 'Machine Learning', 'Health APIs', 'Data Analysis'],
      category: 'Research & AI',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'GitHub + LeetCode Analyzer',
      description: 'A comprehensive analytics dashboard that tracks coding progress across GitHub and LeetCode, providing insights into skill development and coding patterns.',
      tech: ['Python', 'Flask', 'GitHub API', 'LeetCode API'],
      category: 'Data Analytics',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exploring the intersection of AI, automation, and real-world problem solving through innovative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/30 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white rounded-full text-xs font-medium`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700/50 text-cyan-300 rounded-md text-xs border border-slate-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white flex-1">
                    <ExternalLink size={14} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                    <Github size={14} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
