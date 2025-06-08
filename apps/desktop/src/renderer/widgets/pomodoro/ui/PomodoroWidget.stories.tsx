import type { Meta, StoryObj } from '@storybook/react';
import { PomodoroWidget } from './PomodoroWidget';

const meta = {
  title: '위젯/뽀모도로',
  component: PomodoroWidget,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '타이머 디스플레이와 컨트롤을 결합한 뽀모도로 타이머 위젯입니다. 타이머 상태 관리와 알림 기능을 포함합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    initialDuration: {
      control: { type: 'number', min: 1, max: 60, step: 1 },
      description: '초기 타이머 시간 (분)',
    },
  },
} satisfies Meta<typeof PomodoroWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    initialDuration: 25,
  },
};

export const 짧은세션: Story = {
  args: {
    initialDuration: 5,
  },
};

export const 긴세션: Story = {
  args: {
    initialDuration: 50,
  },
};
