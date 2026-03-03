import { useLanguage } from '../contexts/useLanguage';

const ExperienceTimeline = () => {
  const { t } = useLanguage();

  return (
    <div className="relative">
      {/* Timeline Line - centered on desktop, left on mobile */}
      <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-navy-500 to-primary-500"></div>

      {t.experience.jobs.map((job, index) => (
        <div key={index} className="mb-12 relative">
          <div className={`flex w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
            {/* Mobile: all cards on right with padding, Desktop: alternating sides */}
            <div className={`w-full pl-12 md:w-5/12 md:pl-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 px-3 py-1 bg-primary-100 dark:bg-primary-900 rounded-full">
                    {job.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {job.title}
                </h3>
                <p className="text-md font-semibold text-navy-600 dark:text-navy-400 mb-2">
                  {job.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {job.period}
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  {job.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-500 mr-2">▸</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline Dot - left on mobile, center on desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary-500 to-navy-600 border-4 border-white dark:border-gray-900 rounded-full z-10 shadow-lg"></div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
