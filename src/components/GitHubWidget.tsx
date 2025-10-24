import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const GitHubWidget = () => {
  const { language } = useLanguage();
  const { isDark } = useTheme();
  const username = 'MateuszSiuba';

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border-2 border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-2">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        {language === 'pl' ? 'Aktywność GitHub' : 'GitHub Activity'}
      </h3>
      
      {/* GitHub Streak + Top Languages - równe rozmiary obok siebie */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* GitHub Streak - dni pod rząd */}
        <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${isDark ? 'radical' : 'default'}&hide_border=true&background=${isDark ? '1a1b27' : 'ffffff'}&stroke=${isDark ? 'ffffff' : '374151'}&ring=${isDark ? '10b981' : '10b981'}&fire=${isDark ? '10b981' : '10b981'}&currStreakLabel=${isDark ? '10b981' : '10b981'}`}
            alt="GitHub Streak"
            className="rounded-lg w-full max-w-[495px] h-[195px] object-contain"
            loading="lazy"
          />
        </div>

        {/* Top Languages */}
        <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${isDark ? 'radical' : 'default'}&hide_border=true&bg_color=${isDark ? '1a1b27' : 'ffffff'}&text_color=${isDark ? 'ffffff' : '374151'}&title_color=${isDark ? '10b981' : '10b981'}`}
            alt="Most Used Languages"
            className="rounded-lg w-full max-w-[495px] h-[195px] object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* GitHub Profile Link */}
      <div className="mt-6 text-center">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          {language === 'pl' ? 'Zobacz pełny profil' : 'View full profile'}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default GitHubWidget;
