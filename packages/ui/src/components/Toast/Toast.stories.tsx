import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastProviderPrimitive,
  SimpleToast
} from './Toast';
import { Button } from '../Button/Button';

const meta: Meta<typeof Toast> = {
  title: 'Design System/Atoms/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: `
## Purpose
사용자에게 알림 메시지를 표시하기 위한 토스트 컴포넌트입니다.

## Usage Guidelines
- 성공, 에러, 경고, 정보 메시지 표시에 사용
- 자동으로 사라지는 알림에 적합
- 사용자 액션이 필요한 경우 액션 버튼 포함
- 접근성을 위해 적절한 ARIA 라벨 사용

## Change History
- v1.0.0: Initial implementation with Radix UI primitives
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'error', 'warning', 'info'],
      description: '토스트의 시각적 스타일 변형'
    },
    duration: {
      control: { type: 'number' },
      description: '토스트가 표시되는 시간 (밀리초)'
    }
  },
  decorators: [
    (Story) => (
      <ToastProviderPrimitive>
        <Story />
      </ToastProviderPrimitive>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story showing primary use case
export const Default: Story = {
  args: {
    variant: 'default',
    children: (
      <>
        <ToastTitle>Toast Title</ToastTitle>
        <ToastDescription>This is a default toast message.</ToastDescription>
        <ToastClose />
      </>
    )
  }
};

// Stories for ALL use cases and variants
export const AllVariants: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [variant, setVariant] = useState<'default' | 'success' | 'error' | 'warning' | 'info'>('default');

    const showToast = (v: typeof variant) => {
      setVariant(v);
      setOpen(true);
    };

    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button onClick={() => showToast('default')}>Show Default Toast</Button>
        <Button onClick={() => showToast('success')}>Show Success Toast</Button>
        <Button onClick={() => showToast('error')}>Show Error Toast</Button>
        <Button onClick={() => showToast('warning')}>Show Warning Toast</Button>
        <Button onClick={() => showToast('info')}>Show Info Toast</Button>

        <Toast variant={variant} open={open} onOpenChange={setOpen}>
          <ToastTitle>
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Toast
          </ToastTitle>
          <ToastDescription>
            This is a {variant} toast message.
          </ToastDescription>
          <ToastClose />
        </Toast>
      </div>
    );
  }
};

export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Show Toast with Action</Button>

        <Toast open={open} onOpenChange={setOpen}>
          <ToastTitle>Undo Action</ToastTitle>
          <ToastDescription>Your action has been completed.</ToastDescription>
          <ToastAction altText="Undo the action" asChild>
            <Button size="sm" variant="outline">Undo</Button>
          </ToastAction>
          <ToastClose />
        </Toast>
      </div>
    );
  }
};

export const SimpleToastExample: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Show Simple Toast</Button>

        <SimpleToast
          title="Success!"
          description="Your changes have been saved successfully."
          variant="success"
          open={open}
          onOpenChange={setOpen}
          action={<Button size="sm" variant="outline">View</Button>}
        />
      </div>
    );
  }
};

export const DifferentDurations: Story = {
  render: () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button onClick={() => setOpen1(true)}>Short Toast (2s)</Button>
        <Button onClick={() => setOpen2(true)}>Medium Toast (5s)</Button>
        <Button onClick={() => setOpen3(true)}>Long Toast (10s)</Button>

        <Toast open={open1} onOpenChange={setOpen1} duration={2000}>
          <ToastTitle>Short Toast</ToastTitle>
          <ToastDescription>This toast will disappear in 2 seconds.</ToastDescription>
          <ToastClose />
        </Toast>

        <Toast open={open2} onOpenChange={setOpen2} duration={5000}>
          <ToastTitle>Medium Toast</ToastTitle>
          <ToastDescription>This toast will disappear in 5 seconds.</ToastDescription>
          <ToastClose />
        </Toast>

        <Toast open={open3} onOpenChange={setOpen3} duration={10000}>
          <ToastTitle>Long Toast</ToastTitle>
          <ToastDescription>This toast will disappear in 10 seconds.</ToastDescription>
          <ToastClose />
        </Toast>
      </div>
    );
  }
};

export const ErrorToast: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Show Error Toast</Button>

        <Toast variant="error" open={open} onOpenChange={setOpen}>
          <ToastTitle>Error</ToastTitle>
          <ToastDescription>Something went wrong. Please try again.</ToastDescription>
          <ToastAction altText="Try again" asChild>
            <Button size="sm" variant="outline">Try Again</Button>
          </ToastAction>
          <ToastClose />
        </Toast>
      </div>
    );
  }
};

export const SuccessToast: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Show Success Toast</Button>

        <Toast variant="success" open={open} onOpenChange={setOpen}>
          <ToastTitle>Success!</ToastTitle>
          <ToastDescription>Your profile has been updated successfully.</ToastDescription>
          <ToastClose />
        </Toast>
      </div>
    );
  }
};

export const WarningToast: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Show Warning Toast</Button>

        <Toast variant="warning" open={open} onOpenChange={setOpen}>
          <ToastTitle>Warning</ToastTitle>
          <ToastDescription>Your session will expire in 5 minutes.</ToastDescription>
          <ToastAction altText="Extend session" asChild>
            <Button size="sm" variant="outline">Extend</Button>
          </ToastAction>
          <ToastClose />
        </Toast>
      </div>
    );
  }
};

export const InfoToast: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Show Info Toast</Button>

        <Toast variant="info" open={open} onOpenChange={setOpen}>
          <ToastTitle>Information</ToastTitle>
          <ToastDescription>New features are available. Check them out!</ToastDescription>
          <ToastAction altText="Learn more" asChild>
            <Button size="sm" variant="outline">Learn More</Button>
          </ToastAction>
          <ToastClose />
        </Toast>
      </div>
    );
  }
};

// Interactive story for testing
export const Playground: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [variant, setVariant] = useState<'default' | 'success' | 'error' | 'warning' | 'info'>('default');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button onClick={() => setOpen(true)}>Show Toast</Button>
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value as typeof variant)}
            style={{ padding: '0.5rem' }}
          >
            <option value="default">Default</option>
            <option value="success">Success</option>
            <option value="error">Error</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
          </select>
        </div>

        <Toast variant={variant} open={open} onOpenChange={setOpen}>
          <ToastTitle>Interactive Toast</ToastTitle>
          <ToastDescription>
            This is a {variant} toast. Try changing the variant above!
          </ToastDescription>
          <ToastAction altText="Action" asChild>
            <Button size="sm" variant="outline">Action</Button>
          </ToastAction>
          <ToastClose />
        </Toast>
      </div>
    );
  }
}; 