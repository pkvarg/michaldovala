'use client';
import React, { useEffect, useState } from 'react';
import Header from '../components/portfolio/Header';
import Image from 'next/image';
import Gallery2 from '../components/portfolio/Gallery2';
import Gallery3 from '../components/portfolio/Gallery3';
import Gallery4 from '../components/portfolio/Gallery4';

const Portfolio = () => {
  const [slideNo, setSlideNo] = useState(3);
  const [slide, setSlide] = useState(8);

  useEffect(() => {
    if (slideNo > 7) {
      setSlideNo(7);
    }
  }, [slideNo]);

  return (
    <div className="bg-[#060085]">
      <div className="relative hidden h-screen flex-col bg-[#060085] lg:flex">
        <Header />
        <div className="z-9999 absolute left-[15%] top-[52.5%] hidden text-[22.5px] lg:inline 2xl:left-[20%] 2xl:top-[50%]">
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
        <div className="absolute -right-[15%] top-[20%] z-0 hidden lg:inline 2xl:right-0">
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

      <div className="relative flex lg:hidden">
        <a
          className="absolute right-[9%] top-6 h-[6%] w-[40%] cursor-pointer bg-transparent px-4 py-2"
          href="tel:+421 944 517 560"
        ></a>
        <Image
          src={'/mobile_hero.webp'}
          height={1000}
          width={1000}
          alt="michal dovala"
        />
      </div>
      <Gallery2 />
      <Gallery3 slideNo={slideNo} setSlideNo={setSlideNo} />
      <Gallery4 slide={slide} setSlide={setSlide} />

      <div className="relative mt-[30%] hidden h-[115vh] flex-col bg-[#060085] lg:flex 2xl:mt-[15%]">
        <Header />

        <div className="absolute left-[15%] top-[52.5%] hidden bg-[#060085] text-[22.5px] lg:inline 2xl:left-[20%] 2xl:top-[50%]">
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
        <div className="alfa-slab hidden bg-[#060085] lg:inline">
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
        <div className="absolute bottom-1 left-[15%] flex flex-row bg-[#060085] text-[#edd900]">
          <a href="https://www.pictusweb.sk" target="_blank" rel="noreferrer">
            &#60;&#47;&#62; PICTUSWEB Development
          </a>
        </div>
        <div className="absolute bottom-1 right-[15%] flex flex-row bg-[#060085] text-[#edd900]">
          <p>&copy; {Date().substring(11, 15)} Všetky práva vyhradené</p>
        </div>
      </div>
      <div className="relative flex bg-[#060085] lg:hidden">
        <a
          className="absolute right-[9%] top-6 h-[6%] w-[40%] cursor-pointer bg-transparent px-4 py-2"
          href="tel:+421 944 517 560"
        ></a>
        <Image
          src={'/mobile_footer.webp'}
          height={1000}
          width={1000}
          alt="michal dovala"
        />
        <a
          href="https://www.pictusweb.sk"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-1 left-2 text-[#edd900]"
        >
          &#60;&#47;&#62; PICTUSWEB Development
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
