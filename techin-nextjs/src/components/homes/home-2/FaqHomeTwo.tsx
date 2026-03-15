"use client";
import faq_data from "@/data/faq-data";
import { useState } from "react";


const FaqHomeTwo = ({style_2} : any) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };


  return (
    <>
      <div className={`techin-section-padding2 ${style_2 ? '' : 'light-bg1'} `}>
        <div className="container">
          <div className="techin-section-title center">
            <div className="techin-title-tag center2">
              <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
              <h6>faqS</h6>
              <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
            </div>
            <h2>Frequently Asked Any Questions</h2>
          </div>
          <div className="techin-faq-wrap1">

            {faq_data.map((faq, index) => (
              <div
                className={`techin-faq-item ${activeIndex === index ? "open" : ""}`}
                key={index}
              >
                <div className={`techin-faq-header ${style_2 ? 'headr-2' : ''}`} onClick={() => toggleFAQ(index)} style={{ cursor: "pointer" }}>
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
    </>
  );
};

export default FaqHomeTwo;