import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { vars } from './theme.css';
import { breakpoints } from './tokens.css';

// 반응형 조건 정의
const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': `screen and (min-width: ${breakpoints.sm})` },
    desktop: { '@media': `screen and (min-width: ${breakpoints.lg})` },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'inline-flex', 'grid'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    gap: vars.space,
    fontSize: vars.fontSizes,
    lineHeight: vars.lineHeights,
    textAlign: ['left', 'center', 'right'],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});

// 색상 관련 속성 정의
const colorProperties = defineProperties({
  properties: {
    color: vars.colors,
    background: vars.colors,
    borderColor: vars.colors,
  },
});

// 기타 속성 정의
const otherProperties = defineProperties({
  properties: {
    borderRadius: vars.radii,
    fontWeight: vars.fontWeights,
    boxShadow: vars.shadows,
    zIndex: vars.zIndices,
  },
});

// 스프링클 생성
export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  otherProperties
);

// 타입 내보내기
export type Sprinkles = Parameters<typeof sprinkles>[0];
