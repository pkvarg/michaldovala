'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from 'react-hot-toast';
import Image from 'next/image';

const Ebook = () => {
  const [showPage, setShowPage] = useState(true);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showAgree, setShowAgree] = useState(false);

  const validateEmail = (email: string) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (email !== '') {
      setIsValid(validateEmail(email));
    }
  }, [email]);

  const handleClick = () => {
    setShowPage(false);
    setShowEmailInput(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const closeInput = () => {
    setShowPage(true);
    setShowEmailInput(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isValid) return toast.error('Skontrolujte email');
    try {
      await axios.put(
        `https://api.pictusweb.com/api/md/downloadsEmails`,
        // 'http://localhost:2000/api/md/downloadsEmails'
        {
          email,
        },
      );
    } catch (error) {
      console.log(error);
    }
    setShowEmailInput(false);
    setShowPage(true);
    const downloadFile = () => {
      const fileName = 'ebook.pdf';
      fetch(`${fileName}`).then((response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = `${fileName}`;
          alink.click();
        });
      });
    };
    downloadFile();
  };
  return (
    <div className="relative flex h-[1250px] grid-rows-3 flex-col lg:grid lg:h-screen">
      <div className="h-[min-content]">
        <Navbar />
      </div>
      <div className="z-10 flex h-auto flex-col items-center justify-center">
        <div
          className={
            showPage
              ? 'mx-4 flex flex-col gap-8 lg:mx-[22.5%] lg:flex-row 2xl:mx-[25%]'
              : 'mx-4 flex flex-col gap-8 blur-md lg:mx-[22.5%] lg:flex-row lg:blur-lg 2xl:mx-[25%]'
          }
        >
          <div className="flex flex-col text-[14px] text-[#928a8f] lg:w-[60%]">
            <h1 className="mt-6 text-[30px] font-bold leading-[30px] text-[#0076ba] md:mt-16 2xl:mt-[17.5%]">
              Zaujímaš sa o svoju budúcnosť?
            </h1>
            <p className="mt-4 text-justify lg:mt-4">
              Ty sám sa rozhodneš aká bude. Pokiaľ sa budeš zaujímať o svoje
              finančné zdravie už dnes a budeš sa vzdelávať, riadiť sa radami
              odborníkov a osvedčenou stratégiou, máš veľú šancu, že tvoja
              budúcnosť bude skvelá!
            </p>
            <p className="mt-4 text-justify">
              Práve preto sme pripravili tento krátky E-book na tému Finančnej
              gramotnosti. Keďže nám záleží na to, aby ľudia na Slovensku boli
              finančne gramotní, je tento E-book úplne{' '}
              <span className="text-[25px] font-bold text-[#0076ba]">
                ZADARMO
              </span>
              .
            </p>
            <button
              onClick={handleClick}
              className="mt-8 w-[100%] rounded-[25px] bg-[#0076ba] text-[30px] text-[#ffffff] lg:w-[50%] "
            >
              kliknite SEM
            </button>
          </div>
          <div className="flex flex-col shadow-2xl lg:w-[40%]">
            <Image
              className="w-[100%] shadow-2xl"
              src="/ebook.webp"
              alt="ebook_cover"
              width={60}
              height={60}
            />
          </div>
        </div>

        {showEmailInput && (
          <>
            <form
              onSubmit={handleSubmit}
              className="absolute top-16 mx-4 mt-16 flex flex-col lg:top-[33%] lg:mx-0 lg:mt-0"
            >
              <p
                onClick={closeInput}
                className="mb-4 mr-1 cursor-pointer text-right text-red-500"
              >
                X
              </p>
              <input
                type="text"
                placeholder="Váš email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-8 border border-gray-400 px-16 pl-2"
              />
              <div className="mt-4 flex flex-row items-center gap-4 lg:gap-2">
                <input type="checkbox" required />
                <p className="text-[15px] leading-[15px] text-gray-800">
                  Pred odoslaním musíte súhlasiť so
                  <span
                    onClick={() => setShowAgree((prev) => !prev)}
                    className="ml-1 cursor-pointer underline"
                  >
                    spracovaním osobných údajov
                  </span>
                </p>
                {showAgree && (
                  <p className="text-[17.5px] leading-[17.5px] text-[#13191c]">
                    Poskytnuté údaje nebudú zdieľané tretím stranám.
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="my-4 w-[100%] rounded-[5px] bg-[#0076ba] text-[20px] text-[#ffffff]"
              >
                Stiahnuť E-book
              </button>
            </form>
          </>
        )}
      </div>
      <div className="z-0 h-[min-content]">
        <Footer />
      </div>
    </div>
  );
};

export default Ebook;
