// This file defines the DroneTelemetry interface and related types for handling drone telemetry data.

export type DroneStatus = "IDLE" | "MOVING" | "JAMMED";

export interface DroneTelemetry {
    id: string; // Unique identifier for the drone
    coordinates: {
        latitude: number; // Latitude of the drone's position
        longitude: number; // Longitude of the drone's position
    };
    altitude: number; // Altitude of the drone in meters
    speed: number; // Speed of the drone in meters per second
    signalStrength: number; // Signal strength of the drone's connection
    frequency: number; // Frequency of the drone's communication in MHz
    status: DroneStatus; // Current status of the drone
}

// Function to check if the drone is in a no-fly zone will be defined in another file.