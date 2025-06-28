import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Naveen. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Designed and developed with ❤️ for amazing user experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;