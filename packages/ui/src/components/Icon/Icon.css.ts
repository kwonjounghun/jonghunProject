import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

// 기본 아이콘 스타일
const baseIcon = style({
  display: 'inline-block',
  flexShrink: 0,
  verticalAlign: 'middle',
  overflow: 'hidden',
});

// 아이콘 크기 변형
const sizeVariants = styleVariants({
  xs: {
    width: '12px',
    height: '12px',
  },
  sm: {
    width: '16px',
    height: '16px',
  },
  md: {
    width: '20px',
    height: '20px',
  },
  lg: {
    width: '24px',
    height: '24px',
  },
  xl: {
    width: '32px',
    height: '32px',
  },
});

// 아이콘 색상 변형
const colorVariants = styleVariants({
  default: {
    color: vars.colors.foreground,
  },
  primary: {
    color: vars.colors.primary,
  },
  secondary: {
    color: vars.colors.secondary,
  },
  muted: {
    color: vars.colors.muted,
  },
  destructive: {
    color: vars.colors.error,
  },
  success: {
    color: vars.colors.success,
  },
  warning: {
    color: vars.colors.warning,
  },
  info: {
    color: vars.colors.info,
  },
});

// 아이콘 레시피 생성
export const icon = recipe({
  base: baseIcon,
  variants: {
    size: sizeVariants,
    color: colorVariants,
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
  },
});

// 타입 내보내기
export type IconVariants = RecipeVariants<typeof icon>;