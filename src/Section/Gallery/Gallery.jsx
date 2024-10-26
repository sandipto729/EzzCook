import React from 'react';
import Slider from 'react-slick';
import './Gallery.css';

const FoodCarousel = () => {
  const foodItems = [
    { name: 'Pizza', image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg' },
    { name: 'Burger', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349' },
    { name: 'Pasta', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e' },
    { name: 'Sushi', image: 'https://img.freepik.com/premium-photo/japanese-sushi_854558-1678.jpg' },
    { name: 'Salad', image: 'https://www.cookingclassy.com/wp-content/uploads/2014/11/apple-salad-2.jpg' },
    { name: 'Ice Cream', image: 'https://www.domex-uk.co.uk/wp-content/uploads/2020/08/Keep-ice-cream-scoopable-in-freezer-1024x683.jpg' }
    // Add more items if needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false

  };

  return (
    <section className="food-carousel">
      <Slider {...settings}>
        {foodItems.map((item, index) => (
          <div key={index} className="food-card">
            <img src={item.image} alt={item.name} className="food-image" />
            <h3 className="food-name">{item.name}</h3>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FoodCarousel;
