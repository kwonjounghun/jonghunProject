import { style, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// 애니메이션 키프레임
const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 }
});

const scaleIn = keyframes({
  from: { 
    opacity: 0, 
    transform: 'translate(-50%, -50%) scale(0.9)' 
  },
  to: { 
    opacity: 1, 
    transform: 'translate(-50%, -50%) scale(1)' 
  }
});

const scaleOut = keyframes({
  from: { 
    opacity: 1, 
    transform: 'translate(-50%, -50%) scale(1)' 
  },
  to: { 
    opacity: 0, 
    transform: 'translate(-50%, -50%) scale(0.9)' 
  }
});

// 오버레이 스타일
export const overlay = style({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  backdropFilter: 'blur(4px)',
  
  selectors: {
    '&[data-state="open"]': {
      animation: `${fadeIn} 200ms ease-out`
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} 200ms ease-in`
    }
  }
});

// 컨텐츠 스타일
export const content = recipe({
  base: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '85vh',
    maxWidth: '90vw',
    display: 'flex',
    flexDirection: 'column',
    outline: 'none',
    
    selectors: {
      '&[data-state="open"]': {
        animation: `${scaleIn} 200ms ease-out`
      },
      '&[data-state="closed"]': {
        animation: `${scaleOut} 200ms ease-in`
      }
    }
  },
  variants: {
    size: {
      sm: {
        width: '400px'
      },
      md: {
        width: '500px'
      },
      lg: {
        width: '600px'
      },
      xl: {
        width: '800px'
      },
      full: {
        width: '90vw',
        height: '90vh'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

// 헤더 스타일
export const header = style({
  padding: '24px 24px 0 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #e5e7eb',
  paddingBottom: '16px',
  marginBottom: '24px'
});

// 제목 스타일
export const title = style({
  fontSize: '18px',
  fontWeight: '600',
  color: '#111827',
  margin: 0
});

// 설명 스타일
export const description = style({
  fontSize: '14px',
  color: '#6b7280',
  margin: '8px 0 0 0',
  lineHeight: 1.5
});

// 바디 스타일
export const body = style({
  padding: '0 24px',
  flex: 1,
  overflow: 'auto',
  color: '#374151',
  fontSize: '14px',
  lineHeight: 1.6
});

// 푸터 스타일
export const footer = style({
  padding: '16px 24px 24px 24px',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '12px',
  borderTop: '1px solid #e5e7eb',
  marginTop: '24px'
});

// 닫기 버튼 스타일
export const closeButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: 'transparent',
  color: '#6b7280',
  cursor: 'pointer',
  transition: 'all 0.15s ease',
  
  ':hover': {
    backgroundColor: '#f3f4f6',
    color: '#374151'
  },
  
  ':focus': {
    outline: '2px solid #3b82f6',
    outlineOffset: '2px'
  }
});

// 트리거 버튼 스타일 (예시)
export const trigger = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 16px',
  borderRadius: '6px',
  border: '1px solid #d1d5db',
  backgroundColor: 'white',
  color: '#374151',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.15s ease',
  
  ':hover': {
    backgroundColor: '#f9fafb',
    borderColor: '#9ca3af'
  },
  
  ':focus': {
    outline: '2px solid #3b82f6',
    outlineOffset: '2px'
  }
});