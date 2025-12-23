import React from 'react';
import logoImage from './logo.png';

/**
 * Logo Asset
 * 
 * This component renders the logo image.
 */
export const Logo: React.FC = () => {
  return (
    <img 
      src={logoImage} 
      alt="DoneKit Logo" 
      className="h-10 w-auto rounded-[13px] object-contain" 
    />
  );
};
