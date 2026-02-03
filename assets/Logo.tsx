import Image from 'next/image';
import logoImage from './logo.png';

/**
 * Logo Asset
 * 
 * This component renders the logo image.
 */
export const Logo: React.FC = () => {
  return (
    <Image
      src={logoImage}
      alt="DoneKit Logo"
      height={40}
      className="w-auto rounded-[13px] object-contain"
    />
  );
};
