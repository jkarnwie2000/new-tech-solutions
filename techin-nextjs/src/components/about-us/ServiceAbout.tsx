"use client";
import Link from "next/link";
import Slider from "react-slick"; 

const NextArrow = (props: any) => {
  const { onClick } = props;
  return <button className="slide-arrow techin-s-slider-next" onClick={onClick}></button>;
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return <button className="slide-arrow techin-s-slider-prev" onClick={onClick}></button>;
};


const ServiceAbout = () => {

   const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    lazyLoad: 'progressive' as const,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerPadding: '70px'
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px'
        }
      },
    ]
  };


  return (
    <>
      <div className="techin-section-padding2 light-bg1">
        <div className="container">
          <div className="techin-section-title">
            <div className="row">
              <div className="col-xl-6 col-lg-8">
                <div className="techin-title-tag">
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                  <h6>Our Service</h6>
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                </div>
                <h2>Our Unique And Awesome Services</h2>
              </div>
              <div className="col-xl-6 col-lg-4 d-flex justify-content-end align-items-center">
              </div>
            </div>
          </div>
          <Slider {...settings} className="techin-three-column2">
            <div className="techin-service-wrap2">
              <div className="techin-service-thumb">
                <img src="assets/images/v2/s1.png" alt="" />
                <div className="techin-service-icon2">
                  <img src="assets/images/v2/icon4.svg" alt="" />
                </div>
              </div>
              <div className="techin-service-content2">
                <h5>IT Management</h5>
                <p>Comprehensive management of your IT infrastructure, network monitoring, security, minimal downtime.</p>
                <Link className="techin-default-btn techin-service-btn" data-text="Read More" href="/about-us">
                  <span className="button-wraper">Read More</span>
                </Link>
              </div>
            </div>
            <div className="techin-service-wrap2">
              <div className="techin-service-thumb">
                <img src="assets/images/v2/s2.png" alt="" />
                <div className="techin-service-icon2">
                  <img src="assets/images/v2/icon5.svg" alt="" />
                </div>
              </div>
              <div className="techin-service-content2">
                <h5>Cloud Solutions</h5>
                <p>Design, deployment, and management of cloud tailored to your business needs, scalability, flexibility, and cost-efficiency.</p>
                <Link className="techin-default-btn techin-service-btn" data-text="Read More" href="/about-us">
                  <span className="button-wraper">Read More</span>
                </Link>
              </div>
            </div>
            <div className="techin-service-wrap2">
              <div className="techin-service-thumb">
                <img src="assets/images/v2/s3.png" alt="" />
                <div className="techin-service-icon2">
                  <img src="assets/images/v2/icon6.svg" alt="" />
                </div>
              </div>
              <div className="techin-service-content2">
                <h5>Cybersecurity</h5>
                <p>Protection of your digital assets through security measures, encryption to safeguard against cyber threats.</p>
                <Link className="techin-default-btn techin-service-btn" data-text="Read More" href="/about-us">
                  <span className="button-wraper">Read More</span>
                </Link>
              </div>
            </div>
            <div className="techin-service-wrap2">
              <div className="techin-service-thumb">
                <img src="assets/images/v2/s1.png" alt="" />
                <div className="techin-service-icon2">
                  <img src="assets/images/v2/icon4.svg" alt="" />
                </div>
              </div>
              <div className="techin-service-content2">
                <h5>IT Management</h5>
                <p>Comprehensive management of your IT infrastructure, network monitoring, security, minimal downtime.</p>
                <Link className="techin-default-btn techin-service-btn" data-text="Read More" href="/about-us">
                  <span className="button-wraper">Read More</span>
                </Link>
              </div>
            </div>
            <div className="techin-service-wrap2">
              <div className="techin-service-thumb">
                <img src="assets/images/v2/s2.png" alt="" />
                <div className="techin-service-icon2">
                  <img src="assets/images/v2/icon4.svg" alt="" />
                </div>
              </div>
              <div className="techin-service-content2">
                <h5>IT Management</h5>
                <p>Comprehensive management of your IT infrastructure, network monitoring, security, minimal downtime.</p>
                <Link className="techin-default-btn techin-service-btn" data-text="Read More" href="/about-us">
                  <span className="button-wraper">Read More</span>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ServiceAbout;