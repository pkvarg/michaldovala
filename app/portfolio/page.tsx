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
      <div className="absolute right-[15%] top-[40%]">
        <Image
          width={500}
          height={500}
          alt="michal dovala"
          src="/md_no_text.webp"
        ></Image>
      </div>
    </div>
  );
};

export default Portfolio;
