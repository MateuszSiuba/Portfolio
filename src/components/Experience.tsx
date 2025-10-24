import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ExperienceTimeline from './ExperienceTimeline';

const Experience = () => {
  const { t, language } = useLanguage();
  const [viewMode, setViewMode] = useState<'cards' | 'timeline'>('cards');
  
  const experiences = t.experience.jobs.map((job, index) => ({
    ...job,
    icon: index === 0 ? "💼" : index === 1 ? "🚀" : "🎯",
    color: index === 0 ? "from-purple-500 to-purple-600" : index === 1 ? "from-navy-500 to-navy-600" : "from-primary-500 to-primary-600"
  }));

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.experience.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-navy-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {t.experience.subtitle}
          </p>
          
          {/* View Mode Toggle */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                viewMode === 'cards'
                  ? 'bg-gradient-to-r from-primary-500 to-navy-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              📋 {language === 'pl' ? 'Karty' : 'Cards'}
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                viewMode === 'timeline'
                  ? 'bg-gradient-to-r from-primary-500 to-navy-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              📅 {language === 'pl' ? 'Oś czasu' : 'Timeline'}
            </button>
          </div>
        </div>

        {/* Content Area with Fade Animation */}
        <div className="relative">
          <div className={`transition-opacity duration-500 ${viewMode === 'timeline' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
            <ExperienceTimeline />
          </div>
          <div className={`transition-opacity duration-500 ${viewMode === 'cards' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-navy-500 to-purple-500"></div>

            <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-l-4 border-primary-500">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{exp.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        📅 {exp.period}
                      </span>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                        ⏱️ {exp.duration}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10`}>
                    {index + 1}
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl text-center border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
              🎯
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t.experience.highlights[0].title}</h4>
            <p className="text-gray-600 dark:text-gray-300 font-medium">{t.experience.highlights[0].description}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl text-center border-2 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
              🌍
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t.experience.highlights[1].title}</h4>
            <p className="text-gray-600 dark:text-gray-300 font-medium">{t.experience.highlights[1].description}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl text-center border-2 border-green-200 dark:border-green-700 hover:border-green-400 dark:hover:border-green-500 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
              📊
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t.experience.highlights[2].title}</h4>
            <p className="text-gray-600 dark:text-gray-300 font-medium">{t.experience.highlights[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
