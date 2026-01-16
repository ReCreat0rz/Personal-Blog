'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  if (isLandingPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh', paddingTop: '1rem' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
