import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './fonts/trebuc.ttf' });

export const metadata: Metadata = {
  title: 'Michal Dovala',
  description: 'Domov, o ktorom snívate na dosah ruky',
  // openGraph: {
  //   title: 'Michal Dovala',
  //   description: 'Domov, o ktorom snívate na dosah ruky',
  //   url: 'https://michaldovala.sk',
  //   siteName: 'Michal Dovala',
  //   images: [
  //     {
  //       url: 'https://michaldovala.sk/michaldovala.png',
  //       width: 1260,
  //       height: 800,
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="title" content="Michal Dovala" />
        <meta
          property="description"
          content="Domov, o ktorom snívate na dosah ruky"
        />

        <meta property="og:title" content="Michal Dovala" />
        <meta
          property="og:description"
          content="Domov, o ktorom snívate na dosah ruky"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="michaldovala.sk" />
        <meta property="og:url" content="https://www.michaldovala.sk" />
        <meta property="og:title" content="Michal Dovala" />

        <meta
          property="og:image"
          content="https://www.michaldovala.sk/md.jpeg"
        />
        <meta property="og:image:type" content="png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="michaldovala.sk" />
        <meta property="fb:app_id" content="627076731624225" />
      </head>
      <body className={myFont.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
