import React from 'react';
import Header from '@/components/HeaderSection';
import Footer from '@/components/FooterSection';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}