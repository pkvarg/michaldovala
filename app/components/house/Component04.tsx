import Image from 'next/image';
import React from 'react';
import { toast } from 'react-hot-toast';

interface Component04Props {
  onNext: any;
  onBack: any;
  handleHouseCondition: any;
  currentConditionClicked: any;
}

const Component04: React.FC<Component04Props> = ({
  onBack,
  onNext,
  handleHouseCondition,
  currentConditionClicked,
}) => {
  const onNextGuard = (e: any) => {
    e.preventDefault();

    console.log(currentConditionClicked);
    if (currentConditionClicked === '') {
      toast.error('Zvoľte stav nehnuteľnosti');
    } else {
      onNext();
    }
  };
  return (
    <div className="flex flex-col">
      <p className=" text-center text-[10px] text-[#0076ba]  lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>

      <h1 className="py-2 text-center text-[22.5px] font-bold leading-[17.5px] lg:py-2 lg:text-[27.5px]">
        V akom stave je nehnuteľnosť?
      </h1>
      <div id="mn" className="mt-4 flex flex-row justify-center gap-4 lg:gap-4">
        <div
          id="1"
          onClick={() => handleHouseCondition(1)}
          className="relative flex h-[140px] w-[145px] flex-col rounded-[35px] border-2 border-[#0076ba] px-2 py-2 lg:h-[160px] lg:w-[165px]"
        >
          <div>
            <Image
              className="mt-[10%] w-[100%] lg:mt-[10%]"
              src="/cnd01.webp"
              alt="home01"
              width={200}
              height={200}
            />
            <div className="h-[2px] bg-[#000000]"></div>
            <p className="absolute right-4 top-[62.5%] text-[15px] font-bold lg:text-[17.5px]">
              Novostavba
            </p>
            <p className="absolute right-2 top-[77.5%]  mr-2 text-right text-[10px] leading-[12.5px] text-[#0076ba] lg:text-[12.5px]">
              Dom bol postavený iba <br /> nedávno
            </p>
          </div>
        </div>
        <div
          id="2"
          onClick={() => handleHouseCondition(2)}
          className="relative flex h-[140px] w-[145px] flex-col rounded-[35px] border-2 border-[#0076ba] px-2 py-2 lg:h-[160px] lg:w-[165px]"
        >
          <div>
            <Image
              className="ml-[5%] mt-[10%] w-[70%] lg:mt-[8.5%]"
              src="/cnd02.webp"
              alt="home02"
              width={200}
              height={200}
            />
            <div className="h-[3px] bg-[#000000]"></div>
            <p className="absolute right-4 top-[62.5%] text-[15px] font-bold lg:text-[17.5px]">
              Vynikajúci
            </p>
            <p className="absolute right-2 top-[77.5%]  mr-2 text-right text-[10px] leading-[12.5px] text-[#0076ba] lg:text-[12.5px]">
              Dom je kompletne zrekonštruovaný
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center gap-4 lg:gap-4">
        <div
          id="3"
          onClick={() => handleHouseCondition(3)}
          className="relative flex h-[140px] w-[145px] flex-col rounded-[35px] border-2 border-[#0076ba] px-2 py-2 lg:h-[160px] lg:w-[165px]"
        >
          <div>
            <Image
              className="mt-[10%] w-[100%] lg:mt-[8.5%]"
              src="/cnd03.webp"
              alt="home03"
              width={200}
              height={200}
            />
            <div className="h-[3px] bg-[#000000]"></div>
            <p className="absolute right-4 top-[62.5%] text-[15px] font-bold lg:text-[17.5px]">
              Dobrý
            </p>
            <p className="absolute right-2 top-[77.5%]  mr-2 text-right text-[10px] leading-[12.5px] text-[#0076ba] lg:text-[12.5px]">
              Niečo už potrebuje modernizovať
            </p>
          </div>
        </div>
        <div
          id="4"
          onClick={() => handleHouseCondition(4)}
          className="relative flex h-[140px] w-[145px] flex-col rounded-[35px] border-2 border-[#0076ba] px-2 py-2 lg:h-[160px] lg:w-[165px]"
        >
          <div>
            <Image
              className="ml-[7%] mt-[6%] w-[75%] lg:mt-[7%]"
              src="/cnd04.webp"
              alt="home04"
              width={200}
              height={200}
            />
            <div className="mt-2 h-[3px] bg-[#000000]"></div>
            <p className="absolute right-4 top-[62.5%] text-[15px] font-bold lg:text-[17.5px]">
              Pôvodný
            </p>
            <p className="absolute right-2 top-[77.5%]  mr-2 text-right text-[10px] leading-[12.5px] text-[#0076ba] lg:text-[12.5px]">
              Dom potrebuje celkovú rekonštrukciu
            </p>
          </div>
        </div>
      </div>
      <div id="bt" className="mt-4 flex flex-row justify-center gap-4">
        <button
          onClick={(e) => onBack(e)}
          className="h-10 w-[145px] rounded-[35px] border-2 border-[#0076ba] px-8 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:w-[165px] lg:px-9 lg:py-2 lg:text-[15px]"
        >
          Späť
        </button>
        <button
          onClick={(e) => onNextGuard(e)}
          className="h-10 w-[145px] rounded-[35px] border-2 border-[#0076ba] px-8 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:w-[165px] lg:px-8 lg:py-2 lg:text-[15px]"
        >
          Ďalej
        </button>
      </div>
    </div>
  );
};

export default Component04;
