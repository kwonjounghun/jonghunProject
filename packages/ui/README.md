# @jonghun-project/ui

디자인 시스템 UI 패키지입니다. Radix UI primitives와 vanilla-extract를 사용하여 구축되었습니다.

## 🚀 시작하기

### 설치

```bash
pnpm add @jonghun-project/ui
```

### 사용법

```tsx
import { Button, Card, Input, Toast } from '@jonghun-project/ui';

function App() {
  return (
    <div>
      <Button variant='primary'>Click me</Button>
      <Card variant='elevated'>
        <h3>Card Title</h3>
        <p>Card content</p>
      </Card>
      <Input label='Email' placeholder='Enter your email' />
    </div>
  );
}
```

## 📚 스토리북

컴포넌트의 모든 변형과 사용법을 확인하려면 스토리북을 실행하세요:

```bash
cd packages/ui
pnpm storybook
```

스토리북은 `http://localhost:6006`에서 실행됩니다.

### 스토리북에서 확인할 수 있는 내용

- **Button**: 모든 variant, size, 상태별 예시
- **Card**: elevated, outlined, flat 스타일과 헤더/푸터 사용법
- **Input**: 다양한 타입과 상태 (normal, error, success)
- **Toast**: 모든 variant와 액션 버튼 포함 예시

## 🎨 컴포넌트

### Button

사용자 액션을 트리거하기 위한 버튼 컴포넌트입니다.

```tsx
import { Button } from '@jonghun-project/ui';

// 기본 사용법
<Button variant="primary">Primary Button</Button>

// 모든 variant
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// 크기 변형
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// 아이콘과 함께 사용
<Button leftIcon="←">Back</Button>
<Button rightIcon="→">Next</Button>
```

### Card

정보를 그룹화하고 표시하기 위한 카드 컴포넌트입니다.

```tsx
import { Card, CardHeader, CardFooter } from '@jonghun-project/ui';

// 기본 사용법
<Card variant="elevated">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>

// 헤더와 푸터 포함
<Card variant="elevated" padding="none">
  <CardHeader>
    <h3>Card Title</h3>
    <p>Card subtitle</p>
  </CardHeader>
  <div style={{ padding: '1rem' }}>
    <p>Main content</p>
  </div>
  <CardFooter>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>

// 상호작용 가능한 카드
<Card
  variant="elevated"
  interactive
  onClick={() => console.log('Card clicked')}
>
  <h3>Clickable Card</h3>
  <p>Click me!</p>
</Card>
```

### Input

사용자 입력을 받기 위한 입력 필드 컴포넌트입니다.

```tsx
import { Input } from '@jonghun-project/ui';

// 기본 사용법
<Input label="Email" placeholder="Enter your email" />

// 다양한 variant
<Input variant="default" label="Default" />
<Input variant="filled" label="Filled" />
<Input variant="flushed" label="Flushed" />

// 상태별 사용법
<Input
  label="Email"
  state="error"
  error="Please enter a valid email"
/>
<Input
  label="Username"
  state="success"
  helperText="Username is available"
/>

// 다양한 타입
<Input type="email" label="Email" />
<Input type="password" label="Password" />
<Input type="number" label="Age" />
```

### Toast

사용자에게 알림 메시지를 표시하기 위한 토스트 컴포넌트입니다.

```tsx
import { Toast, ToastProviderPrimitive, SimpleToast } from '@jonghun-project/ui';

// Provider로 감싸기
<ToastProviderPrimitive>
  <App />
</ToastProviderPrimitive>

// 기본 토스트
<Toast>
  <ToastTitle>Toast Title</ToastTitle>
  <ToastDescription>Toast message</ToastDescription>
  <ToastClose />
</Toast>

// SimpleToast 사용 (권장)
<SimpleToast
  title="Success!"
  description="Your changes have been saved."
  variant="success"
  open={open}
  onOpenChange={setOpen}
/>

// 액션 버튼 포함
<Toast>
  <ToastTitle>Undo Action</ToastTitle>
  <ToastDescription>Your action has been completed.</ToastDescription>
  <ToastAction altText="Undo" asChild>
    <Button size="sm">Undo</Button>
  </ToastAction>
  <ToastClose />
</Toast>
```

## 🎯 디자인 원칙

### 접근성 (Accessibility)

- 모든 컴포넌트는 WCAG AA 기준을 준수합니다
- 키보드 네비게이션을 지원합니다
- 스크린 리더와 호환됩니다
- 적절한 ARIA 라벨과 설명을 제공합니다

### 반응형 디자인

- 모든 컴포넌트는 모바일, 태블릿, 데스크톱에서 최적화됩니다
- 터치 친화적인 인터랙션을 제공합니다

### 다크 모드 지원

- 모든 컴포넌트는 라이트/다크 테마를 지원합니다
- CSS 커스텀 프로퍼티를 사용하여 테마 전환이 부드럽습니다

## 🛠 개발

### 개발 서버 실행

```bash
cd packages/ui
pnpm dev
```

### 빌드

```bash
pnpm build
```

### 린트

```bash
pnpm lint
```

## 📦 패키지 구조

```
packages/ui/
├── .storybook/          # 스토리북 설정
├── src/
│   ├── components/      # 컴포넌트들
│   ├── providers/       # Context providers
│   ├── styles/          # 스타일 시스템
│   └── index.ts         # 메인 export
└── package.json
```

## 🤝 기여하기

1. 새로운 컴포넌트를 추가할 때는 Radix UI primitives를 기반으로 합니다
2. 모든 스타일링은 vanilla-extract를 사용합니다
3. 스토리북 스토리를 작성하여 컴포넌트의 모든 사용법을 문서화합니다
4. 접근성과 반응형 디자인을 고려합니다

## 📄 라이선스

MIT
