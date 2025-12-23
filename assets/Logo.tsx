import React from 'react';

/**
 * Logo Asset
 * 
 * This component renders the "/logo.png" file.
 * Ensure you have placed your image file named "logo.png" in the public folder.
 */
export const Logo: React.FC = () => {
  return (
    <img 
      src="/logo.png" 
      alt="DoneKit Logo" 
      className="h-10 w-auto rounded-[13px] object-contain" 
    />
  );
};
