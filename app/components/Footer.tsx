'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const path = usePathname();

  return (
    <div className="absolute bottom-0 left-1/2 z-0 w-[100%] -translate-x-[50%] bg-[#ffffff] md:bottom-2">
      <div
        className={
          path === '/'
            ? 'mt-8 flex flex-row items-center justify-center gap-[15%] text-[10px] text-[#007ad6] md:gap-[35%] lg:mt-8 lg:gap-[25%] lg:text-[15px] xl:gap-[26%] 2xl:gap-[30%]'
            : 'mt-8 flex flex-row items-center justify-center gap-[15%] text-[10px] text-[#007ad6] md:gap-[35%] lg:mt-8 lg:gap-[28%]  lg:text-[15px] xl:gap-[26.5%] 2xl:gap-[30%]'
        }
      >
        <a
          className="  text-center"
          href="https://pictusweb.sk"
          target="_blank"
        >
          &#60;&#47;&#62; PICTUSWEB Development
        </a>
        <p> &copy; {Date().substring(11, 15)} Všetky práva vyhradené</p>
      </div>
    </div>
  );
};

export default Footer;
