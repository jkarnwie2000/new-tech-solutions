"use client";
import faq_data from "@/data/faq-data";
import { useState } from "react";


const FaqHomeThree = () => {
   const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const toggleFAQ = (index: number) => {
      setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };


  return (
    <>
      <div className="techin-section-padding2 light-bg1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-2">
              <div className="techin-faq-wrap2">
                <div className="techin-title-tag">
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                  <h6>Why Choose Us</h6>
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                </div>
                <h2>We Provide Truly Prominent IT Solutions.</h2>
                <p className="text">At Techin, we are dedicated to delivering innovative IT solutions and services that empower businesses to thrive in the digital age. With a team of experienced professionals, we provide customized technology strategies, robust support, and cutting-edge solutions tailored to your unique needs.</p>
                <div className="techin-skill-wraper">
                  <div className="techin-skill-icon">
                    <img src="assets/images/v3/icon2.svg" alt="" />
                  </div>
                  <div className="techin-skill-icon2">
                    <img src="assets/images/v3/icon3.svg" alt="" />
                  </div>
                  <div className="techin-skill-wrap">
                    <div className="techin-skill-item">
                      <div className="techin-skill-title">
                        <h6>IT Management</h6>
                      </div>
                      <div className="techin-skill-line">
                        <div className="techin-skill-bar bar-one"></div>
                      </div>
                    </div>
                    <div className="techin-skill-item">
                      <div className="techin-skill-title">
                        <h6>Data Security</h6>
                      </div>
                      <div className="techin-skill-line">
                        <div className="techin-skill-bar bar-two"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
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
    </>
  );
};

export default FaqHomeThree;