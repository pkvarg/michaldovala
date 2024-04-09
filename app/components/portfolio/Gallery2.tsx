import React from 'react';
import Header from './Header';
import Image from 'next/image';

const Gallery2 = () => {
  return (
    <>
      <div className="hidden h-screen flex-col bg-[#060085] lg:flex">
        <div className="py-8">
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

      <div className="flex lg:hidden">
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
