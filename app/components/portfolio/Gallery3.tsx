'use client';
import React from 'react';
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
        <div className="bluemt pb-[4%] 2xl:mt-[12.5%]">
          <Header />
        </div>
        <div>
          {slideNo <= 7 && (
            <Image
              height={1000}
              width={1000}
              alt="michal dovala"
              src={`/gall00${slideNo}.png`}
              className="w-screen"
            />
          )}
        </div>
      </div>

      <div className="relative flex lg:hidden">
        <a
          className="absolute right-[9%] top-6 h-[6%] w-[40%] cursor-pointer bg-transparent px-4 py-2"
          href="tel:+421 944 517 560"
        ></a>
        {slideNo <= 7 && (
          <Image
            src={`/mobile_gallery${slideNo}.webp`}
            height={1000}
            width={1000}
            alt="michal dovala"
          />
        )}
      </div>
      <div className="relative">
        <div className="arrows absolute left-[12.5%] flex lg:left-[72.5%] lg:top-0 2xl:top-[350px]">
          {slideNo > 3 && (
            <Image
              width={50}
              height={50}
              alt="arrow_left"
              src={'/arrow_left.webp'}
              className="w-[35px] cursor-pointer lg:w-[30px]"
              onClick={() => setSlideNo((prev: number) => prev - 1)}
            />
          )}
        </div>
        <div className="arrows absolute right-[12%] flex lg:right-[7.5%] lg:top-0 2xl:top-[350px]">
          {slideNo < 7 && (
            <Image
              width={50}
              height={50}
              alt="arrow_left"
              src={'/arrow_right.webp'}
              className="w-[35px] cursor-pointer lg:w-[30px]"
              onClick={() => setSlideNo((prev: number) => prev + 1)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery3;
