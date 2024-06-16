/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import WhyUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';
import Banner from '../components/Banner';
import FAQ from '../components/Faq';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
      <Header />
      <Hero showButton={false} />
      <OurServices/>
      <WhyUs />
      <Testimonial/>
      <Banner />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
