'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import FollowUs from '../components/FollowUs';
import { toast } from 'react-hot-toast';

const Tip = () => {
  const x = process.env.NEXT_PUBLIC_EMAIL_EXTRA_ONE;
  const y = process.env.NEXT_PUBLIC_EMAIL_EXTRA_TWO;
  const [passwordGroupOne, setPasswordGroupOne] = useState(x);
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [clientName, setClientName] = useState('');
  const [contact, setContact] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [city, setCity] = useState('');
  const [text, setText] = useState('');
  const [other, setOther] = useState('');

  const handleCheckboxChange = (type: string) => {
    setSelectedType(type);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const values = {
      name,
      email,
      clientName,
      contact,
      selectedType,
      other,
      city,
      text,
    };

    console.log('submitting tip email', values);
    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      toast.error('Nastala chyba.');
    }
    try {
      console.log('..tip email is sending..');
      const { data } = await axios.put(
        `https://api.pictusweb.com/api/md/tip`,
        //`http://localhost:2000/api/md/tip`,
        {
          values,
        },
      );

      if (data.status === 'Success') toast.success('Správa úspešne odoslaná');
      setName('');
      setEmail('');
      setClientName('');
      setContact('');
      setSelectedType('');
      setOther('');
      setCity('');
      setText('');
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mx-4 mt-8 lg:mx-[22.5%]">
        <h1 className="text-center text-[35px] text-[#0376b7]">
          {' '}
          TAKTO SI VEĽMI JEDNODUCHO A RÝCHLO ZVÝŠIŠ SVOJ PRÍJEM
        </h1>
        <p className="mt-4 text-center text-[17.5px]">
          Prečítaj si návod ako na to a začni už dnes, úplne ZADARMO, bez
          akýchkoľvek poplatkov či záväzkov.
        </p>
        <p className="mt-4 text-center text-[17.5px]">
          Buď môj TIPER v oblasti nehnuteľností a financií. Nemusíš nič predávať
          ani ponúkať, a predsa slušne zarobíš.
        </p>
        <h2 className="my-8 text-center text-[30px] text-[#747170]">
          Ako na to? Je to veľmi jednoduché:
        </h2>
        <p className="mt-4 text-center text-[17.5px]">
          Tento systém sa volá TIPERSTVO a skladá sa zo 4 krokov: databáza,
          potreba, služba a spojenie.
        </p>
        <p className="mt-8  text-[17.5px]">Funguje to takto:</p>
        <p>
          1. všetci, aj ja, aj TY, poznáme stovky ľudí – naša rodina, priatelia,
          kolegovia, susedia... (to je tvoja
          <span className="font-bold"> DATABÁZA</span>)
        </p>
        <p>
          2. všetci musíme niekde bývať a používať peniaze (to je
          <span className="font-bold"> POTREBA</span> zákazníka)
        </p>
        <p>
          3. na trhu je ale veľké množstvo možností, z ktorých si vybrať, ale
          ako? Ideálne je poznať odborníka, ktorý tomu rozumie, veď ani koleno
          si nedáš vŕtať stolárovi, ale doktorovi (toto sa nazýva
          <span className="font-bold"> SLUŽBA</span>)
        </p>
        <p>
          4. ty poznáš niekoho vo svojom okolí, kto má nejakú potrebu, dáš mi
          tip a pokiaľ dôjde k obchodu, získaš zaujímavú finančnú odmenu (získaš
          odmenu za to, že si vytvoril
          <span className="font-bold"> SPOJENIE</span>)
        </p>
        <p className="mt-4 text-justify text-[17.5px]">
          Množstvo ľudí na Slovensku týmto jednoduchým spôsobom zarábajú stovky
          EURO mesačne.
        </p>

        <h3 className="my-8 text-center text-[30px] leading-[30px] text-[#747170]">
          Poďme sa pozrieť na príklad zo života a reálne čísla, aby si videl,
          ako jednoducho si môžeš zarobiť aj ty:
        </h3>
        <p className="mt-4 text-justify text-[17.5px]">
          Povedzme, že máš suseda, ktorý predáva svoj 2 izbový byt v Bratislave.
          Rozprávate sa o tom a ty mu spomenieš, že poznáš šikovného realitného
          makléra – mňa.
        </p>
        <p className="mt-4 text-justify text-[17.5px]">
          Ozveš sa mi a dáš mi na suseda kontakt, prípadne dáš môj kontakt
          priamu jemu. To je z tvojej strany všetko – paráda, čo povieš?
        </p>
        <p className="mt-4 text-justify text-[17.5px]">
          Ja si s ním dohodnem obhliadku a pokiaľ súhlasí s tým, že ho budem
          zastupovať, tak sa pustíme do predaja jeho bytu. Po istom čase, keď sa
          byt predá, dostanem od neho províziu, ktorú som si s ním na začiatku
          dohodol.
        </p>
        <p className="mt-4 text-justify text-[17.5px]">
          A teraz prichádzaš na scénu TY – keďže kontakt na suseda pochádzal od
          teba, patrí ti odmena za TIP. A koľko dostaneš?
        </p>
        <p className="mt-4 text-[17.5px] font-bold">Príklad: </p>

        <p className="text-justify text-[17.5px]">
          susedov byt sa predá za: 130.000 €
        </p>

        <p className="text-justify text-[17.5px]">
          naša provízia: 5.200 € (5% mínus DPH)
        </p>

        <p className="text-justify text-[17.5px]">
          TVOJA odmena za TIP: 520 € (10% z našej provízie)
        </p>

        <p>
          Takže za to, že si posunul kontakt dostaneš veľmi slušnú odmenu
          <span className="text-[25px] font-bold"> 520 EUR.</span>
        </p>

        <p className="mt-8 text-justify text-[17.5px]">
          Rovnaký postup je aj v prípade, že mi dohodíš niekoho, kto potrebuje
          pomôcť s finančnými službami (napr. hypotéka, poistenie, sporenie,
          investície...). Akú odmenu získaš napríklad v prípade, že ma spojíš so
          susedom ktorý chce uzatvoriť životné poistenie?
        </p>

        <p className="mt-4 text-[17.5px] font-bold">Príklad: </p>

        <p className="text-justify text-[17.5px]">
          sused chce životnú poistku: 60 €/mes.
        </p>

        <p className="text-justify text-[17.5px]">TVOJA odmena za TIP: 60 €</p>

        <p className="mt-4">
          V tomto prípade sa odmena rovná výške mesačného poistenia. Za
          posunutie kontaktu dostaneš odmenu
          <span className="text-[25px] font-bold"> 60 EUR. </span>
          Na druhej strane, ľudia riešia financie oveľa častejšie ako bývanie.
        </p>

        <h3 className="my-8 text-center text-[30px] text-[#747170]">
          Koľko si chceš zarobiť? Je to len na TEBE!
        </h3>

        <p className="mt-4 text-justify text-[17.5px]">
          Môžeš mi tip posunúť JEDNORAZOVO, alebo posúvať PRAVIDELNÉ tipy a
          získať skvelý pravidelný príjem.
        </p>
        <p className="mt-4">
          Nezáleží na tom, či si študent, mamička na materskej, dôchodca,
          právnik, predavačka, kaderníčka, alebo automechanik – každý z nás
          pozná ľudí, stretáva sa s nimi, komunikuje a preto sa môže stať
          TIPEROM.
        </p>

        <h4 className="mt-8 text-center text-[30px] text-[#747170]">
          STAŇ SA TIPEROM UŽ DNES A ZAČNI SI PLNIŤ SVOJE SNY!
        </h4>
        <p className="mt-4 text-justify text-[17.5px]">
          Poznáš niekoho v Tvojom okolí, kto predáva nehnuteľnosť, alebo chce
          riešiť financie?
        </p>

        <p className="mt-4 text-justify text-[17.5px]">
          ÁNO? Skvelé! Stačí keď vyplníš tento krátky dotazník a odmenu máš NA
          DOSAH!
        </p>

        <div className="my-8 h-[2px] bg-[#0376b7]"></div>

        <form onSubmit={handleSubmit} className="my-8 flex flex-col gap-2">
          <div className="flex flex-col justify-between gap-2 lg:flex-row">
            <div className="flex w-[100%] flex-col lg:w-[50%]">
              <label>Tvoje meno a priezvisko</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[40px]  border border-gray-300 pl-[5px]"
                required
              />
            </div>

            <div className="flex  w-[100%] flex-col lg:w-[50%]">
              <label>Tvoj Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" h-[40px] w-[100%] border border-gray-300 pl-[5px]"
                required
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-2 lg:flex-row">
            <div className="flex w-[100%] flex-col lg:w-[50%]">
              <label>Meno klienta (ten, ktorého odporúčaš) </label>

              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="h-[40px] border border-gray-300 pl-[5px]"
                required
              />
            </div>
            <div className="flex w-[100%] flex-col lg:w-[50%]">
              <label>Email alebo mobil klienta</label>

              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="h-[40px] border border-gray-300 pl-[5px]"
                required
              />
            </div>
          </div>
          <p className="mt-4">O akú službu ide? </p>

          <div className="lg:items-between my-2 flex flex-col items-start gap-1 lg:flex-row">
            <label>
              <input
                type="checkbox"
                checked={selectedType === 'Predaj nehnuteľnosti'}
                onChange={() => handleCheckboxChange('Predaj nehnuteľnosti')}
              />{' '}
              Predaj nehnuteľnosti
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedType === 'Kúpa nehnuteľnosti'}
                onChange={() => handleCheckboxChange('Kúpa nehnuteľnosti')}
              />{' '}
              Kúpa nehnuteľnosti
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedType === 'Prenájom nehnuteľnosti'}
                onChange={() => handleCheckboxChange('Prenájom nehnuteľnosti')}
              />{' '}
              Prenájom nehnuteľnosti
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedType === 'Hypotéka'}
                onChange={() => handleCheckboxChange('Hypotéka')}
              />{' '}
              Hypotéka
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedType === 'Poistenie'}
                onChange={() => handleCheckboxChange('Poistenie')}
              />{' '}
              Poistenie
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedType === 'Iná služba'}
                onChange={() => handleCheckboxChange('Iná služba')}
              />{' '}
              Iná služba
              {/* <input
                type="text"
                value={other}
                onChange={(e) => setOther(e.target.value)}
                className="ml-2 h-[25px] border border-gray-300 pl-[5px]"
              /> */}
            </label>

            {/* <p>Selected Type: {selectedType}</p> */}
          </div>

          <label>Kde sa nachádza klient, alebo nehnuteľnosť?</label>

          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="h-[40px] border border-gray-300 pl-[5px]"
            required
          />
          <label>
            Bližší popis (napíš mi základné info: o koho ide, s čím potrebuje
            pomôcť a či vie že sa mu ozvem 😊)
          </label>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="h-[160px] border border-gray-300 pl-[5px]"
            required
          />
          <input
            className="form-control"
            type="text"
            defaultValue={passwordGroupOne}
            onChange={(e) => setPasswordGroupOne(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            defaultValue={passwordGroupTwo}
            onChange={(e) => setPasswordGroupTwo(e.target.value)}
          />
          <div className="flex flex-row justify-between">
            <button
              type="submit"
              className="mt-4 w-[50%] rounded-[25px] border-2 border-[#0376b7] py-2 text-[#0376b7]  hover:bg-[#0376b7] hover:text-white lg:mt-4 lg:w-[25%]"
            >
              Odoslať
            </button>
            <FollowUs />
          </div>
        </form>
        <p className="mt-4 text-justify text-[17.5px]">
          Vyplnením formulára súhlasíš so spracovaním osobných údajov
          prevádzkovateľom tohto webu: Michal Dovala. Tvoje osobné údaje budeme
          spracovávať za účelom zasielania obchodných oznámení.
        </p>
      </div>
    </div>
  );
};

export default Tip;
