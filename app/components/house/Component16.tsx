import React, { useState } from 'react';

interface Component16Props {
  onBack: any;
  price: number;
}

const Component16: React.FC<Component16Props> = ({ onBack, price }) => {
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
    <div className="relative mx-4 flex flex-col md:mx-[5%] lg:mx-[0%]">
      <p className="pt-12 text-center text-[10px] text-[#0076ba] lg:pt-8 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="py-2 text-center text-[22.5px] font-bold leading-[22.5px] lg:py-2 lg:text-[25px] lg:leading-[25px]">
        Odhadovaná cena Vašej <br /> nehnuteľnosti je:
      </h1>

      <div className="mt-2 flex flex-col justify-center">
        <div className="relative mt-8 flex h-[75px] w-[100%] flex-col rounded-lg border-2 border-[#0076ba] lg:h-[100px] lg:rounded-xl">
          <p className="translate-y-[15%] text-center text-[35px] font-bold text-[#ff010f] lg:translate-y-[45%]">
            {price.toLocaleString()} €
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 lg:gap-4">
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

      {/* <button
        onClick={(e) => onBack(e)}
        className="mt-16 w-[90%] rounded-[35px] border border-[#0076ba] px-1 py-2 text-[15px]  font-bold uppercase hover:border-2 hover:border-[#03065f] lg:mt-8"
      >
        Späť (DOM pôjde čoskoro preč 😀)
      </button> */}
    </div>
  );
};

export default Component16;
