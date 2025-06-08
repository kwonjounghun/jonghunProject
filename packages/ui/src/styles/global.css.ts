import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

// 전역 스타일 설정
globalStyle('html, body', {
  margin: 0,
  padding: 0,
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  fontSize: vars.fontSizes.base,
  lineHeight: vars.lineHeights.normal,
  color: vars.colors.foreground,
  backgroundColor: vars.colors.background,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  boxSizing: 'border-box',
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'inherit',
});

globalStyle('a', {
  color: vars.colors.primary,
  textDecoration: 'none',
});

globalStyle('a:hover', {
  textDecoration: 'underline',
});

globalStyle('button', {
  cursor: 'pointer',
  border: 'none',
  backgroundColor: 'transparent',
  padding: 0,
  margin: 0,
  fontFamily: 'inherit',
  fontSize: 'inherit',
});

globalStyle('img, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
  fontWeight: vars.fontWeights.bold,
  lineHeight: vars.lineHeights.tight,
  color: vars.colors.foreground,
});

globalStyle('p', {
  margin: 0,
});

globalStyle('ul, ol', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
});
