import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';
import { transitions } from '../../styles/tokens.css';

// 애니메이션 정의
const slideIn = keyframes({
  '0%': {
    transform: 'translateX(100%)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateX(0)',
    opacity: 1,
  },
});

const slideOut = keyframes({
  '0%': {
    transform: 'translateX(0)',
    opacity: 1,
  },
  '100%': {
    transform: 'translateX(100%)',
    opacity: 0,
  },
});

// 토스트 컨테이너 (포지션 고정)
export const toastContainer = style({
  position: 'fixed',
  top: vars.space[6],
  right: vars.space[6],
  zIndex: vars.zIndices[50],
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[3],
  maxWidth: '400px',
  width: '100%',
  pointerEvents: 'none',
  
  '@media': {
    '(max-width: 768px)': {
      left: vars.space[4],
      right: vars.space[4],
      maxWidth: 'calc(100vw - 2rem)',
    },
  },
});

// 기본 토스트 스타일
const baseToast = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: vars.space[3],
  padding: `${vars.space[4]} ${vars.space[4]}`,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.lg,
  fontSize: vars.fontSizes.sm,
  lineHeight: vars.lineHeights.normal,
  minHeight: '64px',
  maxWidth: '400px',
  width: '100%',
  pointerEvents: 'auto',
  position: 'relative',
  animation: `${slideIn} 0.3s ease-out`,
  
  selectors: {
    '&[data-state="closing"]': {
      animation: `${slideOut} 0.3s ease-in`,
    },
  },
});

// 토스트 타입별 변형
const typeVariants = styleVariants({
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
  default: {
    backgroundColor: vars.colors.background,
    color: vars.colors.foreground,
    border: `1px solid ${vars.colors.border}`,
  },
});

// 토스트 아이콘 스타일
export const toastIcon = style({
  flexShrink: 0,
  marginTop: '2px',
  fontSize: vars.fontSizes.lg,
});

// 토스트 내용 영역
export const toastContent = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[1],
});

// 토스트 제목
export const toastTitle = style({
  fontWeight: vars.fontWeights.semibold,
  fontSize: vars.fontSizes.sm,
  lineHeight: vars.lineHeights.tight,
});

// 토스트 설명
export const toastDescription = style({
  fontSize: vars.fontSizes.xs,
  lineHeight: vars.lineHeights.normal,
  opacity: 0.9,
});

// 닫기 버튼
export const toastCloseButton = style({
  position: 'absolute',
  top: vars.space[2],
  right: vars.space[2],
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radii.sm,
  border: 'none',
  backgroundColor: 'transparent',
  color: 'currentColor',
  cursor: 'pointer',
  opacity: 0.7,
  transition: transitions.default,
  fontSize: vars.fontSizes.sm,
  
  ':hover': {
    opacity: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  
  ':focus': {
    outline: 'none',
    opacity: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

// 진행률 바
export const toastProgressBar = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: '3px',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  borderRadius: `0 0 ${vars.radii.lg} ${vars.radii.lg}`,
  transition: 'width linear',
});

// 토스트 레시피 생성
export const toast = recipe({
  base: baseToast,
  variants: {
    type: typeVariants,
  },
  defaultVariants: {
    type: 'default',
  },
});

// 타입 내보내기
export type ToastVariants = RecipeVariants<typeof toast>;