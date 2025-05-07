import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DroneList from './components/organism/DroneList';

const App: React.FC = () => {
  return (
    <div className="app p-6">
      <DroneList />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);