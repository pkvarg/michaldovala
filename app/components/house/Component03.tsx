import React from 'react';
import { toast } from 'react-hot-toast';

interface Component03Props {
  onNext: any;
  onBack: any;
  currentlyClickedBathroomCount: string;
  handleCountBathroomClick: any;
}

const Component03: React.FC<Component03Props> = ({
  onBack,
  onNext,
  currentlyClickedBathroomCount,
  handleCountBathroomClick,
}) => {
  const onNextGuard = (e: any) => {
    e.preventDefault();
    if (currentlyClickedBathroomCount === '') {
      toast.error('Zvoľte počet izieb');
    } else {
      onNext();
    }
  };
  return (
    <div className="w-[100%]">
      <p className="pt-12 text-center text-[10px] text-[#0076ba] lg:pt-8 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="py-2 text-center text-[25px] font-bold leading-[17.5px] lg:py-2 lg:text-[30px]">
        Zvoľte počet kúpeľní
      </h1>
      <div className="mt-8 flex flex-row justify-center gap-4 pt-2 lg:gap-4">
        <div
          id="1"
          onClick={() => handleCountBathroomClick(1)}
          className="relative flex h-[80px] w-[110px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2 lg:h-[100px] lg:w-[130px] lg:rounded-[25px]"
        >
          <div className="ml-1 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[10px] lg:h-[17.5px] lg:w-[17.5px] lg:border-2"></div>
          <p className="absolute right-4 top-2 text-right text-[40px] font-bold text-[#0076ba] lg:top-3 lg:text-[50px]">
            1
          </p>
        </div>
        <div
          id="2"
          onClick={() => handleCountBathroomClick(2)}
          className="relative flex h-[80px] w-[110px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2 lg:h-[100px] lg:w-[130px] lg:rounded-[25px]"
        >
          <div className="mt-0 flex flex-col gap-[4px]">
            <div className="ml-4 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[30px] lg:h-[17.5px] lg:w-[17.5px] lg:border-4"></div>
            <div className="ml-1 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[10px] lg:h-[17.5px] lg:w-[17.5px] lg:border-4"></div>
          </div>
          <p className="absolute right-4 top-2.5 text-right text-[40px] font-bold text-[#0076ba] lg:top-3.5 lg:text-[50px]">
            2
          </p>
        </div>
      </div>
      <div className="mt-2 flex flex-row justify-center gap-4 lg:gap-4">
        <div
          id="3"
          onClick={() => handleCountBathroomClick(3)}
          className="relative flex h-[80px] w-[110px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2 lg:h-[100px] lg:w-[130px] lg:rounded-[25px]"
        >
          <div className="flex flex-row">
            <div className="ml-1 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[10px] lg:h-[17.5px] lg:w-[17.5px] lg:border-4"></div>
            <div className="ml-1 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[5px] lg:h-[17.5px] lg:w-[17.5px] lg:border-4"></div>
          </div>

          <div className="ml-1 mt-1 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[10px] lg:mt-1 lg:h-[17.5px] lg:w-[17.5px]  lg:border-4"></div>

          <p className="absolute right-4 top-3 text-right text-[40px] font-bold text-[#0076ba] lg:top-3.5 lg:text-[50px]">
            3
          </p>
        </div>
        <div
          id="4"
          onClick={() => handleCountBathroomClick(4)}
          className="relative flex h-[80px] w-[110px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2 lg:h-[100px] lg:w-[130px] lg:rounded-[25px]"
        >
          <div className="flex flex-row">
            <div className="ml-1 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[10px] lg:h-[17.5px] lg:w-[17.5px] lg:border-4"></div>
            <div className="ml-1 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[5px] lg:h-[17.5px] lg:w-[17.5px] lg:border-4"></div>
          </div>
          <div className="mt-1 flex flex-row">
            <div className="ml-1 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[10px] lg:h-[17.5px] lg:w-[17.5px] lg:border-4"></div>
            <div className="ml-1 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[5px] lg:h-[17.5px] lg:w-[17.5px] lg:border-4"></div>
          </div>
          <p className="absolute right-6 top-2 text-right text-[40px] font-bold text-[#0076ba] lg:top-3.5 lg:text-[50px]">
            4{' '}
            <span className="absolute -right-[75%] bottom-2 text-[30px] lg:-right-[55%] lg:bottom-4 lg:text-[30px]">
              +
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4 pt-8">
        <button
          onClick={(e) => onBack(e)}
          className="h-10 w-[110px] rounded-[35px] border-2 border-[#0076ba] px-8 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:w-[130px] lg:px-8 lg:py-2 lg:text-[15px]"
        >
          Späť
        </button>
        <button
          onClick={(e) => onNextGuard(e)}
          className="h-10 w-[110px] rounded-[35px] border-2 border-[#0076ba] px-7 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:w-[130px] lg:px-7 lg:py-2 lg:text-[15px]"
        >
          Ďalej
        </button>
      </div>
    </div>
  );
};

export default Component03;
