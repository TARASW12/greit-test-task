import Image from 'next/image';
import React, { memo } from 'react';
import {ImageType} from "@/types";

export interface ListProps {
  slides: ImageType[];
}

const List : React.FC<ListProps> =({ slides }) => {
  return (
    <>
      {slides.map((img, index) => (
        <div key={index} className="min-w-full">
          <Image
            width={800}
            height={800}
            src={img.medium}
            alt={`Picture ${index}`}
            className="h-full w-full aspect-[16/12] object-cover"
          />
        </div>
      ))}
    </>
  );
};

export const MemoList = memo(List);
