import personalData from '../data/personal.json';

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Who I Am</h3>
            <div className="prose dark:prose-invert">
              <p className="mb-4">{personalData.bio}</p>
              <p className="mb-4">{personalData.bioExtended}</p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">My Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Languages</h4>
                <ul className="space-y-2">
                  {personalData.skills.languages.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Frameworks</h4>
                <ul className="space-y-2">
                  {personalData.skills.frameworks.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Tools</h4>
                <ul className="space-y-2">
                  {personalData.skills.tools.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Other</h4>
                <ul className="space-y-2">
                  {personalData.skills.other.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Personal Highlights */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Personal Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalData.highlights.map((highlight, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h4 className="font-medium mb-2">{highlight.title}</h4>
                <p className="text-slate-600 dark:text-slate-400">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
