"use client";

import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";

const HeroHomeThree = () => {

    const selectHandler = () => {
    console.log("selected");
  };


  return (
    <>
      <div className="techin-hero-section-three" style={{ backgroundImage: 'url(/assets/images/hero/hero3.png)' }}>
        <div className="container">
          <div className="techin-hero-content3">
            <div className="techin-hero-tag tag3">
              <img src="assets/images/hero/shape1.svg" alt="" />
              Get Best IT Solution Business
            </div>
            <h1>Empowering Digital Transformation</h1>
            <p>At TechIn, we deliver innovative and reliable IT solutions tailored to meet your unique business needs.</p>
            <Link className="techin-default-btn" data-text="Get Start Now" href="/contact-us">
              <span className="button-wraper">Get Start Now</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="techin-appointment-box-bg">
          <div className="techin-appointment-box3">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-xl-4 col-md-6">
                  <div className="techin-main-field field3">
                    <input type="text" placeholder="Your Name" />
                    <img src="assets/images/v1/a1.svg" alt="" />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="techin-main-field field3 ">
                    <input type="email" placeholder="Enter Email" />
                    <img src="assets/images/v1/a2.svg" alt="" />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="teching-slect-wrapper "> 
                    <NiceSelect
                      className="techin-a-select wrapper2 mt-0 d-flex align-items-center"
                      options={[
                        { value: "00", text: "Only Option" },
                        { value: "01", text: "Some option" },
                        { value: "02", text: "Another option" },
                        { value: "04", text: "Potato" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      placeholder="Select an option"
                      name="myNiceSelect"
                    />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="techin-main-field field3 field5 mb-20">
                    <input type="date" id="birthday" name="birthday" />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="techin-main-field field3 field5 mb-20">
                    <input type="time" id="appt" name="appt" />
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <button id="techin-submit-btn" className="btn2" type="submit" data-text="Make An Appointment">
                    <span className="button-wraper">Make An Appointment</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroHomeThree;