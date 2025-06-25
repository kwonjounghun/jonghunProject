import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../styles/theme.css';
import { transitions } from '../../styles/tokens.css';

// 기본 Alert 스타일
const baseAlert = style({
  display: 'flex',
  alignItems: 'flex-start',
  borderRadius: vars.radii.md,
  border: '1px solid transparent',
  position: 'relative',
  transition: transitions.default,
});

// Alert 크기 변형
const sizeVariants = styleVariants({
  sm: {
    padding: vars.space[3],
    gap: vars.space[2],
  },
  md: {
    padding: vars.space[4],
    gap: vars.space[3],
  },
  lg: {
    padding: vars.space[5],
    gap: vars.space[4],
  },
});

// Alert 변형 스타일
const variantVariants = styleVariants({
  default: {
    backgroundColor: vars.colors.muted,
    borderColor: vars.colors.border,
    color: vars.colors.foreground,
  },
  success: {
    backgroundColor: `${vars.colors.success}15`, // 15% opacity
    borderColor: `${vars.colors.success}30`,
    color: vars.colors.success,
  },
  error: {
    backgroundColor: `${vars.colors.error}15`,
    borderColor: `${vars.colors.error}30`,
    color: vars.colors.error,
  },
  warning: {
    backgroundColor: `${vars.colors.warning}15`,
    borderColor: `${vars.colors.warning}30`,
    color: vars.colors.warning,
  },
  info: {
    backgroundColor: `${vars.colors.info}15`,
    borderColor: `${vars.colors.info}30`,
    color: vars.colors.info,
  },
});

// Alert 레시피 생성
export const alert = recipe({
  base: baseAlert,
  variants: {
    variant: variantVariants,
    size: sizeVariants,
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    fullWidth: false,
  },
});

// Alert 아이콘 스타일
const baseAlertIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

const iconSizeVariants = styleVariants({
  sm: {
    width: '16px',
    height: '16px',
    marginTop: '1px',
  },
  md: {
    width: '20px',
    height: '20px',
    marginTop: '2px',
  },
  lg: {
    width: '24px',
    height: '24px',
    marginTop: '2px',
  },
});

const iconVariantVariants = styleVariants({
  default: {
    color: vars.colors.foreground,
  },
  success: {
    color: vars.colors.success,
  },
  error: {
    color: vars.colors.error,
  },
  warning: {
    color: vars.colors.warning,
  },
  info: {
    color: vars.colors.info,
  },
});

export const alertIcon = recipe({
  base: baseAlertIcon,
  variants: {
    variant: iconVariantVariants,
    size: iconSizeVariants,
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

// Alert 콘텐츠 컨테이너
export const alertContent = style({
  flex: 1,
  minWidth: 0, // flex item이 축소될 수 있도록
});

// Alert 제목 스타일
const baseTitleStyle = style({
  fontWeight: vars.fontWeights.semibold,
  lineHeight: vars.lineHeights.tight,
  marginBottom: vars.space[1],
});

const titleSizeVariants = styleVariants({
  sm: {
    fontSize: vars.fontSizes.sm,
  },
  md: {
    fontSize: vars.fontSizes.base,
  },
  lg: {
    fontSize: vars.fontSizes.lg,
  },
});

export const alertTitle = recipe({
  base: baseTitleStyle,
  variants: {
    size: titleSizeVariants,
  },
  defaultVariants: {
    size: 'md',
  },
});

// Alert 설명 스타일
const baseDescriptionStyle = style({
  lineHeight: vars.lineHeights.relaxed,
  opacity: 0.9,
});

const descriptionSizeVariants = styleVariants({
  sm: {
    fontSize: vars.fontSizes.xs,
  },
  md: {
    fontSize: vars.fontSizes.sm,
  },
  lg: {
    fontSize: vars.fontSizes.base,
  },
});

export const alertDescription = recipe({
  base: baseDescriptionStyle,
  variants: {
    size: descriptionSizeVariants,
  },
  defaultVariants: {
    size: 'md',
  },
});

// 타입 내보내기
export type AlertVariants = RecipeVariants<typeof alert>;
export type AlertIconVariants = RecipeVariants<typeof alertIcon>;
export type AlertTitleVariants = RecipeVariants<typeof alertTitle>;
export type AlertDescriptionVariants = RecipeVariants<typeof alertDescription>;