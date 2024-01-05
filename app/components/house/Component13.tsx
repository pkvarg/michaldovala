import React from 'react';
import { toast } from 'react-hot-toast';

interface Component13Props {
  onNext: any;
  onBack: any;
  urbanQuality: string;
  handleUrbanQuality: any;
}

const Component13: React.FC<Component13Props> = ({
  onBack,
  onNext,
  urbanQuality,
  handleUrbanQuality,
}) => {
  const onNextGuard = (e: any) => {
    e.preventDefault();

    if (urbanQuality === '') {
      toast.error('Vyberte možnosť');
    } else {
      onNext();
    }
  };
  return (
    <div className="relative mx-4 flex flex-col lg:mx-[30%]">
      {' '}
      <p className="pt-12 text-center text-[10px] text-[#0076ba] lg:pt-8 lg:text-[12.5px]">
        OCENENIE NEHNUTEĽNOSTI ONLINE
      </p>
      <h1 className="py-2 text-center text-[22.5px] font-bold leading-[22.5px] lg:py-2 lg:text-[25px] lg:leading-[27px]">
        Aká je občianska vybavenosť <br /> v danej lokalite?
      </h1>
      <div className="mt-4 flex flex-row justify-center">
        <div
          id="excellent"
          onClick={() => handleUrbanQuality('excellent')}
          className="mx-1 flex flex-col rounded-[20px] border-2  border-[#0076ba] px-4  pt-1 lg:mx-3 lg:px-2 lg:pt-0"
        >
          <p className="mx-1 text-justify text-[15px] font-semibold leading-[15px] lg:mt-2">
            Lokalita patrí k najlepším v meste. Nachádza sa v samotnom centre
            mesta – Staré Mesto, Koliba, nový Downtown. Lokalitu preferuje
            bonitnejšia časť populácie.
          </p>
          <div className="mx-1 mt-0 flex flex-row items-center justify-between">
            <p className="text-[20px]">⭐️⭐️⭐️</p>
            <p className="text-[15px] font-bold text-[#0076ba]">výborná</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center">
        <div
          id="average"
          onClick={() => handleUrbanQuality('average')}
          className="mx-1 flex flex-col rounded-[20px]  border-2 border-[#0076ba] px-2 lg:mx-3"
        >
          <p className="mx-1 pt-1 text-justify text-[15px] font-semibold leading-[15px] lg:mt-2 lg:pt-0">
            Lokalita sa nachádza ďalej od centra mesta. Charakterizuje ju dobrá
            občianska vybavenosť (školy, škôlky, kaviarne, reštaurácie, MHD).
            Lokalitu preferuje stredná vrstva populácie.
          </p>
          <div className="mx-1 flex flex-row items-center justify-between">
            <p className="text-[20px]">⭐️⭐️</p>
            <p className="text-[15px] font-bold text-[#0076ba]">priemerná</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-center">
        <div
          id="poor"
          onClick={() => handleUrbanQuality('poor')}
          className="mx-1 flex flex-col rounded-[20px] border-2 border-[#0076ba] px-2 lg:mx-3"
        >
          <p className="mx-1 pt-1 text-justify text-[15px] font-semibold leading-[15px] lg:mt-2 lg:pt-0">
            Lokalita patrí k najmenej rozvinutým v meste. Nachádza sa na okraji
            mesta, alebo v blízkosti industriálnej zóny. Preferuje ju primárne
            menej solventná časť populácie.
          </p>
          <div className="mx-1 flex flex-row items-center justify-between">
            <p className="text-[20px]">⭐️</p>
            <p className="text-[15px] font-bold text-[#0076ba]">slabšia</p>
          </div>
        </div>
      </div>
      <div className="mx-[2%] mt-4 flex flex-row justify-between lg:mt-4">
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

export default Component13;
