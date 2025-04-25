import Image from 'next/image';
import personalData from '../data/personal.json';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  // Use client-side state to track image loading
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Reset states on client-side render
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, []);
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            {personalData.greeting}
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {personalData.name}
          </h2>
          <p className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 mb-6">
            {personalData.tagline}
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
            {personalData.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToProjects}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              View My Work
            </button>
            <a 
              href={`#contact`}
              className="px-6 py-3 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="flex justify-center relative md:order-last order-first mb-8 md:mb-0">
          <div className="relative z-10 profile-glow">
            {/* Profile Image with Fallback */}
            <div className="w-80 h-80 rounded-full border-4 border-blue-500 dark:border-blue-400 p-1 shadow-xl overflow-hidden">
              {!imageError && personalData.profileImage ? (
                <>
                  <div className="relative w-full h-full">
                    <Image
                      src={personalData.profileImage}
                      alt={`${personalData.name} profile`}
                      width={320}
                      height={320}
                      className={`rounded-full object-cover image-transition ${imageLoaded ? 'image-loaded' : 'image-loading'}`}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      priority
                    />
                  </div>
                  
                  {/* Show fallback while image is loading */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-50 dark:from-blue-900 dark:to-indigo-900">
                      <span className="text-8xl font-bold text-blue-600 dark:text-blue-400">
                        {personalData.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center">
                  <span className="text-8xl font-bold text-blue-600 dark:text-blue-400">
                    {personalData.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* Decorative glow */}
          <div className="absolute top-8 -right-8 w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full filter blur-3xl z-0"></div>
        </div>
      </div>
    </section>
  );
}
