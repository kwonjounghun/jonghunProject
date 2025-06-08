// 타이머 상태 타입 정의
export type TimerStatus = 'idle' | 'running' | 'paused' | 'completed';

// 타이머 설정 인터페이스
export interface TimerSettings {
  duration: number; // 분 단위
}

// 타이머 상태 인터페이스
export interface TimerState {
  status: TimerStatus;
  initialTimeInSeconds: number;
  remainingTimeInSeconds: number;
  settings: TimerSettings;
  completedPomodoros: number;
}

// 초기 타이머 상태
export const initialTimerState: TimerState = {
  status: 'idle',
  initialTimeInSeconds: 25 * 60, // 기본값 25분
  remainingTimeInSeconds: 25 * 60,
  settings: {
    duration: 25, // 기본값 25분
  },
  completedPomodoros: 0,
};

// 타이머 액션 타입
export type TimerAction =
  | { type: 'START' }
  | { type: 'PAUSE' }
  | { type: 'RESUME' }
  | { type: 'STOP' }
  | { type: 'RESET' }
  | { type: 'TICK' }
  | { type: 'COMPLETE' }
  | { type: 'UPDATE_SETTINGS'; settings: TimerSettings };

// 타이머 리듀서
export function timerReducer(state: TimerState, action: TimerAction): TimerState {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        status: 'running',
        initialTimeInSeconds: state.settings.duration * 60,
        remainingTimeInSeconds: state.settings.duration * 60,
      };
    case 'PAUSE':
      return {
        ...state,
        status: 'paused',
      };
    case 'RESUME':
      return {
        ...state,
        status: 'running',
      };
    case 'STOP':
      return {
        ...state,
        status: 'idle',
        remainingTimeInSeconds: state.initialTimeInSeconds,
      };
    case 'RESET':
      return {
        ...state,
        status: 'idle',
        remainingTimeInSeconds: state.initialTimeInSeconds,
      };
    case 'TICK':
      const newRemainingTime = state.remainingTimeInSeconds - 1;
      if (newRemainingTime <= 0) {
        return {
          ...state,
          status: 'completed',
          remainingTimeInSeconds: 0,
          completedPomodoros: state.completedPomodoros + 1,
        };
      }
      return {
        ...state,
        remainingTimeInSeconds: newRemainingTime,
      };
    case 'COMPLETE':
      return {
        ...state,
        status: 'completed',
        remainingTimeInSeconds: 0,
        completedPomodoros: state.completedPomodoros + 1,
      };
    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: action.settings,
        initialTimeInSeconds: action.settings.duration * 60,
        remainingTimeInSeconds: 
          // 타이머가 실행 중이 아닐 때만 남은 시간을 업데이트
          state.status === 'idle' ? action.settings.duration * 60 : state.remainingTimeInSeconds,
      };
    default:
      return state;
  }
}
