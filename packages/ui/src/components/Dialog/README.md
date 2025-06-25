# Dialog 컴포넌트

Radix UI와 vanilla-extract를 사용하여 구현된 모던하고 접근성을 고려한 다이얼로그 컴포넌트입니다.

## 특징

- ✅ **접근성**: ARIA 표준을 준수하며 키보드 네비게이션 지원
- ✅ **애니메이션**: 부드러운 fade-in/out 및 scale 애니메이션
- ✅ **반응형**: 다양한 화면 크기에 적응
- ✅ **사용자 정의**: vanilla-extract를 통한 완전한 스타일 커스터마이징
- ✅ **다양한 크기**: sm, md, lg, xl, full 크기 지원
- ✅ **유연한 API**: 컴포넌트 조합 또는 간단한 사용법 모두 지원

## 설치

```bash
pnpm add @radix-ui/react-dialog
```

## 기본 사용법

### 1. 컴포넌트 조합 방식

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
} from '@jonghun-project/ui';

function MyDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <button>다이얼로그 열기</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>제목</DialogTitle>
          <DialogDescription>설명</DialogDescription>
          <DialogClose />
        </DialogHeader>
        <DialogBody>
          <p>다이얼로그 내용</p>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <button>취소</button>
          </DialogClose>
          <button>확인</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### 2. 간단한 사용법 (SimpleDialog)

```tsx
import { SimpleDialog, DialogClose } from '@jonghun-project/ui';

function MySimpleDialog() {
  return (
    <SimpleDialog
      title="확인"
      description="정말로 삭제하시겠습니까?"
      size="sm"
      trigger={<button>삭제</button>}
      footer={
        <>
          <DialogClose asChild>
            <button>취소</button>
          </DialogClose>
          <button>확인</button>
        </>
      }
    >
      <p>이 작업은 되돌릴 수 없습니다.</p>
    </SimpleDialog>
  );
}
```

## 컨트롤된 다이얼로그

```tsx
import { Dialog, DialogContent } from '@jonghun-project/ui';

function ControlledDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>열기</button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          {/* 다이얼로그 내용 */}
        </DialogContent>
      </Dialog>
    </>
  );
}
```

## 크기 옵션

- `sm`: 400px
- `md`: 500px (기본값)
- `lg`: 600px
- `xl`: 800px
- `full`: 90vw x 90vh

```tsx
<DialogContent size="lg">
  {/* 내용 */}
</DialogContent>
```

## API 참조

### Dialog

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | 다이얼로그 열림 상태 |
| `onOpenChange` | `(open: boolean) => void` | - | 상태 변경 핸들러 |
| `defaultOpen` | `boolean` | `false` | 초기 열림 상태 |

### DialogContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | 다이얼로그 크기 |
| `className` | `string` | - | 추가 CSS 클래스 |
| `onEscapeKeyDown` | `(event: KeyboardEvent) => void` | - | ESC 키 핸들러 |
| `onPointerDownOutside` | `(event: CustomEvent) => void` | - | 외부 클릭 핸들러 |

### SimpleDialog

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | 다이얼로그 제목 |
| `description` | `string` | - | 다이얼로그 설명 |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | 다이얼로그 크기 |
| `trigger` | `React.ReactNode` | - | 트리거 요소 |
| `footer` | `React.ReactNode` | - | 푸터 내용 |

## 스타일 커스터마이징

vanilla-extract를 사용하여 스타일을 완전히 커스터마이징할 수 있습니다:

```ts
// custom-dialog.css.ts
import { style } from '@vanilla-extract/css';

export const customOverlay = style({
  backgroundColor: 'rgba(255, 0, 0, 0.5)', // 빨간 오버레이
});

export const customContent = style({
  borderRadius: '20px',
  border: '2px solid #000',
});
```

```tsx
// 커스텀 스타일 적용
<DialogOverlay className={customOverlay}>
  <DialogContent className={customContent}>
    {/* 내용 */}
  </DialogContent>
</DialogOverlay>
```

## 접근성

이 컴포넌트는 다음과 같은 접근성 기능을 제공합니다:

- **키보드 네비게이션**: Tab, Shift+Tab, ESC 키 지원
- **포커스 관리**: 다이얼로그 열기/닫기 시 적절한 포커스 관리
- **ARIA 속성**: `role`, `aria-labelledby`, `aria-describedby` 등
- **스크린 리더**: 모든 내용이 스크린 리더에서 올바르게 읽힘

## 예제

더 많은 사용 예제는 `Dialog.stories.tsx` 파일을 참조하세요.

---

**참고**: 이 컴포넌트는 [@radix-ui/react-dialog](https://www.radix-ui.com/docs/primitives/components/dialog)를 기반으로 구현되었습니다.