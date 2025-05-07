// This file serves as the main entry point for the utility function library.

// Importing the DroneTelemetry interface
import { DroneTelemetry } from '../types/DroneTelemetry'

/**
 * Checks if the drone is in a no-fly zone.
 * A no-fly zone is defined as a specific area with hardcoded coordinates.
 * 
 * @param telemetry - The telemetry data of the drone.
 * @returns True if the drone is inside the no-fly zone, false otherwise.
 */
export function isDroneInNoFlyZone(telemetry: DroneTelemetry): boolean {
  // Validate telemetry data
  if (!telemetry || !telemetry.coordinates) {
      throw new Error('Invalid telemetry data: Missing coordinates.');
  }

  const { coordinates } = telemetry;

  if (
      typeof coordinates.latitude !== 'number' ||
      typeof coordinates.longitude !== 'number'
  ) {
      throw new Error('Invalid telemetry data: Coordinates must be numbers.');
  }

  // Define the no-fly zone coordinates (example: a rectangular area)
  const noFlyZone = {
      topLeft: { latitude: 40.7128, longitude: -74.0060 }, // Example coordinates
      bottomRight: { latitude: 40.7038, longitude: -73.9960 } // Example coordinates
  };

  // Check if the drone's coordinates are within the no-fly zone
  return (
      coordinates.latitude <= noFlyZone.topLeft.latitude &&
      coordinates.latitude >= noFlyZone.bottomRight.latitude &&
      coordinates.longitude >= noFlyZone.topLeft.longitude &&
      coordinates.longitude <= noFlyZone.bottomRight.longitude
  );
}