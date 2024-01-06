import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './fonts/trebuc.ttf' });

export const metadata: Metadata = {
  title: 'Michal Dovala',
  description: 'Domov, o ktorom snívate na dosah ruky',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
