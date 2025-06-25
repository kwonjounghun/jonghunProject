import React, { forwardRef } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { 
  toast, 
  toastViewport, 
  toastTitle, 
  toastDescription, 
  toastAction, 
  toastClose,
  ToastVariants 
} from './Toast.css';

// Provider 컴포넌트
export interface ToastProviderProps extends ToastPrimitive.ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider = ({ children, ...props }: ToastProviderProps) => {
  return (
    <ToastPrimitive.Provider swipeDirection="right" {...props}>
      {children}
      <ToastViewport />
    </ToastPrimitive.Provider>
  );
};

// Viewport 컴포넌트
export interface ToastViewportProps extends ToastPrimitive.ToastViewportProps {}

export const ToastViewport = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  ToastViewportProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={toastViewport}
    {...props}
  />
));

ToastViewport.displayName = 'ToastViewport';

// Root 컴포넌트
export interface ToastProps 
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
  /**
   * 토스트 변형
   */
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
}

export const Toast = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  ToastProps
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={toast({ variant })}
    {...props}
  />
));

Toast.displayName = 'Toast';

// Title 컴포넌트
export interface ToastTitleProps extends ToastPrimitive.ToastTitleProps {}

export const ToastTitle = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  ToastTitleProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={toastTitle}
    {...props}
  />
));

ToastTitle.displayName = 'ToastTitle';

// Description 컴포넌트
export interface ToastDescriptionProps extends ToastPrimitive.ToastDescriptionProps {}

export const ToastDescription = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  ToastDescriptionProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={toastDescription}
    {...props}
  />
));

ToastDescription.displayName = 'ToastDescription';

// Action 컴포넌트
export interface ToastActionProps extends ToastPrimitive.ToastActionProps {}

export const ToastAction = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  ToastActionProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={toastAction}
    {...props}
  />
));

ToastAction.displayName = 'ToastAction';

// Close 컴포넌트
export interface ToastCloseProps extends ToastPrimitive.ToastCloseProps {}

export const ToastClose = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  ToastCloseProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={toastClose}
    aria-label="닫기"
    {...props}
  />
));

ToastClose.displayName = 'ToastClose';

// 편의 컴포넌트 - 간단한 토스트 사용을 위한 추상화
export interface SimpleToastProps {
  /**
   * 토스트 제목
   */
  title?: string;
  /**
   * 토스트 설명
   */
  description: string;
  /**
   * 토스트 변형
   */
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  /**
   * 액션 버튼
   */
  action?: React.ReactNode;
  /**
   * 자동 닫힘 여부
   */
  duration?: number;
  /**
   * 토스트가 열려있는지 여부
   */
  open?: boolean;
  /**
   * 토스트 상태 변경 핸들러
   */
  onOpenChange?: (open: boolean) => void;
}

export const SimpleToast = ({ 
  title, 
  description, 
  variant = 'default', 
  action,
  duration = 5000,
  open,
  onOpenChange,
}: SimpleToastProps) => {
  return (
    <Toast variant={variant} duration={duration} open={open} onOpenChange={onOpenChange}>
      {title && <ToastTitle>{title}</ToastTitle>}
      <ToastDescription>{description}</ToastDescription>
      {action && <ToastAction altText="액션 실행" asChild>{action}</ToastAction>}
      <ToastClose />
    </Toast>
  );
};