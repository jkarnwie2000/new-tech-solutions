"use client";
import Slider from "react-slick";



const BrandHomeThree = () => {

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    arrows: false,
    centerMode: true,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 0,
      settings: {
        slidesToShow: 2
      }
    }]
  }


  return (
    <>
      <div className="container">
        <div className="techin-brand-wrap2">
          <div className="techin-title-tag center2 brand-v2">
            <div className="techin-title-wrap">
              <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
              <h6>Testimonials</h6>
              <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
            </div>
          </div>
          <Slider {...settings} className="techin-brand-slider2 brand-no-arrow">
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
              <img src="assets/images/v1/logo3.svg" alt="" />
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

export default BrandHomeThree;