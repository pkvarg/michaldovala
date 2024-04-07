import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-row justify-between px-[5%] pt-[2%] uppercase text-[#ffffff]">
      <div className="-gap-2 flex flex-col bg-[#000000] px-4 py-1 text-[20px]">
        <p>Michal</p>
        <p>Dovala</p>
      </div>
      <div>
        <div className="mr-4 mt-4 h-[55px] w-[96.5%] bg-[#edd900]"></div>
        <p className="-mt-[68px] ml-2 bg-[#000000] px-4 py-2 text-[30px]">
          +421 944 517 560
        </p>
      </div>
    </div>
  );
};

export default Header;
