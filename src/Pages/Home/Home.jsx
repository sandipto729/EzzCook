// src/sections/HomeSection/HomeSection.js
import React from 'react';
import HeroCarousel from '../../Section/HeroCarousel/Herosection';
import './Home.css';
import Gallery from '../../Section/Gallery/Gallery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HomeSection = () => {
  return (
    <section className="home-section">
      <HeroCarousel /> 
      <div className="home-content">
        <h1>Welcome to Recipe Book</h1>
        <p>Explore a variety of delicious recipes and share your favorites with others!</p>
      </div>
      <Gallery/>
    </section>
  );
};

export default HomeSection;
