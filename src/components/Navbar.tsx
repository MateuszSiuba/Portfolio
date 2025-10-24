import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeSwitcher from './ThemeSwitcher';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const downloadCV = () => {
    setIsDownloading(true);
    const cvUrl = '/cv/Mateusz_Siuba_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Mateusz_Siuba_CV.pdf';
    link.click();
    
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl z-50 shadow-lg border-b border-white/20 dark:border-gray-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-gradient">
              MS
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              
              {/* Download CV Button */}
              <button
                onClick={downloadCV}
                disabled={isDownloading}
                className={`px-5 py-2.5 bg-gradient-to-r from-primary-500 to-navy-600 text-white rounded-lg text-sm font-bold hover:from-primary-600 hover:to-navy-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl border-2 border-primary-600 hover:border-primary-500 ${
                  isDownloading ? 'opacity-75 cursor-wait' : ''
                }`}
              >
                {isDownloading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="animate-pulse">...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    CV
                  </>
                )}
              </button>

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'pl' ? 'en' : 'pl')}
                className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all font-bold text-sm shadow-md hover:shadow-lg border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 overflow-hidden relative"
                aria-label="Toggle language"
              >
                <div className="relative w-16 h-6 flex items-center justify-center">
                  <span className={`absolute transition-all duration-500 ${
                    language === 'pl' ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}>
                    🇵🇱 PL
                  </span>
                  <span className={`absolute transition-all duration-500 ${
                    language === 'en' ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`}>
                    🇬🇧 EN
                  </span>
                </div>
              </button>

              {/* Theme Switcher */}
              <ThemeSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Toggle Mobile */}
            <button
              onClick={() => setLanguage(language === 'pl' ? 'en' : 'pl')}
              className="px-3 py-2 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all font-bold text-xs shadow-md border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 overflow-hidden relative"
              aria-label="Toggle language"
            >
              <div className="relative w-12 h-5 flex items-center justify-center">
                <span className={`absolute transition-all duration-500 text-xs ${
                  language === 'pl' ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                }`}>
                  🇵🇱 PL
                </span>
                <span className={`absolute transition-all duration-500 text-xs ${
                  language === 'en' ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'
                }`}>
                  🇬🇧 EN
                </span>
              </div>
            </button>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all shadow-md border-2 border-gray-300 dark:border-gray-600"
              aria-label="Toggle dark mode"
            >
              <div className="relative w-5 h-5">
                <svg 
                  className={`absolute inset-0 w-5 h-5 text-yellow-400 drop-shadow-md transition-all duration-500 ${
                    darkMode ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-0'
                  }`}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
                <svg 
                  className={`absolute inset-0 w-5 h-5 text-gray-700 dark:text-gray-300 drop-shadow-md transition-all duration-500 ${
                    !darkMode ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'
                  }`}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 hover:from-primary-600 hover:to-primary-700 transition-all shadow-md border-2 border-primary-600"
            >
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 dark:text-gray-100 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600 block px-4 py-3 rounded-lg text-base font-semibold transition-all shadow-sm hover:shadow-md border-2 border-transparent hover:border-primary-500"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
