import { useState, useEffect, useRef } from 'react';

interface SkillProgressBarProps {
  skill: string;
  percentage: number;
  color: string;
}

const SkillProgressBar = ({ skill, percentage, color }: SkillProgressBarProps) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => setWidth(percentage), 100);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [percentage, isVisible]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-gray-900 dark:text-white">{skill}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400 font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color} shadow-lg`}
          style={{ width: `${width}%` }}
        >
          <div className="h-full w-full opacity-30 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
