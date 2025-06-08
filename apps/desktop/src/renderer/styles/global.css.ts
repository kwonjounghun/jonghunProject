import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

// 기본 스타일
globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('body', {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  backgroundColor: vars.colors.background,
  color: vars.colors.text,
  lineHeight: 1.5,
  height: '100vh',
  overflowX: 'hidden',
});

globalStyle('#root', {
  height: '100%',
});

// 앱 레이아웃 스타일
globalStyle('.app-container', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  maxWidth: '800px',
  margin: '0 auto',
  padding: vars.spacing.lg,
});

globalStyle('.app-header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.spacing.lg,
  paddingBottom: vars.spacing.sm,
  borderBottom: `1px solid ${vars.colors.border}`,
});

globalStyle('.app-main', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
