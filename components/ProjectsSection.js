import { useState } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects.json';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  
  // Get unique tech categories from projects
  const allTechs = projectsData.reduce((acc, project) => {
    project.tech.forEach(tech => {
      if (!acc.includes(tech)) {
        acc.push(tech);
      }
    });
    return acc;
  }, []);
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.tech.includes(filter));

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">My Projects</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 text-center max-w-2xl mx-auto">
          Here are some of my recent projects. Each one presented its own unique challenges and learning opportunities.
        </p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All
          </button>
          
          {allTechs.map(tech => (
            <button 
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === tech 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
