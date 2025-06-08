"use strict";
const require$$1 = require("electron");
require$$1.contextBridge.exposeInMainWorld("electronAPI", {
  // 뽀모도로 설정 가져오기
  getPomodoroSettings: () => require$$1.ipcRenderer.invoke("get-pomodoro-settings"),
  // 뽀모도로 설정 저장하기
  savePomodoroSettings: (settings) => require$$1.ipcRenderer.invoke("save-pomodoro-settings", settings),
  // 알림 표시하기
  showNotification: (options) => require$$1.ipcRenderer.invoke("show-notification", options),
  // 로컬 알림 이벤트 리스너
  onLocalNotification: (callback) => {
    const listener = (_, data) => callback(_, data);
    require$$1.ipcRenderer.on("show-local-notification", listener);
    return () => {
      require$$1.ipcRenderer.removeListener("show-local-notification", listener);
    };
  }
});
