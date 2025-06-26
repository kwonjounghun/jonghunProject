import React, { forwardRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { 
  overlay, 
  content, 
  header, 
  title, 
  description, 
  closeButton, 
  body, 
  footer, 
  trigger, 
  ModalContentVariants 
} from './Modal.css';

export interface ModalProps {
  /**
   * 모달 열림 상태
   */
  open?: boolean;
  /**
   * 모달 열림 상태 변경 핸들러
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * 모달 크기
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /**
   * 모달 제목
   */
  title?: string;
  /**
   * 모달 설명
   */
  description?: string;
  /**
   * 닫기 버튼 숨김 여부
   */
  hideCloseButton?: boolean;
  /**
   * 오버레이 클릭으로 닫기 여부
   */
  closeOnOverlayClick?: boolean;
  /**
   * ESC 키로 닫기 여부
   */
  closeOnEsc?: boolean;
  /**
   * 모달 내용
   */
  children?: React.ReactNode;
  /**
   * 트리거 요소 (버튼 등)
   */
  trigger?: React.ReactNode;
  /**
   * 추가 CSS 클래스
   */
  className?: string;
}

export interface ModalContentProps extends React.ComponentPropsWithoutRef<typeof Dialog.Content> {
  /**
   * 모달 크기
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /**
   * 모달 내용
   */
  children: React.ReactNode;
}

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 헤더 내용
   */
  children: React.ReactNode;
}

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 바디 내용
   */
  children: React.ReactNode;
}

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 풋터 내용
   */
  children: React.ReactNode;
}

export interface ModalTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * 제목 내용
   */
  children: React.ReactNode;
}

export interface ModalDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * 설명 내용
   */
  children: React.ReactNode;
}

// X 아이콘 컴포넌트
const CloseIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * 모달 오버레이 컴포넌트
 */
export const ModalOverlay = forwardRef<
  React.ElementRef<typeof Dialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof Dialog.Overlay>
>(({ className, ...props }, ref) => (
  <Dialog.Overlay
    ref={ref}
    className={overlay}
    {...props}
  />
));

ModalOverlay.displayName = Dialog.Overlay.displayName;

/**
 * 모달 콘텐츠 컴포넌트
 */
export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ size = 'md', className, children, ...props }, ref) => (
    <Dialog.Portal>
      <ModalOverlay />
      <Dialog.Content
        ref={ref}
        className={content({ size })}
        {...props}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
);

ModalContent.displayName = 'ModalContent';

/**
 * 모달 헤더 컴포넌트
 */
export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={header} {...props}>
      {children}
    </div>
  )
);

ModalHeader.displayName = 'ModalHeader';

/**
 * 모달 바디 컴포넌트
 */
export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={body} {...props}>
      {children}
    </div>
  )
);

ModalBody.displayName = 'ModalBody';

/**
 * 모달 풋터 컴포넌트
 */
export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={footer} {...props}>
      {children}
    </div>
  )
);

ModalFooter.displayName = 'ModalFooter';

/**
 * 모달 제목 컴포넌트
 */
export const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ className, children, ...props }, ref) => (
    <Dialog.Title ref={ref} className={title} {...props}>
      {children}
    </Dialog.Title>
  )
);

ModalTitle.displayName = Dialog.Title.displayName;

/**
 * 모달 설명 컴포넌트
 */
export const ModalDescription = forwardRef<HTMLParagraphElement, ModalDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <Dialog.Description ref={ref} className={description} {...props}>
      {children}
    </Dialog.Description>
  )
);

ModalDescription.displayName = Dialog.Description.displayName;

/**
 * 모달 닫기 버튼 컴포넌트
 */
export const ModalClose = forwardRef<
  React.ElementRef<typeof Dialog.Close>,
  React.ComponentPropsWithoutRef<typeof Dialog.Close>
>(({ className, ...props }, ref) => (
  <Dialog.Close
    ref={ref}
    className={closeButton}
    aria-label="닫기"
    {...props}
  >
    <CloseIcon />
  </Dialog.Close>
));

ModalClose.displayName = Dialog.Close.displayName;

/**
 * 모달 트리거 컴포넌트
 */
export const ModalTrigger = forwardRef<
  React.ElementRef<typeof Dialog.Trigger>,
  React.ComponentPropsWithoutRef<typeof Dialog.Trigger>
>(({ className, ...props }, ref) => (
  <Dialog.Trigger ref={ref} className={trigger} {...props} />
));

ModalTrigger.displayName = Dialog.Trigger.displayName;

/**
 * 메인 모달 컴포넌트
 */
export const Modal = ({
  open,
  onOpenChange,
  size = 'md',
  title,
  description,
  hideCloseButton = false,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  children,
  trigger,
  className,
}: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <ModalTrigger>{trigger}</ModalTrigger>}
      <ModalContent 
        size={size}
        onPointerDownOutside={closeOnOverlayClick ? undefined : (e) => e.preventDefault()}
        onEscapeKeyDown={closeOnEsc ? undefined : (e) => e.preventDefault()}
      >
        {(title || description || !hideCloseButton) && (
          <ModalHeader>
            <div>
              {title && <ModalTitle>{title}</ModalTitle>}
              {description && <ModalDescription>{description}</ModalDescription>}
            </div>
            {!hideCloseButton && <ModalClose />}
          </ModalHeader>
        )}
        
        {children && <ModalBody>{children}</ModalBody>}
      </ModalContent>
    </Dialog.Root>
  );
};

Modal.displayName = 'Modal';

// 편의를 위한 컴포넌트 조합 내보내기
Modal.Root = Dialog.Root;
Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
Modal.Close = ModalClose;
Modal.Overlay = ModalOverlay;