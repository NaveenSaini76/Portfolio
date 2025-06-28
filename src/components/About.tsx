import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette, Award, Target, Lightbulb, Heart } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  color: string;
}

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'React/TypeScript', level: 95, icon: Code, color: 'from-cyan-400 to-blue-500' },
    { name: 'JavaScript/ES6+', level: 98, icon: Globe, color: 'from-yellow-400 to-orange-500' },
    { name: 'Node.js/Express', level: 90, icon: Server, color: 'from-green-400 to-emerald-600' },
    { name: 'Database Design', level: 85, icon: Database, color: 'from-purple-400 to-violet-600' },
    { name: 'Mobile Development', level: 80, icon: Smartphone, color: 'from-pink-400 to-rose-500' },
    { name: 'UI/UX Design', level: 92, icon: Palette, color: 'from-indigo-400 to-purple-500' },
  ];

  const achievements = [
    { icon: Award, title: '50+ Projects', description: 'Successfully delivered' },
    { icon: Target, title: '99% Success Rate', description: 'Client satisfaction' },
    { icon: Lightbulb, title: '3+ Years', description: 'Professional experience' },
    { icon: Heart, title: '24/7 Support', description: 'Dedicated service' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-cyan-200/30 to-blue-300/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-200/30 to-pink-300/30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with a keen eye for design and a love for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Section */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto relative">
                {/* Animated Ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow p-1">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <div className="w-56 h-56 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center shadow-inner">
                      <Code className="h-24 w-24 text-slate-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Creative Problem Solver & Tech Enthusiast
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Hi, I'm Naveen, a passionate and dedicated web developer with a strong focus on creating dynamic, responsive, and user-friendly web applications. I love turning ideas into interactive digital experiences using modern technologies like React, JavaScript, and Tailwind CSS.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                I believe in the power of clean code, thoughtful design, and continuous learning. 
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring fellow developers.
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {['Frontend web Development', 'React Ecosystem', 'API Design', 'Cloud Technologies' ].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-slate-700 rounded-full text-sm font-medium border border-cyan-200 hover:shadow-md transition-shadow duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center lg:text-left">
              Technical Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <span className="font-semibold text-slate-700 text-lg">{skill.name}</span>
                      </div>
                      <span className="text-sm text-slate-500 font-bold bg-slate-100 px-3 py-1 rounded-full">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden shadow-inner">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left shadow-sm`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Achievements & Milestones
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-800 text-xl mb-2">{achievement.title}</h4>
                    <p className="text-slate-600">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;