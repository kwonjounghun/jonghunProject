import React, { forwardRef } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { clsx } from 'clsx';
import {
  toast,
  toastViewport,
  toastTitle,
  toastDescription,
  toastAction,
  toastClose,
  ToastVariants,
} from './Toast.css';

// Toast Provider - Radix UI의 Provider를 wrapping
export interface ToastProviderProps {
  children: React.ReactNode;
  /**
   * 최대 토스트 개수
   */
  swipeThreshold?: number;
  /**
   * 토스트 지속 시간 (ms)
   */
  duration?: number;
}

export const ToastProvider = ({ 
  children, 
  swipeThreshold = 50,
  duration = 5000,
  ...props 
}: ToastProviderProps) => (
  <ToastPrimitive.Provider swipeThreshold={swipeThreshold} duration={duration} {...props}>
    {children}
    <ToastViewport />
  </ToastPrimitive.Provider>
);

// Toast Viewport - 토스트들이 렌더링되는 컨테이너
const ToastViewport = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={clsx(toastViewport, className)}
    {...props}
  />
));

ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

// Toast Root
export interface ToastProps
  extends Omit<React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>, 'type'> {
  /**
   * 토스트 타입
   */
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
}

const Toast = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  ToastProps
>(({ className, variant = 'default', ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={clsx(toast({ type: variant }), className)}
    {...props}
  />
));

Toast.displayName = ToastPrimitive.Root.displayName;

// Toast Action
const ToastAction = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={clsx(toastAction, className)}
    {...props}
  />
));

ToastAction.displayName = ToastPrimitive.Action.displayName;

// Toast Close
const ToastClose = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, children, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={clsx(toastClose, className)}
    toast-close=""
    {...props}
  >
    {children || '×'}
  </ToastPrimitive.Close>
));

ToastClose.displayName = ToastPrimitive.Close.displayName;

// Toast Title
const ToastTitle = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={clsx(toastTitle, className)}
    {...props}
  />
));

ToastTitle.displayName = ToastPrimitive.Title.displayName;

// Toast Description
const ToastDescription = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={clsx(toastDescription, className)}
    {...props}
  />
));

ToastDescription.displayName = ToastPrimitive.Description.displayName;

// 타입별 아이콘
const ToastIcons = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
  default: '●',
};

// 사용하기 쉬운 통합 컴포넌트
export interface SimpleToastProps extends Omit<ToastProps, 'variant'> {
  title: string;
  description?: string;
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  action?: {
    label: string;
    onClick: () => void;
  };
  showClose?: boolean;
}

export const SimpleToast = forwardRef<
  React.ElementRef<typeof Toast>,
  SimpleToastProps
>(({ 
  title, 
  description, 
  variant = 'default', 
  action, 
  showClose = true,
  className,
  ...props 
}, ref) => (
  <Toast ref={ref} variant={variant} className={className} {...props}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '16px' }}>{ToastIcons[variant]}</span>
      <div>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
      </div>
    </div>
    
    {action && (
      <ToastAction asChild altText={action.label}>
        <button onClick={action.onClick}>
          {action.label}
        </button>
      </ToastAction>
    )}
    
    {showClose && <ToastClose />}
  </Toast>
));

SimpleToast.displayName = 'SimpleToast';

// Export all components
export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastViewport,
};