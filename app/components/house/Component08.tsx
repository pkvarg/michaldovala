import Image from 'next/image';
import React from 'react';
import { toast } from 'react-hot-toast';

interface Component08Props {
  onNext: any;
  onBack: any;
  handleLandType: any;
  currentLandTypeClicked: any;
}

const Component08: React.FC<Component08Props> = ({
  onBack,
  onNext,
  handleLandType,
  currentLandTypeClicked,
}) => {
  const onNextGuard = (e: any) => {
    e.preventDefault();

    console.log(currentLandTypeClicked);
    if (currentLandTypeClicked === '') {
      toast.error('Zvoľte typ pozemku');
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
        Aký je typ pozemku?
      </h1>
      <div
        id="mn"
        className="mt-4 flex flex-row justify-center gap-4 text-[#0076ba] lg:gap-4"
      >
        <div
          id="1"
          onClick={() => handleLandType(1)}
          className="relative flex h-[140px] w-[145px] flex-col rounded-[35px] border-2 border-[#0076ba] px-2 py-2 lg:h-[160px] lg:w-[165px]"
        >
          <div>
            <Image
              className="mt-[10%] w-[100%] lg:mt-[10%]"
              src="/rovinaty.webp"
              alt="home01"
              width={200}
              height={200}
            />
            <div className="h-[2px] bg-[#000000]"></div>
            <p className="absolute right-4 top-[70%] text-[15px] font-bold lg:text-[17.5px]">
              Rovinatý
            </p>
          </div>
        </div>
        <div
          id="2"
          onClick={() => handleLandType(2)}
          className="relative flex h-[140px] w-[145px] flex-col rounded-[35px] border-2 border-[#0076ba] px-2 py-2 lg:h-[160px] lg:w-[165px]"
        >
          <div>
            <Image
              className="ml-[5%] mt-[10%] w-[100%] lg:mt-[12%]"
              src="/svahovity.webp"
              alt="home02"
              width={200}
              height={200}
            />
            <div className="mt-0.5 h-[2px] bg-[#000000]"></div>
            <p className="absolute right-4 top-[70%] text-[15px] font-bold lg:text-[17.5px]">
              Svahovitý
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center gap-4 text-[#0076ba] lg:gap-4 ">
        <div
          id="3"
          onClick={() => handleLandType(3)}
          className="relative flex h-[140px] w-[145px] flex-col rounded-[35px] border-2 border-[#0076ba] px-2 py-2 lg:h-[160px] lg:w-[165px]"
        >
          <div>
            <Image
              className="mt-[10%] w-[100%] lg:mt-[8.5%]"
              src="/strmy.webp"
              alt="home03"
              width={200}
              height={200}
            />
            <div className="mt-1 h-[2px] bg-[#000000]"></div>
            <p className="absolute right-2 top-[70%] text-[13.5px] font-bold lg:text-[16px] ">
              Strmý svah
            </p>
          </div>
        </div>
        <div
          id="4"
          onClick={() => handleLandType(4)}
          className="relative flex h-[140px] w-[145px] flex-col rounded-[35px] border-2 border-[#0076ba] px-2 py-2 lg:h-[160px] lg:w-[165px]"
        >
          <div>
            <Image
              className="ml-[7%] mt-[15%] w-[80%] lg:mt-[14%]"
              src="/terasovity.webp"
              alt="home04"
              width={200}
              height={200}
            />
            <div className="mt-0.5 h-[2px] bg-[#000000] lg:mt-0"></div>
            <p className="absolute right-4 top-[70%] text-[15px] font-bold lg:text-[17.5px]">
              Terasovitý
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

export default Component08;
