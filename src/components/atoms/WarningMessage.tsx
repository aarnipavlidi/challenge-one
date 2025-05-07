import React from 'react';

/**
 * A small component to display a warning message.
 * 
 * @param message - The warning message to display.
 */
const WarningMessage: React.FC = () => {
  return (
    <p className="text-red-600 font-semibold">
      Warning: Drone is in a no-fly zone!
    </p>
  );
};

export default WarningMessage;