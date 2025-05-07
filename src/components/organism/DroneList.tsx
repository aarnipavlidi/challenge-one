import React, { useEffect, useState } from 'react';
import { fetchTelemetryData } from '../../mocks/fetchTelemetryData';
import { DroneTelemetry } from '../../types/DroneTelemetry';
import DroneCard from './DroneCard';
import CustomWarningWrapper from '../wrappers/CustomWarningWrapper';

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
    return (
      <CustomWarningWrapper
        icon="LoaderCircle"
        message="Loading..."
      />
    );
  };

  if (!telemetryData || telemetryData.length === 0) {
    return (
      <CustomWarningWrapper
        icon="Frown"
        message="No telemetry data available."
      />
    );
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {telemetryData.map((telemetry) => (
        <DroneCard key={telemetry.id} telemetry={telemetry} />
      ))}
    </div>
  );
};

export default DroneList;