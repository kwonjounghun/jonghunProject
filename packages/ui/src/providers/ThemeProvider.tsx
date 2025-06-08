import React, { createContext, useContext, useState, useEffect } from 'react';
import { darkTheme, darkThemeClass } from '../styles/theme.css';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  defaultTheme?: Theme;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  defaultTheme = 'light',
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // 로컬 스토리지에서 테마 설정 불러오기 (클라이언트 사이드에서만)
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('ui-theme') as Theme;
      return savedTheme || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    // 테마 변경 시 로컬 스토리지에 저장 및 클래스 적용
    if (typeof window !== 'undefined') {
      localStorage.setItem('ui-theme', theme);
      
      if (theme === 'dark') {
        document.documentElement.classList.add(darkThemeClass);
      } else {
        document.documentElement.classList.remove(darkThemeClass);
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
