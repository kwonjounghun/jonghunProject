import React, { forwardRef } from 'react';
import { icon } from './Icon.css';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /**
   * 아이콘 크기
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * 아이콘 색상
   */
  color?: 'default' | 'primary' | 'secondary' | 'muted' | 'destructive' | 'success' | 'warning' | 'info';
  /**
   * 아이콘 SVG 요소
   */
  children: React.ReactNode;
  /**
   * 아이콘 설명 (접근성)
   */
  'aria-label'?: string;
  /**
   * 장식용 아이콘인지 여부 (접근성)
   */
  'aria-hidden'?: boolean;
}

/**
 * SVG 아이콘을 렌더링하는 아이콘 컴포넌트
 */
export const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      children,
      size = 'md',
      color = 'default',
      'aria-label': ariaLabel,
      'aria-hidden': ariaHidden,
      className,
      ...rest
    },
    ref
  ) => {
    // 기본적으로 장식용이 아닌 경우 aria-label을 요구
    const isDecorative = ariaHidden === true;
    
    if (!isDecorative && !ariaLabel) {
      console.warn('Icon: aria-label이 필요합니다. 장식용 아이콘인 경우 aria-hidden="true"를 사용하세요.');
    }

    return (
      <svg
        ref={ref}
        className={icon({ size, color })}
        role={isDecorative ? 'presentation' : 'img'}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        {children}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';