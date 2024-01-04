'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const path = usePathname();

  const reloadAndHome = () => {
    if (path === '/') window.location.reload();
    else router.push('/');
  };

  return (
    <div
      className={
        path === '/'
          ? 'mt-4 flex flex-row items-center justify-center gap-[65%] md:gap-[52.5%] lg:gap-[45%]'
          : 'mt-4 flex flex-row items-center justify-center gap-[65%] md:gap-[52.5%] lg:gap-[47%]'
      }
    >
      <div className="flex flex-row items-center gap-2 lg:gap-2">
        <p
          onClick={() => reloadAndHome()}
          className="-mt-[2%] text-[15px] font-normal leading-[14px] text-[#0076ba] hover:cursor-pointer lg:text-[25px] lg:leading-[22.5px]"
        >
          MICHAL <br /> DOVALA
        </p>
      </div>
      <div className="relative flex cursor-pointer flex-col">
        <div
          onClick={() => setShowMenu((prev) => !prev)}
          className="flex flex-col gap-[4px] lg:gap-[7px]"
        >
          <div className="h-[5px] w-[30px] bg-[#0076ba]  lg:h-[7px] lg:w-[40px]"></div>
          <div className="h-[5px] w-[30px] bg-[#0076ba] lg:h-[7px] lg:w-[40px]"></div>
          <div className="h-[5px] w-[30px] bg-[#0076ba] lg:h-[7px] lg:w-[40px]"></div>
        </div>

        {showMenu && (
          <div className="absolute -right-[2.5px] top-8 z-20 w-[200px]  border-4 border-[#007ad6] bg-white py-2 lg:top-12">
            <div className="menu flex flex-col pr-[5px] text-[22.5px] font-semibold">
              <a href="/">Domov</a>
              <a href="/current-offer">Aktuálna ponuka</a>
              <a href="/calculator">Nacenenie</a>
              <a href="/finances">Financie</a>
              <a href="/reconstruction">Rekonštrukcia</a>
              <a href="/our-services">Naše služby</a>
              <a href="/e-book">E-Book</a>
              <a href="/contact">Kontakt</a>
              <a href="/tip">Odmena za tip</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
