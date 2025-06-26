import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '접근성을 고려한 모달 다이얼로그 컴포넌트입니다. Radix UI Dialog를 기반으로 구현되었습니다.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: '모달 열림 상태',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: '모달 크기',
    },
    title: {
      control: 'text',
      description: '모달 제목',
    },
    description: {
      control: 'text',
      description: '모달 설명',
    },
    hideCloseButton: {
      control: 'boolean',
      description: '닫기 버튼 숨김 여부',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: '오버레이 클릭으로 닫기 여부',
    },
    closeOnEsc: {
      control: 'boolean',
      description: 'ESC 키로 닫기 여부',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

// 기본 모달
export const Default: Story = {
  args: {
    title: '모달 제목',
    description: '모달에 대한 설명입니다.',
    children: '모달 내용이 여기에 표시됩니다.',
    trigger: <button>모달 열기</button>,
  },
};

// 크기별 모달
export const Sizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);
    
    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <Modal
            key={size}
            size={size}
            open={openSize === size}
            onOpenChange={(open) => setOpenSize(open ? size : null)}
            title={`${size.toUpperCase()} 모달`}
            description={`${size} 크기의 모달입니다.`}
            trigger={<button>{size.toUpperCase()} 모달</button>}
          >
            <p>이것은 {size} 크기의 모달 내용입니다.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Modal>
        ))}
      </div>
    );
  },
};

// 제어 가능한 모달
export const Controlled: Story = {
  render: () => {
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
          <div style={{ marginTop: '1rem' }}>
            <button onClick={() => setOpen(false)}>닫기</button>
          </div>
        </Modal>
      </div>
    );
  },
};

// 컴포넌트 조합 사용
export const ComposedModal: Story = {
  render: () => {
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
              <p>더 세밀한 제어가 가능합니다.</p>
              
              <div style={{ 
                padding: '1rem', 
                backgroundColor: '#f5f5f5', 
                borderRadius: '0.5rem',
                margin: '1rem 0'
              }}>
                <h4 style={{ margin: '0 0 0.5rem 0' }}>추가 정보</h4>
                <p style={{ margin: 0, fontSize: '0.875rem' }}>
                  Modal.Root, Modal.Content, Modal.Header, Modal.Body, Modal.Footer 등의 
                  컴포넌트를 조합하여 원하는 레이아웃을 구성할 수 있습니다.
                </p>
              </div>
            </Modal.Body>
            
            <Modal.Footer>
              <button onClick={() => setOpen(false)}>취소</button>
              <button 
                onClick={() => setOpen(false)}
                style={{ 
                  marginLeft: '0.5rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.25rem'
                }}
              >
                확인
              </button>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Root>
      </div>
    );
  },
};

// 긴 내용의 모달
export const LongContent: Story = {
  args: {
    title: '긴 내용의 모달',
    description: '스크롤이 가능한 모달입니다.',
    trigger: <button>긴 내용 모달 열기</button>,
    children: (
      <div>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i}>
            이것은 긴 내용을 시뮬레이션하기 위한 단락 {i + 1}입니다. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </div>
    ),
  },
};

// 닫기 버튼 없는 모달
export const NoCloseButton: Story = {
  args: {
    title: '닫기 버튼 없는 모달',
    description: '닫기 버튼이 숨겨진 모달입니다.',
    hideCloseButton: true,
    closeOnOverlayClick: false,
    closeOnEsc: false,
    trigger: <button>강제 모달 열기</button>,
    children: (
      <div>
        <p>이 모달은 닫기 버튼이 없고, 오버레이 클릭이나 ESC 키로 닫을 수 없습니다.</p>
        <p>명시적인 액션이 필요합니다.</p>
      </div>
    ),
  },
};

// 전체 화면 모달
export const FullScreen: Story = {
  args: {
    size: 'full',
    title: '전체 화면 모달',
    description: '화면 전체를 차지하는 모달입니다.',
    trigger: <button>전체 화면 모달 열기</button>,
    children: (
      <div>
        <p>이 모달은 화면의 대부분을 차지합니다.</p>
        <p>많은 내용을 표시해야 할 때 유용합니다.</p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          {Array.from({ length: 6 }, (_, i) => (
            <div 
              key={i}
              style={{
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '0.5rem',
                border: '1px solid #dee2e6'
              }}
            >
              <h4>카드 {i + 1}</h4>
              <p>카드 내용입니다.</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
};