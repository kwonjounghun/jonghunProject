import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';

export const timerDisplay = style({
  fontSize: vars.fontSizes.display,
  fontWeight: 'bold',
  margin: `${vars.spacing.lg} 0`,
  padding: vars.spacing.xl,
  borderRadius: vars.borderRadius.lg,
  boxShadow: vars.shadows.md,
  transition: 'all 0.3s ease',
  textAlign: 'center',
});

export const timerTime = style({
  fontSize: vars.fontSizes.display,
  fontWeight: 'bold',
  lineHeight: 1.2,
});

export const timerStatus = style({
  fontSize: vars.fontSizes.lg,
  marginTop: vars.spacing.sm,
  opacity: 0.8,
});

// 상태별 스타일 변형
export const statusVariant = styleVariants({
  idle: {
    backgroundColor: vars.colors.background,
    color: vars.colors.text,
    border: `2px dashed ${vars.colors.textLight}`,
  },
  running: {
    backgroundColor: vars.colors.work,
    color: vars.colors.white,
  },
  paused: {
    backgroundColor: vars.colors.textLight,
    color: vars.colors.white,
  },
  completed: {
    backgroundColor: vars.colors.break,
    color: vars.colors.white,
  },
});
