'use client';
import React, { useState } from 'react';
import Header from './Header';
import Image from 'next/image';

interface GalleryProps {
  slideNo: number;
  setSlideNo: any;
}

const Gallery3: React.FC<GalleryProps> = ({ slideNo, setSlideNo }) => {
  console.log('sld', slideNo);
  return (
    <>
      <div className="hidden h-screen flex-col bg-[#060085] lg:flex">
        <div className="pb-[4%] pt-[9%]">
          <Header />
        </div>
        <div>
          <Image
            height={1000}
            width={1000}
            alt="michal dovala"
            src={`/gallery${slideNo}.webp`}
            className="w-screen"
          />
        </div>
      </div>

      <div className="flex lg:hidden">
        <Image
          src={`/mobile_gallery${slideNo}.webp`}
          height={1000}
          width={1000}
          alt="michal dovala"
        />
      </div>
      <div className="relative">
        <div className="absolute right-[7.5%] top-[40px] flex">
          {slideNo > 0 && (
            <Image
              width={50}
              height={50}
              alt="arrow_left"
              src={'/arrow_left.webp'}
              className="cursor-pointer"
              onClick={() => setSlideNo((prev: number) => prev - 1)}
            />
          )}
          <Image
            width={50}
            height={50}
            alt="arrow_left"
            src={'/arrow_right.webp'}
            className="ml-[200px] cursor-pointer"
            onClick={() => setSlideNo((prev: number) => prev + 1)}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery3;
