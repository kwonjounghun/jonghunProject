import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import React from 'react';

// 일반적으로 사용되는 아이콘들을 위한 SVG 컴포넌트들
const HeartIcon = () => (
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
);

const StarIcon = () => (
  <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
);

const CheckIcon = () => (
  <path d="M20 6 9 17l-5-5" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
);

const XIcon = () => (
  <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
);

const AlertIcon = () => (
  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3ZM12 9v4M12 17h.01" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
);

const InfoIcon = () => (
  <>
    <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
    <path d="m9 12 2 2 4-4" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </>
);

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'SVG 아이콘을 렌더링하는 재사용 가능한 아이콘 컴포넌트입니다. 다양한 크기와 색상을 지원하며 접근성을 고려하여 설계되었습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '아이콘의 크기를 설정합니다',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'muted', 'destructive', 'success', 'warning', 'info'],
      description: '아이콘의 색상을 설정합니다',
    },
    'aria-label': {
      control: { type: 'text' },
      description: '스크린 리더를 위한 아이콘 설명',
    },
    'aria-hidden': {
      control: { type: 'boolean' },
      description: '장식용 아이콘인 경우 true로 설정',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <HeartIcon />,
    'aria-label': '좋아요',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Icon size="xs" aria-label="아주 작은 별">
        <StarIcon />
      </Icon>
      <Icon size="sm" aria-label="작은 별">
        <StarIcon />
      </Icon>
      <Icon size="md" aria-label="중간 별">
        <StarIcon />
      </Icon>
      <Icon size="lg" aria-label="큰 별">
        <StarIcon />
      </Icon>
      <Icon size="xl" aria-label="아주 큰 별">
        <StarIcon />
      </Icon>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 아이콘을 보여줍니다. xs(12px)부터 xl(32px)까지 제공됩니다.',
      },
    },
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <Icon color="default" aria-label="기본 하트">
        <HeartIcon />
      </Icon>
      <Icon color="primary" aria-label="주요 하트">
        <HeartIcon />
      </Icon>
      <Icon color="secondary" aria-label="보조 하트">
        <HeartIcon />
      </Icon>
      <Icon color="muted" aria-label="음소거된 하트">
        <HeartIcon />
      </Icon>
      <Icon color="destructive" aria-label="위험한 하트">
        <HeartIcon />
      </Icon>
      <Icon color="success" aria-label="성공 하트">
        <HeartIcon />
      </Icon>
      <Icon color="warning" aria-label="경고 하트">
        <HeartIcon />
      </Icon>
      <Icon color="info" aria-label="정보 하트">
        <HeartIcon />
      </Icon>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 색상의 아이콘을 보여줍니다. 테마에 맞는 색상을 선택할 수 있습니다.',
      },
    },
  },
};

export const CommonIcons: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '24px', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon size="lg" color="destructive" aria-label="성공">
          <CheckIcon />
        </Icon>
        <span style={{ fontSize: '12px', color: '#666' }}>Check</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon size="lg" color="destructive" aria-label="닫기">
          <XIcon />
        </Icon>
        <span style={{ fontSize: '12px', color: '#666' }}>Close</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon size="lg" color="warning" aria-label="경고">
          <AlertIcon />
        </Icon>
        <span style={{ fontSize: '12px', color: '#666' }}>Alert</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon size="lg" color="success" aria-label="정보">
          <InfoIcon />
        </Icon>
        <span style={{ fontSize: '12px', color: '#666' }}>Info</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon size="lg" color="primary" aria-label="좋아요">
          <HeartIcon />
        </Icon>
        <span style={{ fontSize: '12px', color: '#666' }}>Heart</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon size="lg" color="primary" aria-label="별점">
          <StarIcon />
        </Icon>
        <span style={{ fontSize: '12px', color: '#666' }}>Star</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '일반적으로 사용되는 아이콘들의 예제입니다. 각각 적절한 색상과 의미를 가지고 있습니다.',
      },
    },
  },
};

export const WithText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon size="sm" color="success" aria-label="성공">
          <CheckIcon />
        </Icon>
        <span>작업이 성공적으로 완료되었습니다</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon size="sm" color="destructive" aria-label="오류">
          <XIcon />
        </Icon>
        <span>오류가 발생했습니다</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon size="sm" color="warning" aria-label="경고">
          <AlertIcon />
        </Icon>
        <span>주의가 필요합니다</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Icon size="sm" color="primary" aria-label="좋아요">
          <HeartIcon />
        </Icon>
        <span>125개의 좋아요</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '텍스트와 함께 사용되는 아이콘의 예제입니다. 아이콘이 텍스트의 의미를 보완합니다.',
      },
    },
  },
};

export const Decorative: Story = {
  args: {
    children: <HeartIcon />,
    'aria-hidden': true,
  },
  parameters: {
    docs: {
      description: {
        story: '장식용 아이콘의 예제입니다. aria-hidden="true"를 사용하여 스크린 리더에서 무시됩니다.',
      },
    },
  },
};