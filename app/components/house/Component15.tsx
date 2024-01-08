import Image from 'next/image';
import React, { useState } from 'react';

interface Component15Props {
  onNext: any;
  onBack: any;
  isValid: any;
  email: string;
  setEmail: any;
  checkBox: boolean;
  setCheckBox: any;
  isLoading: boolean;
  handleSubmitForm: any;
}

const Component15: React.FC<Component15Props> = ({
  onBack,
  email,
  setEmail,
  checkBox,
  setCheckBox,
  isLoading,
  handleSubmitForm,
}) => {
  const [showAgree, setShowAgree] = useState(false);

  return (
    <div className="relative mx-4 flex flex-col lg:mx-[0%]">
      <p className="pt-6 text-center text-[10px] text-[#0076ba] lg:pt-8 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="py-2 text-center text-[22.5px] font-bold leading-[22.5px] lg:py-2 lg:text-[25px] lg:leading-[27px]">
        Vaša nehnuteľnosť bola <br /> nacenená
      </h1>
      <Image
        className="absolute top-[19%] flex w-[17.5%] md:top-[7%] md:w-[12%] lg:left-[0%]  lg:top-[27%] lg:w-[25%]"
        src="/firework.webp"
        alt="firework"
        width={200}
        height={200}
      />
      <Image
        className="absolute right-0 top-[19%] flex w-[17.5%] md:top-[7%] md:w-[12%]  lg:right-[0%] lg:top-[27%] lg:w-[25%]"
        src="/firework.webp"
        alt="firework"
        width={200}
        height={200}
      />
      <div className="mt-14 flex flex-col justify-center">
        <label
          htmlFor="text"
          className="relative ml-1 text-[12.5px] text-[#0076ba] lg:text-[12.5px]"
        >
          <span>Ak chcete pokračovať ďalej, zadajte Váš mail:</span>
        </label>
        <div
          className={
            showAgree
              ? 'relative flex h-[50px] w-[100%] flex-col rounded-lg border-2 border-[#0076ba] blur-md lg:h-[55px] lg:rounded-xl'
              : 'relative flex h-[50px] w-[100%] flex-col rounded-lg border-2 border-[#0076ba] lg:h-[55px] lg:rounded-xl'
          }
        >
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="absolute top-[32%] h-[50%] w-[93%] text-right text-[17.5px] font-bold outline-none lg:w-[96%]"
            required
          />
          <div className="ml-2 mt-[30%] flex flex-row items-center justify-start md:mt-[12.5%] lg:mt-[22.5%]">
            <input
              className="mr-2 h-[15px] w-[15px]"
              type="checkbox"
              defaultChecked={false}
              value={checkBox as any}
              onChange={() => setCheckBox((prev: boolean) => !prev)}
              required
            />
            <p className="text-[15px] text-[#0076ba]">
              Súhlasím s{' '}
              <span
                onClick={() => setShowAgree((prev: boolean) => !prev)}
                className="cursor-pointer font-semibold underline"
              >
                spracovaním osobných údajov
              </span>
            </p>
          </div>
        </div>
        {showAgree && (
          <>
            <p
              onClick={() => setShowAgree(false)}
              className="absolute right-0 top-[52%] mr-2 cursor-pointer text-[20px] text-red-500"
            >
              X
            </p>
            <span className="absolute left-0 top-[60%] w-[300px] text-justify text-[17.5px] leading-[17.5px] text-[#13191c]">
              Poskytnuté údaje budú spracované za účelom výpočtu aktuálnej ceny
              nehnuteľnosti a nebudú zdieľané tretím stranám.
            </span>
          </>
        )}
      </div>

      <div className="mt-[40%] flex flex-row justify-between lg:mt-[20%]">
        <button
          onClick={(e) => onBack(e)}
          className="h-10 rounded-[35px] border-2 border-[#0076ba] px-8 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-8 lg:py-2 lg:text-[15px]"
        >
          Späť
        </button>
        <button
          onClick={(e) => handleSubmitForm(e)}
          className="h-10 rounded-[35px] border-2 border-[#0076ba] px-7 py-0 text-[15px] font-bold uppercase hover:border-2 hover:border-[#03065f] lg:h-10 lg:px-7 lg:py-2 lg:text-[15px]"
        >
          {isLoading ? (
            <span className="text-green-600">odosielam...</span>
          ) : (
            'Ďalej'
          )}
        </button>
      </div>
    </div>
  );
};

export default Component15;
