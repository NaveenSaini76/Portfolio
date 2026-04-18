import React from 'react';
import { Award } from 'lucide-react';

const certifications = [
  { title: 'Microsoft Certified: Azure AI Fundamentals', description: 'Core AI concepts and Azure AI services' },
  { title: 'OCI Generative AI Professional', description: 'Generative AI and cloud-based AI workflows' },
  { title: 'Applied Machine Learning in Python', description: 'Practical ML using Python tooling' },
  { title: 'Introduction to Generative AI for Data Analysis', description: 'AI-assisted data analysis foundations' },
  { title: 'Predictive Analysis using IBM SPSS Modular', description: 'Predictive modeling and analysis' },
  { title: 'Python for Data Science, AI & Development', description: 'Python for analytics and AI development' },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-cyan-200/30 to-blue-300/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-200/30 to-pink-300/30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">
          Certifications & Awards
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <div key={index} className="group text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-slate-800 text-xl mb-2">{certification.title}</h4>
                <p className="text-slate-600">{certification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
