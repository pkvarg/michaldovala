import React from 'react';
import Header from './Header';
import Image from 'next/image';

const Gallery2 = () => {
  return (
    <>
      <div className="relative hidden h-screen flex-col bg-[#060085] lg:flex">
        <div className="pb-8 lg:pt-[2%] 2xl:pt-[3%]">
          <Header />
        </div>

        <div>
          <div className="absolute right-[10%] top-[31%] hidden lg:flex 2xl:right-[5%] 2xl:top-[30%]">
            <div>
              <div className="ml-[10px] h-[85px] w-[290px] bg-[#edd900]"></div>
              <div className=" -mt-[93px] mr-4 bg-[#ffffff] px-4 py-2 text-[30px]">
                <h1 className="text-[45px] font-black uppercase text-green-900">
                  Cv na mieru
                </h1>
              </div>
            </div>
          </div>
          <Image
            height={1000}
            width={1000}
            alt="michal dovala"
            src={'/gallery002.png'}
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
