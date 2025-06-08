import React, { forwardRef } from 'react';
import { input, inputWrapper, inputLabel, inputError, inputHelperText, InputVariants } from './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 입력 필드 크기
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 입력 필드 변형
   */
  variant?: 'default' | 'filled' | 'flushed';
  /**
   * 입력 필드 상태
   */
  state?: 'normal' | 'error' | 'success';
  /**
   * 전체 너비 사용 여부
   */
  fullWidth?: boolean;
  /**
   * 입력 필드의 라벨
   */
  label?: string;
  /**
   * 에러 메시지
   */
  error?: string;
  /**
   * 도움말 텍스트
   */
  helperText?: string;
  /**
   * 입력 필드 ID
   */
  id?: string;
}

/**
 * 사용자 입력을 받기 위한 입력 필드 컴포넌트
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      id,
      size,
      variant,
      state = error ? 'error' : 'normal',
      fullWidth,
      className,
      ...rest
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
    
    return (
      <div className={inputWrapper}>
        {label && (
          <label htmlFor={inputId} className={inputLabel}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={input({ size, variant, state, fullWidth })}
          {...rest}
        />
        {error && <div className={inputError}>{error}</div>}
        {!error && helperText && <div className={inputHelperText}>{helperText}</div>}
      </div>
    );
  }
);

Input.displayName = 'Input';
