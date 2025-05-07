import React from 'react';
import { DroneTelemetry } from '../../types/DroneTelemetry';
import DroneField from '../atoms/DroneField';

interface DroneDetailsProps {
  telemetry: DroneTelemetry;
}

/**
 * A molecule component to display detailed telemetry information.
 * 
 * @param telemetry - The telemetry data of the drone.
 */
const DroneDetails: React.FC<DroneDetailsProps> = ({ telemetry }) => {
  return (
    <div>
      <DroneField
        label="Drone ID"
        value={telemetry.id}
      />
      <DroneField
        label="Coordinates"
        value={`${telemetry.coordinates.latitude}, ${telemetry.coordinates.longitude}`}
      />
      <DroneField
        label="Altitude"
        value={`${telemetry.altitude}m`}
      />
      <DroneField
        label="Speed"
        value={`${telemetry.speed}m/s`}
      />
      <DroneField
        label="Signal Strength"
        value={`${telemetry.signalStrength}%`}
      />
      <DroneField
        label="Frequency"
        value={`${telemetry.frequency}Hz`}
      />
      <DroneField
        label="Status"
        value={telemetry.status}
      />
    </div>
  );
};

export default DroneDetails;