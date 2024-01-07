import React from 'react';
import { toast } from 'react-hot-toast';
import Image from 'next/image';

interface Component07Props {
  onNext: any;
  onBack: any;
  hasElevator: string;
  handleHasElevator: any;
}

const Component07: React.FC<Component07Props> = ({
  onBack,
  onNext,
  hasElevator,
  handleHasElevator,
}) => {
  const onNextGuard = () => {
    if (hasElevator === '') toast.error('Zvoľte možnosť');
    else {
      onNext();
    }
  };
  return (
    <div className="relative mx-2 flex flex-col lg:mx-[1%]">
      <p className="pt-12 text-center text-[10px] text-[#0076ba] lg:pt-8 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="py-2 text-center text-[22.5px] font-bold leading-[22.5px] lg:py-2 lg:text-[25px] lg:leading-[27px]">
        Nachádza sa <br /> v bytovom dome výťah?{' '}
      </h1>
      <div className="mt-4 flex flex-row justify-center gap-4 lg:gap-6">
        <div
          id="hasElevator"
          onClick={() => handleHasElevator('hasElevator')}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[25%] mt-[10%] w-[50%] lg:mt-[10%]"
              src="/elevator1.webp"
              alt="elevator"
              width={200}
              height={200}
            />

            <p className="absolute bottom-0 right-3 text-[20px] font-bold">
              áno
            </p>
          </div>
        </div>
        <div
          id="noElevator"
          onClick={() => handleHasElevator('noElevator')}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <Image
              className="ml-[19%] mt-[10%] w-[60%] lg:mt-[10%]"
              src="/elevator2.webp"
              alt="stairs"
              width={200}
              height={200}
            />

            <p className="absolute bottom-0 right-3 text-[20px] font-bold">
              nie
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[20%] flex flex-row justify-between">
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

export default Component07;
