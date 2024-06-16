/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero'
import SearchCar from '../components/SearchCar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cars = () => {
  return (
    <>
      <Header />
      <Hero showButton={false} />
      <SearchCar/>
      <Footer />
    </>
  );
};

export default Cars;
