import React, { useState, useEffect, useCallback } from 'react';
import { Button, Card } from 'ui';

interface PomodoroSettings {
  workDuration: number;
  breakDuration: number;
  longBreakDuration: number;
  longBreakInterval: number;
}

interface PomodoroTimerProps {
  settings: PomodoroSettings;
}

type TimerMode = 'work' | 'break' | 'longBreak';

export const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ settings }) => {
  const [timeLeft, setTimeLeft] = useState(settings.workDuration * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<TimerMode>('work');
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  // 타이머 모드에 따른 시간 설정
  const resetTimer = useCallback((timerMode: TimerMode) => {
    switch (timerMode) {
      case 'work':
        setTimeLeft(settings.workDuration * 60);
        break;
      case 'break':
        setTimeLeft(settings.breakDuration * 60);
        break;
      case 'longBreak':
        setTimeLeft(settings.longBreakDuration * 60);
        break;
    }
    setMode(timerMode);
  }, [settings]);

  // 타이머 완료 시 다음 모드로 전환
  const handleTimerComplete = useCallback(() => {
    if (mode === 'work') {
      // 작업 세션 완료
      const newCompletedPomodoros = completedPomodoros + 1;
      setCompletedPomodoros(newCompletedPomodoros);
      
      // 알림 표시
      window.electronAPI.showNotification({
        title: '작업 시간 완료!',
        body: '휴식 시간입니다. 잠시 쉬세요.',
      });
      
      // 긴 휴식 간격에 도달했는지 확인
      if (newCompletedPomodoros % settings.longBreakInterval === 0) {
        resetTimer('longBreak');
      } else {
        resetTimer('break');
      }
    } else {
      // 휴식 세션 완료
      window.electronAPI.showNotification({
        title: '휴식 시간 완료!',
        body: '다시 작업할 시간입니다.',
      });
      resetTimer('work');
    }
  }, [mode, completedPomodoros, settings, resetTimer]);

  // 타이머 로직
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      setIsActive(false);
      handleTimerComplete();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, handleTimerComplete]);

  // 시간 포맷팅 함수
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 타이머 시작/정지 토글
  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  // 타이머 리셋
  const handleReset = () => {
    setIsActive(false);
    resetTimer(mode);
  };

  // 타이머 모드에 따른 스타일 클래스
  const getModeClass = () => {
    switch (mode) {
      case 'work':
        return 'timer-work';
      case 'break':
        return 'timer-break';
      case 'longBreak':
        return 'timer-long-break';
    }
  };

  // 타이머 모드에 따른 제목
  const getModeTitle = () => {
    switch (mode) {
      case 'work':
        return '작업 시간';
      case 'break':
        return '짧은 휴식';
      case 'longBreak':
        return '긴 휴식';
    }
  };

  return (
    <Card className={`pomodoro-timer ${getModeClass()}`}>
      <div className="timer-header">
        <h2>{getModeTitle()}</h2>
        <div className="pomodoro-count">
          완료한 뽀모도로: {completedPomodoros}
        </div>
      </div>
      
      <div className="timer-display">
        {formatTime(timeLeft)}
      </div>
      
      <div className="timer-controls">
        <Button onClick={toggleTimer}>
          {isActive ? '일시정지' : '시작'}
        </Button>
        <Button onClick={handleReset}>
          리셋
        </Button>
      </div>
    </Card>
  );
};
