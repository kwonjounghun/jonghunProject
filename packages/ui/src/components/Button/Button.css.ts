import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';
import { transitions } from '../../styles/tokens.css';

// 기본 버튼 스타일
const baseButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radii.md,
  fontWeight: vars.fontWeights.medium,
  transition: transitions.default,
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  textDecoration: 'none',
  ':focus-visible': {
    boxShadow: `0 0 0 2px ${vars.colors.background}, 0 0 0 4px ${vars.colors.primary}`,
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

// 버튼 크기 변형
const sizeVariants = styleVariants({
  sm: {
    fontSize: vars.fontSizes.xs,
    padding: `${vars.space[1]} ${vars.space[2]}`,
    height: '32px',
  },
  md: {
    fontSize: vars.fontSizes.sm,
    padding: `${vars.space[2]} ${vars.space[3]}`,
    height: '40px',
  },
  lg: {
    fontSize: vars.fontSizes.base,
    padding: `${vars.space[2]} ${vars.space[4]}`,
    height: '48px',
  },
});

// 버튼 변형
const variantVariants = styleVariants({
  primary: {
    backgroundColor: vars.colors.primary,
    color: vars.colors.background,
    ':hover:not(:disabled)': {
      backgroundColor: vars.colors.accent,
    },
    ':active:not(:disabled)': {
      transform: 'translateY(1px)',
    },
  },
  secondary: {
    backgroundColor: vars.colors.muted,
    color: vars.colors.foreground,
    ':hover:not(:disabled)': {
      backgroundColor: vars.colors.border,
    },
    ':active:not(:disabled)': {
      transform: 'translateY(1px)',
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: vars.colors.primary,
    border: `1px solid ${vars.colors.border}`,
    ':hover:not(:disabled)': {
      backgroundColor: vars.colors.muted,
    },
    ':active:not(:disabled)': {
      transform: 'translateY(1px)',
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: vars.colors.foreground,
    ':hover:not(:disabled)': {
      backgroundColor: vars.colors.muted,
    },
    ':active:not(:disabled)': {
      transform: 'translateY(1px)',
    },
  },
  link: {
    backgroundColor: 'transparent',
    color: vars.colors.primary,
    padding: 0,
    height: 'auto',
    ':hover:not(:disabled)': {
      textDecoration: 'underline',
    },
  },
});

// 버튼 레시피 생성
export const button = recipe({
  base: baseButton,
  variants: {
    size: sizeVariants,
    variant: variantVariants,
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    withIcon: {
      true: {
        gap: vars.space[2],
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
    fullWidth: false,
    withIcon: false,
  },
});

// 타입 내보내기
export type ButtonVariants = RecipeVariants<typeof button>;
