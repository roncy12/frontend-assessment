import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import desktopBanner from '../assets/img/1920x650.png';
import mobileBanner from '../assets/img/600x600.png';

export default function SimpleSlider() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    { 
        id: 1, 
        content: ( 
            <>
                <h1 className="heroCarousel-title">Hello Developer!</h1>
                <h4 className="heroCarousel-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </>
        ),
        imgUrl: isMobile ? mobileBanner : desktopBanner,
        alt: 'Slide 1'
    }
    // Add more slides as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {slides.length > 1 ? (
        <section className="heroCarousel">
            <Slider {...settings}>
            {slides.map((slide) => (
                <div key={slide.id} className="heroSlide">
                  <div className="heroCarousel-image-wrapper">
                    <img src={slide.imgUrl} alt={slide.alt} />
                  </div>
                  <div className="heroCarousel-content">
                    {slide.content}
                  </div>
                </div>
            ))}
            </Slider>
        </section>
      ) : (
        <section className="heroCarousel">
            <div className="heroSlide">
                <div className="heroCarousel-image-wrapper">
                  <img src={slides[0].imgUrl} alt={slides[0].alt} />
                </div>
                <div className="heroCarousel-content">
                   {slides[0].content}
                </div>
            </div>
        </section>
      )}
    </>
  );
}
