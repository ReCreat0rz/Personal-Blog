import './globals.css'
import BackgroundMusic from '../components/BackgroundMusic';
import Auth from '../components/auth';
import LayoutWrapper from '../components/LayoutWrapper';
import { Geist, Geist_Mono, Ubuntu_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const ubuntuMono = Ubuntu_Mono({
  variable: '--font-ubuntu-mono',
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'ReCreat0rz',
  description: 'A personal blog about cybersecurity and tech.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  interactiveWidget: 'resizes-content'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${ubuntuMono.variable}`}>
        <Auth>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
          <BackgroundMusic />
        </Auth>
      </body>
    </html>
  )
}
