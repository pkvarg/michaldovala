import Image from 'next/image';
import React from 'react';
import { toast } from 'react-hot-toast';

interface Component11Props {
  onNext: any;
  onBack: any;
  hasIsolation: boolean;
  hasNewElevator: boolean;
  hasNewWindows: boolean;
  hasNewInstallations: boolean;
  setHasIsolation: any;
  setHasNewElevator: any;
  setHasNewWindows: any;
  setHasNewInstallations: any;
}

const Component11: React.FC<Component11Props> = ({
  onBack,
  onNext,
  hasIsolation,
  hasNewElevator,
  hasNewWindows,
  hasNewInstallations,
  setHasIsolation,
  setHasNewElevator,
  setHasNewWindows,
  setHasNewInstallations,
}) => {
  const onNextGuard = () => {
    if (
      hasIsolation === false &&
      hasNewElevator === false &&
      hasNewWindows === false &&
      hasNewInstallations === false
    ) {
      toast.success('Zvolili ste bez uvedenia stavu');
      setTimeout(onNext, 2000);
    } else onNext();
  };
  return (
    <div className="relative mx-[5%] flex flex-col lg:mx-[9%]">
      <p className="pt-12 text-center text-[10px] text-[#0076ba] lg:pt-8 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="py-2 text-center text-[22.5px] font-bold leading-[22.5px] lg:py-2 lg:text-[25px] lg:leading-[27px]">
        Aký je stav bytového domu?
      </h1>
      <div className="mt-4 flex flex-row justify-center gap-4 lg:gap-4">
        <div
          id="isolation"
          onClick={() => setHasIsolation((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[22%] mt-[5%] w-[60%] lg:ml-[15%]"
              src="/bcond1.webp"
              alt="isolation"
              width={60}
              height={60}
            />

            <p className="absolute bottom-2 right-3 text-[15px] font-bold">
              zateplený
            </p>
          </div>
        </div>
        <div
          id="newElevator"
          onClick={() => setHasNewElevator((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[20%] mt-[5%] w-[45%] lg:ml-[15%] lg:w-[53%]"
              src="/bcond2.webp"
              alt="newElevator"
              width={60}
              height={60}
            />

            <p className="absolute bottom-2 right-3 text-[15px] font-bold">
              nový výťah
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center gap-4 lg:gap-4">
        <div
          id="newWindows"
          onClick={() => setHasNewWindows((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[12%] mt-[8%] w-[43%]"
              src="/bcond3.webp"
              alt="newWindows"
              width={60}
              height={60}
            />

            <p className="absolute bottom-2 right-3 text-[15px] font-bold">
              nové okná
            </p>
          </div>
        </div>
        <div
          id="newInstallations"
          onClick={() => setHasNewInstallations((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[15%] mt-[7%] w-[55%]"
              src="/bcond4.webp"
              alt="newInstallations"
              width={60}
              height={60}
            />

            <p className="absolute bottom-2 right-1 text-[13.5px] font-bold">
              nové stupačky
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between pt-4 lg:pt-8">
        {' '}
        <button
          onClick={onBack}
          className="h-10 rounded-[35px] border-2 border-[#0076ba] px-8 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-8 lg:py-2 lg:text-[15px]"
        >
          Späť
        </button>
        <button
          onClick={() => onNextGuard()}
          className="h-10 rounded-[35px] border-2 border-[#0076ba] px-7 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-7 lg:py-2 lg:text-[15px]"
        >
          Ďalej
        </button>
      </div>
    </div>
  );
};

export default Component11;
