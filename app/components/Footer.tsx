'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import CookieConsent from 'react-cookie-consent'

const Footer = () => {
  const path = usePathname();

    const apiUrl = 'https://hono-api.pictusweb.com/api/visitors/michaldovala/increase'
  //const apiUrl = 'http://localhost:3013/api/visitors/michaldovala/increase'

  const incrementCount = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error('Failed to increment count')
      }
    } catch (err) {
      console.log(err instanceof Error ? err.message : 'An unknown error occurred')
    }
  }

  return (
    <>
          <CookieConsent
        location="bottom"
        style={{
          background: '#eaf3f6',
          color: '#1870a9',
          fontSize: '22.5px',
          textAlign: 'justify',
        }}
        buttonStyle={{
          background: '#1d9f2f',
          color: '#fff',
          fontSize: '17.5px',
        }}
        buttonText={'Pokračovať'}
        expires={365}
        enableDeclineButton
        onAccept={() => {
          incrementCount()
        }}
        declineButtonStyle={{
          background: 'red',
          color: '#fff',
          fontSize: '17.5px',
        }}
        declineButtonText={'Nesúhlasím'}
        onDecline={() => {
          incrementCount()
        }}
      >
        Táto stránka nezhromažďuje žiadne údaje.
      </CookieConsent>
         <div className="absolute bottom-0 left-1/2 z-0 w-[100%] -translate-x-[50%] bg-[#ffffff] md:bottom-2">
      
      <div
        className={
          path === '/'
            ? 'mt-8 flex flex-row items-center justify-center gap-[15%] text-[10px] text-[#007ad6] md:gap-[35%] lg:mt-8 lg:gap-[25%] lg:text-[15px] xl:gap-[26%] 2xl:gap-[30%]'
            : 'mt-8 flex flex-row items-center justify-center gap-[15%] text-[10px] text-[#007ad6] md:gap-[35%] lg:mt-8 lg:gap-[28%]  lg:text-[15px] xl:gap-[26.5%] 2xl:gap-[30%]'
        }
      >
        <a
          className="  text-center"
          href="https://pictusweb.sk"
          target="_blank"
        >
          &#60;&#47;&#62; PICTUSWEB Development
        </a>
        <p> &copy; {Date().substring(11, 15)} Všetky práva vyhradené</p>
      </div>
    </div>
    </>
 
  );
};

export default Footer;
