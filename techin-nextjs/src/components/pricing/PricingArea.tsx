"use client";
import Link from "next/link";
import { useState } from "react";


const PricingArea = () => {

  const [isMonthly, setIsMonthly] = useState(false)
  // const handleToggle = (e: any) => {
  //   setIsMonthly(e.target.checked)
  // }

   const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
  setIsMonthly(e.target.checked)
}



  return (
    <>
      <section className="techin-section-padding2">
        <div className="container">
          <div className="techin-section-title">
            <div className="row">
              <div className="col-xl-6 col-lg-8">
                <div className="techin-title-tag">
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                  <h6>Our Price</h6>
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                </div>
                <h2>Choose Our Awesome Pricing Plan</h2>
              </div>
              <div className="col-xl-6 col-lg-4 d-flex justify-content-end align-items-center">
                <div className="techin-title-btn2">
                  <label htmlFor="toggle" className="toggle-switch switch2">
                    <input
                      onChange={handleToggle}
                      checked={isMonthly}
                      className="toggle-button" id="toggle" type="checkbox" name="toggle" data-checked="coreAnnuallyPrice,coreAnnuallyText" data-not-checked="coreMonthlyPrice,coreMonthlyText" />
                    <span>Monthly</span>
                    <span>Yearly</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="techin-pricing-wrap wrap2">
                <div className="techin-pricing-header">
                  <h4>Basic Plan</h4>
                  <p>Get 20 % Save for Services</p>
                </div>
                {isMonthly ? (
                  <div className="techin-pricing-price proMonthlyPrice">
                    <h5>$89</h5>
                    <span>Per Year</span>
                  </div>
                ) : (
                  <div className="techin-pricing-price proAnnuallyPrice">
                    <h5>$49</h5>
                    <span>Per Month</span>
                  </div>
                )}
                <div className="techin-pricing-body body2">
                  <ul>
                    <li>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z" fill="#2BC8EB" />
                      </svg>
                      Ad Management
                    </li>
                    <li>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z" fill="#2BC8EB" />
                      </svg>
                      Live Chat
                    </li>
                    <li>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z" fill="#2BC8EB" />
                      </svg>
                      Multi-Language Content
                    </li>
                    <li>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z" fill="#2BC8EB" />
                      </svg>
                      Conversational Bots
                    </li>
                    <li>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z" fill="#2BC8EB" />
                      </svg>
                      Programmable Chatbots
                    </li>
                  </ul>
                  <div className="techin-pricing-shape shape-show">
                    <img src="assets/images/v1/shape-show.png" alt="" />
                  </div>
                  <div className="techin-pricing-shape shape-hide">
                    <img src="assets/images/v1/shape-hide.png" alt="" />
                  </div>
                </div>
                <div className="techin-pricing-footer">
                  <Link className="techin-default-btn btn3" data-text="Choose Plan" href="/contact-us">
                    <span className="button-wraper">Choose Plan</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="techin-pricing-wrap wrap2 pricing-active">
                <div className="techin-pricing-header">
                  <h4>Stander Plan</h4>
                  <p>Get 20 % Save for Services</p>
                </div>
                {isMonthly ? (
                  <div className="techin-pricing-price proMonthlyPrice">
                    <h5>$149</h5>
                    <span>Per Year</span>
                  </div>
                ) : (
                  <div className="techin-pricing-price proAnnuallyPrice">
                    <h5>$79</h5>
                    <span>Per Month</span>
                  </div>
                )}
                <div className="techin-pricing-body body2">
                  <ul>
                    <li>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z" fill="#2BC8EB" />
                      </svg>
                      Ad Management
                    </li>
                    <li>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z" fill="#2BC8EB" />
                      </svg>
                      Live Chat
                    </li>
                    <li>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z" fill="#2BC8EB" />
                      </svg>
                      Multi-Language Content
                    </li>
                    <li>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z" fill="#2BC8EB" />
                      </svg>
                      Conversational Bots
                    </li>
                    <li>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z" fill="#2BC8EB" />
                      </svg>
                      Programmable Chatbots
                    </li>
                  </ul>
                  <div className="techin-pricing-shape shape-show">
                    <img src="assets/images/v1/shape-show.png" alt="" />
                  </div>
                  <div className="techin-pricing-shape shape-hide">
                    <img src="assets/images/v1/shape-hide.png" alt="" />
                  </div>
                </div>
                <div className="techin-pricing-footer">
                  <Link className="techin-default-btn btn3" data-text="Choose Plan" href="/contact-us">
                    <span className="button-wraper">Choose Plan</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="techin-pricing-wrap wrap2 mb-0">
                <div className="techin-pricing-header">
                  <h4>Premium Plan</h4>
                  <p>Get 20 % Save for Services</p>
                </div>
                {isMonthly ? (
                  <div className="techin-pricing-price proMonthlyPrice">
                    <h5>$199</h5>
                    <span>Per Year</span>
                  </div>
                ) : (
                  <div className="techin-pricing-price proAnnuallyPrice">
                    <h5>$99</h5>
                    <span>Per Month</span>
                  </div>
                )}
                <div className="techin-pricing-body body2">
                  <ul>
                    <li>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z" fill="#2BC8EB" />
                      </svg>
                      Ad Management
                    </li>
                    <li>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z" fill="#2BC8EB" />
                      </svg>
                      Live Chat
                    </li>
                    <li>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z" fill="#2BC8EB" />
                      </svg>
                      Multi-Language Content
                    </li>
                    <li>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z" fill="#2BC8EB" />
                      </svg>
                      Conversational Bots
                    </li>
                    <li>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14.75C5.48438 14.75 3.1875 13.4375 1.92969 11.25C0.671875 9.08984 0.671875 6.4375 1.92969 4.25C3.1875 2.08984 5.48438 0.75 8 0.75C10.4883 0.75 12.7852 2.08984 14.043 4.25C15.3008 6.4375 15.3008 9.08984 14.043 11.25C12.7852 13.4375 10.4883 14.75 8 14.75ZM11.0898 6.46484H11.0625C11.3359 6.21875 11.3359 5.80859 11.0625 5.53516C10.8164 5.28906 10.4062 5.28906 10.1602 5.53516L7.125 8.59766L5.83984 7.3125C5.56641 7.03906 5.15625 7.03906 4.91016 7.3125C4.63672 7.55859 4.63672 7.96875 4.91016 8.21484L6.66016 9.96484C6.90625 10.2383 7.31641 10.2383 7.58984 9.96484L11.0898 6.46484Z" fill="#2BC8EB" />
                      </svg>
                      Programmable Chatbots
                    </li>
                  </ul>
                  <div className="techin-pricing-shape shape-show">
                    <img src="assets/images/v1/shape-show.png" alt="" />
                  </div>
                  <div className="techin-pricing-shape shape-hide">
                    <img src="assets/images/v1/shape-hide.png" alt="" />
                  </div>
                </div>
                <div className="techin-pricing-footer">
                  <Link className="techin-default-btn btn3" data-text="Choose Plan" href="/contact-us">
                    <span className="button-wraper">Choose Plan</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingArea;