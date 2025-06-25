import React, { useCallback, useState } from 'react';

// Toast 상태 관리를 위한 타입 정의
export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}

// Toast 상태를 전역으로 관리하기 위한 상태
let toasts: ToastItem[] = [];
let listeners: Array<(toasts: ToastItem[]) => void> = [];

// Toast 상태 변경을 알리는 함수
const emitChange = () => {
  listeners.forEach(listener => listener(toasts));
};

// Toast 추가 함수
const addToast = (toast: Omit<ToastItem, 'id' | 'open'>): string => {
  const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const newToast: ToastItem = {
    ...toast,
    id,
    open: true,
    onOpenChange: (open) => {
      if (!open) {
        removeToast(id);
      }
      toast.onOpenChange?.(open);
    },
  };
  
  toasts = [newToast, ...toasts];
  emitChange();
  return id;
};

// Toast 제거 함수
const removeToast = (id: string) => {
  toasts = toasts.filter(toast => toast.id !== id);
  emitChange();
};

// 모든 Toast 제거 함수
const clearToasts = () => {
  toasts = [];
  emitChange();
};

/**
 * Toast를 관리하기 위한 훅
 */
export const useToast = () => {
  const [, forceUpdate] = useState({});

  // 컴포넌트가 마운트/언마운트될 때 리스너 등록/해제
  React.useEffect(() => {
    const listener = () => forceUpdate({});
    listeners.push(listener);
    
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  // Toast 메서드들
  const toast = {
    success: useCallback((title: string, description?: string, options?: Partial<ToastItem>) =>
      addToast({ variant: 'success', title, description, ...options }), []),
    
    error: useCallback((title: string, description?: string, options?: Partial<ToastItem>) =>
      addToast({ variant: 'error', title, description, ...options }), []),
    
    warning: useCallback((title: string, description?: string, options?: Partial<ToastItem>) =>
      addToast({ variant: 'warning', title, description, ...options }), []),
    
    info: useCallback((title: string, description?: string, options?: Partial<ToastItem>) =>
      addToast({ variant: 'info', title, description, ...options }), []),
    
    default: useCallback((title: string, description?: string, options?: Partial<ToastItem>) =>
      addToast({ variant: 'default', title, description, ...options }), []),

    // 커스텀 토스트
    custom: useCallback((toast: Omit<ToastItem, 'id' | 'open'>) => addToast(toast), []),
  };

  return {
    toast,
    toasts,
    removeToast: useCallback(removeToast, []),
    clearToasts: useCallback(clearToasts, []),
  };
};