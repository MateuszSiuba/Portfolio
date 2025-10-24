import { useState } from 'react';
import { useTheme, themes, type ThemeName } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all shadow-md hover:shadow-lg border-2 border-gray-300 dark:border-gray-600"
        aria-label="Change theme"
      >
        <span className="text-xl">{themes[theme].icon}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border-2 border-gray-200 dark:border-gray-600 z-50 overflow-hidden">
            {(Object.keys(themes) as ThemeName[]).map((themeName) => (
              <button
                key={themeName}
                onClick={() => {
                  console.log('Changing theme to:', themeName);
                  setTheme(themeName);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 ${
                  theme === themeName ? 'bg-primary-50 dark:bg-primary-900/30' : ''
                }`}
              >
                <span className="text-xl">{themes[themeName].icon}</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {themes[themeName].label}
                </span>
                {theme === themeName && (
                  <span className="ml-auto text-primary-500">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;
