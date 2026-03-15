
"use client";

import { useState } from "react";
import Link from "next/link";

const faqData = [
  { question: "What services does TechIn offer?", answer: "Our consulting process typically starts with an initial consultation to understand your business needs and challenges. We then conduct a thorough analysis, develop a tailored strategy, and work closely with you to implement the solutions. We provide continuous support and monitor progress to ensure long-term success." },
  { question: "How does the consulting process work?", answer: "Our consulting process typically starts with an initial consultation to understand your business needs and challenges. We then conduct a thorough analysis, develop a tailored strategy, and work closely with you to implement the solutions. We provide continuous support and monitor progress to ensure long-term success." },
  { question: "How can I get started with TechIn?", answer: "Our consulting process typically starts with an initial consultation to understand your business needs and challenges. We then conduct a thorough analysis, develop a tailored strategy, and work closely with you to implement the solutions. We provide continuous support and monitor progress to ensure long-term success." },
  { question: "Do you offer virtual consulting services?", answer: "Our consulting process typically starts with an initial consultation to understand your business needs and challenges. We then conduct a thorough analysis, develop a tailored strategy, and work closely with you to implement the solutions. We provide continuous support and monitor progress to ensure long-term success." },
  { question: "Do you offer ongoing support after the initial consulting project?", answer: "Our consulting process typically starts with an initial consultation to understand your business needs and challenges. We then conduct a thorough analysis, develop a tailored strategy, and work closely with you to implement the solutions. We provide continuous support and monitor progress to ensure long-term success." },
  { question: "How do you ensure the security of my business data?", answer: "Our consulting process typically starts with an initial consultation to understand your business needs and challenges. We then conduct a thorough analysis, develop a tailored strategy, and work closely with you to implement the solutions. We provide continuous support and monitor progress to ensure long-term success." },
  { question: "How does TechIn handle IT infrastructure design?", answer: "Our consulting process typically starts with an initial consultation to understand your business needs and challenges. We then conduct a thorough analysis, develop a tailored strategy, and work closely with you to implement the solutions. We provide continuous support and monitor progress to ensure long-term success." },
  { question: "What is a disaster recovery plan, and do I need one?", answer: "Our consulting process typically starts with an initial consultation to understand your business needs and challenges. We then conduct a thorough analysis, develop a tailored strategy, and work closely with you to implement the solutions. We provide continuous support and monitor progress to ensure long-term success." },
  { question: "What size businesses do you work with?", answer: "Our consulting process typically starts with an initial consultation to understand your business needs and challenges. We then conduct a thorough analysis, develop a tailored strategy, and work closely with you to implement the solutions. We provide continuous support and monitor progress to ensure long-term success." },
  { question: "How long does it take to implement a new IT solution?", answer: "Our consulting process typically starts with an initial consultation to understand your business needs and challenges. We then conduct a thorough analysis, develop a tailored strategy, and work closely with you to implement the solutions. We provide continuous support and monitor progress to ensure long-term success." },
];

const FaqArea = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="techin-section-padding2">
      <div className="container">
        <div className="techin-section-title center">
          <div className="techin-title-tag center2">
            <span><img src="/assets/images/v1/shape1.svg" alt="" /></span>
            <h6>faqS</h6>
            <span><img src="/assets/images/v1/shape1.svg" alt="" /></span>
          </div>
          <h2>Frequently Asked Any Questions</h2>
        </div>

        <div className="techin-faq-wrap1">
          {faqData.map((item, index) => (
            <div
              className={`techin-faq-item ${openIndex === index ? "open" : ""}`}
              key={index}
            >
              <div className="techin-faq-header headr-2" onClick={() => toggleFaq(index)} style={{ cursor: "pointer" }}>
                <h6>{item.question}</h6>
                <div className="techin-active-icon">
                  <img src="/assets/images/v1/top-arrow.svg" alt="" />
                </div>
              </div>
              {openIndex === index && (
                <div className="techin-faq-body body3 light-bg1">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

          <div className="techin-pagination center">
            <Link className="pagi-btn" href="/faq">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.601562 7.64062L6.85156 1.39062C7.32031 0.882812 8.14062 0.882812 8.60938 1.39062C9.11719 1.85938 9.11719 2.67969 8.60938 3.14844L4.50781 7.25H16.5C17.1641 7.25 17.75 7.83594 17.75 8.5C17.75 9.20312 17.1641 9.75 16.5 9.75H4.50781L8.60938 13.8906C9.11719 14.3594 9.11719 15.1797 8.60938 15.6484C8.14062 16.1562 7.32031 16.1562 6.85156 15.6484L0.601562 9.39844C0.09375 8.92969 0.09375 8.10938 0.601562 7.64062Z" fill="#2F2BEB" />
              </svg>
            </Link>
            <ul>
              <li><a className="current" href="#">1</a></li>
              <li><Link href="/faq">2</Link></li>
              <li><Link href="/faq">3</Link></li>
              <li><Link href="/faq">4</Link></li>
            </ul>
            <Link className="pagi-btn" href="/faq">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3984 7.64062L11.1484 1.39062C10.6797 0.882812 9.85938 0.882812 9.39062 1.39062C8.88281 1.85938 8.88281 2.67969 9.39062 3.14844L13.4922 7.25H1.5C0.835938 7.25 0.25 7.83594 0.25 8.5C0.25 9.20312 0.835938 9.75 1.5 9.75H13.4922L9.39062 13.8906C8.88281 14.3594 8.88281 15.1797 9.39062 15.6484C9.85938 16.1562 10.6797 16.1562 11.1484 15.6484L17.3984 9.39844C17.9062 8.92969 17.9062 8.10938 17.3984 7.64062Z" fill="#2F2BEB" />
              </svg>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default FaqArea;
