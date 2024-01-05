import React from 'react';
import { toast } from 'react-hot-toast';

interface Component02Props {
  onNext: any;
  onBack: any;
  currentlyClickedRoomCount: string;
  handleCountRoomClick: any;
}

const Component02: React.FC<Component02Props> = ({
  onBack,
  onNext,
  currentlyClickedRoomCount,
  handleCountRoomClick,
}) => {
  const onNextGuard = () => {
    if (currentlyClickedRoomCount === null) {
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
        Zvoľte počet izieb
      </h1>
      <div className="flex flex-row justify-center gap-4 pt-2 lg:gap-4">
        <div
          id="0"
          onClick={() => handleCountRoomClick(0)}
          className="relative flex h-[80px] w-[110px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2 lg:h-[100px] lg:w-[130px] lg:rounded-[25px]"
        >
          <div className="ml-[7.5px] h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] lg:h-[17.5px] lg:w-[17.5px] lg:border-2"></div>
          <p className="absolute bottom-1 right-4 text-[15px] font-bold lg:text-[17.5px]">
            Garzónka
          </p>
        </div>
        <div
          id="1"
          onClick={() => handleCountRoomClick(1)}
          className="relative flex h-[80px] w-[110px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2 lg:h-[100px] lg:w-[130px] lg:rounded-[25px]"
        >
          <div className="ml-1 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[10px] lg:h-[17.5px] lg:w-[17.5px] lg:border-2"></div>
          <p className="absolute right-4 top-2 text-right text-[40px] font-bold text-[#0076ba] lg:top-2 lg:text-[50px]">
            1
          </p>
          <p className="absolute bottom-1 right-4 text-[15px] font-bold lg:bottom-1 lg:text-[17.5px]">
            izbový
          </p>
        </div>
      </div>
      <div className="mt-2 flex flex-row justify-center gap-4 lg:gap-4">
        <div
          id="2"
          onClick={() => handleCountRoomClick(2)}
          className="relative flex h-[80px] w-[110px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2 lg:h-[100px] lg:w-[130px] lg:rounded-[25px]"
        >
          <div className="mt-0 flex flex-col gap-[4px]">
            <div className="ml-4 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[30px] lg:h-[17.5px] lg:w-[17.5px] lg:border-4"></div>
            <div className="ml-1 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[10px] lg:h-[17.5px] lg:w-[17.5px] lg:border-4"></div>
          </div>
          <p className="absolute -top-0 right-4 text-right text-[40px] font-bold text-[#0076ba] lg:-top-0 lg:text-[50px]">
            2
          </p>
          <p className="absolute bottom-1 right-4 text-[15px] font-bold lg:text-[17.5px]">
            izbový
          </p>
        </div>
        <div
          id="3"
          onClick={() => handleCountRoomClick(3)}
          className="relative flex h-[80px] w-[110px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2 lg:h-[100px] lg:w-[130px] lg:rounded-[25px]"
        >
          <div className="flex flex-row">
            <div className="ml-1 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[10px] lg:h-[17.5px] lg:w-[17.5px] lg:border-4"></div>
            <div className="ml-1 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[5px] lg:h-[17.5px] lg:w-[17.5px] lg:border-4"></div>
          </div>

          <div className="ml-1 mt-1 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[10px] lg:mt-1 lg:h-[17.5px] lg:w-[17.5px]  lg:border-4"></div>

          <p className="absolute -top-0 right-4 text-right text-[40px] font-bold text-[#0076ba] lg:-top-0 lg:text-[50px]">
            3
          </p>
          <p className="absolute bottom-1 right-4 text-[15px] font-bold lg:bottom-1 lg:text-[17.5px]">
            izbový
          </p>
        </div>
      </div>
      <div className="mt-2 flex flex-row justify-center gap-4 lg:gap-4">
        <div
          id="4"
          onClick={() => handleCountRoomClick(4)}
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
          <p className="absolute -top-0 right-4 text-right text-[40px] font-bold text-[#0076ba] lg:-top-0 lg:text-[50px]">
            4
          </p>
          <p className="absolute bottom-1 right-4 text-[15px] font-bold lg:bottom-1 lg:text-[17.5px]">
            izbový
          </p>
        </div>
        <div
          id="5"
          onClick={() => handleCountRoomClick(5)}
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

          <div className="mt-1 flex flex-row">
            <div className="ml-1 h-[15px] w-[15px] rounded-[30px] border-2 border-[#0076ba] bg-[#0076ba] lg:ml-[10px] lg:h-[17.5px] lg:w-[17.5px] lg:border-4"></div>
            <p className="-mt-[16%] ml-[3px] text-[27.5px] text-[#0076ba] lg:-mt-[12%] lg:ml-[6px] lg:text-[27.5px]">
              +
            </p>
          </div>

          <p className="absolute right-[25%] top-1 text-right text-[40px]  font-bold text-[#0076ba] lg:-top-0 lg:right-5 lg:text-[50px]">
            5{' '}
            <span className="absolute -right-[75%] bottom-2 text-[30px] lg:-right-[55%] lg:bottom-4 lg:text-[30px]">
              +
            </span>
          </p>
          <p className="absolute bottom-1 right-3 text-[13px] font-bold lg:bottom-1 lg:text-[17.5px]">
            izbový
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4 pt-8">
        <button
          onClick={() => onBack()}
          className="h-10 w-[110px] rounded-[35px] border-2 border-[#0076ba] px-8 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:w-[130px] lg:px-8 lg:py-2 lg:text-[15px]"
        >
          Späť
        </button>
        <button
          onClick={() => onNextGuard()}
          className="h-10 w-[110px] rounded-[35px] border-2 border-[#0076ba] px-7 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:w-[130px] lg:px-7 lg:py-2 lg:text-[15px]"
        >
          Ďalej
        </button>
      </div>
    </div>
  );
};

export default Component02;
