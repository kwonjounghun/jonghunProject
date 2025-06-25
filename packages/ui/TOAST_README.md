# Toast 컴포넌트

디자인 시스템의 토스트 알림 컴포넌트입니다. 사용자에게 임시적인 메시지를 표시하는데 사용됩니다.

## 기능

- ✅ 5가지 타입 지원 (success, error, warning, info, default)
- ✅ 자동 사라짐 기능 (타이머 설정 가능)
- ✅ 수동 닫기 기능
- ✅ 진행률 바 표시
- ✅ 여러 토스트 스택 관리
- ✅ 반응형 디자인
- ✅ 애니메이션 효과
- ✅ 접근성 지원 (ARIA)

## 설치

```bash
npm install @jonghun-project/ui
```

## 기본 사용법

### 1. Provider 설정

앱의 최상위에서 `ToastProvider`를 설정합니다:

```tsx
import { ToastProvider } from '@jonghun-project/ui';

function App() {
  return (
    <ToastProvider maxToasts={5}>
      {/* 앱 컴포넌트들 */}
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
| `maxToasts` | `number` | `5` | 최대 토스트 개수 |
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
  duration?: number;    // 자동 사라짐 시간 (ms), 0이면 수동으로만 닫기
  closable?: boolean;   // 닫기 버튼 표시 여부
  onClose?: () => void; // 토스트가 닫힐 때 콜백
}
```

## 고급 사용법

### 커스텀 duration 설정

```tsx
const { toast } = useToast();

// 10초 후 자동으로 사라짐
toast.success('저장 완료', '파일이 저장되었습니다.', { duration: 10000 });

// 수동으로만 닫을 수 있음
toast.error('중요한 오류', '즉시 확인이 필요합니다.', { duration: 0 });
```

### 닫기 콜백 사용

```tsx
const { toast } = useToast();

toast.info('알림', '이 메시지를 확인하세요.', {
  onClose: () => {
    console.log('토스트가 닫혔습니다.');
    // 추가 로직 수행
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

### 커스텀 토스트

```tsx
const { toast } = useToast();

toast.custom({
  type: 'success',
  title: '커스텀 제목',
  description: '커스텀 설명',
  duration: 3000,
  closable: true,
  onClose: () => console.log('닫힘')
});
```

## 스타일링

토스트 컴포넌트는 디자인 시스템의 테마를 자동으로 따릅니다. 각 타입별로 다른 색상이 적용됩니다:

- **Success**: 초록색 계열
- **Error**: 빨간색 계열  
- **Warning**: 주황색 계열
- **Info**: 파란색 계열
- **Default**: 회색 계열

## 접근성

- ARIA 역할과 속성이 적절히 설정됨 (`role="alert"`, `aria-live="polite"`)
- 키보드 내비게이션 지원
- 스크린 리더 친화적

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