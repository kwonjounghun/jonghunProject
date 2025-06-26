# Modal Component

접근성을 고려한 모달 다이얼로그 컴포넌트입니다. Radix UI Dialog를 기반으로 구현되었습니다.

## 특징

- **접근성**: ARIA 표준을 준수하여 스크린 리더 친화적
- **키보드 네비게이션**: Tab, Shift+Tab, Escape 키 지원
- **포커스 관리**: 모달 열림/닫힘 시 포커스 자동 관리
- **애니메이션**: 부드러운 페이드인/아웃 효과
- **반응형**: 다양한 화면 크기에 대응
- **커스터마이징**: 크기, 동작 등 다양한 옵션 제공

## 기본 사용법

```tsx
import { Modal } from '@jonghun-project/ui';

function App() {
  return (
    <Modal 
      title="기본 모달"
      description="모달에 대한 설명입니다."
      trigger={<button>모달 열기</button>}
    >
      <p>모달 내용이 여기에 표시됩니다.</p>
    </Modal>
  );
}
```

## 제어 가능한 모달

```tsx
import { useState } from 'react';
import { Modal } from '@jonghun-project/ui';

function App() {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setOpen(true)}>모달 열기</button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        title="제어 가능한 모달"
        description="JavaScript로 제어할 수 있는 모달입니다."
      >
        <p>이 모달은 외부 상태로 제어됩니다.</p>
        <button onClick={() => setOpen(false)}>닫기</button>
      </Modal>
    </div>
  );
}
```

## 컴포넌트 조합 사용

```tsx
import { Modal } from '@jonghun-project/ui';

function App() {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setOpen(true)}>고급 모달 열기</button>
      <Modal.Root open={open} onOpenChange={setOpen}>
        <Modal.Content size="lg">
          <Modal.Header>
            <div>
              <Modal.Title>고급 모달</Modal.Title>
              <Modal.Description>
                컴포넌트를 조합하여 만든 모달입니다.
              </Modal.Description>
            </div>
            <Modal.Close />
          </Modal.Header>
          
          <Modal.Body>
            <p>이 모달은 개별 컴포넌트들을 조합하여 만들었습니다.</p>
          </Modal.Body>
          
          <Modal.Footer>
            <button onClick={() => setOpen(false)}>취소</button>
            <button onClick={() => setOpen(false)}>확인</button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </div>
  );
}
```

## Props

### Modal

| Props | Type | Default | Description |
|-------|------|---------|-------------|
| `open` | `boolean` | `undefined` | 모달 열림 상태 |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | 모달 열림 상태 변경 핸들러 |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | 모달 크기 |
| `title` | `string` | `undefined` | 모달 제목 |
| `description` | `string` | `undefined` | 모달 설명 |
| `hideCloseButton` | `boolean` | `false` | 닫기 버튼 숨김 여부 |
| `closeOnOverlayClick` | `boolean` | `true` | 오버레이 클릭으로 닫기 여부 |
| `closeOnEsc` | `boolean` | `true` | ESC 키로 닫기 여부 |
| `trigger` | `React.ReactNode` | `undefined` | 트리거 요소 (버튼 등) |
| `children` | `React.ReactNode` | `undefined` | 모달 내용 |

### 크기 옵션

- `sm`: 최대 너비 400px
- `md`: 최대 너비 500px (기본값)
- `lg`: 최대 너비 600px
- `xl`: 최대 너비 800px
- `full`: 화면의 95%

## 하위 컴포넌트

- `Modal.Root`: 모달의 루트 컨테이너
- `Modal.Trigger`: 모달을 여는 트리거 요소
- `Modal.Content`: 모달 콘텐츠 컨테이너
- `Modal.Overlay`: 모달 오버레이
- `Modal.Header`: 모달 헤더
- `Modal.Title`: 모달 제목
- `Modal.Description`: 모달 설명
- `Modal.Body`: 모달 본문
- `Modal.Footer`: 모달 푸터
- `Modal.Close`: 모달 닫기 버튼

## 접근성

이 컴포넌트는 다음과 같은 접근성 기능을 제공합니다:

- **ARIA 속성**: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`
- **포커스 트랩**: 모달 내부에서만 포커스 이동
- **포커스 복원**: 모달 닫힘 시 이전 포커스 위치로 복원
- **키보드 지원**: Escape 키로 모달 닫기
- **스크린 리더**: 적절한 라벨과 설명 제공

## 스타일링

이 컴포넌트는 Vanilla Extract CSS-in-JS를 사용하여 스타일링되었습니다. 커스텀 스타일을 적용하려면 CSS 클래스를 오버라이드하거나 CSS 변수를 수정할 수 있습니다.