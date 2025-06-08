import React, { useEffect, useReducer } from 'react';
import { TimerDisplay } from '../../timer-display';
import { TimerControls } from '../../../features/timer-control';
import { timerReducer, initialTimerState } from '../../../entities/timer';
import * as styles from './PomodoroWidget.css';

interface PomodoroWidgetProps {
  initialDuration?: number; // 분 단위, 기본값은 25분
}

export const PomodoroWidget: React.FC<PomodoroWidgetProps> = ({
  initialDuration = 25,
}) => {
  // 초기 상태 설정
  const initialState = {
    ...initialTimerState,
    initialTimeInSeconds: initialDuration * 60,
    remainingTimeInSeconds: initialDuration * 60,
    settings: {
      duration: initialDuration,
    },
  };

  // 타이머 상태 관리
  const [state, dispatch] = useReducer(timerReducer, initialState);
  
  // 타이머 실행 로직
  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout> | null = null;
    
    if (state.status === 'running') {
      timerId = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    }
    
    // 타이머가 완료되면 알림 표시
    if (state.status === 'completed') {
      // 알림 표시 (Electron 환경에서는 window.electronAPI를 통해 알림 표시 가능)
      if (window.electronAPI) {
        window.electronAPI.showNotification({
          title: '타이머 완료',
          body: '타이머가 완료되었습니다!',
        });
      }
    }
    
    // 클린업 함수
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [state.status]);
  
  // 타이머 제어 핸들러
  const handleStart = () => dispatch({ type: 'START' });
  const handlePause = () => dispatch({ type: 'PAUSE' });
  const handleResume = () => dispatch({ type: 'RESUME' });
  const handleStop = () => dispatch({ type: 'STOP' });
  const handleReset = () => dispatch({ type: 'RESET' });
  
  return (
    <div className={styles.pomodoroWidget}>
      <div className={styles.pomodoroContainer}>
        <TimerDisplay
          remainingTimeInSeconds={state.remainingTimeInSeconds}
          status={state.status}
        />
        <TimerControls
          status={state.status}
          onStart={handleStart}
          onPause={handlePause}
          onResume={handleResume}
          onStop={handleStop}
          onReset={handleReset}
        />
        <div className={styles.pomodoroCount}>
          완료한 뽀모도로: {state.completedPomodoros}
        </div>
      </div>
    </div>
  );
};
