import Image from 'next/image';
import React from 'react';
import { toast } from 'react-hot-toast';

interface Component12Props {
  onNext: any;
  onBack: any;
  hasWell: boolean;
  hasCityWater: boolean;
  hasCitySewerage: boolean;
  hasSeptic: boolean;
  hasElectricity: boolean;
  hasGas: boolean;
  setHasWell: any;
  setHasCityWater: any;
  setHasCitySewerage: any;
  setHasSeptic: any;
  setHasElectricity: any;
  setHasGas: any;
}

const Component12: React.FC<Component12Props> = ({
  onBack,
  onNext,
  hasWell,
  hasCityWater,
  hasCitySewerage,
  hasSeptic,
  hasElectricity,
  hasGas,
  setHasWell,
  setHasCityWater,
  setHasCitySewerage,
  setHasSeptic,
  setHasElectricity,
  setHasGas,
}) => {
  const onNextGuard = (e: any) => {
    e.preventDefault();

    if (
      hasWell === false &&
      hasCityWater === false &&
      hasCitySewerage === false &&
      hasSeptic === false &&
      hasElectricity === false &&
      hasGas === false
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
        Inžinierske siete
      </h1>
      <div className="mt-4 flex flex-row justify-center gap-4 text-[#0076ba] lg:gap-4">
        {' '}
        <div
          id="well"
          onClick={() => setHasWell((prev: any) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[19%] mt-[10%] w-[70%]"
              src="/well.webp"
              alt="well"
              width={60}
              height={60}
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              Studňa
            </p>
          </div>
        </div>
        <div
          id="citywater"
          onClick={() => setHasCityWater((prev: any) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[20%] mt-[10.5%] w-[60%]"
              src="/citywater.webp"
              alt="citywater"
              width={60}
              height={60}
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              Mestská voda
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center gap-4 text-[#0076ba] lg:gap-4 ">
        <div
          id="citysewerage"
          onClick={() => setHasCitySewerage((prev: any) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[20%] mt-[10.5%] w-[60%]"
              src="/citysewerage.webp"
              alt="sewerage"
              width={60}
              height={60}
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              Mestská kanalizácia
            </p>
          </div>
        </div>

        <div
          id="septic"
          onClick={() => setHasSeptic((prev: any) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[20%] mt-[10.5%] w-[60%]"
              src="/septic.webp"
              alt="septic"
              width={60}
              height={60}
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              Septik/ČOV
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center gap-4 text-[#0076ba] lg:gap-4">
        <div
          id="electricity"
          onClick={() => setHasElectricity((prev: any) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[20%] mt-[10%] w-[60%]"
              src="/electricity.webp"
              alt="electricity"
              width={60}
              height={60}
            />

            <p className="absolute bottom-2 right-2 text-right text-[12.5px] font-bold leading-[12.5px]">
              Elektrina
            </p>
          </div>
        </div>

        <div
          id="gas"
          onClick={() => setHasGas((prev: any) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[15%] mt-[8%] w-[75%]"
              src="/gas.webp"
              alt="gas"
              width={60}
              height={60}
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              Plyn
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4 pt-4 lg:pt-8">
        {' '}
        <button
          onClick={(e) => onBack(e)}
          className="h-10 w-[125px] rounded-[35px] border-2 border-[#0076ba] px-8 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-8 lg:py-2 lg:text-[15px]"
        >
          Späť
        </button>
        <button
          onClick={(e) => onNextGuard(e)}
          className="h-10 w-[125px] rounded-[35px] border-2 border-[#0076ba] px-7 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-7 lg:py-2 lg:text-[15px]"
        >
          Ďalej
        </button>
      </div>
    </div>
  );
};

export default Component12;
