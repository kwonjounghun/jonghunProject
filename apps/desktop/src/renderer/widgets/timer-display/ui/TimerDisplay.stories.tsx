import type { Meta, StoryObj } from '@storybook/react';
import { TimerDisplay } from './TimerDisplay';
import { TimerStatus } from '../../../entities/timer';

const meta = {
  title: '위젯/타이머 디스플레이',
  component: TimerDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    remainingTimeInSeconds: {
      control: { type: 'number', min: 0, max: 3600, step: 60 },
      description: '남은 시간 (초)',
    },
    status: {
      control: 'select',
      options: ['idle', 'running', 'paused', 'completed'],
      description: '타이머의 현재 상태',
    },
  },
} satisfies Meta<typeof TimerDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 초기상태: Story = {
  args: {
    remainingTimeInSeconds: 25 * 60,
    status: 'idle',
  },
};

export const 실행중: Story = {
  args: {
    remainingTimeInSeconds: 15 * 60,
    status: 'running',
  },
};

export const 일시정지: Story = {
  args: {
    remainingTimeInSeconds: 10 * 60,
    status: 'paused',
  },
};

export const 완료: Story = {
  args: {
    remainingTimeInSeconds: 0,
    status: 'completed',
  },
};

export const 거의완료: Story = {
  args: {
    remainingTimeInSeconds: 30,
    status: 'running',
  },
};
