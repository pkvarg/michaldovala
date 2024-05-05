'use client';
import React, { useEffect } from 'react';
import Header from './Header';
import Image from 'next/image';

interface GalleryProps {
  slide: number;
  setSlide: any;
}

const Gallery4: React.FC<GalleryProps> = ({ slide, setSlide }) => {
  console.log('slide-4-', slide);

  useEffect(() => {
    if (slide > 11) {
      setSlide(11);
    }
  }, [slide]);
  return (
    <>
      <div className="hidden h-screen flex-col bg-[#060085] lg:flex">
        <div className="bluemt2 pb-[4%] 2xl:mt-[22.5%]">
          <Header />
        </div>
        <div>
          {slide <= 8}
          <Image
            height={1000}
            width={1000}
            alt="michal dovala"
            src={`/gall00${slide}.png`}
            className="w-screen"
          />
        </div>
      </div>

      <div className="relative flex lg:hidden">
        <a
          className="absolute right-[9%] top-6 h-[6%] w-[40%] cursor-pointer bg-transparent px-4 py-2"
          href="tel:+421 944 517 560"
        ></a>
        {slide >= 8 && (
          <Image
            src={`/mobile_gallery${slide}.webp`}
            height={1000}
            width={1000}
            alt="michal dovala"
          />
        )}
      </div>
      <div className="relative">
        <div className="arrows2 absolute left-[12.5%] flex lg:left-[72.5%] lg:top-0">
          {slide > 8 && (
            <Image
              width={50}
              height={50}
              alt="arrow_left"
              src={'/arrow_left.webp'}
              className="w-[35px] cursor-pointer lg:w-[30px]"
              onClick={() => setSlide((prev: number) => prev - 1)}
            />
          )}
        </div>
        <div className="arrows2 absolute right-[12%] flex lg:right-[7.5%] lg:top-0">
          {slide < 11 && (
            <Image
              width={50}
              height={50}
              alt="arrow_left"
              src={'/arrow_right.webp'}
              className="w-[35px] cursor-pointer lg:w-[30px]"
              onClick={() => setSlide((prev: number) => prev + 1)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery4;
