'use client';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FollowUs from './components/FollowUs';
import { BiSolidPhoneCall } from 'react-icons/bi';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative flex h-[1000px] grid-rows-3 flex-col lg:grid lg:h-screen">
      <div className="h-[min-content]">
        <Navbar />
      </div>
      <div className="z-10 flex h-auto flex-col justify-center ">
        <div className="w-[100%]">
          <div className="relative mt-2 flex h-[165px] flex-row justify-between bg-[#eaf3f6] px-4 md:px-[22.5%]  lg:mt-0 lg:h-[180px] 2xl:px-[25%]">
            <div className="pt-8 text-[25px] font-bold leading-[22.5px] text-[#1871aa] lg:left-[25%] lg:text-[40px] lg:leading-[40px]">
              <p className="">Nehnuteľnosti</p>
              <p className="text-[#747170]">Financie</p>
              <p className="">Rekonštrukcie</p>
              <div className="my-2 h-[4px] w-[52%] bg-[#1871aa] lg:w-[58%]"></div>
            </div>

            <div className="w-auto">
              <Image
                className="mt-2 h-[150px] w-[150px] rounded-full border-[4px] border-[#0376b7] md:h-[200px] md:w-[200px] lg:mt-0 lg:h-[290px] lg:w-[290px] lg:border-[5px]"
                src="/about.webp"
                alt="dovala"
                width={290}
                height={290}
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className="mx-4 flex flex-col gap-16 md:mx-[22.5%] md:flex-row 2xl:mx-[25%]">
          <div>
            <p className="mt-8 text-[17.5px] font-semibold leading-[17.5px] text-[#747170]">
              Pomôžeme Vám vybudovať Váš <br /> vysnívaný
              <span className="ml-1 text-[#1871aa]">domov</span>
            </p>
            <div className="z-10 mx-0">
              <div className="mr-2 text-justify text-[15px] leading-[18px] lg:mr-0 lg:text-[14px]">
                <p className="mt-[7.5%] 2xl:mt-[9%]">
                  Vitaj - ak hľadáš vysnívaný domov, alebo ťa láka finančná
                  istota, som tvoj človek! Som Odborník na sieťovanie v oblasti
                  nehnuteľností a financií a na pomoc pri správe a rekonštrukcii
                  nehnuteľností.
                </p>
                <p className="mt-2">
                  Môj cieľ? Urobiť tvoj život jednoduchším. Či je to
                  predaj/kúpa/rekonštrukcia/správa nehnuteľnosti alebo financie,
                  som tu, aby som ti to uľahčil. Jednoducho a bez stresu - to je
                  moje heslo. Teším sa na to, ako ti pomôžem dosiahnuť to, po
                  čom túžiš!
                </p>

                <p className="mt-2">
                  Ako? Nie som na to sám. Mám skvelý tím odborníkov ktorí ti
                  pomôžu dosiahnuť tvoje ciele nech už sú akékoľvek. Či
                  potrebuješ predajcu, právnika, architekta, alebo stolára -
                  všetko nájdeš u mňa!
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-4 flex justify-center md:mt-[17.5%] md:inline lg:mr-8 lg:mt-[21.5%] xl:mt-[18%] 2xl:mt-[15.5%]">
            <div
              id="phone"
              className="flex w-max flex-col items-center gap-2 rounded-[30px] border-[3px] border-[#0076ba] px-4 py-4 text-[20px]  font-bold leading-[20px] text-[#0076ba] lg:rounded-[15px] lg:text-[25px] lg:leading-[29.5px]
        "
            >
              <a href="tel:+421944517560">Zavolajte nám</a>
              <p className="flex flex-row items-center gap-2">
                <BiSolidPhoneCall />
                <a className="text-[20px]" href="tel:+421944517560">
                  +421 944 517 560
                </a>
              </p>
            </div>
            <FollowUs />
          </div>
        </div>
      </div>
      <div className="z-0 h-[min-content]">
        <Footer />
      </div>
    </div>
  );
}
