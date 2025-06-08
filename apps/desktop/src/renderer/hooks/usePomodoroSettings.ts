import { useState, useEffect } from 'react';

export interface PomodoroSettings {
  workDuration: number; // 작업 시간 (분)
  breakDuration: number; // 휴식 시간 (분)
  longBreakDuration: number; // 긴 휴식 시간 (분)
  longBreakInterval: number; // 긴 휴식 간격 (뽀모도로 세션 수)
}

export const usePomodoroSettings = () => {
  const [settings, setSettings] = useState<PomodoroSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // 설정 불러오기
  useEffect(() => {
    const loadSettings = async () => {
      try {
        setIsLoading(true);
        const savedSettings = await window.electronAPI.getPomodoroSettings();
        setSettings(savedSettings);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('설정을 불러오는 중 오류가 발생했습니다.'));
      } finally {
        setIsLoading(false);
      }
    };

    loadSettings();
  }, []);

  // 설정 저장하기
  const saveSettings = async (newSettings: PomodoroSettings) => {
    try {
      setIsLoading(true);
      await window.electronAPI.savePomodoroSettings(newSettings);
      setSettings(newSettings);
      setError(null);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('설정을 저장하는 중 오류가 발생했습니다.'));
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    settings,
    saveSettings,
    isLoading,
    error,
  };
};
