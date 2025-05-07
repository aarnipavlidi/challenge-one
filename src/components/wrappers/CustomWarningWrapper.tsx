import { Frown, LoaderCircle } from 'lucide-react';
import React from 'react';

interface CustomWarningWrapperProps {
  icon: 'Frown' | 'LoaderCircle';
  message: string;
}

/**
 * A wrapper component that displays a warning message with an icon.
 * 
 * @param icon - The icon to display (Frown or LoaderCircle).
 * @param message - The warning message to display.
 */
const CustomWarningWrapper: React.FC<CustomWarningWrapperProps> = (props) => {
  const IconComponent = props.icon === 'Frown' ? Frown : LoaderCircle;

  return (
    <div className='flex justify-center gap-2'>
      <IconComponent className='animate-spin' />
      <div className="text-center">{props.message}</div>
    </div>
  );
};

export default CustomWarningWrapper;