import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter, Code2, Palette, Database, Globe, Smartphone, Server, Zap, Star, Sparkles, ArrowRight, Play } from 'lucide-react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const typingText = useTypingAnimation({
    words: ['Creative Developer', 'UI/UX Designer', 'Full Stack Engineer', 'Digital Innovator'],
    typeSpeed: 80,
    deleteSpeed: 40,
    delayBetweenWords: 2000,
  });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'React', icon: Code2, color: 'from-cyan-400 to-blue-500', delay: '0s' },
    { name: 'TypeScript', icon: Code2, color: 'from-blue-500 to-indigo-600', delay: '0.2s' },
    { name: 'Node.js', icon: Server, color: 'from-green-400 to-emerald-600', delay: '0.4s' },
    { name: 'Design', icon: Palette, color: 'from-pink-400 to-rose-500', delay: '0.6s' },
    { name: 'Database', icon: Database, color: 'from-purple-400 to-violet-600', delay: '0.8s' },
    { name: 'Mobile', icon: Smartphone, color: 'from-orange-400 to-red-500', delay: '1s' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-600/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-600/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400/30 to-teal-600/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Interactive Mouse Trail */}
        <div
          className="absolute w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mix-blend-screen filter blur-sm pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            opacity: 0.6,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen max-w-7xl mx-auto">
          
          {/* Left Side - Main Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Greeting */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm">Hello, I'm</span>
              </div>
              
              <h1 className="text-4xl sm:text-4xl lg:text-5xl font-black">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                  NAVEEN SAINI
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl font-semibold text-cyan-300 tracking-wide">
                Aspiring AI/ML Engineer | Python Developer
              </p>

              <p className="text-sm sm:text-base text-cyan-100/90 max-w-2xl leading-relaxed">
                I am passionate about building intelligent systems using machine learning, data-driven problem solving, and clean Python development practices, with a strong focus on turning real-world challenges into practical, reliable, and impactful AI-powered solutions.
              </p>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90 h-16 flex items-center">
                <span className="border-r-2 border-cyan-400 pr-2 animate-pulse">
                  {typingText}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Passionate about crafting exceptional digital experiences through innovative design 
              and cutting-edge technology. Let's build something amazing together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative border-2 border-cyan-400 text-cyan-400 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 overflow-hidden flex items-center justify-center space-x-2"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Get In Touch</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              {[
                { icon: Github, href: '#', color: 'hover:text-gray-300' },
                { icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
                { icon: Twitter, href: '#', color: 'hover:text-cyan-400' },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-white/70 ${social.color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Skills Showcase */}
          <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Central Hub */}
              <div className="relative w-80 h-80 mx-auto">
                {/* Central Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <Code2 className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Orbiting Skills */}
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  const angle = (index * 60) * (Math.PI / 180); // 60 degrees apart
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={skill.name}
                      className="absolute group"
                      style={{
                        left: `50%`,
                        top: `50%`,
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        animationDelay: skill.delay,
                      }}
                    >
                      <div className="relative animate-fade-in-up">
                        {/* Skill Circle */}
                        <div className={`w-20 h-20 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-all duration-500 cursor-pointer border-4 border-white/20 group-hover:border-white/40`}>
                          <IconComponent className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        
                        {/* Skill Label */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                            {skill.name}
                          </span>
                        </div>

                        {/* Connection Line */}
                        <div 
                          className="absolute w-0.5 bg-gradient-to-r from-cyan-400/50 to-purple-500/50 opacity-30 group-hover:opacity-70 transition-opacity duration-300"
                          style={{
                            height: `${radius - 40}px`,
                            left: '50%',
                            top: '50%',
                            transformOrigin: 'top center',
                            transform: `translateX(-50%) rotate(${angle + Math.PI}rad)`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 right-10 animate-float">
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="absolute bottom-10 left-10 animate-float animation-delay-2000">
                <Star className="w-6 h-6 text-cyan-400" />
              </div>
            </div>

            {/* Skills Description */}
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-white/90 mb-4">
                <Zap className="inline-block w-6 h-6 mr-2 text-yellow-400" />
                Technical Expertise
              </h3>
              <p className="text-gray-300 max-w-md mx-auto">
                Hover over the skills to explore my technical stack and see how I bring ideas to life
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className={`animate-bounce text-white/70 hover:text-cyan-400 transition-colors duration-300 transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <ChevronDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;