import React, { useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';

interface Component04Props {
  onNext: any;
  onBack: any;
  squareMeters: number;
  setSquareMeters: any;
}

const Component04: React.FC<Component04Props> = ({
  onBack,
  onNext,
  squareMeters,
  setSquareMeters,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onNextGuard = () => {
    if (squareMeters <= 0 || squareMeters > 999)
      toast.error('Zadajte veľkosť obytnej plochy');
    else {
      onNext();
    }
  };

  useEffect(() => {
    // Focus the input field when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="relative mx-4 flex flex-col lg:mx-[0%]">
      <p className="pt-12 text-center text-[10px] text-[#0076ba] lg:pt-8 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="py-2 text-center text-[22.5px] font-bold leading-[27.5px] lg:py-2 lg:text-[27.5px]">
        Akú obytnú plochu má byt?
      </h1>
      <div className="mt-4 flex flex-row justify-center">
        <div className="relative mt-4 flex h-[50px] w-[100%] flex-col rounded-lg border border-[#0076ba] lg:h-[55px] lg:rounded-xl">
          <label
            htmlFor="text"
            className="relative text-[12.5px] text-[#0076ba] lg:text-[15px]"
          >
            <span className="absolute -top-[0px] left-[10px]">
              Úžitková plocha
            </span>
          </label>
          <input
            type="number"
            value={squareMeters === 0 ? '' : squareMeters}
            onChange={(e) => setSquareMeters(e.target.value)}
            className="absolute right-10 top-[24%] w-[27%] text-right text-[22.5px] font-bold outline-none lg:top-[24%] lg:text-[25px]"
            ref={inputRef}
          />

          <p className="absolute right-5 top-[37%] text-[17.5px] font-bold text-[#0076ba] lg:top-[41%]">
            m<span className="absolute top-0 text-[12.5px]">2</span>
          </p>
        </div>
      </div>
      <div className="mt-[20%] flex flex-row justify-between">
        <button
          onClick={onBack}
          className="h-10 rounded-[35px] border border-[#0076ba] px-8 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-8 lg:py-2 lg:text-[15px]"
        >
          Späť
        </button>
        <button
          onClick={() => onNextGuard()}
          className="h-10 rounded-[35px] border border-[#0076ba] px-7 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-7 lg:py-2 lg:text-[15px]"
        >
          Ďalej
        </button>
      </div>
    </div>
  );
};

export default Component04;
