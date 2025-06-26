# Icon 컴포넌트

SVG 아이콘을 렌더링하는 재사용 가능한 아이콘 컴포넌트입니다. 다양한 크기와 색상을 지원하며 접근성을 고려하여 설계되었습니다.

## 설치

```bash
npm install @jonghun-project/ui
```

## 기본 사용법

```tsx
import { Icon } from '@jonghun-project/ui';

// 기본 아이콘
<Icon aria-label="좋아요">
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
</Icon>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | 아이콘 크기 |
| `color` | `'default' \| 'primary' \| 'secondary' \| 'muted' \| 'destructive' \| 'success' \| 'warning' \| 'info'` | `'default'` | 아이콘 색상 |
| `aria-label` | `string` | - | 스크린 리더를 위한 아이콘 설명 |
| `aria-hidden` | `boolean` | `false` | 장식용 아이콘인 경우 true로 설정 |
| `children` | `React.ReactNode` | - | SVG 아이콘 요소 |

## 크기 변형

```tsx
<Icon size="xs" aria-label="아주 작은 아이콘">
  <StarIcon />
</Icon>

<Icon size="sm" aria-label="작은 아이콘">
  <StarIcon />
</Icon>

<Icon size="md" aria-label="중간 아이콘">
  <StarIcon />
</Icon>

<Icon size="lg" aria-label="큰 아이콘">
  <StarIcon />
</Icon>

<Icon size="xl" aria-label="아주 큰 아이콘">
  <StarIcon />
</Icon>
```

## 색상 변형

```tsx
<Icon color="primary" aria-label="주요 아이콘">
  <HeartIcon />
</Icon>

<Icon color="success" aria-label="성공 아이콘">
  <CheckIcon />
</Icon>

<Icon color="destructive" aria-label="오류 아이콘">
  <XIcon />
</Icon>

<Icon color="warning" aria-label="경고 아이콘">
  <AlertIcon />
</Icon>
```

## 접근성

### 의미 있는 아이콘
의미를 전달하는 아이콘에는 `aria-label`을 제공해야 합니다:

```tsx
<Icon aria-label="삭제">
  <TrashIcon />
</Icon>
```

### 장식용 아이콘
순전히 장식 목적의 아이콘에는 `aria-hidden="true"`를 사용합니다:

```tsx
<Icon aria-hidden="true">
  <DecorativeIcon />
</Icon>
```

## 텍스트와 함께 사용

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <Icon size="sm" color="success" aria-label="성공">
    <CheckIcon />
  </Icon>
  <span>작업이 성공적으로 완료되었습니다</span>
</div>
```

## 일반적인 아이콘 예제

### 체크 아이콘
```tsx
const CheckIcon = () => (
  <path d="M20 6 9 17l-5-5" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
);
```

### X 아이콘
```tsx
const XIcon = () => (
  <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
);
```

### 하트 아이콘
```tsx
const HeartIcon = () => (
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
);
```

### 별 아이콘
```tsx
const StarIcon = () => (
  <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
);
```

## 참고사항

- SVG 아이콘은 `viewBox="0 0 24 24"`로 설정된 24x24 크기를 가정합니다
- 모든 아이콘은 `fill="currentColor"`를 사용하여 색상을 적용합니다
- 접근성을 위해 적절한 `aria-label` 또는 `aria-hidden` 속성을 제공해야 합니다