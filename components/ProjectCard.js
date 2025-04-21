import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 flex items-center justify-center p-4 overflow-hidden">
        {project.image ? (
          // If project has an image path, display the image
          <div className="w-full h-full relative rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-inner">
            <div className="relative w-full h-full">
              {/* Add a fallback background until the real image loads */}
              <div className="absolute inset-0 bg-slate-100 dark:bg-slate-700 animate-pulse"></div>
              
              {/* The actual image with fill layout */}
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ objectFit: 'cover' }}
                onError={(e) => {
                  // If image fails to load, show a fallback
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-100', 'dark:bg-slate-700');
                  
                  const fallback = document.createElement('div');
                  fallback.textContent = project.title;
                  fallback.className = 'text-center text-slate-500 dark:text-slate-400 font-medium';
                  e.target.parentElement.appendChild(fallback);
                }}
              />
            </div>
          </div>
        ) : (
          // If no image, render our stylized project preview
          <div className="w-full h-full relative rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-inner">
            {/* Stylized project preview with dynamic content based on project type */}
            <div className="absolute inset-0 bg-white dark:bg-slate-800 flex flex-col">
              {/* Project preview header */}
              <div className="h-8 bg-slate-100 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600 flex items-center px-3">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mx-auto text-xs font-medium text-slate-500 dark:text-slate-400">{project.title}</div>
              </div>
              
              {/* Project preview content - different for each project type */}
              <div className="flex-1 p-3">
                {project.tech.includes("React") && (
                  <div className="grid grid-cols-3 gap-2 h-full">
                    <div className="col-span-1 bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
                    <div className="col-span-2 space-y-2">
                      <div className="h-3 bg-blue-200 dark:bg-blue-700 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-full"></div>
                      <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-5/6"></div>
                    </div>
                  </div>
                )}
                
                {project.tech.includes("Next.js") && (
                  <div className="grid grid-cols-2 gap-2 h-full">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="flex flex-col bg-slate-50 dark:bg-slate-700 rounded-lg p-1 shadow-sm">
                        <div className="w-full h-12 bg-blue-100 dark:bg-blue-800 rounded mb-1"></div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-3/4 mb-1"></div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded w-1/2"></div>
                      </div>
                    ))}
                  </div>
                )}
                
                {!project.tech.includes("React") && !project.tech.includes("Next.js") && (
                  <div className="space-y-2 h-full">
                    <div className="h-4 bg-blue-200 dark:bg-blue-700 rounded w-3/4"></div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="h-16 bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
                      <div className="h-16 bg-slate-100 dark:bg-slate-700 rounded-lg"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        
        <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span 
                key={index} 
                className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
