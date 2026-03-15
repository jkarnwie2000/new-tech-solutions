
"use client";
import Slider from "react-slick";
import { LazyLoadTypes } from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



const NextArrow = (props: any) => {
  const { onClick } = props;
  return <button className="slide-arrow techin-t-slider-init-next slick-arrow" onClick={onClick}></button>;
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return <button className="slide-arrow techin-t-slider-init-prev slick-arrow" onClick={onClick}></button>;
};



const TestimonialHomeOne = () => {

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    lazyLoad: 'ondemand' as LazyLoadTypes,
    centerMode: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };


  return (
    <>
      <div className="techin-t-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="techin-t-wrap">
                <div className="techin-title-tag">
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                  <h6>Testimonials</h6>
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                </div>
                <h2>what’s our client’s words</h2>
                <p>At Techin, we are dedicated to delivering innovative IT solutions and services that empower businesses to thrive in the digital age.</p>
              </div>
            </div>
            <div className="col-xl-8">
              <Slider {...settings} className="techin-t-slider-init">
                <div className="techin-t-slider-wrap">
                  <div className="techin-t-slider-title">
                    <h6>Laura McAlister</h6>
                    <p>Tech Startup Founder</p>
                  </div>
                  <div className="techin-t-slider-thumb">
                    <img src="assets/images/v1/img8.png" alt="" />
                  </div>
                  <div className="techin-t-slider-rating">
                    <img src="assets/images/v1/rating.svg" alt="" />
                  </div>
                  <div className="techin-t-slider-text">
                    <p>“TechIN completely transformed our IT infrastructure. Their team was knowledgeable, responsive, and provided solutions that significantly improved our efficiency. Highly recommended!”</p>
                  </div>
                  <div className="techin-t-slider-icon">
                    <img src="assets/images/v1/8.svg" alt="" />
                  </div>
                </div>
                <div className="techin-t-slider-wrap">
                  <div className="techin-t-slider-title">
                    <h6>Laura McAlister</h6>
                    <p>Tech Startup Founder</p>
                  </div>
                  <div className="techin-t-slider-thumb">
                    <img src="assets/images/v1/img9.png" alt="" />
                  </div>
                  <div className="techin-t-slider-rating">
                    <img src="assets/images/v1/rating.svg" alt="" />
                  </div>
                  <div className="techin-t-slider-text">
                    <p>“TechIN completely transformed our IT infrastructure. Their team was knowledgeable, responsive, and provided solutions that significantly improved our efficiency. Highly recommended!”</p>
                  </div>
                  <div className="techin-t-slider-icon">
                    <img src="assets/images/v1/8.svg" alt="" />
                  </div>
                </div>
                <div className="techin-t-slider-wrap">
                  <div className="techin-t-slider-title">
                    <h6>Laura McAlister</h6>
                    <p>Tech Startup Founder</p>
                  </div>
                  <div className="techin-t-slider-thumb">
                    <img src="assets/images/v1/img8.png" alt="" />
                  </div>
                  <div className="techin-t-slider-rating">
                    <img src="assets/images/v1/rating.svg" alt="" />
                  </div>
                  <div className="techin-t-slider-text">
                    <p>“TechIN completely transformed our IT infrastructure. Their team was knowledgeable, responsive, and provided solutions that significantly improved our efficiency. Highly recommended!”</p>
                  </div>
                  <div className="techin-t-slider-icon">
                    <img src="assets/images/v1/8.svg" alt="" />
                  </div>
                </div>
                <div className="techin-t-slider-wrap">
                  <div className="techin-t-slider-title">
                    <h6>Laura McAlister</h6>
                    <p>Tech Startup Founder</p>
                  </div>
                  <div className="techin-t-slider-thumb">
                    <img src="assets/images/v1/img9.png" alt="" />
                  </div>
                  <div className="techin-t-slider-rating">
                    <img src="assets/images/v1/rating.svg" alt="" />
                  </div>
                  <div className="techin-t-slider-text">
                    <p>“TechIN completely transformed our IT infrastructure. Their team was knowledgeable, responsive, and provided solutions that significantly improved our efficiency. Highly recommended!”</p>
                  </div>
                  <div className="techin-t-slider-icon">
                    <img src="assets/images/v1/8.svg" alt="" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialHomeOne;