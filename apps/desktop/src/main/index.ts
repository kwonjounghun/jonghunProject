import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import Store from 'electron-store';

// 설정 저장소 초기화
const store = new Store({
  defaults: {
    pomodoroSettings: {
      workDuration: 25, // 작업 시간 (분)
      breakDuration: 5, // 휴식 시간 (분)
      longBreakDuration: 15, // 긴 휴식 시간 (분)
      longBreakInterval: 4, // 긴 휴식 간격 (뽀모도로 세션 수)
    }
  }
});

// 개발 모드 확인
const isDev = process.env.NODE_ENV === 'development';

// 메인 윈도우 참조 유지
let mainWindow: BrowserWindow | null = null;

function createWindow() {
  // 브라우저 윈도우 생성
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // 개발 모드에서는 로컬 서버 로드, 아니면 빌드된 파일 로드
  if (isDev) {
    mainWindow.loadURL('http://localhost:3000');
    // 개발자 도구 열기
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../../index.html'));
  }

  // 윈도우가 닫힐 때 이벤트
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Electron이 준비되면 윈도우 생성
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // macOS에서는 dock 아이콘 클릭 시 윈도우가 없으면 다시 생성
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 모든 윈도우가 닫히면 앱 종료 (Windows & Linux)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// IPC 이벤트 핸들러 설정
ipcMain.handle('get-pomodoro-settings', () => {
  return store.get('pomodoroSettings');
});

ipcMain.handle('save-pomodoro-settings', (_, settings) => {
  store.set('pomodoroSettings', settings);
  return true;
});

// 알림 관련 IPC 핸들러
ipcMain.handle('show-notification', (_, { title, body }) => {
  if (mainWindow) {
    mainWindow.webContents.send('show-local-notification', { title, body });
  }
  return true;
});
