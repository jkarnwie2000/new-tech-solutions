
"use client";
import VideoPopup from "@/modals/video-popup";
import { useState } from "react";

const AboutHomeThrree = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);


  return (
    <>

      <section className="techin-section-padding6">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="techin-about-content">
                <div className="techin-title-tag">
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                  <h6>About Us</h6>
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                </div>
                <h2>Empowering Your Business With <span className="title">techin</span> IT Solutions</h2>
                <div className="techin-about-thumb-one">
                  <img src="assets/images/v3/about-us.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="pl-50">
                <div className="techin-about-video-thumb">
                  <img src="assets/images/v3/video-thumb.png" alt="" />
                  <div className="techin-about-video-icon">
                    <a className="techin-popup-video4 video-init"
                      onClick={() => setIsVideoOpen(true)}
                      style={{ cursor: "pointer" }}
                    >
                      <img src="assets/images/v3/video-icon.svg" alt="" />
                      <div className="waves waves4 wave-1"></div>
                      <div className="waves waves4 wave-2"></div>
                      <div className="waves waves4 wave-3"></div>
                    </a>
                  </div>
                </div>
                <p className="techin-about-text">At Techin, we deliver innovative IT solutions that empower businesses in the digital age. Our team provides strategies, robust support, and cutting-edge technology tailored to your needs, ensuring efficiency, security, and reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default AboutHomeThrree;