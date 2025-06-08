import type { Meta, StoryObj } from '@storybook/react';
import { TimerControls } from './TimerControls';
import { TimerStatus } from '../../../entities/timer';

const meta = {
  title: '기능/타이머 컨트롤',
  component: TimerControls,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['idle', 'running', 'paused', 'completed'],
      description: '타이머의 현재 상태',
    },
    onStart: { action: '시작' },
    onPause: { action: '일시정지' },
    onResume: { action: '재개' },
    onStop: { action: '중지' },
    onReset: { action: '리셋' },
  },
} satisfies Meta<typeof TimerControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 초기상태: Story = {
  args: {
    status: 'idle',
  },
};

export const 실행중: Story = {
  args: {
    status: 'running',
  },
};

export const 일시정지: Story = {
  args: {
    status: 'paused',
  },
};

export const 완료: Story = {
  args: {
    status: 'completed',
  },
};
