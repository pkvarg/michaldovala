import React from 'react';
import { toast } from 'react-hot-toast';

interface Component08Props {
  onNext: any;
  onBack: any;
  hasBalcony: boolean;
  hasLoggia: boolean;
  hasTerrace: boolean;
  hasBasement: boolean;
  setHasBalcony: any;
  setHasLoggia: any;
  setHasTerrace: any;
  setHasBasement: any;
}

const Component08: React.FC<Component08Props> = ({
  onBack,
  onNext,
  hasBalcony,
  hasLoggia,
  hasTerrace,
  hasBasement,
  setHasBalcony,
  setHasLoggia,
  setHasTerrace,
  setHasBasement,
}) => {
  const onNextGuard = () => {
    if (
      hasBalcony === false &&
      hasLoggia === false &&
      hasTerrace === false &&
      hasBasement === false
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
        Čo ďalšie je súčasťou bytu?{' '}
      </h1>
      <div className="mt-4 flex flex-row justify-center gap-4 lg:gap-6">
        <div
          id="balcony"
          onClick={() => setHasBalcony((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <img
              className="ml-[20%] mt-[5%] w-[60%]"
              src="/balcony1.webp"
              alt="balcony1"
            />

            <p className="absolute bottom-0 right-3 text-[20px] font-bold">
              balkón
            </p>
          </div>
        </div>
        <div
          id="loggia"
          onClick={() => setHasLoggia((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <img
              className="ml-[24%] mt-[7%] w-[58%]"
              src="/balcony2.webp"
              alt="balcony2"
            />

            <p className="absolute bottom-0 right-3 text-[20px] font-bold">
              loggia
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center gap-4 lg:gap-6">
        <div
          id="terrace"
          onClick={() => setHasTerrace((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <img
              className="ml-[18%] mt-[7%] w-[62%] lg:ml-[22%] lg:w-[57%]"
              src="/balcony3.webp"
              alt="balcony3"
            />

            <p className="absolute bottom-0 right-3 text-[20px] font-bold">
              Terasa
            </p>
          </div>
        </div>
        <div
          id="basement"
          onClick={() => setHasBasement((prev: boolean) => !prev)}
          className="relative flex h-[120px] w-[125px] flex-col rounded-[25px] border-2 border-[#0076ba] px-2 py-2"
        >
          <div>
            <img
              className="ml-[20%] mt-[8%] w-[62%] lg:ml-[24%] lg:w-[55%]"
              src="/balcony4.webp"
              alt="balcony3"
            />

            <p className="absolute bottom-0 right-3 text-[20px] font-bold">
              pivnica
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[10%] flex flex-row justify-between lg:mt-[20%]">
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

export default Component08;
