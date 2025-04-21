export default function ExperienceCard({ job, isLast }) {
  const formatDate = (dateStr) => {
    if (dateStr === "Present") return dateStr;
    
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="relative pl-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-3 top-5 bottom-0 w-0.5 bg-blue-300 dark:bg-blue-700"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-5 w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-slate-800"></div>
      
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-blue-600 dark:text-blue-400">{job.company}</p>
          </div>
          <div className="text-slate-500 dark:text-slate-400 mt-2 sm:mt-0 sm:text-right">
            <span>{formatDate(job.startDate)} - {formatDate(job.endDate)}</span>
            <p className="text-sm">{job.location}</p>
          </div>
        </div>
        
        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
          {job.responsibilities.map((item, index) => (
            <li key={index} className="flex">
              <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        {job.technologies && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
