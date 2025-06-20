
import { BookOpen, Brain, Lightbulb, Zap } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'How I used AI and n8n to build a scent recommendation engine',
      summary: 'Exploring the technical journey of creating an AI-powered system that recommends personalized fragrances.',
      description: 'A deep dive into combining machine learning algorithms with automation workflows for innovative health-tech solutions.',
      icon: Brain,
      readTime: '8 min read',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'From symptoms to scents: The research behind my perfume project',
      summary: 'Understanding the scientific foundation of correlating health indicators with fragrance preferences.',
      description: 'Detailed analysis of the research methodology and data patterns that drive personalized scent generation.',
      icon: Lightbulb,
      readTime: '12 min read',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Integrating Google Gemini in an n8n workflow: A beginner\'s guide',
      summary: 'Step-by-step tutorial for implementing Google\'s Gemini API in automation workflows.',
      description: 'Practical guide covering setup, configuration, and real-world applications of Gemini API integration.',
      icon: Zap,
      readTime: '6 min read',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Why low-code automation is the future of smart health tools',
      summary: 'Analyzing how no-code/low-code platforms are revolutionizing healthcare technology development.',
      description: 'Insights into the democratization of health tech and the role of accessible automation platforms.',
      icon: BookOpen,
      readTime: '10 min read',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Research & Insights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge and discoveries from my journey in AI, automation, and innovative problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${post.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <post.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-gray-400 font-medium">{post.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                {post.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.summary}
              </p>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {post.description}
              </p>
              
              <div className="mt-6 pt-4 border-t border-slate-600/30">
                <span className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Read more →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
