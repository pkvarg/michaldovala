'use client';
import React, { useState } from 'react';

interface HandleFlatOrHouseProps {
  handleFlatOrHouse: any;
}

const Component00: React.FC<HandleFlatOrHouseProps> = ({
  handleFlatOrHouse,
}) => {
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
    <div className="mx-4 -mt-[22.5%] flex flex-col justify-center lg:mx-0 lg:-mt-[10%]">
      <p className="pt-2 text-center text-[10px] text-[#0076ba] lg:pt-2 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="pb-2 pt-4 text-center text-[18px] font-bold leading-[17.5px]  lg:text-[30px]">
        <span className="text-red-600">Zvoľte</span> typ Vašej nehnuteľnosti
      </h1>
      <div className="flex flex-row justify-center gap-6 pt-8 lg:gap-8">
        <div
          id="flat"
          onClick={() => handleFlatOrHouse('flat')}
          className="flex h-[160px] w-[120px] flex-col gap-[90px] rounded-[25px] border-2 border-[#0076ba] px-2 py-2 lg:h-[220px] lg:w-[180px] lg:rounded-[35px]"
        >
          <div>
            <img
              className="ml-[23%] mt-[20%] w-[60%]"
              src="/flat1.webp"
              alt="flat"
            />
            <p className="mt-4 text-center text-[20px] font-extrabold text-[#0076ba] lg:text-[25px]">
              Byt
            </p>
          </div>
        </div>
        <div
          id="house"
          onClick={() => handleFlatOrHouse('house')}
          className="flex h-[160px] w-[120px] flex-col gap-[90px] rounded-[25px] border-2 border-[#0076ba] px-2 py-2 lg:h-[220px] lg:w-[180px] lg:rounded-[35px]"
        >
          <div>
            <img
              className="ml-[22.5%] mt-[20%] w-[60%]"
              src="/flat2.webp"
              alt="house"
            />
            <p className="mt-4 text-center text-[20px] font-extrabold text-[#0076ba] lg:text-[25px]">
              Dom
            </p>
          </div>
        </div>
      </div>

      <div className="z-9999 relative mt-8 flex flex-col items-center justify-center gap-6 lg:gap-4">
        <p
          id="phone"
          className="flex h-[70px] w-[265px] items-center justify-center rounded-[30px] border-2 border-[#0076ba] py-2 text-center text-[20px] font-extrabold leading-[20px] text-[#0076ba]  lg:w-[385px] lg:rounded-[35px] lg:text-[25px] lg:leading-[29.5px]
          "
        >
          {isHoveredPhone ? (
            <a onMouseLeave={handleMouseLeavePhone} href="tel:+421944517560">
              {phone}
            </a>
          ) : (
            <a onMouseEnter={handleMouseEnterPhone} href="tel:+421944517560">
              Zavolajte nám
            </a>
          )}
        </p>
        <p
          id="email"
          className="flex h-[70px] w-[265px] items-center justify-center rounded-[30px] border-2 border-[#0076ba]  py-2 text-center text-[20px] font-extrabold leading-[20px] text-[#0076ba]  lg:w-[385px] lg:rounded-[35px] lg:text-[25px] lg:leading-[29.5px]"
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
  );
};

export default Component00;
