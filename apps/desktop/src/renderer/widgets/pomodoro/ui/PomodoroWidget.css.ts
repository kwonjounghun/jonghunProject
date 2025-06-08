import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';

export const pomodoroWidget = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '500px',
  padding: vars.spacing.lg,
});

export const pomodoroContainer = style({
  width: '100%',
  maxWidth: '500px',
  padding: vars.spacing.xl,
  textAlign: 'center',
  transition: 'background-color 0.3s ease',
});

export const pomodoroCount = style({
  fontSize: vars.fontSizes.sm,
  marginTop: vars.spacing.xs,
  opacity: 0.8,
});

// 타이머 유형별 스타일 변형
export const timerTypeVariant = styleVariants({
  work: {
    backgroundColor: vars.colors.work,
    color: vars.colors.white,
  },
  break: {
    backgroundColor: vars.colors.break,
    color: vars.colors.white,
  },
  longBreak: {
    backgroundColor: vars.colors.longBreak,
    color: vars.colors.white,
  },
});
