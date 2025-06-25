import React, { createContext, useContext, useState, useCallback } from 'react';
import { Toast, ToastItem, toastContainer } from '../components/Toast';

// Toast Context 정의
interface ToastContextValue {
  toasts: ToastItem[];
  addToast: (toast: Omit<ToastItem, 'id'>) => string;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}

export const ToastContext = createContext<ToastContextValue | undefined>(undefined);

/**
 * 토스트 Provider 컴포넌트
 */
export interface ToastProviderProps {
  children: React.ReactNode;
  /**
   * 최대 토스트 개수
   */
  maxToasts?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  maxToasts = 5,
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    setToasts((prev) => {
      const newToasts = [{ ...toast, id }, ...prev];
      // 최대 개수 제한
      return newToasts.slice(0, maxToasts);
    });

    return id;
  }, [maxToasts]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);

  const contextValue: ToastContextValue = {
    toasts,
    addToast,
    removeToast,
    clearToasts,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      
      {/* 토스트 컨테이너 */}
      <div className={toastContainer}>
        {toasts.map((toastItem) => (
          <Toast
            key={toastItem.id}
            id={toastItem.id}
            type={toastItem.type}
            title={toastItem.title}
            description={toastItem.description}
            duration={toastItem.duration}
            closable={toastItem.closable}
            onClose={() => {
              removeToast(toastItem.id);
              if (toastItem.onClose) {
                toastItem.onClose();
              }
            }}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// useToast는 별도 hooks/useToast.ts 파일에서 정의됨