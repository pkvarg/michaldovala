import React from 'react';
import Header from '../components/portfolio/Header';
import Image from 'next/image';

const Portfolio = () => {
  return (
    // <div className="portfolio-hero relative">
    <div className="relative h-screen bg-[#060085]">
      <Header />
      <div className="absolute left-[15%] top-[52.5%] text-[22.5px] 2xl:left-[20%] 2xl:top-[55%]">
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
      <div className="z-1 absolute -right-[15%] top-[20%]">
        <Image
          width={1000}
          height={1000}
          alt="michal dovala"
          src="/md_no_text.webp"
        ></Image>
      </div>
      <div className="alfa-slab z-999 absolute right-[30%] top-[50%] text-center">
        <h1 className="text-[175px] font-[900] uppercase text-white">
          <span className="inline-block">M</span>
          <span className="inline-block">i</span>
          <span className="inline-block">c</span>
          <span className="inline-block">h</span>
          <span className="inline-block">a</span>
          <span className="inline-block">l</span>
        </h1>
        <h2 className="-mt-[20%] text-[175px] font-[900] uppercase text-black">
          <span className="inline-block">D</span>
          <span className="inline-block">o</span>
          <span className="inline-block">v</span>
          <span className="inline-block">a</span>
          <span className="inline-block">l</span>
          <span className="inline-block">a</span>
        </h2>
      </div>
    </div>
  );
};

export default Portfolio;
