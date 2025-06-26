import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';
import { transitions } from '../../styles/tokens.css';

// 애니메이션 키프레임
const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const overlayHide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const contentShow = keyframes({
  '0%': { 
    opacity: 0, 
    transform: 'translate(-50%, -48%) scale(0.96)' 
  },
  '100%': { 
    opacity: 1, 
    transform: 'translate(-50%, -50%) scale(1)' 
  },
});

const contentHide = keyframes({
  '0%': { 
    opacity: 1, 
    transform: 'translate(-50%, -50%) scale(1)' 
  },
  '100%': { 
    opacity: 0, 
    transform: 'translate(-50%, -48%) scale(0.96)' 
  },
});

// 오버레이 스타일
export const overlay = style({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0,
  zIndex: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  
  selectors: {
    '&[data-state="closed"]': {
      animation: `${overlayHide} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  },
});

// 기본 콘텐츠 스타일
const baseContent = style({
  backgroundColor: vars.colors.background,
  borderRadius: vars.radii.lg,
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  overflow: 'hidden',
  zIndex: 51,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  
  selectors: {
    '&[data-state="closed"]': {
      animation: `${contentHide} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&:focus': {
      outline: 'none',
    },
  },
});

// 콘텐츠 크기 변형
const contentSizeVariants = styleVariants({
  sm: {
    maxWidth: '400px',
  },
  md: {
    maxWidth: '500px',
  },
  lg: {
    maxWidth: '600px',
  },
  xl: {
    maxWidth: '800px',
  },
  full: {
    maxWidth: '95vw',
    maxHeight: '95vh',
  },
});

// 콘텐츠 레시피
export const content = recipe({
  base: baseContent,
  variants: {
    size: contentSizeVariants,
  },
  defaultVariants: {
    size: 'md',
  },
});

// 헤더 스타일
export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `${vars.space[6]} ${vars.space[6]} ${vars.space[4]}`,
  borderBottom: `1px solid ${vars.colors.border}`,
});

// 제목 스타일
export const title = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.foreground,
  margin: 0,
});

// 설명 스타일
export const description = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.mutedForeground,
  margin: 0,
  marginTop: vars.space[1],
});

// 닫기 버튼 스타일
export const closeButton = style({
  all: 'unset',
  width: '24px',
  height: '24px',
  borderRadius: vars.radii.sm,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.mutedForeground,
  cursor: 'pointer',
  transition: transitions.default,
  
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.muted,
      color: vars.colors.foreground,
    },
    '&:focus': {
      outline: `2px solid ${vars.colors.ring}`,
      outlineOffset: '2px',
    },
  },
});

// 바디 스타일
export const body = style({
  padding: vars.space[6],
  maxHeight: '60vh',
  overflowY: 'auto',
});

// 풋터 스타일
export const footer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: vars.space[3],
  padding: `${vars.space[4]} ${vars.space[6]} ${vars.space[6]}`,
  borderTop: `1px solid ${vars.colors.border}`,
});

// 트리거 스타일 (선택적)
export const trigger = style({
  all: 'unset',
  cursor: 'pointer',
});

// 타입 내보내기
export type ModalContentVariants = RecipeVariants<typeof content>;