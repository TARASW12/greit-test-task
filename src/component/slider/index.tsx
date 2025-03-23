import React, { useMemo, useRef, useState } from 'react';
import { Button } from '@/component/button';
import { LeftArrow } from '@/assets/svg/leftArrow';
import { RightArrow } from '@/assets/svg/rightArrow';
import { ImageType } from '@/types';
import { MemoList } from '@/component/list';

export interface ImageSliderProps {
  images: ImageType[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [current, setCurrent] = useState<number>(1);
  const sliderRef = useRef<HTMLDivElement>(null);
  const animatingRef = useRef<boolean>(false);

  const slides = useMemo(() => {
    if (images.length === 0) return [];
    return [images[images.length - 1], ...images, images[0]];
  }, [images]);

  const nextImage = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setCurrent((prev) => prev + 1);
  };

  const prevImage = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setCurrent((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    let updatedCurrent = current;

    if (current === slides.length - 1) {
      updatedCurrent = 1;
    } else if (current === 0) {
      updatedCurrent = slides.length - 2;
    }
    setCurrent(updatedCurrent);
    animatingRef.current = false;
  };

  if (!images || images.length === 0) {
    return <div>Немає зображень</div>;
  }

  return (
    <div className="relative group overflow-hidden rounded-3xl">
      <div
        ref={sliderRef}
        className="flex"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: animatingRef.current
            ? 'transform 0.5s ease-in-out'
            : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <MemoList slides={slides} />
      </div>

      <Button onClick={prevImage} icon={LeftArrow} position="left" />
      <Button onClick={nextImage} icon={RightArrow} position="right" />
    </div>
  );
};
