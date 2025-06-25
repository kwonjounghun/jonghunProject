import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Design System/Atoms/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `
## Purpose
사용자 입력을 받기 위한 입력 필드 컴포넌트입니다.

## Usage Guidelines
- 폼에서 텍스트, 이메일, 비밀번호 등의 입력에 사용
- label과 함께 사용하여 접근성 향상
- error 상태로 유효성 검사 결과 표시
- helperText로 추가 설명 제공

## Change History
- v1.0.0: Initial implementation with vanilla-extract styling
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'flushed'],
      description: '입력 필드의 시각적 스타일 변형'
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: '입력 필드의 크기'
    },
    state: {
      control: { type: 'select' },
      options: ['normal', 'error', 'success'],
      description: '입력 필드의 상태'
    },
    disabled: {
      control: { type: 'boolean' },
      description: '입력 필드 비활성화 상태'
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: '전체 너비 사용 여부'
    },
    label: {
      control: { type: 'text' },
      description: '입력 필드 라벨'
    },
    error: {
      control: { type: 'text' },
      description: '에러 메시지'
    },
    helperText: {
      control: { type: 'text' },
      description: '도움말 텍스트'
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더 텍스트'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story showing primary use case
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    label: 'Email',
    placeholder: 'Enter your email'
  }
};

// Stories for ALL use cases and variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <Input
        variant="default"
        label="Default Input"
        placeholder="Default variant"
      />
      <Input
        variant="filled"
        label="Filled Input"
        placeholder="Filled variant"
      />
      <Input
        variant="flushed"
        label="Flushed Input"
        placeholder="Flushed variant"
      />
    </div>
  )
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <Input
        size="sm"
        label="Small Input"
        placeholder="Small size"
      />
      <Input
        size="md"
        label="Medium Input"
        placeholder="Medium size"
      />
      <Input
        size="lg"
        label="Large Input"
        placeholder="Large size"
      />
    </div>
  )
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <Input
        state="normal"
        label="Normal State"
        placeholder="Normal input"
      />
      <Input
        state="error"
        label="Error State"
        placeholder="Error input"
        error="This field is required"
      />
      <Input
        state="success"
        label="Success State"
        placeholder="Success input"
        helperText="Input is valid"
      />
    </div>
  )
};

export const WithHelperText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        helperText="Password must be at least 8 characters long"
      />
      <Input
        label="Username"
        placeholder="Enter your username"
        helperText="Username must be unique"
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        helperText="We'll never share your email"
      />
    </div>
  )
};

export const WithErrors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        error="Please enter a valid email address"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        error="Password must be at least 8 characters"
      />
      <Input
        label="Username"
        placeholder="Enter your username"
        error="Username is already taken"
      />
    </div>
  )
};

export const DisabledInputs: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <Input
        label="Disabled Input"
        placeholder="This input is disabled"
        disabled
      />
      <Input
        label="Disabled with Value"
        value="Disabled value"
        disabled
      />
    </div>
  )
};

export const FullWidthInputs: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <Input
        label="Full Width Input"
        placeholder="This input takes full width"
        fullWidth
      />
      <Input
        label="Another Full Width Input"
        placeholder="Another full width input"
        fullWidth
      />
    </div>
  )
};

export const DifferentTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <Input
        label="Text Input"
        type="text"
        placeholder="Regular text input"
      />
      <Input
        label="Email Input"
        type="email"
        placeholder="email@example.com"
      />
      <Input
        label="Password Input"
        type="password"
        placeholder="Enter password"
      />
      <Input
        label="Number Input"
        type="number"
        placeholder="Enter a number"
      />
      <Input
        label="URL Input"
        type="url"
        placeholder="https://example.com"
      />
    </div>
  )
};

// Interactive story for testing
export const Playground: Story = {
  args: {
    variant: 'default',
    size: 'md',
    state: 'normal',
    label: 'Interactive Input',
    placeholder: 'Try changing the controls above!',
    helperText: 'This is helper text'
  }
}; 