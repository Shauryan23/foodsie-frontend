import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Categories from '../components/Sections/Categories/Categories';
import Trending from '../components/Sections/Trending/Trending';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Trending />
      <Footer />
    </>
  );
};

export default Home;
