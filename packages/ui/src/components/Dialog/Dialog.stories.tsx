import React from 'react';
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
  SimpleDialog
} from './Dialog';

// 기본 사용법 예제
export const BasicDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <button>다이얼로그 열기</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>기본 다이얼로그</DialogTitle>
          <DialogDescription>
            이것은 기본적인 다이얼로그 예제입니다.
          </DialogDescription>
          <DialogClose />
        </DialogHeader>
        <DialogBody>
          <p>다이얼로그의 본문 내용이 여기에 들어갑니다.</p>
          <p>여러 줄의 텍스트나 다른 컴포넌트들을 포함할 수 있습니다.</p>
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
};

// 다양한 크기 예제
export const DialogSizes = () => {
  const sizes = ['sm', 'md', 'lg', 'xl'] as const;
  
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {sizes.map((size) => (
        <Dialog key={size}>
          <DialogTrigger>
            <button>{size.toUpperCase()} 다이얼로그</button>
          </DialogTrigger>
          <DialogContent size={size}>
            <DialogHeader>
              <DialogTitle>{size.toUpperCase()} 크기 다이얼로그</DialogTitle>
              <DialogDescription>
                이것은 {size} 크기의 다이얼로그입니다.
              </DialogDescription>
              <DialogClose />
            </DialogHeader>
            <DialogBody>
              <p>이 다이얼로그는 {size} 크기로 설정되어 있습니다.</p>
              <p>크기에 따라 다이얼로그의 너비가 조정됩니다.</p>
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <button>닫기</button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

// 컨트롤된 다이얼로그 예제
export const ControlledDialog = () => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <div>
      <button onClick={() => setOpen(true)}>
        컨트롤된 다이얼로그 열기
      </button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>컨트롤된 다이얼로그</DialogTitle>
            <DialogDescription>
              이 다이얼로그는 외부 상태로 제어됩니다.
            </DialogDescription>
            <DialogClose />
          </DialogHeader>
          <DialogBody>
            <p>현재 다이얼로그 상태: {open ? '열림' : '닫힘'}</p>
            <p>외부 버튼을 통해 다이얼로그를 열 수 있습니다.</p>
          </DialogBody>
          <DialogFooter>
            <button onClick={() => setOpen(false)}>
              프로그래매틱하게 닫기
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// 간단한 다이얼로그 예제
export const SimpleDialogExample = () => {
  return (
    <SimpleDialog
      title="간단한 다이얼로그"
      description="SimpleDialog 컴포넌트를 사용한 예제입니다."
      size="md"
      trigger={<button>간단한 다이얼로그 열기</button>}
      footer={
        <>
          <DialogClose asChild>
            <button>취소</button>
          </DialogClose>
          <button style={{ 
            backgroundColor: '#3b82f6', 
            color: 'white', 
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            확인
          </button>
        </>
      }
    >
      <p>SimpleDialog 컴포넌트를 사용하면 더 간단하게 다이얼로그를 만들 수 있습니다.</p>
      <p>헤더, 바디, 푸터가 자동으로 구성됩니다.</p>
    </SimpleDialog>
  );
};

// 긴 내용을 가진 다이얼로그 예제
export const LongContentDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <button>긴 내용 다이얼로그</button>
      </DialogTrigger>
      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>긴 내용을 가진 다이얼로그</DialogTitle>
          <DialogDescription>
            스크롤이 필요한 긴 내용을 보여주는 예제입니다.
          </DialogDescription>
          <DialogClose />
        </DialogHeader>
        <DialogBody>
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i} style={{ marginBottom: '16px' }}>
              이것은 {i + 1}번째 문단입니다. 다이얼로그가 화면 높이를 초과할 때 
              스크롤이 어떻게 작동하는지 보여주기 위한 예제 텍스트입니다. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <button>닫기</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// 확인 다이얼로그 예제
export const ConfirmDialog = () => {
  const [result, setResult] = React.useState<string>('');
  
  const handleConfirm = () => {
    setResult('확인되었습니다!');
  };
  
  const handleCancel = () => {
    setResult('취소되었습니다.');
  };
  
  return (
    <div>
      <p>결과: {result}</p>
      <Dialog>
        <DialogTrigger>
          <button style={{ 
            backgroundColor: '#ef4444', 
            color: 'white', 
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            삭제하기
          </button>
        </DialogTrigger>
        <DialogContent size="sm">
          <DialogHeader>
            <DialogTitle>정말로 삭제하시겠습니까?</DialogTitle>
            <DialogDescription>
              이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?
            </DialogDescription>
            <DialogClose />
          </DialogHeader>
          <DialogBody>
            <p>⚠️ 주의: 이 작업을 수행하면 데이터가 영구적으로 삭제됩니다.</p>
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <button onClick={handleCancel}>
                취소
              </button>
            </DialogClose>
            <DialogClose asChild>
              <button 
                onClick={handleConfirm}
                style={{ 
                  backgroundColor: '#ef4444', 
                  color: 'white', 
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                삭제
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default {
  BasicDialog,
  DialogSizes,
  ControlledDialog,
  SimpleDialogExample,
  LongContentDialog,
  ConfirmDialog
};