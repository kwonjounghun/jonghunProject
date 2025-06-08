import React, { useState } from 'react';
import { Button, Card } from 'ui';
import { PomodoroSettings } from '../hooks/usePomodoroSettings';

interface SettingsModalProps {
  settings: PomodoroSettings;
  onSave: (settings: PomodoroSettings) => void;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  settings,
  onSave,
  onClose,
}) => {
  const [formValues, setFormValues] = useState<PomodoroSettings>({
    workDuration: settings.workDuration,
    breakDuration: settings.breakDuration,
    longBreakDuration: settings.longBreakDuration,
    longBreakInterval: settings.longBreakInterval,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: parseInt(value, 10),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formValues);
  };

  return (
    <div className="settings-modal-overlay">
      <Card className="settings-modal">
        <div className="settings-modal-header">
          <h2>뽀모도로 설정</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="workDuration">작업 시간 (분)</label>
            <input
              type="number"
              id="workDuration"
              name="workDuration"
              min="1"
              max="120"
              value={formValues.workDuration}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="breakDuration">짧은 휴식 시간 (분)</label>
            <input
              type="number"
              id="breakDuration"
              name="breakDuration"
              min="1"
              max="30"
              value={formValues.breakDuration}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="longBreakDuration">긴 휴식 시간 (분)</label>
            <input
              type="number"
              id="longBreakDuration"
              name="longBreakDuration"
              min="1"
              max="60"
              value={formValues.longBreakDuration}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="longBreakInterval">긴 휴식 간격 (뽀모도로 횟수)</label>
            <input
              type="number"
              id="longBreakInterval"
              name="longBreakInterval"
              min="1"
              max="10"
              value={formValues.longBreakInterval}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <Button type="submit">저장</Button>
            <Button type="button" onClick={onClose}>취소</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
