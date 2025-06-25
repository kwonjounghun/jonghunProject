import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { type RecipeVariants } from '@vanilla-extract/recipes';
import * as styles from './Dialog.css';

// 타입 정의
type DialogContentVariants = RecipeVariants<typeof styles.content>;
type DialogSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}

export interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
  size?: DialogSize;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onPointerDownOutside?: (event: CustomEvent) => void;
}

export interface DialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface DialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export interface DialogBodyProps {
  children: React.ReactNode;
  className?: string;
}

export interface DialogFooterProps {
  children: React.ReactNode;
  className?: string;
}

export interface DialogTriggerProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export interface DialogCloseProps {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

// 메인 Dialog 컴포넌트
export const Dialog = ({ children, ...props }: DialogProps) => {
  return (
    <DialogPrimitive.Root {...props}>
      {children}
    </DialogPrimitive.Root>
  );
};

// Dialog Trigger
export const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  DialogTriggerProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Trigger
    ref={ref}
    className={`${styles.trigger} ${className || ''}`}
    {...props}
  />
));

DialogTrigger.displayName = 'DialogTrigger';

// Dialog Portal
export const DialogPortal = DialogPrimitive.Portal;

// Dialog Overlay
export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={`${styles.overlay} ${className || ''}`}
    {...props}
  />
));

DialogOverlay.displayName = 'DialogOverlay';

// Dialog Content
export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, size, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={`${styles.content({ size })} ${className || ''}`}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));

DialogContent.displayName = 'DialogContent';

// Dialog Header
export const DialogHeader = ({ className, ...props }: DialogHeaderProps) => (
  <div className={`${styles.header} ${className || ''}`} {...props} />
);

DialogHeader.displayName = 'DialogHeader';

// Dialog Title
export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  DialogTitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={`${styles.title} ${className || ''}`}
    {...props}
  />
));

DialogTitle.displayName = 'DialogTitle';

// Dialog Description
export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={`${styles.description} ${className || ''}`}
    {...props}
  />
));

DialogDescription.displayName = 'DialogDescription';

// Dialog Body
export const DialogBody = ({ className, ...props }: DialogBodyProps) => (
  <div className={`${styles.body} ${className || ''}`} {...props} />
);

DialogBody.displayName = 'DialogBody';

// Dialog Footer
export const DialogFooter = ({ className, ...props }: DialogFooterProps) => (
  <div className={`${styles.footer} ${className || ''}`} {...props} />
);

DialogFooter.displayName = 'DialogFooter';

// Dialog Close
export const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  DialogCloseProps
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={`${styles.closeButton} ${className || ''}`}
    {...props}
  >
    {children || (
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
    )}
  </DialogPrimitive.Close>
));

DialogClose.displayName = 'DialogClose';

// 편의를 위한 복합 컴포넌트 타입
export interface SimpleDialogProps extends DialogProps {
  title?: string;
  description?: string;
  size?: DialogSize;
  trigger?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

// 간단한 사용을 위한 복합 Dialog 컴포넌트
export const SimpleDialog = ({
  trigger,
  title,
  description,
  size = 'md',
  footer,
  children,
  ...dialogProps
}: SimpleDialogProps) => (
  <Dialog {...dialogProps}>
    {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
    <DialogContent size={size}>
      {(title || description) && (
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
          <DialogClose />
        </DialogHeader>
      )}
      <DialogBody>{children}</DialogBody>
      {footer && <DialogFooter>{footer}</DialogFooter>}
    </DialogContent>
  </Dialog>
);

// 모든 컴포넌트 export
export {
  DialogPrimitive as DialogRoot,
};