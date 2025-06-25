# Toast 컴포넌트

디자인 시스템의 토스트 알림 컴포넌트입니다. **Radix UI Toast**를 기반으로 구축되어 최고 수준의 접근성과 사용성을 제공합니다.

## 기능

- ✅ **Radix UI 기반** - 검증된 접근성과 키보드 내비게이션
- ✅ 5가지 변형 지원 (success, error, warning, info, default)
- ✅ 자동 사라짐 기능 (타이머 설정 가능)
- ✅ 스와이프로 닫기 (모바일 최적화)
- ✅ 여러 토스트 스택 관리
- ✅ 반응형 디자인
- ✅ 부드러운 애니메이션 효과
- ✅ WCAG AA 접근성 준수
- ✅ 다크 모드 지원

## 설치

```bash
npm install @jonghun-project/ui
```

## 기본 사용법

### 1. Provider 및 Toaster 설정

앱의 최상위에서 `ToastProvider`와 `Toaster`를 설정합니다:

```tsx
import { ToastProvider, Toaster } from '@jonghun-project/ui';

function App() {
  return (
    <ToastProvider>
      {/* 앱 컴포넌트들 */}
      <Toaster />
    </ToastProvider>
  );
}
```

### 2. 토스트 사용

컴포넌트에서 `useToast` 훅을 사용하여 토스트를 표시합니다:

```tsx
import { useToast } from '@jonghun-project/ui';

function MyComponent() {
  const { toast } = useToast();

  const handleSuccess = () => {
    toast.success('성공!', '작업이 성공적으로 완료되었습니다.');
  };

  const handleError = () => {
    toast.error('오류 발생', '문제가 발생했습니다. 다시 시도해주세요.');
  };

  const handleWarning = () => {
    toast.warning('주의', '이 작업은 되돌릴 수 없습니다.');
  };

  const handleInfo = () => {
    toast.info('정보', '새로운 업데이트가 있습니다.');
  };

  return (
    <div>
      <button onClick={handleSuccess}>성공 토스트</button>
      <button onClick={handleError}>오류 토스트</button>
      <button onClick={handleWarning}>경고 토스트</button>
      <button onClick={handleInfo}>정보 토스트</button>
    </div>
  );
}
```

## API

### ToastProvider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `duration` | `number` | `5000` | 기본 토스트 지속 시간 (ms) |
| `swipeThreshold` | `number` | `50` | 스와이프 임계값 (px) |
| `children` | `ReactNode` | - | 자식 컴포넌트 |

### useToast Hook

`useToast` 훅은 다음 메서드들을 반환합니다:

#### toast 메서드들

- `toast.success(title, description?, options?)` - 성공 토스트
- `toast.error(title, description?, options?)` - 오류 토스트  
- `toast.warning(title, description?, options?)` - 경고 토스트
- `toast.info(title, description?, options?)` - 정보 토스트
- `toast.default(title, description?, options?)` - 기본 토스트
- `toast.custom(toastOptions)` - 커스텀 토스트

#### 관리 메서드들

- `removeToast(id)` - 특정 토스트 제거
- `clearToasts()` - 모든 토스트 제거

### Toast Options

```tsx
interface ToastOptions {
  duration?: number;    // 자동 사라짐 시간 (ms)
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  action?: {            // 액션 버튼
    label: string;
    onClick: () => void;
  };
  onOpenChange?: (open: boolean) => void; // 열림/닫힘 상태 변경 콜백
}
```

## 고급 사용법

### 액션 버튼이 있는 토스트

```tsx
const { toast } = useToast();

toast.info('업데이트 가능', '새 버전이 출시되었습니다.', {
  action: {
    label: '업데이트',
    onClick: () => {
      // 업데이트 로직
      console.log('업데이트 시작');
    }
  }
});
```

### 커스텀 duration 설정

```tsx
const { toast } = useToast();

// 10초 후 자동으로 사라짐
toast.success('저장 완료', '파일이 저장되었습니다.', { duration: 10000 });

// 영구 토스트 (수동으로만 닫기)
toast.error('중요한 오류', '즉시 확인이 필요합니다.', { duration: Infinity });
```

### 상태 변경 콜백

```tsx
const { toast } = useToast();

toast.info('알림', '이 메시지를 확인하세요.', {
  onOpenChange: (open) => {
    if (!open) {
      console.log('토스트가 닫혔습니다.');
      // 추가 로직 수행
    }
  }
});
```

### 모든 토스트 제거

```tsx
const { clearToasts } = useToast();

const handleClearAll = () => {
  clearToasts();
};
```

### 완전 커스텀 토스트

```tsx
const { toast } = useToast();

toast.custom({
  title: '커스텀 토스트',
  description: '완전히 사용자 정의된 토스트입니다.',
  variant: 'success',
  duration: 8000,
  action: {
    label: '확인',
    onClick: () => console.log('확인됨')
  },
  onOpenChange: (open) => console.log('상태:', open)
});
```

### 조건부 토스트

```tsx
import { useToast } from '@jonghun-project/ui';

function ApiComponent() {
  const { toast } = useToast();

  const callApi = async () => {
    try {
      const response = await fetch('/api/data');
      
      if (response.ok) {
        toast.success('성공', '데이터를 성공적으로 가져왔습니다.');
      } else {
        toast.warning('경고', '일부 데이터를 가져오지 못했습니다.');
      }
    } catch (error) {
      toast.error('오류', '네트워크 연결을 확인해주세요.', {
        action: {
          label: '재시도',
          onClick: callApi
        }
      });
    }
  };

  return <button onClick={callApi}>API 호출</button>;
}
```

## 기술적 우수성

### Radix UI 기반
- **검증된 접근성**: WCAG AA 표준 준수
- **키보드 내비게이션**: 완전한 키보드 지원
- **스크린 리더 호환**: 모든 보조 기술과 호환
- **포커스 관리**: 자동 포커스 관리 및 트래핑

### 스타일링 시스템
- **vanilla-extract**: 성능 최적화된 CSS-in-TS
- **다크 모드**: 자동 테마 전환 지원
- **반응형**: 모바일 퍼스트 디자인
- **커스터마이징**: 완전한 스타일 오버라이드 가능

### 사용자 경험
- **스와이프 제스처**: 모바일에서 직관적인 닫기
- **애니메이션**: 부드러운 슬라이드 효과
- **스택 관리**: 여러 토스트 자동 관리
- **터치 최적화**: 터치 디바이스 최적화

## 접근성 특징

- **ARIA 라벨**: 모든 요소에 적절한 ARIA 속성
- **라이브 리전**: 스크린 리더 자동 알림
- **키보드 접근**: Tab/Enter/Escape 키 지원
- **색상 대비**: WCAG AA 색상 대비 준수
- **모션 감소**: prefers-reduced-motion 지원

## 예제

### 폼 제출 시 토스트 표시

```tsx
import { useToast } from '@jonghun-project/ui';

function ContactForm() {
  const { toast } = useToast();

  const handleSubmit = async (data) => {
    try {
      await submitForm(data);
      toast.success('전송 완료', '문의사항이 성공적으로 전송되었습니다.');
    } catch (error) {
      toast.error('전송 실패', '오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 폼 필드들 */}
      <button type="submit">전송</button>
    </form>
  );
}
```

### 파일 업로드 진행 상황

```tsx
import { useToast } from '@jonghun-project/ui';

function FileUpload() {
  const { toast } = useToast();

  const handleUpload = async (file) => {
    const uploadToastId = toast.info('업로드 중...', '파일을 업로드하고 있습니다.', {
      duration: 0,
      closable: false
    });

    try {
      await uploadFile(file);
      toast.success('업로드 완료', '파일이 성공적으로 업로드되었습니다.');
    } catch (error) {
      toast.error('업로드 실패', '파일 업로드 중 오류가 발생했습니다.');
    }
  };

  return (
    <input 
      type="file" 
      onChange={(e) => handleUpload(e.target.files[0])} 
    />
  );
}
```