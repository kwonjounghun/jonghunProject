import { contextBridge, ipcRenderer } from 'electron';

// 렌더러 프로세스에 노출할 API 정의
contextBridge.exposeInMainWorld('electronAPI', {
  // 뽀모도로 설정 가져오기
  getPomodoroSettings: () => ipcRenderer.invoke('get-pomodoro-settings'),
  
  // 뽀모도로 설정 저장하기
  savePomodoroSettings: (settings: any) => ipcRenderer.invoke('save-pomodoro-settings', settings),
  
  // 알림 표시하기
  showNotification: (options: { title: string; body: string }) => 
    ipcRenderer.invoke('show-notification', options),
  
  // 로컬 알림 이벤트 리스너
  onLocalNotification: (callback: (event: any, data: any) => void) => {
    const listener = (_: any, data: any) => callback(_, data);
    ipcRenderer.on('show-local-notification', listener);
    return () => {
      ipcRenderer.removeListener('show-local-notification', listener);
    };
  }
});

// 타입 정의를 위한 인터페이스 (renderer에서 사용)
// 이 부분은 실제로 실행되지 않고, 타입 정의용으로만 사용됩니다.
declare global {
  interface Window {
    electronAPI: {
      getPomodoroSettings: () => Promise<{
        workDuration: number;
        breakDuration: number;
        longBreakDuration: number;
        longBreakInterval: number;
      }>;
      savePomodoroSettings: (settings: {
        workDuration: number;
        breakDuration: number;
        longBreakDuration: number;
        longBreakInterval: number;
      }) => Promise<boolean>;
      showNotification: (options: { title: string; body: string }) => Promise<boolean>;
      onLocalNotification: (callback: (event: any, data: any) => void) => () => void;
    };
  }
}
