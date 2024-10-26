// src/sections/HeroCarousel/HeroCarousel.js
import React from 'react';
import Slider from 'react-slick';
import './Herosection.css'; // Import your standard CSS

const HeroCarousel = () => {
  const images = [
    "https://static.vecteezy.com/system/resources/previews/036/804/331/non_2x/ai-generated-assorted-indian-food-on-dark-wooden-background-free-photo.jpg",
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg",
    "https://img.freepik.com/free-photo/close-up-street-food-neon-light_23-2151571607.jpg",
    "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
    "https://img.freepik.com/premium-photo/culinary-creations-culinary-mastery-gastronomic-art-delicious-visuals-tasty-delights-food-aesth_497046-451.jpg"
   
  ];
  
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: true,
    arrows: false,// Hide next/previous buttons for a cleaner look
    lazyLoad : 'ondemand'
  };

  return (
    <section className="hero-section">
      <Slider {...settings}>
        {images.map((image, indexx) => (
          <div key={indexx} className="hero-slide">
            <img src={image} alt={`Slide ${indexx + 1}`} className="hero-image" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroCarousel;
