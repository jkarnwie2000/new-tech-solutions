"use client";
import Slider from "react-slick";
import { LazyLoadTypes } from 'react-slick';

 

const NextArrow = (props: any) => {
  const { onClick } = props;
  return <button className="slide-arrow techin-brand-next" onClick={onClick}></button>;
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return <button className="slide-arrow techin-brand-prev" onClick={onClick}></button>;
};




const BrandHomeOne = () => {

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    lazyLoad: 'ondemand' as LazyLoadTypes,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="techin-slider-logo-section">
        <div className="container">
          <Slider {...settings} className="techin-brand-slider">
            <div className="techin-slider-logo-item">
              <img src="assets/images/v1/logo1.svg" alt="" />
            </div>
            <div className="techin-slider-logo-item">
              <img src="assets/images/v1/logo2.svg" alt="" />
            </div>
            <div className="techin-slider-logo-item active">
              <img src="assets/images/v1/logo3.svg" alt="" />
            </div>
            <div className="techin-slider-logo-item">
              <img src="assets/images/v1/logo4.svg" alt="" />
            </div>
            <div className="techin-slider-logo-item">
              <img src="assets/images/v1/logo5.svg" alt="" />
            </div>
            <div className="techin-slider-logo-item">
              <img src="assets/images/v1/logo1.svg" alt="" />
            </div>
            <div className="techin-slider-logo-item">
              <img src="assets/images/v1/logo2.svg" alt="" />
            </div>
            <div className="techin-slider-logo-item">
              <img src="assets/images/v1/logo3.svg" alt="" />
            </div>
            <div className="techin-slider-logo-item">
              <img src="assets/images/v1/logo4.svg" alt="" />
            </div>
            <div className="techin-slider-logo-item">
              <img src="assets/images/v1/logo5.svg" alt="" />
            </div>
            <div className="techin-slider-logo-item">
              <img src="assets/images/v1/logo4.svg" alt="" />
            </div>
            <div className="techin-slider-logo-item">
              <img src="assets/images/v1/logo5.svg" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default BrandHomeOne;