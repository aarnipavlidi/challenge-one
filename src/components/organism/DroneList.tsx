import React, { useEffect, useState } from 'react';
import { fetchTelemetryData } from '../../mocks/fetchTelemetryData';
import { DroneTelemetry } from '../../types/DroneTelemetry';
import DroneCard from './DroneCard';

/**
 * A component that fetches and displays a list of DroneCards.
 */
const DroneList: React.FC = () => {
  const [telemetryData, setTelemetryData] = useState<DroneTelemetry[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTelemetryData();
        setTelemetryData(data);
      } catch (error) {
        console.error('Failed to fetch telemetry data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading-spinner text-center">Loading...</div>;
  }

  if (!telemetryData || telemetryData.length === 0) {
    return <div className="no-data text-center">No telemetry data available.</div>;
  }

  return (
    <div className="drone-list grid grid-cols-1 gap-4">
      {telemetryData.map((telemetry) => (
        <DroneCard key={telemetry.id} telemetry={telemetry} />
      ))}
    </div>
  );
};

export default DroneList;