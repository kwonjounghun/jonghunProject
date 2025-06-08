import React, { forwardRef } from 'react';
import { card, cardHeader, cardFooter, CardVariants } from './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 카드의 변형 스타일
   */
  variant?: 'elevated' | 'outlined' | 'flat';
  /**
   * 카드의 패딩 크기
   */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /**
   * 카드가 상호작용 가능한지 여부
   */
  interactive?: boolean;
  /**
   * 카드가 전체 너비를 차지하는지 여부
   */
  fullWidth?: boolean;
  /**
   * 카드의 내용
   */
  children: React.ReactNode;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 헤더의 내용
   */
  children: React.ReactNode;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 푸터의 내용
   */
  children: React.ReactNode;
}

/**
 * 정보를 그룹화하고 표시하기 위한 카드 컴포넌트
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant,
      padding,
      interactive,
      fullWidth,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={card({ variant, padding, interactive, fullWidth })}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/**
 * 카드의 헤더 컴포넌트
 */
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={`${cardHeader} ${className || ''}`} {...rest}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

/**
 * 카드의 푸터 컴포넌트
 */
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={`${cardFooter} ${className || ''}`} {...rest}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';
