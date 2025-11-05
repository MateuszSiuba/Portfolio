import { useLanguage } from '../contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.education.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-navy-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="glass-card dark:glass-card-dark p-8 rounded-2xl shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-navy-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                🎓
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t.education.school.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{t.education.school.location}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>{t.education.school.field}</strong> {t.education.school.fieldValue}
                </span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>{t.education.school.status}</strong> {t.education.school.statusValue}
                </span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>{t.education.school.focus}</strong> {t.education.school.focusValue}
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 glass dark:glass-dark rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.education.school.description}
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <div className="glass-card dark:glass-card-dark p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl mr-4 flex-shrink-0">
                  🏆
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {t.education.certifications.ccna.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {t.education.certifications.ccna.subtitle}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.education.certifications.ccna.organization}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.education.certifications.ccna.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card dark:glass-card-dark p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl mr-4 flex-shrink-0">
                  🤖
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {t.education.certifications.productAI.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {t.education.certifications.productAI.subtitle}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.education.certifications.productAI.organization}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.education.certifications.productAI.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Learning */}
            <div className="glass dark:glass-dark p-6 rounded-xl shadow-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-primary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {t.education.continuous.title}
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t.education.continuous.description}
              </p>
            </div>
          </div>
        </div>

        {/* Skills from Education */}
        <div className="mt-12 glass-card dark:glass-card-dark p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t.education.keyCompetencies.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass dark:glass-dark p-6 rounded-xl hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🌐</div>
              <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-2">{t.education.keyCompetencies.networking.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t.education.keyCompetencies.networking.description}</p>
            </div>
            <div className="glass dark:glass-dark p-6 rounded-xl hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">🤖</div>
              <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-2">{t.education.keyCompetencies.ai.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t.education.keyCompetencies.ai.description}</p>
            </div>
            <div className="glass dark:glass-dark p-6 rounded-xl hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">💡</div>
              <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-2">{t.education.keyCompetencies.product.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t.education.keyCompetencies.product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
