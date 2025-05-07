import React from 'react';
import { DroneTelemetry } from '../../types/DroneTelemetry';
import { isDroneInNoFlyZone } from '../../utils/index';
import DroneDetails from '../molecules/DroneDetails';
import WarningMessage from '../atoms/WarningMessage';

interface DroneCardProps {
  telemetry: DroneTelemetry;
}

/**
 * A reusable and scalable component to display drone telemetry data.
 * Highlights the card if the drone is in a no-fly zone.
 * 
 * @param telemetry - The telemetry data of the drone.
 */
const DroneCard: React.FC<DroneCardProps> = ({ telemetry }) => {
  const inNoFlyZone = isDroneInNoFlyZone(telemetry);

  return (
    <div
      className={`p-4 border rounded-lg shadow-md ${
        inNoFlyZone ? 'bg-red-100 border-red-500' : 'bg-green-100 border-green-500'
      }`}
    >
      <DroneDetails telemetry={telemetry} />
      {
        inNoFlyZone && <WarningMessage />
      }
    </div>
  );
};

export default DroneCard;