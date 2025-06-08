import React from 'react';
import { Button } from '@jonghun-project/ui';
import { TimerStatus } from '../../../entities/timer';
import * as styles from './TimerControls.css';

interface TimerControlsProps {
  status: TimerStatus;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  onReset: () => void;
}

export const TimerControls: React.FC<TimerControlsProps> = ({
  status,
  onStart,
  onPause,
  onResume,
  onStop,
  onReset,
}) => {
  return (
    <div className={styles.timerControls}>
      {status === 'idle' && (
        <Button onClick={onStart} variant="primary">시작</Button>
      )}
      
      {status === 'running' && (
        <div className={styles.buttonGroup}>
          <Button onClick={onPause} variant="secondary">일시정지</Button>
          <Button onClick={onStop} variant="secondary">중지</Button>
        </div>
      )}
      
      {status === 'paused' && (
        <div className={styles.buttonGroup}>
          <Button onClick={onResume} variant="primary">재개</Button>
          <Button onClick={onStop} variant="secondary">중지</Button>
        </div>
      )}
      
      {status === 'completed' && (
        <Button onClick={onReset} variant="primary">다시 시작</Button>
      )}
    </div>
  );
};
