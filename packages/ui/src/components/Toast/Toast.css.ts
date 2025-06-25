import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';
import { breakpoints } from '../../styles/tokens.css';

// 애니메이션 정의
const slideIn = keyframes({
  '0%': { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
  '100%': { transform: 'translateX(0)' },
});

const slideOut = keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
});

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const swipeOut = keyframes({
  '0%': { transform: 'translateX(var(--radix-toast-swipe-move-x))' },
  '100%': { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
});

// Toast Viewport (컨테이너)
export const toastViewport = style({
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: vars.space[6],
  gap: vars.space[2],
  width: '400px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: vars.zIndices[50],
  outline: 'none',
  
  // CSS 변수 정의
  vars: {
    '--viewport-padding': vars.space[6],
  },
  
  '@media': {
    [`(max-width: ${breakpoints.md})`]: {
      width: '100vw',
      padding: vars.space[4],
      vars: {
        '--viewport-padding': vars.space[4],
      },
    },
  },
});

// Toast Root 기본 스타일
const baseToast = style({
  backgroundColor: vars.colors.background,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  boxShadow: vars.shadows.lg,
  padding: vars.space[4],
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: vars.space[4],
  alignItems: 'center',
  
  // 애니메이션
  selectors: {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
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

// Toast 타입별 변형
const typeVariants = styleVariants({
  default: {
    borderColor: vars.colors.border,
  },
  success: {
    borderColor: vars.colors.success,
    backgroundColor: vars.colors.success,
    color: vars.colors.background,
  },
  error: {
    borderColor: vars.colors.error,
    backgroundColor: vars.colors.error,
    color: vars.colors.background,
  },
  warning: {
    borderColor: vars.colors.warning,
    backgroundColor: vars.colors.warning,
    color: vars.colors.background,
  },
  info: {
    borderColor: vars.colors.info,
    backgroundColor: vars.colors.info,
    color: vars.colors.background,
  },
});

// Toast 제목 스타일
export const toastTitle = style({
  gridArea: 'title',
  marginBottom: vars.space[1],
  fontWeight: vars.fontWeights.semibold,
  color: 'inherit',
  fontSize: vars.fontSizes.sm,
});

// Toast 설명 스타일
export const toastDescription = style({
  gridArea: 'description',
  margin: 0,
  color: 'inherit',
  fontSize: vars.fontSizes.xs,
  lineHeight: vars.lineHeights.normal,
  opacity: 0.9,
});

// Toast 액션 버튼 스타일
export const toastAction = style({
  gridArea: 'action',
});

// Toast 닫기 버튼 스타일
export const toastClose = style({
  gridArea: 'action',
  border: 'none',
  backgroundColor: 'transparent',
  color: 'inherit',
  cursor: 'pointer',
  borderRadius: vars.radii.sm,
  padding: vars.space[2],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: vars.fontSizes.sm,
  opacity: 0.7,
  transition: 'opacity 0.2s',
  
  ':hover': {
    opacity: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  
  ':focus': {
    outline: `2px solid ${vars.colors.primary}`,
    outlineOffset: '2px',
  },
});

// Toast 레시피
export const toast = recipe({
  base: baseToast,
  variants: {
    type: typeVariants,
  },
  defaultVariants: {
    type: 'default',
  },
});

export type ToastVariants = RecipeVariants<typeof toast>;