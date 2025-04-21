import personalData from '../data/personal.json';

export default function HeroSection() {
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
        
        <div className="hidden md:block relative">
          <div className="relative z-10 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-lg overflow-hidden">
              <div className="p-4 text-center">
                <div className="w-full h-8 bg-slate-200 dark:bg-slate-700 rounded-lg mb-4"></div>
                <div className="flex space-x-2 mb-4 justify-center">
                  <div className="w-20 h-6 bg-blue-500 rounded-full"></div>
                  <div className="w-20 h-6 bg-indigo-500 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white dark:bg-slate-600 h-20 rounded-lg shadow-sm"></div>
                  <div className="bg-white dark:bg-slate-600 h-20 rounded-lg shadow-sm"></div>
                  <div className="bg-white dark:bg-slate-600 h-20 rounded-lg shadow-sm"></div>
                  <div className="bg-white dark:bg-slate-600 h-20 rounded-lg shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-8 -right-8 w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full filter blur-3xl z-0"></div>
        </div>
      </div>
    </section>
  );
}
