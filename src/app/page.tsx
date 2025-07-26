import React from 'react';
import Hero from '@/components/hero';
import About from '@/components/about';
import Products from '@/components/products';
import Advantages from '@/components/advantages';
import Cases from '@/components/cases';
import LatestNews from '@/components/latest-news';
import Contact from '@/components/contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Advantages />
      <Cases />
      <LatestNews />
      <Contact />
    </>
  );
};

export default Home;