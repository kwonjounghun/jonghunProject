# Alert 컴포넌트 가이드

정적 알림을 표시하기 위한 Alert 컴포넌트입니다. 다양한 변형과 크기를 지원하며, 사용자에게 중요한 정보나 상태를 전달할 때 사용합니다.

## 설치 및 import

```tsx
import { Alert } from '@your-package/ui';
```

## 기본 사용법

### 기본 Alert

```tsx
<Alert 
  title="기본 알림" 
  description="이것은 기본 알림 메시지입니다." 
/>
```

### 다양한 변형 (Variants)

Alert는 5가지 변형을 지원합니다:

```tsx
// 기본 (회색)
<Alert variant="default" title="기본" description="기본 알림입니다." />

// 성공 (초록색)
<Alert variant="success" title="성공!" description="작업이 성공적으로 완료되었습니다." />

// 에러 (빨간색)
<Alert variant="error" title="오류 발생" description="요청을 처리하는 중 오류가 발생했습니다." />

// 경고 (노란색)
<Alert variant="warning" title="주의" description="이 작업은 되돌릴 수 없습니다." />

// 정보 (파란색)
<Alert variant="info" title="정보" description="새로운 업데이트가 있습니다." />
```

### 크기 옵션

3가지 크기를 지원합니다:

```tsx
// 작은 크기
<Alert size="sm" title="작은 알림" description="작은 크기의 알림입니다." />

// 중간 크기 (기본값)
<Alert size="md" title="중간 알림" description="중간 크기의 알림입니다." />

// 큰 크기
<Alert size="lg" title="큰 알림" description="큰 크기의 알림입니다." />
```

## 고급 사용법

### 아이콘 커스터마이징

```tsx
// 커스텀 아이콘 사용
<Alert 
  variant="success" 
  title="커스텀 아이콘" 
  description="커스텀 아이콘을 사용한 알림입니다."
  icon={<YourCustomIcon />}
/>

// 아이콘 숨기기
<Alert 
  variant="warning" 
  title="아이콘 없는 알림" 
  description="아이콘이 표시되지 않는 알림입니다."
  hideIcon 
/>
```

### 전체 너비 사용

```tsx
<Alert 
  variant="info" 
  title="전체 너비 알림" 
  description="컨테이너의 전체 너비를 사용하는 알림입니다."
  fullWidth 
/>
```

### 제목 또는 설명만 사용

```tsx
// 제목만
<Alert variant="error" title="제목만 있는 알림" />

// 설명만
<Alert variant="info" description="설명만 있는 알림입니다." />
```

### 커스텀 콘텐츠

children prop을 사용하여 완전히 커스텀한 콘텐츠를 제공할 수 있습니다:

```tsx
<Alert variant="warning">
  <div>
    <strong>커스텀 콘텐츠</strong>
    <p>Alert 컴포넌트 안에 커스텀 JSX 콘텐츠를 넣을 수 있습니다.</p>
    <button onClick={handleAction}>액션 버튼</button>
  </div>
</Alert>
```

## Props API

| Prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `variant` | `'default' \| 'success' \| 'error' \| 'warning' \| 'info'` | `'default'` | 알림의 종류 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 알림의 크기 |
| `title` | `string` | - | 알림의 제목 |
| `description` | `string` | - | 알림의 설명 |
| `icon` | `React.ReactNode` | - | 커스텀 아이콘 |
| `hideIcon` | `boolean` | `false` | 아이콘 숨김 여부 |
| `fullWidth` | `boolean` | `false` | 전체 너비 사용 여부 |
| `children` | `React.ReactNode` | - | 커스텀 콘텐츠 |

추가적으로 `HTMLDivElement`의 모든 표준 props도 지원합니다.

## 접근성 (Accessibility)

- `role="alert"` 속성이 자동으로 추가되어 스크린 리더가 알림을 인식할 수 있습니다.
- 의미론적 색상을 사용하여 시각적으로 정보를 전달합니다.
- 키보드 내비게이션을 지원합니다.

## 디자인 시스템

Alert 컴포넌트는 프로젝트의 디자인 토큰을 사용합니다:

- **색상**: 각 variant는 테마에 정의된 의미론적 색상 (`success`, `error`, `warning`, `info`)을 사용
- **간격**: 일관된 패딩과 간격 사용
- **타이포그래피**: 계층적 폰트 크기와 굵기 사용
- **테마**: 라이트/다크 모드 자동 지원

## 사용 권장사항

1. **적절한 variant 선택**: 메시지의 성격에 맞는 variant를 사용하세요.
2. **간결한 메시지**: 제목과 설명은 간결하고 명확하게 작성하세요.
3. **일관성**: 비슷한 상황에서는 같은 패턴을 사용하세요.
4. **과도한 사용 금지**: 한 페이지에 너무 많은 Alert를 사용하지 마세요.

## Toast vs Alert

- **Alert**: 페이지 내에 정적으로 표시되는 알림 (예: 폼 검증 오류, 페이지 상단 공지사항)
- **Toast**: 동적으로 나타났다가 사라지는 알림 (예: 성공 메시지, 일시적 알림)

상황에 맞게 적절한 컴포넌트를 선택하여 사용하세요.