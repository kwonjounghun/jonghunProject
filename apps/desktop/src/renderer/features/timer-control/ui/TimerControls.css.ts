import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/theme.css';

export const timerControls = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.spacing.md,
  marginTop: vars.spacing.xl,
});

export const buttonGroup = style({
  display: 'flex',
  gap: vars.spacing.sm,
});
