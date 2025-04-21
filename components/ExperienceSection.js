import ExperienceCard from './ExperienceCard';
import experienceData from '../data/experience.json';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Work Experience</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center max-w-2xl mx-auto">
          My professional journey and the companies I've had the privilege to work with.
        </p>
        
        <div className="max-w-3xl mx-auto">
          {experienceData.map((job, index) => (
            <div key={index} className="mb-8">
              <ExperienceCard job={job} isLast={index === experienceData.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
