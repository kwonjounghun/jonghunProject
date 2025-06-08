import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';

// 기본 카드 스타일
const baseCard = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: vars.radii.lg,
  overflow: 'hidden',
  backgroundColor: vars.colors.background,
  transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',
});

// 카드 변형
const variantVariants = styleVariants({
  elevated: {
    boxShadow: vars.shadows.md,
    border: 'none',
    ':hover': {
      boxShadow: vars.shadows.lg,
    },
  },
  outlined: {
    boxShadow: 'none',
    border: `1px solid ${vars.colors.border}`,
    ':hover': {
      borderColor: vars.colors.primary,
    },
  },
  flat: {
    boxShadow: 'none',
    border: 'none',
    backgroundColor: vars.colors.muted,
  },
});

// 카드 패딩 변형
const paddingVariants = styleVariants({
  none: {
    padding: 0,
  },
  sm: {
    padding: vars.space[3],
  },
  md: {
    padding: vars.space[4],
  },
  lg: {
    padding: vars.space[6],
  },
});

// 카드 레시피 생성
export const card = recipe({
  base: baseCard,
  variants: {
    variant: variantVariants,
    padding: paddingVariants,
    interactive: {
      true: {
        cursor: 'pointer',
        ':hover': {
          transform: 'translateY(-2px)',
        },
        ':active': {
          transform: 'translateY(0)',
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    variant: 'elevated',
    padding: 'md',
    interactive: false,
    fullWidth: false,
  },
});

// 카드 헤더 스타일
export const cardHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${vars.colors.border}`,
  padding: vars.space[4],
});

// 카드 푸터 스타일
export const cardFooter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  borderTop: `1px solid ${vars.colors.border}`,
  padding: vars.space[4],
  marginTop: 'auto',
  gap: vars.space[2],
});

// 타입 내보내기
export type CardVariants = RecipeVariants<typeof card>;
