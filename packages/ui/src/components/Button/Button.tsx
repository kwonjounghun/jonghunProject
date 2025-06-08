import React, { forwardRef } from 'react';
import { button, ButtonVariants } from './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼 크기
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 버튼 변형
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  /**
   * 전체 너비 사용 여부
   */
  fullWidth?: boolean;
  /**
   * 아이콘 포함 여부
   */
  withIcon?: boolean;
  /**
   * 버튼의 내용
   */
  children: React.ReactNode;
  /**
   * 버튼이 비활성화 상태인지 여부
   */
  disabled?: boolean;
  /**
   * 버튼 앞에 표시될 아이콘
   */
  leftIcon?: React.ReactNode;
  /**
   * 버튼 뒤에 표시될 아이콘
   */
  rightIcon?: React.ReactNode;
  /**
   * 버튼 타입
   */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * 사용자 액션을 트리거하기 위한 버튼 컴포넌트
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size,
      variant,
      fullWidth,
      disabled = false,
      leftIcon,
      rightIcon,
      type = 'button',
      className,
      ...rest
    },
    ref
  ) => {
    const withIcon = Boolean(leftIcon || rightIcon);
    
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={button({ size, variant, fullWidth, withIcon })}
        {...rest}
      >
        {leftIcon && leftIcon}
        {children}
        {rightIcon && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
