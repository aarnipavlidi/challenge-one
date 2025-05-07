import { DroneTelemetry } from '../types/DroneTelemetry';

/**
 * Mock function to simulate fetching drone telemetry data.
 * Returns a promise that resolves to an array of telemetry data.
 */
export const fetchTelemetryData = async (): Promise<DroneTelemetry[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'DR123',
          coordinates: { latitude: 40.7100, longitude: -74.0050 },
          altitude: 120,
          speed: 15,
          signalStrength: 85,
          frequency: 2.4,
          status: 'MOVING',
        },
        {
          id: 'DR124',
          coordinates: { latitude: 40.7120, longitude: -74.0020 },
          altitude: 100,
          speed: 10,
          signalStrength: 90,
          frequency: 2.4,
          status: 'IDLE',
        },
        {
          id: 'DR125',
          coordinates: { latitude: 40.7500, longitude: -74.0000 }, // Outside no-fly zone
          altitude: 150,
          speed: 20,
          signalStrength: 95,
          frequency: 5.0,
          status: 'MOVING',
        },
      ]);
    }, 2000); // Simulate a 2-second delay
  });
};