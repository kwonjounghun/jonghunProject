import React, { createContext, useContext, useState, useCallback } from 'react';
import { 
  ToastProviderPrimitive as RadixToastProvider, 
  ToastViewport,
  Toast, 
  ToastTitle, 
  ToastDescription, 
  ToastAction, 
  ToastClose 
} from '../components/Toast';

export interface ToastMessage {
  id: string;
  title?: string;
  description: string;
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  action?: React.ReactNode;
}

interface ToastContextType {
  toasts: ToastMessage[];
  toast: (message: Omit<ToastMessage, 'id'>) => string;
  dismiss: (id: string) => void;
  dismissAll: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: React.ReactNode;
  /**
   * 기본 토스트 지속 시간 (밀리초)
   */
  defaultDuration?: number;
  /**
   * 최대 토스트 개수
   */
  maxToasts?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  defaultDuration = 5000,
  maxToasts = 3,
}) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // 토스트 추가
  const toast = useCallback((message: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = {
      ...message,
      id,
      duration: message.duration ?? defaultDuration,
    };

    setToasts(prevToasts => {
      const newToasts = [...prevToasts, newToast];
      // maxToasts를 초과하면 가장 오래된 토스트 제거
      if (newToasts.length > maxToasts) {
        return newToasts.slice(-maxToasts);
      }
      return newToasts;
    });

    return id;
  }, [defaultDuration, maxToasts]);

  // 특정 토스트 제거
  const dismiss = useCallback((id: string) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);

  // 모든 토스트 제거
  const dismissAll = useCallback(() => {
    setToasts([]);
  }, []);

  const contextValue: ToastContextType = {
    toasts,
    toast,
    dismiss,
    dismissAll,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      <RadixToastProvider>
        {children}
        {toasts.map(toastMessage => (
          <ToastItem
            key={toastMessage.id}
            toast={toastMessage}
            onDismiss={dismiss}
          />
        ))}
      </RadixToastProvider>
    </ToastContext.Provider>
  );
};

// 개별 토스트 컴포넌트
interface ToastItemProps {
  toast: ToastMessage;
  onDismiss: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onDismiss }) => {
  const [open, setOpen] = useState(true);

  const handleOpenChange = useCallback((newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      onDismiss(toast.id);
    }
  }, [toast.id, onDismiss]);

  return (
    <Toast
      open={open}
      onOpenChange={handleOpenChange}
      duration={toast.duration}
      variant={toast.variant}
    >
      {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
      <ToastDescription>{toast.description}</ToastDescription>
      {toast.action && (
        <ToastAction altText="액션 실행" asChild>
          {toast.action}
        </ToastAction>
      )}
      <ToastClose />
    </Toast>
  );
};

// useToast 훅
export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// 편의 함수들
export const useToastHelpers = () => {
  const { toast } = useToast();

  return {
    success: (message: string, title?: string) =>
      toast({ description: message, title, variant: 'success' }),
    
    error: (message: string, title?: string) =>
      toast({ description: message, title, variant: 'error' }),
    
    warning: (message: string, title?: string) =>
      toast({ description: message, title, variant: 'warning' }),
    
    info: (message: string, title?: string) =>
      toast({ description: message, title, variant: 'info' }),
    
    default: (message: string, title?: string) =>
      toast({ description: message, title, variant: 'default' }),
  };
};

