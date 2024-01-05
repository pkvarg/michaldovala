import React from 'react';
import { toast } from 'react-hot-toast';

interface Component12Props {
  onNext: any;
  onBack: any;
  hasThermostat: boolean;
  hasInternet: boolean;
  hasAlarm: boolean;
  hasAirCon: boolean;
  setHasThermostat: any;
  setHasInternet: any;
  setHasAlarm: any;
  setHasAircon: any;
}

const Component12: React.FC<Component12Props> = ({
  onBack,
  onNext,
  hasThermostat,
  hasInternet,
  hasAlarm,
  hasAirCon,
  setHasThermostat,
  setHasInternet,
  setHasAlarm,
  setHasAircon,
}) => {
  const onNextGuard = () => {
    if (
      hasThermostat === false &&
      hasInternet === false &&
      hasAlarm === false &&
      hasAirCon === false
    ) {
      toast.success('Zvolili ste bez uvedenia prvkov');
      setTimeout(onNext, 2000);
    } else onNext();
  };
  return (
    <div className="relative mx-4 flex flex-col lg:mx-[5%]">
      <p className="pt-12 text-center text-[10px] text-[#0076ba] lg:pt-8 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="py-2 text-center text-[22.5px] font-bold leading-[22.5px] lg:py-2 lg:text-[25px] lg:leading-[25px] ">
        Má byt prvky inteligentnej domácnosti?
      </h1>
      <div className="mt-4 flex flex-row justify-center gap-4 lg:gap-4">
        {' '}
        <div
          id="thermostat"
          onClick={() => setHasThermostat((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <img
              className="ml-[19%] mt-[10%] w-[70%]"
              src="/smart1.webp"
              alt="termostat"
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              smart <br /> termostat
            </p>
          </div>
        </div>
        <div
          id="internet"
          onClick={() => setHasInternet((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <img
              className="ml-[25%] mt-[10%] w-[53%]"
              src="/smart2.webp"
              alt="internet"
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              internetové <br /> pripojenie
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center gap-4 lg:gap-4">
        <div
          id="alarm"
          onClick={() => setHasAlarm((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <img
              className="ml-[12%] mt-[10.5%] w-[40%]"
              src="/smart3.webp"
              alt="security"
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              bezpečnostný systém
            </p>
          </div>
        </div>
        <div
          id="aircon"
          onClick={() => setHasAircon((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <img
              className="ml-[15%] mt-[10%] w-[50%]"
              src="/smart4.webp"
              alt="aircon"
            />

            <p className="absolute bottom-2 right-1 text-right text-[10px] font-bold leading-[15px]">
              klimatizácia/ stropné chladenie
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4 pt-4 lg:pt-8">
        {' '}
        <button
          onClick={onBack}
          className="h-10 w-[125px] rounded-[35px] border-2 border-[#0076ba] px-8 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-8 lg:py-2 lg:text-[15px]"
        >
          Späť
        </button>
        <button
          onClick={() => onNextGuard()}
          className="h-10 w-[125px] rounded-[35px] border-2 border-[#0076ba] px-7 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-7 lg:py-2 lg:text-[15px]"
        >
          Ďalej
        </button>
      </div>
    </div>
  );
};

export default Component12;
