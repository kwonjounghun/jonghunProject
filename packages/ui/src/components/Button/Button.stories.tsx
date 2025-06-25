import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
## Purpose
사용자 액션을 트리거하기 위한 기본적인 버튼 컴포넌트입니다.

## Usage Guidelines
- 폼 제출, 모달 열기, 페이지 이동 등 사용자 액션에 사용
- 주요 액션에는 primary variant 사용
- 보조 액션에는 secondary, outline, ghost variant 사용
- 링크 형태의 액션에는 link variant 사용

## Change History
- v1.0.0: Initial implementation with vanilla-extract styling
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'link'],
      description: '버튼의 시각적 스타일 변형'
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: '버튼의 크기'
    },
    disabled: {
      control: { type: 'boolean' },
      description: '버튼 비활성화 상태'
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: '전체 너비 사용 여부'
    },
    children: {
      control: { type: 'text' },
      description: '버튼 내용'
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: '버튼 타입'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story showing primary use case
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Button'
  }
};

// Stories for ALL use cases and variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  )
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button leftIcon="←">Back</Button>
      <Button rightIcon="→">Next</Button>
      <Button leftIcon="★" rightIcon="★">Star</Button>
    </div>
  )
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <Button fullWidth>Full Width Button</Button>
      <Button fullWidth variant="outline">Full Width Outline</Button>
    </div>
  )
};

export const DisabledState: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button disabled>Disabled Primary</Button>
      <Button disabled variant="secondary">Disabled Secondary</Button>
      <Button disabled variant="outline">Disabled Outline</Button>
      <Button disabled variant="ghost">Disabled Ghost</Button>
      <Button disabled variant="link">Disabled Link</Button>
    </div>
  )
};

export const ButtonTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button type="button">Button</Button>
      <Button type="submit">Submit</Button>
      <Button type="reset">Reset</Button>
    </div>
  )
};

// Interactive story for testing
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Interactive Button',
    onClick: () => alert('Button clicked!')
  }
}; 