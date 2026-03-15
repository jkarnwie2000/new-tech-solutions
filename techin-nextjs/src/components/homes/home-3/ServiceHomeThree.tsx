"use client";

import VideoPopup from "@/modals/video-popup";
import Link from "next/link";
import { useState } from "react";

const ServiceHomeThree = () => {

  const [isVideoOpen, setIsVideoOpen] = useState(false);



  return (
    <>
      <div className="techin-section-padding11 light-bg1">
        <div className="container">
          <div className="techin-section-title center">
            <div className="techin-title-tag center2">
              <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
              <h6>Our Service</h6>
              <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
            </div>
            <h2>Our Unique And Awesome Services</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="techin-service-wrap3">
                <div className="techin-service-thumb">
                  <img src="assets/images/v2/s1.png" alt="" />
                  <div className="techin-service-icon3">
                    <img className="techin-service-icon-show" src="assets/images/v3/icon-white1.svg" alt="" />
                    <img className="techin-service-icon-hide" src="assets/images/v3/icon-dark1.svg" alt="" />
                  </div>
                </div>
                <div className="techin-service-content2">
                  <h5>IT Management</h5>
                  <p>Comprehensive management of your IT infrastructure, network monitoring, security, minimal downtime.</p>
                  <Link className="techin-default-btn techin-service-btn2" data-text="Read More" href="/about-us">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="techin-service-wrap3">
                <div className="techin-service-thumb">
                  <img src="assets/images/v2/s2.png" alt="" />
                  <div className="techin-service-icon3">
                    <img className="techin-service-icon-show" src="assets/images/v3/icon-white2.svg" alt="" />
                    <img className="techin-service-icon-hide" src="assets/images/v3/icon-dark2.svg" alt="" />
                  </div>
                </div>
                <div className="techin-service-content2">
                  <h5>IT Management</h5>
                  <p>Comprehensive management of your IT infrastructure, network monitoring, security, minimal downtime.</p>
                  <Link className="techin-default-btn techin-service-btn2" data-text="Read More" href="/about-us">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="techin-service-wrap3">
                <div className="techin-service-thumb">
                  <img src="assets/images/v2/s3.png" alt="" />
                  <div className="techin-service-icon3">
                    <img className="techin-service-icon-show" src="assets/images/v3/icon-white3.svg" alt="" />
                    <img className="techin-service-icon-hide" src="assets/images/v3/icon-dark3.svg" alt="" />
                  </div>
                </div>
                <div className="techin-service-content2">
                  <h5>Cybersecurity</h5>
                  <p>Comprehensive management of your IT infrastructure, network monitoring, security, minimal downtime.</p>
                  <Link className="techin-default-btn techin-service-btn2" data-text="Read More" href="/about-us">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="techin-service-video-section" style={{ backgroundImage: `url(/assets/images/v3/service-bg.png)` }}>
          <div className="techin-service-video-content">
            <div className="techin-title-tag tag4">
              <span><img src="assets/images/v1/shape2.svg" alt="" /></span>
              <h6>Play And Discover</h6>
              <span><img src="assets/images/v1/shape2.svg" alt="" /></span>
            </div>
            <h2>We Are No.1 IT Solution Company In Earth</h2>
          </div>
          <a className="techin-popup-video5 video-init"
            onClick={() => setIsVideoOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <img src="assets/images/v3/video-icon2.svg" alt="" />
            <div className="waves waves5 wave-1"></div>
            <div className="waves waves5 wave-2"></div>
            <div className="waves waves5 wave-3"></div>
          </a>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Q5PG0rMXgvw"}
      />
      {/* video modal end */}

    </>
  );
};

export default ServiceHomeThree;