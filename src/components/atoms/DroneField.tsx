import React from 'react';

interface DroneFieldProps {
  label: string;
  value: string | number;
}

/**
 * A small, reusable component to display a label and its corresponding value.
 * 
 * @param label - The label for the field.
 * @param value - The value to display.
 */
const DroneField: React.FC<DroneFieldProps> = ({ label, value }) => {
  return (
    <p className="drone-field">
      <span className="font-bold">{label}:</span> {value}
    </p>
  );
};

export default DroneField;