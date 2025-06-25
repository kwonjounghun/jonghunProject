import { style, keyframes } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';
import { transitions } from '../../styles/tokens.css';

// 애니메이션 키프레임
const slideIn = keyframes({
  '0%': {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
  '100%': {
    transform: 'translateX(0)',
  },
});

const slideOut = keyframes({
  '0%': {
    transform: 'translateX(0)',
  },
  '100%': {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
});

const swipeOut = keyframes({
  '0%': {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  '100%': {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
});

// Toast Viewport 스타일
export const toastViewport = style({
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: vars.space[4],
  gap: vars.space[2],
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: vars.zIndices[50],
  outline: 'none',

  vars: {
    '--viewport-padding': vars.space[4],
  },

  '@media': {
    '(max-width: 640px)': {
      bottom: 0,
      left: 0,
      right: 0,
      width: '100vw',
      padding: vars.space[3],
    },
  },
});

// 기본 Toast 스타일
const baseToast = style({
  backgroundColor: vars.colors.background,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.lg,
  padding: vars.space[4],
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: vars.space[4],
  alignItems: 'center',
  wordWrap: 'break-word',
  border: `1px solid ${vars.colors.border}`,
  position: 'relative',
  userSelect: 'none',
  transition: transitions.default,

  // 호버 시 일시정지 표시
  ':hover': {
    boxShadow: vars.shadows.xl,
  },

  // 포커스 상태
  ':focus-visible': {
    outline: `2px solid ${vars.colors.primary}`,
    outlineOffset: '2px',
  },

  // 애니메이션
  selectors: {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${slideOut} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
});

// Toast 변형 스타일
const variantStyles = {
  default: {
    backgroundColor: vars.colors.background,
    color: vars.colors.foreground,
    border: `1px solid ${vars.colors.border}`,
  },
  success: {
    backgroundColor: vars.colors.success,
    color: vars.colors.background,
    border: `1px solid ${vars.colors.success}`,
  },
  error: {
    backgroundColor: vars.colors.error,
    color: vars.colors.background,
    border: `1px solid ${vars.colors.error}`,
  },
  warning: {
    backgroundColor: vars.colors.warning,
    color: vars.colors.background,
    border: `1px solid ${vars.colors.warning}`,
  },
  info: {
    backgroundColor: vars.colors.info,
    color: vars.colors.background,
    border: `1px solid ${vars.colors.info}`,
  },
};

// Toast 레시피
export const toast = recipe({
  base: baseToast,
  variants: {
    variant: variantStyles,
  },
  defaultVariants: {
    variant: 'default',
  },
});

// Toast Title 스타일
export const toastTitle = style({
  gridArea: 'title',
  marginBottom: vars.space[1],
  fontWeight: vars.fontWeights.semibold,
  color: 'inherit',
  fontSize: vars.fontSizes.sm,
  lineHeight: vars.lineHeights.tight,
});

// Toast Description 스타일
export const toastDescription = style({
  gridArea: 'description',
  margin: 0,
  color: 'inherit',
  fontSize: vars.fontSizes.sm,
  lineHeight: vars.lineHeights.normal,
  opacity: 0.9,
});

// Toast Action 스타일
export const toastAction = style({
  gridArea: 'action',
  marginLeft: 'auto',
});

// Toast Close 스타일
export const toastClose = style({
  position: 'absolute',
  top: vars.space[2],
  right: vars.space[2],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  borderRadius: vars.radii.sm,
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  opacity: 0.7,
  transition: transitions.default,

  ':hover': {
    opacity: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },

  ':focus-visible': {
    outline: `2px solid ${vars.colors.primary}`,
    outlineOffset: '2px',
  },

  // X 아이콘 스타일
  selectors: {
    '&::before': {
      content: '×',
      fontSize: '16px',
      fontWeight: vars.fontWeights.bold,
      lineHeight: 1,
    },
  },
});

// 타입 내보내기
export type ToastVariants = RecipeVariants<typeof toast>;