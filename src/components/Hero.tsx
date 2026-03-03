import { useLanguage } from '../contexts/useLanguage';
import { useTheme } from '../contexts/ThemeContext';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from './ParticlesBackground';

interface HeroProps {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {theme !== 'pure' && <ParticlesBackground darkMode={darkMode} />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Avatar/Profile Picture Placeholder */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-navy-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl animate-bounce-slow">
              MS
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
            Mateusz Siuba
          </h1>
          
          <div className="text-2xl md:text-3xl font-semibold mb-6 animate-slide-up h-20 flex items-center justify-center">
            <TypeAnimation
              sequence={
                language === 'pl' 
                  ? [
                      'IT Specjalist',
                      2000,
                      'Python Developer',
                      2000,
                      'AI Enthusiast',
                      2000,
                    ]
                  : [
                      'IT Specialist',
                      2000,
                      'Product AI Manager',
                      2000,
                      'AI Enthusiast',
                      2000,
                    ]
              }
              wrapper="span"
              speed={50}
              className="text-gradient"
              repeat={Infinity}
            />
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up">
            {t.hero.description}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8 animate-slide-up">
            <a
              href="https://github.com/MateuszSiuba"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-500 dark:hover:bg-primary-600 hover:scale-110 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mateusz-siuba-702406271/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-500 dark:hover:bg-primary-600 hover:scale-110 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:mateusz.siuba00@gmail.com"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-primary-500 dark:hover:bg-primary-600 hover:scale-110 transition-all duration-300 group"
              aria-label="Email"
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-navy-600 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-navy-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-500 hover:border-primary-500 hover:text-white dark:hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              {t.hero.contactMe}
            </a>
            <a
              href="/Portfolio/cv/Mateusz_Siuba_CV.pdf"
              download
              className="px-8 py-3 border-2 border-gray-400 text-gray-600 dark:text-gray-300 dark:border-gray-500 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t.hero.downloadCV}
            </a>
          </div>

          {/* Location */}
          <p className="mt-8 text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t.hero.location}
          </p>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-400 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
