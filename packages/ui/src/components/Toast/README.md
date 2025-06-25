# Toast Component

Toast 컴포넌트는 사용자에게 일시적인 메시지를 표시하기 위한 컴포넌트입니다. Radix UI Toast primitive를 기반으로 구축되어 접근성과 사용성을 보장합니다.

## 목적

- 사용자 액션의 결과를 비침해적으로 알림
- 시스템 상태 변경사항 통지
- 성공, 오류, 경고, 정보 등의 다양한 메시지 유형 지원
- 앱 전역에서 쉽게 호출 가능한 토스트 시스템 제공

## 언제 사용하나요?

✅ **적합한 사용 사례:**
- 폼 제출 성공/실패 알림
- 파일 업로드/다운로드 상태 알림
- 데이터 저장/삭제 확인
- 네트워크 연결 상태 변경
- 시스템 업데이트 알림

❌ **부적합한 사용 사례:**
- 중요한 정보나 긴급한 메시지 (Dialog 사용)
- 사용자의 즉시 응답이 필요한 경우
- 영구적으로 표시되어야 하는 정보

## 기본 사용법

### 1. 기본 Toast 컴포넌트

```tsx
import { 
  Toast, 
  ToastProvider, 
  ToastTitle, 
  ToastDescription, 
  ToastClose 
} from '@jonghun-project/ui';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ToastProvider>
      <button onClick={() => setOpen(true)}>
        토스트 보기
      </button>
      
      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>성공!</ToastTitle>
        <ToastDescription>
          작업이 성공적으로 완료되었습니다.
        </ToastDescription>
        <ToastClose />
      </Toast>
    </ToastProvider>
  );
}
```

### 2. 앱 전역 토스트 시스템

```tsx
import { ToastProvider, useToast, useToastHelpers } from '@jonghun-project/ui';

// 앱 최상위에 ToastProvider 설정
function App() {
  return (
    <ToastProvider>
      <MyComponent />
    </ToastProvider>
  );
}

// 어디서든 토스트 사용
function MyComponent() {
  const { toast } = useToast();
  const helpers = useToastHelpers();

  const handleSave = async () => {
    try {
      await saveData();
      helpers.success('저장되었습니다!');
    } catch (error) {
      helpers.error('저장에 실패했습니다.');
    }
  };

  const handleCustomToast = () => {
    toast({
      title: '커스텀 토스트',
      description: '완전히 커스터마이즈된 토스트입니다.',
      variant: 'info',
      duration: 8000,
      action: <button>확인</button>
    });
  };

  return (
    <div>
      <button onClick={handleSave}>저장</button>
      <button onClick={handleCustomToast}>커스텀 토스트</button>
    </div>
  );
}
```

## API 참조

### ToastProvider

앱 전체를 감싸는 토스트 프로바이더입니다.

| Props | Type | Default | Description |
|-------|------|---------|-------------|
| `children` | `ReactNode` | - | 하위 컴포넌트 |
| `defaultDuration` | `number` | `5000` | 기본 토스트 지속 시간 (밀리초) |
| `maxToasts` | `number` | `3` | 최대 토스트 개수 |

### Toast

개별 토스트 컴포넌트입니다.

| Props | Type | Default | Description |
|-------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'error' \| 'warning' \| 'info'` | `'default'` | 토스트 변형 |
| `open` | `boolean` | - | 토스트 열림 상태 |
| `onOpenChange` | `(open: boolean) => void` | - | 상태 변경 핸들러 |
| `duration` | `number` | `5000` | 자동 닫힘 시간 |

### useToast Hook

토스트를 프로그래매틱하게 제어하는 훅입니다.

```tsx
const { toast, dismiss, dismissAll, toasts } = useToast();

// 토스트 생성
const id = toast({
  title: '제목',
  description: '설명',
  variant: 'success',
  duration: 3000,
  action: <button>액션</button>
});

// 특정 토스트 제거
dismiss(id);

// 모든 토스트 제거
dismissAll();
```

### useToastHelpers Hook

편의 함수들을 제공하는 훅입니다.

```tsx
const { success, error, warning, info, default: defaultToast } = useToastHelpers();

success('성공 메시지', '제목');
error('오류 메시지');
warning('경고 메시지');
info('정보 메시지');
defaultToast('기본 메시지');
```

## 변형 (Variants)

### default
기본 스타일의 토스트입니다.
```tsx
<Toast variant="default">
  <ToastDescription>기본 알림입니다.</ToastDescription>
</Toast>
```

### success
성공 상황을 나타내는 녹색 토스트입니다.
```tsx
<Toast variant="success">
  <ToastDescription>성공적으로 저장되었습니다!</ToastDescription>
</Toast>
```

### error
오류 상황을 나타내는 빨간색 토스트입니다.
```tsx
<Toast variant="error">
  <ToastDescription>오류가 발생했습니다.</ToastDescription>
</Toast>
```

### warning
주의가 필요한 상황을 나타내는 노란색 토스트입니다.
```tsx
<Toast variant="warning">
  <ToastDescription>이 작업은 되돌릴 수 없습니다.</ToastDescription>
</Toast>
```

### info
정보를 제공하는 파란색 토스트입니다.
```tsx
<Toast variant="info">
  <ToastDescription>새로운 업데이트가 있습니다.</ToastDescription>
</Toast>
```

## 고급 사용법

### 액션 버튼이 있는 토스트

```tsx
<Toast variant="warning">
  <ToastTitle>파일 삭제됨</ToastTitle>
  <ToastDescription>
    document.pdf가 삭제되었습니다.
  </ToastDescription>
  <ToastAction altText="파일 삭제 실행 취소" asChild>
    <button onClick={handleUndo}>실행 취소</button>
  </ToastAction>
  <ToastClose />
</Toast>
```

### 커스텀 지속 시간

```tsx
// 2초 후 자동 닫힘
<Toast duration={2000}>
  <ToastDescription>짧은 알림</ToastDescription>
</Toast>

// 10초 후 자동 닫힘
<Toast duration={10000}>
  <ToastDescription>긴 알림</ToastDescription>
</Toast>

// 자동 닫힘 비활성화
<Toast duration={Infinity}>
  <ToastDescription>수동으로 닫아야 하는 알림</ToastDescription>
</Toast>
```

### 중복 토스트 방지

```tsx
function useUniqueToast() {
  const { toast } = useToast();
  const toastIds = useRef(new Set());

  const uniqueToast = useCallback((message) => {
    const key = JSON.stringify(message);
    if (!toastIds.current.has(key)) {
      toastIds.current.add(key);
      const id = toast(message);
      
      // 토스트가 닫힐 때 키 제거
      setTimeout(() => {
        toastIds.current.delete(key);
      }, message.duration || 5000);
      
      return id;
    }
  }, [toast]);

  return uniqueToast;
}
```

## 접근성

Toast 컴포넌트는 다음과 같은 접근성 기능을 제공합니다:

### 스크린 리더 지원
- `aria-live="polite"` 속성으로 스크린 리더에서 알림 읽기
- `variant`에 따른 적절한 `type` 설정 (`foreground` vs `background`)

### 키보드 네비게이션
- `F8`: 토스트 영역으로 포커스 이동
- `Escape`: 토스트 닫기
- `Tab` / `Shift+Tab`: 토스트 내 요소 간 이동

### 호버 일시정지
- 마우스를 올리면 자동 닫힘 일시정지
- 포커스 받을 때도 일시정지

### 스와이프 제스처
- 모바일에서 스와이프로 토스트 닫기 가능
- `swipeDirection` 설정으로 방향 제어

## 반응형 디자인

토스트는 다양한 화면 크기에서 최적화되어 표시됩니다:

- **데스크톱**: 우하단에 고정 너비 (390px)
- **모바일**: 화면 하단 전체 너비, 패딩 조정
- **내용 길이**: 긴 텍스트 자동 줄바꿈

## 모범 사례

### 1. 메시지 작성
```tsx
// ✅ 좋은 예
helpers.success('프로필이 업데이트되었습니다');
helpers.error('네트워크 연결을 확인해주세요');

// ❌ 나쁜 예
helpers.success('Success');
helpers.error('Error occurred');
```

### 2. 적절한 변형 선택
```tsx
// ✅ 의미에 맞는 변형 사용
helpers.success('저장 완료');
helpers.error('저장 실패');
helpers.warning('저장하지 않고 나가시겠습니까?');
helpers.info('새 버전이 출시되었습니다');

// ❌ 의미와 맞지 않는 변형
helpers.error('저장되었습니다'); // 성공인데 error variant
```

### 3. 액션 버튼 사용
```tsx
// ✅ 명확한 액션 제공
toast({
  description: '파일이 삭제되었습니다',
  variant: 'warning',
  action: <button onClick={undo}>실행 취소</button>
});

// ✅ 대안 경로 제공
toast({
  description: '오프라인 상태입니다',
  variant: 'warning',
  action: <button onClick={retry}>다시 시도</button>
});
```

## 다크 모드 지원

Toast 컴포넌트는 디자인 시스템의 테마 시스템을 통해 자동으로 다크 모드를 지원합니다. 별도 설정 없이 테마 변경 시 자동으로 적용됩니다.

## 성능 고려사항

- 토스트는 포털을 통해 렌더링되어 성능에 미치는 영향을 최소화
- `maxToasts` 설정으로 메모리 사용량 제한
- 자동 정리 시스템으로 메모리 누수 방지

## 문제 해결

### 토스트가 표시되지 않는 경우
1. `ToastProvider`가 앱 최상위에 있는지 확인
2. `open` 상태가 올바르게 관리되는지 확인
3. CSS z-index 충돌 확인

### 스타일이 적용되지 않는 경우
1. 디자인 시스템 CSS가 올바르게 import되었는지 확인
2. 테마 프로바이더 설정 확인

### 접근성 문제
1. `altText` prop이 액션 버튼에 제공되었는지 확인
2. 적절한 `variant` 사용으로 스크린 리더 지원 확인