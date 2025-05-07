import React from 'react';
import { DroneTelemetry } from '../types/DroneTelemetry';
import { isDroneInNoFlyZone } from '../utils/index';

interface DroneCardProps {
  telemetry: DroneTelemetry;
}

/**
 * DroneCard component to display drone telemetry data.
 * Highlights the card if the drone is in a no-fly zone.
 * 
 * @param telemetry - The telemetry data of the drone.
 */
const DroneCard: React.FC<DroneCardProps> = ({ telemetry }) => {
  const inNoFlyZone = isDroneInNoFlyZone(telemetry);

  return (
    <div
      className={`drone-card p-4 border rounded-lg shadow-md ${
        inNoFlyZone ? 'bg-red-100 border-red-500' : 'bg-green-100 border-green-500'
      }`}
    >
      <h2 className="drone-card__title text-lg font-bold">
        Drone ID: {telemetry.id}
      </h2>
      <p className="drone-card__coordinates">
        Coordinates: {telemetry.coordinates.latitude}, {telemetry.coordinates.longitude}
      </p>
      <p className="drone-card__altitude">Altitude: {telemetry.altitude}m</p>
      <p className="drone-card__speed">Speed: {telemetry.speed}m/s</p>
      <p className="drone-card__signal">Signal Strength: {telemetry.signalStrength}%</p>
      <p className="drone-card__frequency">Frequency: {telemetry.frequency}Hz</p>
      <p className="drone-card__status">Status: {telemetry.status}</p>
      {inNoFlyZone && (
        <p className="drone-card__warning text-red-600 font-semibold">
          Warning: Drone is in a no-fly zone!
        </p>
      )}
    </div>
  );
};

export default DroneCard;