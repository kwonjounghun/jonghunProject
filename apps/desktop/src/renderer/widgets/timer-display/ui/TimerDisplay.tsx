import React from 'react';
import { Card } from '@jonghun-project/ui';
import { formatTime, TimerStatus } from '../../../entities/timer';
import * as styles from './TimerDisplay.css';

interface TimerDisplayProps {
  remainingTimeInSeconds: number;
  status: TimerStatus;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({
  remainingTimeInSeconds,
  status,
}) => {
  // 타이머 상태에 따른 클래스 이름


  const getStatusText = (status: TimerStatus) => {
    switch (status) {
      case 'running':
        return '진행 중';
      case 'paused':
        return '일시정지';
      case 'completed':
        return '완료';
      case 'idle':
        return '준비';
      default:
        return '';
    }
  };

  return (
    <Card variant="elevated">
      <div className={`${styles.timerDisplay} ${styles.statusVariant[status]}`}>
        <div className={styles.timerTime}>
          {formatTime(remainingTimeInSeconds)}
        </div>
        <div className={styles.timerStatus}>
          {getStatusText(status)}
        </div>
      </div>
    </Card>
  );
};
