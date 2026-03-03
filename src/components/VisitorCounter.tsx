import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/useLanguage';

const VisitorCounter = () => {
  const { t } = useLanguage();
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    // Pobierz liczbę odwiedzin z localStorage
    const storedVisitors = localStorage.getItem('visitorCount');
    let count = storedVisitors ? parseInt(storedVisitors) : 0;
    
    // Sprawdź czy to nowa sesja (używamy sessionStorage)
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      count += 1;
      localStorage.setItem('visitorCount', count.toString());
      sessionStorage.setItem('hasVisited', 'true');
    }
    
    setVisitors(count);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 z-40">
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <div className="text-sm">
          <span className="text-gray-600 dark:text-gray-400">{t.visitorCounter.label} </span>
          <span className="font-bold text-primary-600 dark:text-primary-400">{visitors}</span>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;
