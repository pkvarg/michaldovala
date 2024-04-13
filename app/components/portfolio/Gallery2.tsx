import React from 'react';
import Header from './Header';
import Image from 'next/image';

const Gallery2 = () => {
  return (
    <>
      <div className="hidden h-screen flex-col bg-[#060085] lg:flex">
        <div className="pb-8 lg:pt-[2%] 2xl:pt-[3%]">
          <Header />
        </div>
        <div>
          <Image
            height={1000}
            width={1000}
            alt="michal dovala"
            src={'/gallery2.webp'}
            className="w-screen"
          />
        </div>
      </div>

      <div className="relative flex lg:hidden">
        <a
          className="absolute right-[9%] top-6 h-[6%] w-[40%] cursor-pointer bg-transparent px-4 py-2"
          href="tel:+421 944 517 560"
        ></a>
        <Image
          src={'/mobile_gallery2.webp'}
          height={1000}
          width={1000}
          alt="michal dovala"
        />
      </div>
    </>
  );
};

export default Gallery2;
