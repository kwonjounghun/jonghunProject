import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

// 기본 입력 필드 스타일
const baseInput = style({
  width: '100%',
  borderRadius: vars.radii.md,
  border: `1px solid ${vars.colors.border}`,
  backgroundColor: vars.colors.background,
  color: vars.colors.foreground,
  transition: 'all 0.2s ease-in-out',
  outline: 'none',
  '::placeholder': {
    color: vars.colors.secondary,
  },
  ':focus': {
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 1px ${vars.colors.primary}`,
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    backgroundColor: vars.colors.muted,
  },
});

// 입력 필드 크기 변형
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

// 입력 필드 변형
const variantVariants = styleVariants({
  default: {
    backgroundColor: vars.colors.background,
  },
  filled: {
    backgroundColor: vars.colors.muted,
    borderColor: 'transparent',
    ':focus': {
      backgroundColor: vars.colors.background,
      borderColor: vars.colors.primary,
    },
    ':hover:not(:disabled):not(:focus)': {
      backgroundColor: vars.colors.muted,
    },
  },
  flushed: {
    borderWidth: '0',
    borderRadius: '0',
    borderBottomWidth: '1px',
    paddingLeft: '0',
    paddingRight: '0',
    ':focus': {
      boxShadow: 'none',
      borderColor: vars.colors.primary,
    },
  },
});

// 입력 필드 상태 변형
const stateVariants = styleVariants({
  normal: {},
  error: {
    borderColor: vars.colors.error,
    ':focus': {
      borderColor: vars.colors.error,
      boxShadow: `0 0 0 1px ${vars.colors.error}`,
    },
  },
  success: {
    borderColor: vars.colors.success,
    ':focus': {
      borderColor: vars.colors.success,
      boxShadow: `0 0 0 1px ${vars.colors.success}`,
    },
  },
});

// 입력 필드 레시피 생성
export const input = recipe({
  base: baseInput,
  variants: {
    size: sizeVariants,
    variant: variantVariants,
    state: stateVariants,
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {
        width: 'auto',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
    state: 'normal',
    fullWidth: true,
  },
});

// 입력 필드 래퍼 스타일
export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

// 입력 필드 라벨 스타일
export const inputLabel = style({
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  marginBottom: vars.space[1],
  color: vars.colors.foreground,
});

// 입력 필드 에러 메시지 스타일
export const inputError = style({
  fontSize: vars.fontSizes.xs,
  color: vars.colors.error,
  marginTop: vars.space[1],
});

// 입력 필드 도움말 스타일
export const inputHelperText = style({
  fontSize: vars.fontSizes.xs,
  color: vars.colors.secondary,
  marginTop: vars.space[1],
});

// 타입 내보내기
export type InputVariants = RecipeVariants<typeof input>;
