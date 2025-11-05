import { useLanguage } from '../contexts/LanguageContext';
import GitHubWidget from './GitHubWidget';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.about.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-navy-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary-50 to-navy-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.about.description1}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                {t.about.description2}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                {t.about.description3}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">1+</div>
              <div className="text-sm opacity-90">{t.about.stats.experience}</div>
            </div>
            <div className="bg-gradient-to-br from-navy-500 to-navy-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-sm opacity-90">{t.about.stats.certificates}</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm opacity-90">{t.about.stats.projects}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-sm opacity-90">{t.about.stats.promotions}</div>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">{t.about.cards.work}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">{t.about.cards.workDesc}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-navy-500 to-navy-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">{t.about.cards.education}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">{t.about.cards.educationDesc}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">{t.about.cards.interests}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-medium">{t.about.cards.interestsDesc}</p>
          </div>
        </div>

        {/* GitHub Stats Widget - Upgraded Version */}
        <div className="mt-12">
          <GitHubWidget />
        </div>
      </div>
    </section>
  );
};

export default About;
