import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DroneCard from './components/DroneCard';
import { DroneTelemetry } from './types/DroneTelemetry';

const sampleTelemetry: DroneTelemetry = {
  id: 'DR123',
  coordinates: { latitude: 40.7100, longitude: -74.0050 },
  altitude: 120,
  speed: 15,
  signalStrength: 85,
  frequency: 2.4,
  status: 'MOVING',
};

const App: React.FC = () => {
  return (
    <div className="app p-6">
      <DroneCard telemetry={sampleTelemetry} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);