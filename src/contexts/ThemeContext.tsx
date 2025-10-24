import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type ThemeName = 'light' | 'dark' | 'matrix' | 'ocean' | 'pure';

interface Theme {
  name: ThemeName;
  label: string;
  icon: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
}

export const themes: Record<ThemeName, Theme> = {
  light: {
    name: 'light',
    label: 'Light',
    icon: '☀️',
    colors: {
      primary: '#10b981',
      secondary: '#1e40af',
      accent: '#8b5cf6',
      background: '#ffffff',
      text: '#111827',
    },
  },
  dark: {
    name: 'dark',
    label: 'Dark',
    icon: '🌙',
    colors: {
      primary: '#10b981',
      secondary: '#1e40af',
      accent: '#8b5cf6',
      background: '#111827',
      text: '#f9fafb',
    },
  },
  matrix: {
    name: 'matrix',
    label: 'Matrix',
    icon: '💚',
    colors: {
      primary: '#00ff41',
      secondary: '#008f11',
      accent: '#00ff41',
      background: '#0d0208',
      text: '#00ff41',
    },
  },
  ocean: {
    name: 'ocean',
    label: 'Ocean',
    icon: '🌊',
    colors: {
      primary: '#06b6d4',
      secondary: '#0284c7',
      accent: '#0ea5e9',
      background: '#0c4a6e',
      text: '#f0f9ff',
    },
  },
  pure: {
    name: 'pure',
    label: 'Pure',
    icon: '⚪',
    colors: {
      primary: '#10b981',
      secondary: '#1e40af',
      accent: '#8b5cf6',
      background: '#ffffff',
      text: '#111827',
    },
  },
};

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return (saved as ThemeName) || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    
    // Remove all theme classes
    document.documentElement.classList.remove('light', 'dark', 'matrix', 'ocean', 'pure');
    
    // Add current theme class
    document.documentElement.classList.add(theme);
    
    // Add 'dark' class for all dark themes (so Tailwind dark: works)
    if (theme === 'dark' || theme === 'matrix' || theme === 'ocean') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    console.log('Theme changed to:', theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
  };

  const isDark = theme === 'dark' || theme === 'matrix' || theme === 'ocean';

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
