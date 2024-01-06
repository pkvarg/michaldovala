'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const OurServices = () => {
  const phone = '+421944517560';
  const email = 'info@michaldovala.sk';

  const [isHoveredPhone, setIsHoveredPhone] = useState(false);
  const [isHoveredEmail, setIsHoveredEmail] = useState(false);

  const handleMouseEnterPhone = () => {
    setIsHoveredPhone(true);
  };

  const handleMouseLeavePhone = () => {
    setIsHoveredPhone(false);
  };

  const handleMouseEnterEmail = () => {
    setIsHoveredEmail(true);
  };

  const handleMouseLeaveEmail = () => {
    setIsHoveredEmail(false);
  };

  return (
    <div className="relative flex h-[1750px]  grid-rows-3 flex-col  lg:grid lg:h-screen">
      <div className="h-[min-content]">
        <Navbar />
      </div>
      <div className="z-10 flex h-auto items-center justify-center lg:h-[100%]">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="mt-6 flex flex-col lg:mt-0">
            <div className="realsluzby px-14 pt-10  text-[20px] uppercase text-white md:pt-4 md:text-[15px] lg:px-4 lg:pb-8 lg:pt-8 lg:text-[20px]">
              <p className="mt-4 font-extrabold lg:mt-0">
                Realitné služby, ktoré{' '}
              </p>
              <p className="font-thin">sa prispôsobia Vašim</p>
              <p className="font-thin">potrebám</p>
            </div>
            <div className="z-9999 relative mt-14 hidden flex-col items-center justify-center gap-6 lg:mt-[50%] lg:flex lg:gap-4">
              <p
                id="phone"
                className="flex h-[60px] w-[100%] items-center justify-center rounded-[30px] border-2 border-[#0076ba] py-2 text-center text-[20px] font-extrabold leading-[20px] text-[#0076ba]   lg:rounded-[25px] lg:text-[20px] lg:leading-[29.5px]
          "
              >
                {isHoveredPhone ? (
                  <a
                    onMouseLeave={handleMouseLeavePhone}
                    href="tel:+421944517560"
                  >
                    {phone}
                  </a>
                ) : (
                  <a
                    onMouseEnter={handleMouseEnterPhone}
                    href="tel:+421944517560"
                  >
                    Zavolajte nám
                  </a>
                )}
              </p>
              <p
                id="email"
                className="flex h-[60px] w-[100%] items-center justify-center rounded-[30px] border-2 border-[#0076ba] py-2 text-center text-[20px] font-extrabold leading-[20px] text-[#0076ba]   lg:rounded-[25px] lg:text-[20px] lg:leading-[29.5px]"
              >
                {isHoveredEmail ? (
                  <a
                    onMouseLeave={handleMouseLeaveEmail}
                    href="mailto:info@michaldovala.sk"
                  >
                    {email}
                  </a>
                ) : (
                  <a
                    onMouseEnter={handleMouseEnterEmail}
                    href="mailto:info@michaldovala.sk"
                  >
                    Napíšte nám
                  </a>
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 lg:gap-0">
            <div className="ml-8 flex flex-col items-start justify-center font-light lg:ml-0">
              <div className="flex flex-row items-center">
                <Image
                  className="-ml-[12px] h-[50px] w-[50px]"
                  src="/Predaj.webp"
                  alt="sale"
                  width={60}
                  height={60}
                />
                <p className="text-[22.5px] font-semibold text-[#256ca2] lg:text-[18px]">
                  Predaj nehnuteľnosti
                </p>
              </div>
              <div className="text-[14px] leading-[16px]">
                <p className="mt-1">S nami môžete mať istotu, že Vaša</p>
                <p>nehnuteľnosť bude predaná za</p>
                <p>najvýhodnejšiu cenu na trhu.</p>
              </div>
            </div>
            <div className="ml-8 flex flex-col items-start justify-center font-light lg:ml-0">
              <div className="flex flex-row items-center">
                <Image
                  className="-ml-[12px] h-[50px] w-[50px]"
                  src="/Property.webp"
                  alt="sale"
                  width={60}
                  height={60}
                />
                <p className="text-[22.5px] font-semibold text-[#256ca2] lg:text-[18px]">
                  {' '}
                  Property management
                </p>
              </div>

              <div className="text-[14px] leading-[16px]">
                <p className="mt-1">Ušetrite čas pri správe svojho</p>
                <p> nájmu. Riešenie problémov</p>
                <p>nechajte na nás. </p>
              </div>
            </div>
            <div className="ml-8 flex flex-col items-start justify-center font-light lg:ml-0">
              <div className="flex flex-row items-center">
                <Image
                  className="-ml-[12px] h-[50px] w-[50px]"
                  src="/Inziniering.webp"
                  alt="sale"
                  width={60}
                  height={60}
                />
                <p className="text-[22.5px] font-semibold text-[#256ca2] lg:text-[18px]">
                  {' '}
                  Inžiniering
                </p>
              </div>
              <div className="text-[14px] leading-[16px]">
                <p className="mt-1">Všetky povolenia súvisiace so</p>
                <p>stavbou alebo rekonštrukciou</p>
                <p>domu vybavíme za Vás.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:gap-0">
            <div className="ml-8 flex flex-col items-start justify-center font-light lg:ml-0">
              <div className="flex flex-row items-center">
                <Image
                  className="-ml-[12px] h-[50px] w-[50px]"
                  src="/Prenajom.webp"
                  alt="sale"
                  width={60}
                  height={60}
                />
                <p className="text-[22.5px] font-semibold text-[#256ca2] lg:text-[18px]">
                  {' '}
                  Prenájom nehnuteľnosti
                </p>
              </div>

              <div className="text-[14px] leading-[16px]">
                <p className="mt-1">Pomôžeme Vám nájsť tých</p>
                <p>správnych nájomcov na krátkodobý</p>
                <p>alebo dlhodobý prenájom.</p>
              </div>
            </div>
            <div className="ml-8 flex flex-col items-start justify-center font-light lg:ml-0">
              <div className="flex flex-row items-center">
                <Image
                  className="-ml-[12px] h-[50px] w-[50px]"
                  src="/Agent.webp"
                  alt="sale"
                  width={60}
                  height={60}
                />
                <p className="text-[22.5px] font-semibold text-[#256ca2] lg:text-[18px]">
                  {' '}
                  Agent kupujúceho
                </p>
              </div>

              <div className="text-[14px] leading-[16px]">
                <p className="mt-1">Maklér vždy po boku. Vyberieme</p>
                <p>poradíme, prevedieme Vás celým </p>
                <p>procesom až po kúpu.</p>
              </div>
            </div>
            <div className="ml-8 flex flex-col items-start justify-center font-light lg:ml-0">
              <div className="flex flex-row items-center">
                <Image
                  className="-ml-[12px] h-[50px] w-[50px]"
                  src="/Legalizacia.webp"
                  alt="sale"
                  width={60}
                  height={60}
                />
                <p className="text-[22.5px] font-semibold text-[#256ca2] lg:text-[18px]">
                  {' '}
                  Legalizácia stavieb
                </p>
              </div>

              <div className="text-[14px] leading-[16px]">
                <p className="mt-1">Zameriavame sa na pomoc pri </p>
                <p> usporiadaní vlastníctva a zápis</p>
                <p>stavieb do katastra nehnuteľností.</p>
              </div>
            </div>
          </div>
          <div className="z-9999 relative mt-14  flex flex-col items-center justify-center gap-6  lg:hidden">
            <p
              id="phone"
              className="flex h-[60px] w-[85%] items-center justify-center rounded-[30px] border-2 border-[#0076ba] py-2 text-center text-[20px] font-extrabold leading-[20px] text-[#0076ba] lg:w-[100%]   lg:rounded-[25px] lg:text-[20px] lg:leading-[29.5px]
          "
            >
              {isHoveredPhone ? (
                <a
                  onMouseLeave={handleMouseLeavePhone}
                  href="tel:+421944517560"
                >
                  {phone}
                </a>
              ) : (
                <a
                  onMouseEnter={handleMouseEnterPhone}
                  href="tel:+421944517560"
                >
                  Zavolajte nám
                </a>
              )}
            </p>
            <p
              id="email"
              className="flex h-[60px] w-[85%] items-center justify-center rounded-[30px] border-2 border-[#0076ba] py-2 text-center text-[20px] font-extrabold leading-[20px] text-[#0076ba] lg:w-[100%]   lg:rounded-[25px] lg:text-[20px] lg:leading-[29.5px]"
            >
              {isHoveredEmail ? (
                <a
                  onMouseLeave={handleMouseLeaveEmail}
                  href="mailto:info@michaldovala.sk"
                >
                  {email}
                </a>
              ) : (
                <a
                  onMouseEnter={handleMouseEnterEmail}
                  href="mailto:info@michaldovala.sk"
                >
                  Napíšte nám
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="z-0 h-[min-content]">
        <Footer />
      </div>
    </div>
  );
};

export default OurServices;
