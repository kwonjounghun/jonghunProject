import { useContext } from 'react';
import { ToastContext } from '../providers/ToastProvider';
import { ToastItem } from '../components/Toast';

/**
 * 토스트를 사용하기 위한 훅
 */
export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast는 ToastProvider 내에서 사용되어야 합니다.');
  }

  const { addToast, removeToast, clearToasts } = context;

  // 편의 메서드들
  const toast = {
    success: (title: string, description?: string, options?: Partial<ToastItem>) =>
      addToast({ type: 'success', title, description, ...options }),
    
    error: (title: string, description?: string, options?: Partial<ToastItem>) =>
      addToast({ type: 'error', title, description, ...options }),
    
    warning: (title: string, description?: string, options?: Partial<ToastItem>) =>
      addToast({ type: 'warning', title, description, ...options }),
    
    info: (title: string, description?: string, options?: Partial<ToastItem>) =>
      addToast({ type: 'info', title, description, ...options }),
    
    default: (title: string, description?: string, options?: Partial<ToastItem>) =>
      addToast({ type: 'default', title, description, ...options }),

    // 커스텀 토스트
    custom: (toast: Omit<ToastItem, 'id'>) => addToast(toast),
  };

  return {
    toast,
    removeToast,
    clearToasts,
  };
};