import React from 'react';
import '@testing-library/jest-dom';
import { describe, it, vi, expect, Mock} from 'vitest'; // Import describe and it from Vitest
import { render, screen, waitFor } from '@testing-library/react';
import DroneList from '../components/organism/DroneList';
import { fetchTelemetryData } from '../mocks/fetchTelemetryData';


// Mock the fetchTelemetryData function
vi.mock('../mocks/fetchTelemetryData', () => ({
  fetchTelemetryData: vi.fn(),
}));

const mockedFetchTelemetryData = fetchTelemetryData as Mock;

describe('DroneList', () => {
  it('shows a loading spinner and then displays the list of DroneCards', async () => {
    // Mock resolved value for fetchTelemetryData
    mockedFetchTelemetryData.mockResolvedValue([
      {
        id: 'DR123',
        coordinates: { latitude: 40.7100, longitude: -74.0050 },
        altitude: 120,
        speed: 15,
        signalStrength: 85,
        frequency: 2.4,
        status: 'MOVING',
      },
    ]);

    render(<DroneList />);

    // Check that the loading spinner is displayed
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    // Wait for the loading spinner to disappear
    await waitFor(() => expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument());

    // Check that the DroneCard is displayed
    expect(screen.getByText(/Drone ID: DR123/i)).toBeInTheDocument();
  });
});