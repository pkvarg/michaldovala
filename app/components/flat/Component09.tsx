import React from 'react';
import { toast } from 'react-hot-toast';
import Image from 'next/image';

interface Component09Props {
  onNext: any;
  onBack: any;
  hasGarage: boolean;
  hasParking: boolean;
  hasNoParking: boolean;
  setHasGarage: any;
  setHasParking: any;
  setHasNoParking: any;
}

const Component09: React.FC<Component09Props> = ({
  onBack,
  onNext,
  hasGarage,
  hasParking,
  hasNoParking,
  setHasGarage,
  setHasParking,
  setHasNoParking,
}) => {
  const onNextGuard = () => {
    if (hasGarage === false && hasParking === false && hasNoParking === false) {
      toast.error('Zvolťe možnosť');
    } else onNext();
  };
  return (
    <div className="relative mx-[16%] flex flex-col lg:mx-[20%]">
      <p className="pt-12 text-center text-[10px] text-[#0076ba] lg:pt-8 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="py-2 text-center text-[22.5px] font-bold leading-[22.5px] lg:py-2 lg:text-[25px] lg:leading-[27px]">
        Je v cene bytu aj miesto pre automobil?
      </h1>
      <div className="mt-4 flex flex-row justify-center gap-4 lg:gap-6">
        <div
          id="garage"
          onClick={() => setHasGarage((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[10%] mt-[18%] w-[80%] lg:ml-[12%]"
              src="/garage1.webp"
              alt="garage"
              width={200}
              height={200}
            />

            <p className="absolute bottom-0 right-3 text-[20px] font-bold">
              garáž
            </p>
          </div>
        </div>
        <div
          id="parking"
          onClick={() => setHasParking((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[32%] mt-[18%] w-[40%] lg:ml-[34%] lg:w-[37%]"
              src="/garage2.webp"
              alt="parking"
              width={200}
              height={200}
            />

            <p className="absolute bottom-0 right-3 text-[20px] font-bold">
              státie
            </p>
          </div>
        </div>
      </div>
      <div
        className="mt-6 flex h-[55px] w-[100%] items-center justify-center rounded-[20px] border-2 border-[#0076ba]  lg:mt-6 lg:rounded-[12.5px]"
        id="noParking"
        onClick={() => setHasNoParking((prev: boolean) => !prev)}
      >
        <p className="px-2 text-center text-[20px] font-extrabold leading-[20px] text-[#0076ba] lg:px-2">
          Bez vlastného parkovania
        </p>
      </div>
      <div className="mt-[10%] flex flex-row justify-between lg:mt-[20%]">
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

export default Component09;
