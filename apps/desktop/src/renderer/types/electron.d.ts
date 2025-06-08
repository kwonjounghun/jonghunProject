interface ElectronAPI {
  showNotification: (options: { title: string; body: string }) => void;
  // 필요한 다른 Electron API 메서드들을 여기에 추가할 수 있습니다.
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI;
  }
}

export {};
