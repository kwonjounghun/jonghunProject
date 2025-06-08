import React from 'react';
import { PomodoroWidget } from './widgets/pomodoro';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>뽀모도로 타이머</h1>
      </header>

      <main className="app-main">
        <PomodoroWidget initialDuration={25} />
      </main>
    </div>
  );
};

export default App;
