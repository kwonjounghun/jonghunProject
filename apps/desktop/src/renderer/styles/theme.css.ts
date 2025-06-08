import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    primary: '#4a6fa5',
    primaryLight: '#6b8cb8',
    primaryDark: '#345689',
    
    work: '#d95550',
    break: '#4c9195',
    longBreak: '#457ca3',
    
    background: '#f5f5f5',
    text: '#333333',
    textLight: '#666666',
    
    white: '#ffffff',
    border: '#e0e0e0',
  },
  
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
  
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  
  spacing: {
    xs: '5px',
    sm: '10px',
    md: '15px',
    lg: '20px',
    xl: '30px',
  },
  
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
    xxxl: '3rem',
    display: '5rem',
  },
});
