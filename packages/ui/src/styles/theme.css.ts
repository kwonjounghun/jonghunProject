import { createGlobalTheme, createThemeContract, createTheme } from '@vanilla-extract/css';
import { colors, space, fontSizes, fontWeights, lineHeights, radii, shadows, zIndices, transitions } from './tokens.css';

// 테마 계약 생성 (다크/라이트 모드 전환을 위한 계약)
export const vars = createThemeContract({
  colors: {
    background: '',
    foreground: '',
    primary: '',
    secondary: '',
    accent: '',
    muted: '',
    border: '',
    
    // 의미론적 색상
    success: '',
    error: '',
    warning: '',
    info: '',
  },
  space,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  zIndices,
  transitions,
});

// 라이트 테마 (기본)
export const lightTheme = createGlobalTheme(':root', vars, {
  colors: {
    background: colors.white,
    foreground: colors.gray900,
    primary: colors.primary500,
    secondary: colors.gray500,
    accent: colors.primary600,
    muted: colors.gray100,
    border: colors.gray200,
    
    success: colors.success500,
    error: colors.error500,
    warning: colors.warning500,
    info: colors.info500,
  },
  space,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  zIndices,
  transitions,
});

// 다크 테마
export const darkThemeClass = 'dark-theme';

export const darkTheme = createTheme(vars, {
  colors: {
    background: colors.gray900,
    foreground: colors.gray50,
    primary: colors.primary400,
    secondary: colors.gray400,
    accent: colors.primary300,
    muted: colors.gray800,
    border: colors.gray700,
    
    success: colors.success500,
    error: colors.error500,
    warning: colors.warning500,
    info: colors.info500,
  },
  space,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  zIndices,
  transitions,
});
