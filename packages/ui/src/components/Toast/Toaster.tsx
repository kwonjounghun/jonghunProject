import React from 'react';
import { SimpleToast } from './Toast';
import { useToast } from '../../hooks/useToast';

/**
 * Toast들을 렌더링하는 컴포넌트
 * 애플리케이션의 루트에 한 번만 추가하면 됩니다.
 */
export const Toaster: React.FC = () => {
  const { toasts } = useToast();

  return (
    <>
      {toasts.map((toast) => (
        <SimpleToast
          key={toast.id}
          title={toast.title}
          description={toast.description}
          variant={toast.variant}
          action={toast.action}
          open={toast.open}
          onOpenChange={toast.onOpenChange}
          duration={toast.duration}
        />
      ))}
    </>
  );
};