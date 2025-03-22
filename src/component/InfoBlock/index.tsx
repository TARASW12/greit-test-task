import { LocationPin } from '@/assets/svg/local';
import React from 'react';

interface InfoBlockProps {
  name: string;
  formattedPrice: string;
  province: string;
}

export const InfoBlock: React.FC<InfoBlockProps> = ({
  name,
  formattedPrice,
  province,
}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <p className="text-black font-bold">{name}</p>
        <p className="text-red-400 font-bold">{formattedPrice}</p>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <LocationPin />
        <span className="text-black">{province}</span>
      </div>
    </>
  );
};
