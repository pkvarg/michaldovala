import Image from 'next/image';
import React from 'react';
import { toast } from 'react-hot-toast';

interface Component14Props {
  onNext: any;
  onBack: any;
  hasElectricRadiators: boolean;
  hasHeatPump: boolean;
  hasSolidFuel: boolean;
  hasGasBoiler: boolean;
  hasUnderfloorHeating: boolean;
  hasOther: boolean;
  setHasElectricRadiators: any;
  setHasHeatPump: any;
  setHasSolidFuel: any;
  setHasGasBoiler: any;
  setHasUnderfloorHeating: any;
  setHasOther: any;
}

const Component14: React.FC<Component14Props> = ({
  onBack,
  onNext,
  hasElectricRadiators,
  hasHeatPump,
  hasSolidFuel,
  hasGasBoiler,
  hasUnderfloorHeating,
  hasOther,
  setHasElectricRadiators,
  setHasHeatPump,
  setHasSolidFuel,
  setHasGasBoiler,
  setHasUnderfloorHeating,
  setHasOther,
}) => {
  const onNextGuard = (e: any) => {
    e.preventDefault();

    if (
      hasElectricRadiators === false &&
      hasHeatPump === false &&
      hasSolidFuel === false &&
      hasGasBoiler === false &&
      hasUnderfloorHeating === false &&
      hasOther === false
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
        Typ kúrenia
      </h1>
      <div className="mt-4 flex flex-row justify-center gap-4 text-[#0076ba] lg:gap-4">
        {' '}
        <div
          id="electricradiators"
          onClick={() => setHasElectricRadiators((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[19%] mt-[10%] w-[60%]"
              src="/radiatory.webp"
              alt="ElectricRadiators"
              width={60}
              height={60}
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              Elektrické radiátory
            </p>
          </div>
        </div>
        <div
          id="heatpump"
          onClick={() => setHasHeatPump((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[22.5%] mt-[10.5%] w-[60%]"
              src="/tepelne.webp"
              alt="HeatPump"
              width={60}
              height={60}
            />

            <p className="absolute bottom-3 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              Tepelné čerpadlo
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center gap-4 text-[#0076ba] lg:gap-4 ">
        <div
          id="solidfuel"
          onClick={() => setHasSolidFuel((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[20%] mt-[10.5%] w-[60%]"
              src="/tuhe.webp"
              alt="SolidFuel"
              width={60}
              height={60}
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              Tuhé palivo
            </p>
          </div>
        </div>

        <div
          id="gasboiler"
          onClick={() => setHasGasBoiler((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[22.5%] mt-[10.5%] w-[60%]"
              src="/plynovy.webp"
              alt="GasBoiler"
              width={60}
              height={60}
            />

            <p className="absolute bottom-2 right-3 text-right text-[12.5px] font-bold leading-[12.5px]">
              Plynový kotol
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center gap-4 text-[#0076ba] lg:gap-4">
        <div
          id="underfloorheating"
          onClick={() => setHasUnderfloorHeating((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[25%] mt-[15%] w-[50%]"
              src="/podlahove.webp"
              alt="UnderfloorHeating"
              width={60}
              height={60}
            />

            <p className="absolute bottom-2 right-2 text-right text-[12.5px] font-bold leading-[12.5px]">
              Podlahové kúrenie
            </p>
          </div>
        </div>

        <div
          id="other"
          onClick={() => setHasOther((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[25%] mt-[17.5%] w-[53%]"
              src="/other.webp"
              alt="other"
              width={60}
              height={60}
            />

            <p className="absolute bottom-2 right-4 text-right text-[12.5px] font-bold leading-[12.5px]">
              Iné
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

export default Component14;
