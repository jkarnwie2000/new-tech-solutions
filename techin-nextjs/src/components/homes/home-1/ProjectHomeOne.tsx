
"use client";
import Link from "next/link";
import Slider from "react-slick";
import { LazyLoadTypes } from 'react-slick';
 

 
const NextArrow = (props: any) => {
  const { onClick } = props;
  return <button className="slide-arrow techin-p-slider-next slick-arrow" onClick={onClick}></button>;
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return <button className="slide-arrow techin-p-slider-prev slick-arrow" onClick={onClick}></button>;
};



const ProjectHomeOne = () => {

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    centerMode: true,
    lazyLoad: 'ondemand' as LazyLoadTypes,
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
      <div className="techin-section-padding2">
        <div className="container">
          <div className="techin-section-title">
            <div className="row">
              <div className="col-xl-6 col-lg-8">
                <div className="techin-title-tag">
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                  <h6>Latest Projects</h6>
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                </div>
                <h2>Our Successful Project and Case Study</h2>
              </div>
              <div className="col-xl-6 col-lg-4 d-flex justify-content-end align-items-center">
              </div>
            </div>
          </div>
          <Slider {...settings} className="techin-three-column">

            <div className="techin-p-item">
              <div className="techin-p-thumb">
                <img src="assets/images/v1/img77.png" alt="" />
              </div>
              <div className="techin-p-content">
                <p>CloudStream Integration</p>
                <h6>Advanced Cybersecurity for a Financial Services Firm.</h6>
                <div className="btn-icon">
                  <Link href="/single-portfolio"><img src="assets/images/v1/r-arrow.svg" alt="" /></Link>
                </div>
              </div>
            </div>

            <div className="techin-p-item">
              <div className="techin-p-thumb">
                <img src="assets/images/v1/img6.png" alt="" />
              </div>
              <div className="techin-p-content">
                <p>Cybersecurity</p>
                <h6>Advanced Cybersecurity for TechNova.</h6>
                <div className="btn-icon">
                  <Link href="/single-portfolio"><img src="assets/images/v1/r-arrow.svg" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="techin-p-item">
              <div className="techin-p-thumb">
                <img src="assets/images/v1/img5.png" alt="" />
              </div>
              <div className="techin-p-content">
                <p>Cybersecurity</p>
                <h6>Network Security Overhaul for Financial Institution</h6>
                <div className="btn-icon">
                  <Link href="/single-portfolio"><img src="assets/images/v1/r-arrow.svg" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="techin-p-item">
              <div className="techin-p-thumb">
                <img src="assets/images/v1/img77.png" alt="" />
              </div>
              <div className="techin-p-content">
                <p>Cybersecurity</p>
                <h6>Smart Network Infrastructure Overhaul</h6>
                <div className="btn-icon">
                  <Link href="/single-portfolio"><img src="assets/images/v1/r-arrow.svg" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="techin-p-item">
              <div className="techin-p-thumb">
                <img src="assets/images/v1/img6.png" alt="" />
              </div>
              <div className="techin-p-content">
                <p>Development</p>
                <h6>Custom ERP System Development & Integration</h6>
                <div className="btn-icon">
                  <Link href="/single-portfolio"><img src="assets/images/v1/r-arrow.svg" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="techin-p-item">
              <div className="techin-p-thumb">
                <img src="assets/images/v1/img5.png" alt="" />
              </div>
              <div className="techin-p-content">
                <p>Data Recovery</p>
                <h6>Robust Data Backup & Disaster Recovery Solution</h6>
                <div className="btn-icon">
                  <Link href="/single-portfolio"><img src="assets/images/v1/r-arrow.svg" alt="" /></Link>
                </div>
              </div>
            </div>


            <div className="techin-p-item">
              <div className="techin-p-thumb">
                <img src="assets/images/v1/img6.png" alt="" />
              </div>
              <div className="techin-p-content">
                <p>Development</p>
                <h6>Custom ERP System Development & Integration</h6>
                <div className="btn-icon">
                  <Link href="/single-portfolio"><img src="assets/images/v1/r-arrow.svg" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="techin-p-item">
              <div className="techin-p-thumb">
                <img src="assets/images/v1/img5.png" alt="" />
              </div>
              <div className="techin-p-content">
                <p>Data Recovery</p>
                <h6>Robust Data Backup & Disaster Recovery Solution</h6>
                <div className="btn-icon">
                  <Link href="/single-portfolio"><img src="assets/images/v1/r-arrow.svg" alt="" /></Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProjectHomeOne;