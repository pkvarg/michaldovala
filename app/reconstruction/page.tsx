'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdEuro } from 'react-icons/md';
import { FaPerson } from 'react-icons/fa6';
import { FaSmile } from 'react-icons/fa';
import { RiRunLine } from 'react-icons/ri';

const Reconstruction = () => {
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
    <div className="relative flex h-[1050px]  grid-rows-3 flex-col  lg:grid lg:h-screen">
      <div className="h-[min-content]">
        <Navbar />
      </div>
      <div className="z-10 flex h-auto flex-col items-center justify-center lg:h-[100%]">
        <div className="flex flex-col justify-center text-[30px] font-extrabold leading-[35px]  lg:leading-[30px]">
          <div className="mx-2 mt-16 lg:mx-0 lg:mt-0">
            <p className="text-center lg:text-left">
              Snívate o tom, že Váš domov bude vyzerať <br />
              <span className="mr-2 text-[#1871aa]">štýlovo</span>a
              <span className="ml-2 mr-1 text-[#1871aa]">elegatne</span>?
            </p>
          </div>
          <div className="mt-16 flex flex-col items-center justify-center gap-6 text-[22.5px] lg:flex-row lg:text-[25px]">
            <div className="flex flex-col items-start gap-4 lg:ml-2">
              <div className="flex flex-row items-center gap-2 lg:gap-6">
                <MdEuro className="text-[35px]" />

                <p className="font-bold text-[#1871aa]">
                  Bezplatná cenová ponuka
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 lg:gap-6">
                <FaPerson className="text-[35px]" />
                <p className="font-bold text-[#1871aa]">Individuálny prístup</p>
              </div>
              <div className="flex flex-row items-center gap-3 lg:gap-6">
                <FaSmile className="text-[35px]" />
                <p className="font-bold leading-[45px] text-[#1871aa]">
                  Zaručujeme 100% spokojnosť
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 lg:gap-6">
                <RiRunLine className="text-[35px]" />
                <p className="font-bold text-[#1871aa]">Rýchla reakcia</p>
              </div>
            </div>
            <div className="mt-4 flex justify-center lg:mt-0 lg:justify-start">
              <img
                className="w-[350px] lg:w-[350px]"
                src="reconstruction.webp"
                alt="kvalitnamontaz.sk"
              />
            </div>
          </div>
          <p className="mx-4 mt-8 text-center text-[12.5px] font-bold leading-[17.5px] lg:mx-0">
            <span className="mr-2 text-red-400">*</span>
            službu poskytujeme výhradne v Bratislave a blízkom okolí, pre viac
            informácií nás kontaktujte{' '}
          </p>
          <div className="z-9999 relative mt-8 flex flex-col items-center justify-center gap-6 lg:mt-16 lg:flex-row lg:gap-4">
            <p
              id="phone"
              className="flex h-[70px] w-[265px] items-center justify-center rounded-[30px] border-2 border-[#0076ba] py-2 text-center text-[20px] font-extrabold leading-[20px] text-[#0076ba]  lg:w-[285px] lg:rounded-[35px] lg:text-[22.5px] lg:leading-[29.5px]
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
              className="flex h-[70px] w-[265px] items-center justify-center rounded-[30px] border-2 border-[#0076ba]  py-2 text-center text-[20px] font-extrabold leading-[20px] text-[#0076ba]  lg:w-[285px] lg:rounded-[35px] lg:text-[22.5px] lg:leading-[29.5px]"
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

export default Reconstruction;
