import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardFooter } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Design System/Atoms/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: `
## Purpose
정보를 그룹화하고 표시하기 위한 카드 컴포넌트입니다.

## Usage Guidelines
- 관련된 콘텐츠를 그룹화하여 표시할 때 사용
- 제품 카드, 프로필 카드, 설정 패널 등에 활용
- interactive 속성으로 클릭 가능한 카드 생성 가능

## Change History
- v1.0.0: Initial implementation with vanilla-extract styling
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'outlined', 'flat'],
      description: '카드의 시각적 스타일 변형'
    },
    padding: {
      control: { type: 'radio' },
      options: ['none', 'sm', 'md', 'lg'],
      description: '카드의 패딩 크기'
    },
    interactive: {
      control: { type: 'boolean' },
      description: '카드 상호작용 가능 여부'
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: '전체 너비 사용 여부'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story showing primary use case
export const Default: Story = {
  args: {
    variant: 'elevated',
    padding: 'md',
    children: 'This is a basic card with some content.'
  }
};

// Stories for ALL use cases and variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card variant="elevated" padding="md" style={{ width: '200px' }}>
        <h3>Elevated Card</h3>
        <p>This card has elevation and shadow.</p>
      </Card>
      <Card variant="outlined" padding="md" style={{ width: '200px' }}>
        <h3>Outlined Card</h3>
        <p>This card has a border outline.</p>
      </Card>
      <Card variant="flat" padding="md" style={{ width: '200px' }}>
        <h3>Flat Card</h3>
        <p>This card has a flat appearance.</p>
      </Card>
    </div>
  )
};

export const AllPaddingSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card variant="outlined" padding="none" style={{ width: '200px' }}>
        <h3>No Padding</h3>
        <p>Content goes to the edge.</p>
      </Card>
      <Card variant="outlined" padding="sm" style={{ width: '200px' }}>
        <h3>Small Padding</h3>
        <p>Minimal spacing around content.</p>
      </Card>
      <Card variant="outlined" padding="md" style={{ width: '200px' }}>
        <h3>Medium Padding</h3>
        <p>Standard spacing around content.</p>
      </Card>
      <Card variant="outlined" padding="lg" style={{ width: '200px' }}>
        <h3>Large Padding</h3>
        <p>Generous spacing around content.</p>
      </Card>
    </div>
  )
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card variant="elevated" padding="none" style={{ width: '300px' }}>
        <CardHeader>
          <h3>Card Title</h3>
          <p>Card subtitle or description</p>
        </CardHeader>
        <div style={{ padding: '1rem' }}>
          <p>This is the main content of the card. It can contain any type of content including text, images, or other components.</p>
        </div>
        <CardFooter>
          <Button size="sm" variant="primary">Action</Button>
          <Button size="sm" variant="ghost">Cancel</Button>
        </CardFooter>
      </Card>
    </div>
  )
};

export const InteractiveCards: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card
        variant="elevated"
        padding="md"
        interactive
        style={{ width: '200px', cursor: 'pointer' }}
        onClick={() => alert('Card clicked!')}
      >
        <h3>Interactive Card</h3>
        <p>Click me to see the interaction!</p>
      </Card>
      <Card
        variant="outlined"
        padding="md"
        interactive
        style={{ width: '200px', cursor: 'pointer' }}
        onClick={() => alert('Outlined card clicked!')}
      >
        <h3>Interactive Outlined</h3>
        <p>This one has a border and is clickable.</p>
      </Card>
    </div>
  )
};

export const FullWidthCards: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <Card variant="elevated" padding="md" fullWidth>
        <h3>Full Width Card</h3>
        <p>This card takes up the full width of its container.</p>
      </Card>
      <Card variant="outlined" padding="md" fullWidth>
        <h3>Another Full Width Card</h3>
        <p>Multiple full width cards stack vertically.</p>
      </Card>
    </div>
  )
};

export const ProductCard: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card variant="elevated" padding="none" style={{ width: '250px' }}>
        <div style={{
          height: '150px',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          Product Image
        </div>
        <div style={{ padding: '1rem' }}>
          <h3>Product Name</h3>
          <p style={{ color: '#666', marginBottom: '0.5rem' }}>Product description goes here.</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>$99.99</span>
            <Button size="sm" variant="primary">Add to Cart</Button>
          </div>
        </div>
      </Card>
    </div>
  )
};

// Interactive story for testing
export const Playground: Story = {
  args: {
    variant: 'elevated',
    padding: 'md',
    interactive: false,
    fullWidth: false,
    children: 'Interactive card content. Try changing the controls above!'
  }
}; 