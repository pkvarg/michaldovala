import Image from 'next/image';
import React from 'react';
import { toast } from 'react-hot-toast';

interface Component07Props {
  onNext: any;
  onBack: any;
  hasGarage: boolean;
  hasBasement: boolean;
  hasTerrace: boolean;
  hasPool: boolean;
  hasSauna: boolean;
  hasGardenShed: boolean;
  setHasGarage: any;
  setHasBasement: any;
  setHasTerrace: any;
  setHasPool: any;
  setHasSauna: any;
  setHasGardenShed: any;
}

const Component07: React.FC<Component07Props> = ({
  onBack,
  onNext,
  hasGarage,
  hasBasement,
  hasTerrace,
  hasPool,
  hasSauna,
  hasGardenShed,
  setHasGarage,
  setHasBasement,
  setHasTerrace,
  setHasPool,
  setHasSauna,
  setHasGardenShed,
}) => {
  const onNextGuard = (e: any) => {
    e.preventDefault();

    if (
      hasGarage === false &&
      hasBasement === false &&
      hasTerrace === false &&
      hasPool === false &&
      hasSauna === false &&
      hasGardenShed === false
    ) {
      toast.success('Zvolili ste bez súčastí');
      setTimeout(onNext, 2000);
    } else onNext();
  };
  return (
    <div className="relative mx-[3%] flex flex-col lg:mx-[7%]">
      <p className="pt-12 text-center text-[10px] text-[#0076ba] lg:pt-8 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="py-2 text-center text-[22.5px] font-bold leading-[22.5px] lg:py-2 lg:text-[25px] lg:leading-[27px]">
        Čo ďalšie je súčasťou domu?{' '}
      </h1>
      <div className="mt-4 flex flex-row justify-center gap-4 text-[#0076ba] lg:gap-6 ">
        <div
          id="garage"
          onClick={() => setHasGarage((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[20%] mt-[20%] w-[60%]"
              src="/garage1.webp"
              alt="garage"
              width={60}
              height={60}
            />

            <p className="absolute bottom-0 right-3 text-[20px] font-bold">
              Garáž
            </p>
          </div>
        </div>
        <div
          id="basement"
          onClick={() => setHasBasement((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[24%] mt-[7%] w-[58%]"
              src="/balcony4.webp"
              alt="basement"
              width={60}
              height={60}
            />

            <p className="absolute bottom-0 right-3 text-[20px] font-bold">
              Pivnica
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center gap-4 text-[#0076ba] lg:gap-6 ">
        <div
          id="terrace"
          onClick={() => setHasTerrace((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[18%] mt-[7%] w-[62%] lg:ml-[22%] lg:w-[57%]"
              src="/balcony3.webp"
              alt="terrace"
              width={60}
              height={60}
            />

            <p className="absolute bottom-0 right-3 text-[20px] font-bold">
              Terasa
            </p>
          </div>
        </div>
        <div
          id="pool"
          onClick={() => setHasPool((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[20%] mt-[22.5%] w-[62%] lg:ml-[24%] lg:w-[55%]"
              src="/bazen.webp"
              alt="pool"
              width={60}
              height={60}
            />

            <p className="absolute bottom-0 right-3 text-[20px] font-bold">
              Bazén
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center gap-4 text-[#0076ba] lg:gap-6">
        <div
          id="sauna"
          onClick={() => setHasSauna((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[18%] mt-[15%] w-[62%] lg:ml-[25%] lg:w-[57%]"
              src="/sauna.webp"
              alt="sauna"
              width={60}
              height={60}
            />

            <p className="absolute bottom-0 right-3 text-[20px] font-bold">
              Sauna
            </p>
          </div>
        </div>
        <div
          id="gardenshed"
          onClick={() => setHasGardenShed((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[20%] mt-[15%] w-[62%] lg:ml-[24%] lg:w-[55%]"
              src="/domcek.webp"
              alt="gardenshed"
              width={60}
              height={60}
            />

            <p className="absolute bottom-1 left-12 text-[16px] font-bold leading-[16px]">
              Záhradný domček
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[10%] flex flex-row justify-between lg:mt-[20%]">
        {' '}
        <button
          onClick={(e) => onBack(e)}
          className="h-10 rounded-[35px] border-2 border-[#0076ba] px-8 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-8 lg:py-2 lg:text-[15px]"
        >
          Späť
        </button>
        <button
          onClick={(e) => onNextGuard(e)}
          className="h-10 rounded-[35px] border-2 border-[#0076ba] px-7 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-7 lg:py-2 lg:text-[15px]"
        >
          Ďalej
        </button>
      </div>
    </div>
  );
};

export default Component07;
