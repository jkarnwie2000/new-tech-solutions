"use client";
import faq_data from "@/data/faq-data";
import VideoPopup from "@/modals/video-popup";
import { useState } from "react";

const FaqHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section className="techin-faq-section-padding bg-light3">
        <div className="container">
          <div className="row techin_screenfix_left3">
            <div className="col-lg-6">
              <div className="techin-faq-thumb">
                <img src="assets/images/v1/img2.png" alt="" />
                <a className="techin-popup-video video-init"
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  <img src="assets/images/blog/play-btn.svg" alt="" />
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </a>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="techin-faq-content-wrap">
                <div className="techin-title-tag">
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                  <h6>FAQs</h6>
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                </div>
                <h2 className="faq-title">Frequently Asked Any Questions</h2>
                <div className="techin-faq-wrap1">

                  {faq_data.map((faq, index) => (
                    <div
                      className={`techin-faq-item ${activeIndex === index ? "open" : ""}`}
                      key={index}
                    >
                      <div className="techin-faq-header" onClick={() => toggleFAQ(index)} style={{cursor: "pointer"}}>
                        <h6>{faq.question}</h6>
                        <div className="techin-active-icon">
                          <img
                            className="active-icon"
                            src="assets/images/v1/top-arrow.svg"
                            alt=""
                            style={{
                              transform: activeIndex === index ? "rotate(0deg)" : "rotate(180deg)",
                              transition: "transform 0.3s",
                            }}
                          />
                        </div>
                      </div>
                      {activeIndex === index && (
                        <div className="techin-faq-body body2">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}

 
                </div>
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

export default FaqHomeOne;