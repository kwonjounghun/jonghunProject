import React, { useState, useCallback, useEffect, forwardRef } from 'react';
import {
  toast,
  toastContainer,
  toastIcon,
  toastContent,
  toastTitle,
  toastDescription,
  toastCloseButton,
  toastProgressBar,
  ToastVariants,
} from './Toast.css';

// CSS 스타일 re-export
export { toastContainer } from './Toast.css';

// 토스트 타입 정의
export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'default';

export interface ToastItem {
  id: string;
  type: ToastType;
  title?: string;
  description?: string;
  duration?: number;
  closable?: boolean;
  onClose?: () => void;
}

export interface ToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> {
  /**
   * 토스트의 고유 ID
   */
  id: string;
  /**
   * 토스트 타입
   */
  type?: ToastType;
  /**
   * 토스트 제목
   */
  title?: string;
  /**
   * 토스트 설명
   */
  description?: string;
  /**
   * 토스트가 자동으로 사라지는 시간 (ms). 0이면 자동으로 사라지지 않음.
   */
  duration?: number;
  /**
   * 수동으로 닫을 수 있는지 여부
   */
  closable?: boolean;
  /**
   * 토스트가 닫힐 때 호출되는 콜백
   */
  onClose?: () => void;
  /**
   * 토스트 상태 (애니메이션 용)
   */
  state?: 'showing' | 'closing';
}

// 기본 아이콘들
const DefaultIcons = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
  default: '●',
};

/**
 * 개별 토스트 컴포넌트
 */
export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      id,
      type = 'default',
      title,
      description,
      duration = 5000,
      closable = true,
      onClose,
      state = 'showing',
      className,
      ...rest
    },
    ref
  ) => {
    const [progress, setProgress] = useState(100);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const handleClose = useCallback(() => {
      if (onClose) {
        onClose();
      }
    }, [onClose]);

    // 자동 닫기 타이머
    useEffect(() => {
      if (duration > 0 && state === 'showing') {
        const startTime = Date.now();
        const interval = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const remaining = Math.max(0, duration - elapsed);
          setProgress((remaining / duration) * 100);

          if (remaining <= 0) {
            clearInterval(interval);
            handleClose();
          }
        }, 10);

        setTimeoutId(interval);

        return () => {
          clearInterval(interval);
        };
      }
    }, [duration, handleClose, state]);

    // 컴포넌트 언마운트 시 타이머 정리
    useEffect(() => {
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }, [timeoutId]);

    return (
      <div
        ref={ref}
        className={toast({ type })}
        data-state={state}
        role="alert"
        aria-live="polite"
        {...rest}
      >
        {/* 아이콘 */}
        <div className={toastIcon}>
          {DefaultIcons[type]}
        </div>

        {/* 내용 */}
        <div className={toastContent}>
          {title && <div className={toastTitle}>{title}</div>}
          {description && <div className={toastDescription}>{description}</div>}
        </div>

        {/* 닫기 버튼 */}
        {closable && (
          <button
            className={toastCloseButton}
            onClick={handleClose}
            aria-label="토스트 닫기"
            type="button"
          >
            ×
          </button>
        )}

        {/* 진행률 바 */}
        {duration > 0 && (
          <div
            className={toastProgressBar}
            style={{ width: `${progress}%` }}
          />
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';