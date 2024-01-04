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

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
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
      email,
      name,
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
      setEmail('');
      setName('');
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
          ZVÝŠ SI TVOJ FINANČNÝ ROZPOČET <br /> A PRINES TAK DO RODINY ĎALŠIE
          PENIAZE.
          <br /> JE TO JEDNODUCHÉ!
        </h1>
        <h2 className="mt-8 text-center text-[30px] text-[#747170]">
          Kto je TIPÉR?{' '}
        </h2>
        <p className="mt-4 text-justify text-[17.5px]">
          Tipér je osoba, ktorá posúva informácie. V našom prípade osoba, ktorá
          <span className="mx-1 underline">
            posúva informácie o tom, kto a kde predáva svoj dom, byt či pozemok.
          </span>
          Jedná sa len o predaj, nie o kúpu (kontakty, ktoré hľadajú bývanie).{' '}
        </p>
        <p className="mt-8 text-center text-[17.5px]">
          Takže tipérom môžeš byť aj Ty!
        </p>
        <h3 className="mt-8 text-center text-[30px] text-[#747170]">
          Aká je výška TIPÉRSKEJ ODMENY?{' '}
        </h3>
        <p className="mt-4 text-justify text-[17.5px]">
          Z praxe sa mi osvedčilo deliť sa s tipérom tak, že som vyplatila do
          10% z mojej čistej provízie. Premietnuté do čísiel, to môže
          predstavovať
          <span className="mx-1 underline">sumu od 50 do 450 Eur.</span>
          Nárok na odmenu vzniká, keď s majiteľom podpíšem spoluprácu a jeho
          nehnuteľnosť aj reálne predám. Samotná výška Tvojej odmeny závisí od
          toho, akú formu spolupráce sme mali.
        </p>
        <h3 className="mt-8 text-center text-[30px] text-[#747170]">
          Aká môže byť TIPÉRSKA SPOLUPRÁCA?{' '}
        </h3>
        <p className="mt-4 text-center text-[17.5px]">Sú dva typy:</p>
        <p className="mt-4 text-center text-[17.5px]">
          A. len
          <span className="mx-1 underline">posunutie kontaktu</span>
          na osobu, ktorá predáva
        </p>
        <p className="mt-4 text-justify text-[17.5px]">
          - tu len posunieš kontakt mne a o viac sa nestaráš, v tomto prípade je
          ale výška odmeny určite nižšia vzhľadom k tomu, že celý predaj je
          viac-menej v mojej réžii
        </p>
        <p className="mt-4 text-center text-[17.5px]">
          B.
          <span className="mx-1 underline">
            kontaktovanie a dohodnutie sa s osobou Tvojím aktívnym pričinením,
          </span>
          tzn. Ty si ten, kto majiteľa presvedčí a dohodne, aby dal nehnuteľnosť
          predávať len mne.
        </p>
        <p className="mt-4 text-center text-[17.5px] underline">
          - výška odmeny: 150 - 450 Eur
        </p>
        <p className="mt-4 text-center text-[17.5px]">
          V závislosti od toho aký chceš mať príjem, môžeš mi tipy posúvať
          <span className="mx-1 underline">PRAVIDELNE</span>
          (pravidelný príjem) alebo
          <span className="mx-1 underline">JEDNORAZOVO</span>
          (jednorázová odmena).
        </p>
        <p className="mt-4 text-center text-[17.5px] underline">
          Je to len na TEBE!
        </p>
        <h4 className="mt-8 text-center text-[30px] text-[#747170]">
          Kedy je odmena za tip VYPLÁCANÁ?
        </h4>
        <p className="mt-4 text-justify text-[17.5px]">
          Odmena sa vypláca po ukončení celého obchodného prípadu, tzn. v
          momente kedy je podpísaná kúpna zmluva a vyplatená celá kúpna cena.
        </p>
        <h5 className="mt-8 text-center text-[30px] text-[#747170]">
          KTO MÔŽE BYŤ tipérom?
        </h5>
        <p className="mt-4 text-justify text-[17.5px]">
          Tipérom môže byť každý. Môžeš byť študent, mamička na materskej
          dovolenke, dôchodca, právnik, predavačka, kaderníčka, nechtárka.
        </p>
        <p className="mt-4 text-justify text-[17.5px]">
          Ktokoľvek kto pozná ľudí, stretáva sa s nimi, komunikuje a nebojí sa
          výziev.
        </p>
        <h6 className="mt-8 text-center text-[30px] text-[#747170]">
          SI TO TY?
        </h6>
        <div className="my-8 h-[2px] bg-[#0376b7]"></div>
        <h1 className="mt-8 text-center text-[30px] text-[#747170]">
          INFORMÁCIE O TIPE NA NEHNUTEĽNOSŤ
        </h1>
        <p className="mt-4 text-justify text-[17.5px]">
          Vieš, kto v Tvojom okolí predáva byt, dom alebo pozemok? Tak mi nižšie
          napíš Tvoj email, všetky potrebné informácie a odmenu máš NA DOSAH!
          Vyplnením formulára súhlasíš so spracovaním osobných údajov
          prevádzkovateľom tohto webu: Michal Dovala. Tvoje osobné údaje budeme
          spracovávať za účelom zasielania obchodných oznámení.
        </p>
        <form onSubmit={handleSubmit} className="my-8 flex flex-col gap-2">
          <label>Tvoj Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[40px] border border-gray-300 pl-[5px]"
            required
          />
          <label>Meno majiteľa nehnuteľnosti</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-[40px] border border-gray-300 pl-[5px]"
            required
          />
          <label>Kontakt na majiteľa nehnuteľnosti</label>

          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="h-[40px] border border-gray-300 pl-[5px]"
            required
          />

          <div className="my-2 flex flex-col items-start gap-3 lg:flex-row lg:items-center">
            <p>O akú nehnuteľnosť ide? </p>
            <label>
              <input
                type="checkbox"
                checked={selectedType === 'Byt'}
                onChange={() => handleCheckboxChange('Byt')}
              />{' '}
              Byt
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedType === 'Dom'}
                onChange={() => handleCheckboxChange('Dom')}
              />{' '}
              Dom
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedType === 'Pozemok'}
                onChange={() => handleCheckboxChange('Pozemok')}
              />{' '}
              Pozemok
            </label>

            <label>
              <input
                type="checkbox"
                checked={selectedType === 'Iné'}
                onChange={() => handleCheckboxChange('Iné')}
              />{' '}
              Iné
              <input
                type="text"
                value={other}
                onChange={(e) => setOther(e.target.value)}
                className="ml-2 h-[25px] border border-gray-300 pl-[5px]"
              />
            </label>

            {/* <p>Selected Type: {selectedType}</p> */}
          </div>

          <label>V akom meste/dedine sa nehnuteľnosť nachádza?</label>

          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="h-[40px] border border-gray-300 pl-[5px]"
            required
          />
          <label>
            Tvoj bližší popis (poznáš majiteľa osobne, hovorili ste už spolu o
            predaji jeho nehnuteľnosti, ako reagoval, atď.)
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
      </div>
    </div>
  );
};

export default Tip;
