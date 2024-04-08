import React from 'react';
import Header from '../components/portfolio/Header';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <>
      <div className="relative hidden h-screen flex-col bg-[#060085] lg:flex">
        <Header />
        <div className="absolute left-[15%] top-[52.5%] hidden text-[22.5px] lg:inline 2xl:left-[20%] 2xl:top-[50%]">
          <p className="ml-[36%] flex flex-row gap-1 font-extrabold text-[#ffffff]">
            <span className="text-[#edd900]">Zlepši</span>
            <span>predaje,</span>
            <span className="text-[#edd900]">zaujmi</span>
            <span>skvelým logom,</span>
          </p>
          <p className="mr-1 flex flex-row gap-1 font-extrabold text-[#ffffff]">
            <span>letákom alebo CV. Digitálne služby predaje</span>
            <span className="text-[#edd900]">zaujmi</span>
            <span>na mieru</span>
          </p>
        </div>
        <div className=" z-1 absolute -right-[15%] top-[20%] hidden lg:inline 2xl:right-0">
          <Image
            width={1000}
            height={1000}
            alt="michal dovala"
            src="/md_no_text.webp"
          ></Image>
        </div>
        <div className="alfa-slab hidden lg:inline">
          <h1 className="absolute right-[30%] top-[55%] z-10 text-center text-[185px] font-[900] uppercase text-white">
            <span className="inline-block">M</span>
            <span className="inline-block">i</span>
            <span className="inline-block">c</span>
            <span className="inline-block">h</span>
            <span className="inline-block">a</span>
            <span className="inline-block">l</span>
          </h1>
          <h2 className="absolute right-[20%] top-[67.5%] z-0 text-center text-[185px] font-[900] uppercase text-black">
            <span className="inline-block">D</span>
            <span className="inline-block">o</span>
            <span className="inline-block">v</span>
            <span className="inline-block">a</span>
            <span className="inline-block">l</span>
            <span className="inline-block">a</span>
          </h2>
        </div>
      </div>

      <div className="flex lg:hidden">
        <Image
          src={'/mobile_hero.webp'}
          height={1000}
          width={1000}
          alt="michal dovala"
        />
      </div>
    </>
  );
};

export default Portfolio;
