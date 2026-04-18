import React, { useState } from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, Database, Filter, Search, Star, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo: string;
  sourceCode: string;
  category: string;
  icon: React.ElementType;
  featured: boolean;
  stats: {
    stars: number;
    views: number;
  };
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Hand Gesture Volume Controller',
      description: 'Developed a real-time hand gesture volume control system using Python, OpenCV, and MediaPipe to enable touchless audio interaction. The project uses hand tracking and finger distance detection to adjust system volume dynamically with high accuracy and low latency. It demonstrates practical computer vision integration for intuitive human-computer interaction.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
      liveDemo: '#',
      sourceCode: '#',
      category: 'AI/ML',
      icon: Globe,
      featured: true,
      stats: { stars: 98, views: 1890 },
    },
    {
      id: 2,
      title: 'Travel Recommendation System',
      description: 'Built a travel recommendation system that suggests personalized destinations based on user preferences and historical travel data. The model applies machine learning techniques to generate accurate recommendations and useful travel insights. It focuses on improving user experience through data-driven personalization.',
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Machine Learning', 'Pandas', 'Recommendation System'],
      liveDemo: '#',
      sourceCode: '#',
      category: 'AI/ML',
      icon: Code,
      featured: true,
      stats: { stars: 112, views: 2210 },
    },
    {
      id: 3,
      title: 'GeoAgriMap',
      description: 'Created GeoAgriMap, a satellite-assisted land use and crop health mapping system using GPS and remote sensing data. The project processes environmental information to monitor land use and generate accurate crop health insights. It highlights the use of data analysis for agriculture-focused decision support.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'GPS', 'Remote Sensing', 'Data Analysis'],
      liveDemo: '#',
      sourceCode: '#',
      category: 'AI/ML',
      icon: Database,
      featured: false,
      stats: { stars: 87, views: 1640 },
    },
    {
      id: 4,
      title: 'Movie Rating Prediction',
      description: 'Developed a machine learning model to predict movie ratings based on features such as genre, cast, and user reviews. Applied data preprocessing and regression techniques to improve prediction accuracy. Demonstrates the ability to build predictive models and analyze user-driven data.',
      image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Machine Learning', 'Regression', 'Data Preprocessing'],
      liveDemo: '#',
      sourceCode: '#',
      category: 'AI/ML',
      icon: Code,
      featured: true,
      stats: { stars: 76, views: 1420 },
    },
    {
      id: 5,
      title: 'Credit Card Fraud Detection',
      description: 'Built a fraud detection system using machine learning algorithms to identify suspicious transactions. Performed data preprocessing and handled imbalanced datasets to improve model performance. Highlights skills in anomaly detection and financial data analysis.',
      image: 'https://images.pexels.com/photos/4386378/pexels-photo-4386378.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Machine Learning', 'Anomaly Detection', 'Data Analysis'],
      liveDemo: '#',
      sourceCode: '#',
      category: 'AI/ML',
      icon: Database,
      featured: true,
      stats: { stars: 91, views: 1735 },
    },
    {
      id: 6,
      title: 'Retail Sales Performance Dashboard',
      description: 'Created an interactive dashboard to analyze retail sales data and track key performance metrics. Used data visualization techniques to identify trends, patterns, and business insights. Demonstrates the ability to convert raw data into actionable insights.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Data Visualization', 'Dashboard', 'Analytics', 'Business Insights'],
      liveDemo: '#',
      sourceCode: '#',
      category: 'Dashboard',
      icon: Globe,
      featured: false,
      stats: { stars: 64, views: 1180 },
    },
  ];

  const categories = ['All', 'AI/ML', 'Dashboard'];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Selected projects from my resume focused on AI, machine learning, and computer vision
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.slice(0, 2).map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105"
              >
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Featured</span>
                  </span>
                </div>

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 right-4 flex space-x-4">
                    <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-white text-sm">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <Eye className="w-4 h-4 text-cyan-400" />
                      <span className="text-white text-sm">{project.stats.views}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.liveDemo}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                    >
                      <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.sourceCode}
                      className="flex-1 border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                    >
                      <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <IconComponent className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.liveDemo}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium py-2 px-4 rounded-lg text-sm transition-all duration-300 flex items-center justify-center space-x-1 hover:shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.sourceCode}
                      className="flex-1 border border-white/30 text-white font-medium py-2 px-4 rounded-lg text-sm transition-all duration-300 flex items-center justify-center space-x-1 hover:bg-white/10"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;