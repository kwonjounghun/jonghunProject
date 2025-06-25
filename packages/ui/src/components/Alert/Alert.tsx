import React, { forwardRef } from 'react';
import { alert, alertIcon, alertContent, alertTitle, alertDescription, AlertVariants } from './Alert.css';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 알림 변형
   */
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  /**
   * 알림 크기
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 알림 제목
   */
  title?: string;
  /**
   * 알림 설명
   */
  description?: string;
  /**
   * 커스텀 아이콘
   */
  icon?: React.ReactNode;
  /**
   * 아이콘 숨김 여부
   */
  hideIcon?: boolean;
  /**
   * 전체 너비 사용 여부
   */
  fullWidth?: boolean;
  /**
   * 알림 내용
   */
  children?: React.ReactNode;
}

// 기본 아이콘 컴포넌트들
const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <path d="m12 16-4-4 4-4 4 4-4 4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const SuccessIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ErrorIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
    <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
    <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const WarningIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 9v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m12 17 .01 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const getDefaultIcon = (variant: string) => {
  switch (variant) {
    case 'success':
      return <SuccessIcon />;
    case 'error':
      return <ErrorIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'info':
    case 'default':
    default:
      return <InfoIcon />;
  }
};

/**
 * 정적 알림을 표시하기 위한 Alert 컴포넌트
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'default',
      size = 'md',
      title,
      description,
      icon,
      hideIcon = false,
      fullWidth = false,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const hasContent = Boolean(title || description || children);
    const displayIcon = !hideIcon && (icon || getDefaultIcon(variant));

    return (
      <div
        ref={ref}
        role="alert"
        className={alert({ variant, size, fullWidth })}
        {...rest}
      >
        {displayIcon && (
          <div className={alertIcon({ variant, size })}>
            {displayIcon}
          </div>
        )}
        
        {hasContent && (
          <div className={alertContent}>
            {title && (
              <div className={alertTitle({ size })}>
                {title}
              </div>
            )}
            
            {description && (
              <div className={alertDescription({ size })}>
                {description}
              </div>
            )}
            
            {children && children}
          </div>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';