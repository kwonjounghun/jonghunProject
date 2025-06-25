import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '정적 알림을 표시하기 위한 Alert 컴포넌트입니다. 다양한 변형과 크기를 지원합니다.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning', 'info'],
      description: '알림의 종류를 설정합니다.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '알림의 크기를 설정합니다.',
    },
    title: {
      control: 'text',
      description: '알림의 제목입니다.',
    },
    description: {
      control: 'text',
      description: '알림의 설명입니다.',
    },
    hideIcon: {
      control: 'boolean',
      description: '아이콘을 숨길지 여부를 설정합니다.',
    },
    fullWidth: {
      control: 'boolean',
      description: '전체 너비를 사용할지 여부를 설정합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Alert
export const Default: Story = {
  args: {
    title: '기본 알림',
    description: '이것은 기본 알림 메시지입니다.',
  },
};

// 성공 Alert
export const Success: Story = {
  args: {
    variant: 'success',
    title: '성공!',
    description: '작업이 성공적으로 완료되었습니다.',
  },
};

// 에러 Alert
export const Error: Story = {
  args: {
    variant: 'error',
    title: '오류 발생',
    description: '요청을 처리하는 중 오류가 발생했습니다.',
  },
};

// 경고 Alert
export const Warning: Story = {
  args: {
    variant: 'warning',
    title: '주의',
    description: '이 작업은 되돌릴 수 없습니다.',
  },
};

// 정보 Alert
export const Info: Story = {
  args: {
    variant: 'info',
    title: '정보',
    description: '새로운 업데이트가 있습니다.',
  },
};

// 크기별 Alert
export const Small: Story = {
  args: {
    size: 'sm',
    variant: 'info',
    title: '작은 알림',
    description: '작은 크기의 알림입니다.',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    variant: 'info',
    title: '중간 알림',
    description: '중간 크기의 알림입니다.',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    variant: 'info',
    title: '큰 알림',
    description: '큰 크기의 알림입니다.',
  },
};

// 아이콘 없는 Alert
export const WithoutIcon: Story = {
  args: {
    variant: 'warning',
    title: '아이콘 없는 알림',
    description: '아이콘이 표시되지 않는 알림입니다.',
    hideIcon: true,
  },
};

// 전체 너비 Alert
export const FullWidth: Story = {
  args: {
    variant: 'success',
    title: '전체 너비 알림',
    description: '컨테이너의 전체 너비를 사용하는 알림입니다.',
    fullWidth: true,
  },
};

// 제목만 있는 Alert
export const TitleOnly: Story = {
  args: {
    variant: 'error',
    title: '제목만 있는 알림',
  },
};

// 설명만 있는 Alert
export const DescriptionOnly: Story = {
  args: {
    variant: 'info',
    description: '설명만 있는 알림입니다.',
  },
};

// 커스텀 콘텐츠 Alert
export const CustomContent: Story = {
  args: {
    variant: 'warning',
    children: (
      <div>
        <strong>커스텀 콘텐츠</strong>
        <p>Alert 컴포넌트 안에 커스텀 JSX 콘텐츠를 넣을 수 있습니다.</p>
        <button style={{ marginTop: '8px', padding: '4px 8px' }}>
          액션 버튼
        </button>
      </div>
    ),
  },
};

// 모든 변형 보기
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert variant="default" title="기본" description="기본 알림입니다." />
      <Alert variant="success" title="성공" description="성공 알림입니다." />
      <Alert variant="error" title="오류" description="오류 알림입니다." />
      <Alert variant="warning" title="경고" description="경고 알림입니다." />
      <Alert variant="info" title="정보" description="정보 알림입니다." />
    </div>
  ),
};