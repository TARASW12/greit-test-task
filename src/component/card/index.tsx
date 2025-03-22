import React from 'react';
import { Heart } from '@/assets/svg/heart';
import { Bedroom } from '@/assets/svg/bedroom';
import { Bath } from '@/assets/svg/bath';
import { Selection } from '@/assets/svg/selection';
import { Split } from '@/component/split';
import { ImageSlider } from '@/component/slider';
import { InfoBlock } from '@/component/InfoBlock';
import { GeneralInfo, ImageType } from '@/types';

interface ProjectCardProps {
  generalInfo: GeneralInfo;
  images: ImageType[];
}

const data: { [key: string]: React.FC<{ className?: string }> } = {
  bathrooms: Bath as React.FC<{ className?: string }>,
  rooms: Bedroom as React.FC<{ className?: string }>,
  size: Selection as React.FC<{ className?: string }>,
};

const ProjectCard: React.FC<ProjectCardProps> = ({ generalInfo, images }) => {
  const { name, province, price, type } = generalInfo;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <div className="relative p-4 bg-white text-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform duration-200">
      <div className="relative group max-w-[800px] mb-4">
        <div className="absolute flex justify-between top-4 px-4 w-full z-10">
          <p className="px-5 py-2 bg-[#004e5b] rounded-3xl">{type}</p>
          <button
            type="button"
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-800 shadow hover:bg-gray-100"
          >
            <Heart />
          </button>
        </div>
        <ImageSlider images={images} />
      </div>
      <div className={'px-5'}>
        <InfoBlock
          name={name}
          formattedPrice={formattedPrice}
          province={province}
        />

        <div className="flex items-center text-gray-500 text-sm mb-2">
          {Object.entries(data).map(([key, Component], i, arr) => (
            <React.Fragment key={key}>
              <div className="flex items-center space-x-1">
                <Component className="w-5 h-5" />
                <span>
                  {JSON.stringify(generalInfo[key as keyof GeneralInfo])}
                </span>
              </div>
              {i < arr.length - 1 && <Split />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
