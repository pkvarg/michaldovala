import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BiSolidPhoneCall } from 'react-icons/bi';

const Finances = () => {
  return (
    <div className="relative grid h-[1100px] grid-rows-3 bg-white text-[30px]  lg:h-screen">
      <div className="h-[min-content]">
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1  gap-12 md:grid-cols-2">
          <div className="flex w-[310px] flex-col">
            <div className="flex flex-row items-center justify-between">
              <img
                className="-ml-2 h-[70px] w-[75px]"
                src="hypo.webp"
                alt="hypo"
              />
              <p className="text-[35px] font-bold  tracking-[1px] text-[#256ca2]">
                Hypotéky
              </p>
            </div>
            <div className="mt-3 flex  flex-col text-[14px] font-semibold">
              <p className="text-justify">
                Či už plánujete kúpiť dom, refinancovať existujúcu hypotéku
                alebo financovať dôležité projekty, sme tu, aby sme Vám pomohli
                dosiahnuť Váš finančný cieľ.
              </p>
            </div>
          </div>
          <div className="flex w-[310px] flex-col">
            <div className="flex flex-row items-center justify-between">
              <img
                className="-ml-2 h-[70px] w-[75px]"
                src="insurance.webp"
                alt="insurance"
              />
              <p className="text-[35px] font-bold  tracking-[1px] text-[#256ca2]">
                Poistenie
              </p>
            </div>
            <div className="mt-3 flex  flex-col text-[14px] font-semibold">
              <p className="text-justify">
                Poistenie je kľúčovým aspektom finančnej istoty. Preto našim
                klientom poskytujeme široké portfólio poistných riešení na
                mieru.
              </p>
            </div>
          </div>
          <div className="flex w-[310px] flex-col">
            <div className="flex flex-row items-center justify-between">
              <img
                className="-ml-2 h-[70px] w-[75px]"
                src="savings.webp"
                alt="savings"
              />
              <p className="text-[35px] font-bold  tracking-[1px] text-[#256ca2]">
                Úspory
              </p>
            </div>
            <div className="mt-3 flex  flex-col text-[14px] font-semibold">
              <p className="text-justify">
                Rozumieme, že budovanie finančnej stability a pripravenosť na
                dôchodok sú dôležité. Naši odborníci Vám pomáhajú plánovať svoje
                úspory tak, aby ste dosiahli svoje dlhodobé ciele, vrátane
                dôchodku.
              </p>
            </div>
          </div>
          <div className="flex w-[310px] flex-col">
            <div className="flex flex-row items-center justify-between">
              <img
                className="-ml-2 h-[70px] w-[75px]"
                src="investitions.webp"
                alt="investitions"
              />
              <p className="text-[35px] font-bold  tracking-[1px] text-[#256ca2]">
                Investície
              </p>
            </div>
            <div className="mt-3 flex  flex-col text-[14px] font-semibold">
              <p className="text-justify">
                Investície sú kľúčovým nástrojom pre dosiahnutie finančnej
                prosperity a dlhodobého rastu. Naši odborníci Vám poskytujú
                odborné rady a individuálne investičné stratégie, ktoré Vám
                pomáhajú dosiahnuť Vaše finančné ciele.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <p
            id="phone"
            className="flex flex-col items-center gap-4 rounded-[15px] border-[3px] border-[#0076ba] px-6 py-4 text-[20px] font-bold leading-[20px]  text-[#0076ba] 
          "
          >
            <a className="" href="tel:+421944517560">
              Zavolajte nám
            </a>
            <span className="flex flex-row items-center gap-2">
              <BiSolidPhoneCall />
              <a className="text-[20px]" href="tel:+421944517560">
                +421 944 517 560
              </a>
            </span>
          </p>
        </div>
      </div>
      <div className="z-0 h-[min-content]">
        <Footer />
      </div>
    </div>
  );
};

export default Finances;
