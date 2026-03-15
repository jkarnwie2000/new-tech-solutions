"use client";

import NiceSelect from "@/ui/NiceSelect";

const ContactHomeOne = () => {
	
    const selectHandler = () => {
    console.log("selected");
  };

  return (
    <>
      <section className="techin-section-padding6 bg-light3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center order-lg-2">
              <div className="techin-appointment-content">
                <div className="techin-title-tag">
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                  <h6>Contact Us</h6>
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                </div>
                <h2 className="appointment-title">To Make Request For Contact Us</h2>
                <p className="text">At Techin, we are dedicated to delivering innovative IT solutions and services that empower businesses to thrive in the digital age. </p>
                <div className="techin-about-info-wrap techin-appointment-info">
                  <div className="techin-about-info-icon">
                    <a href="tel:009">
                      <img src="assets/images/v1/phone.svg" alt="" />
                    </a>
                  </div>
                  <div className="techin-about-info-text">
                    <a href="tel:009">Call Us Any Time</a>
                    <a href="tel:009">
                      <h5>+(009) 1888 000 2222</h5>
                    </a>
                  </div>
                </div>
                <div className="techin-about-info-wrap techin-appointment-info">
                  <div className="techin-about-info-icon">
                    <a href="mailto:name@gmail.com"><img src="assets/images/v1/6.svg" alt="" /></a>
                  </div>
                  <div className="techin-about-info-text">
                    <a href="mailto:name@gmail.com">Email Address</a>
                    <a href="mailto:name@gmail.com">
                      <h5>info@techin.com</h5>
                    </a>
                  </div>
                </div>
                <div className="techin-about-info-wrap techin-appointment-info">
                  <div className="techin-about-info-icon">
                    <img src="assets/images/v1/7.svg" alt="" />
                  </div>
                  <div className="techin-about-info-text">
                    <a href="#">Office Address</a>
                    <a href="#">
                      <h5>12th Street, New York, USA</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="techin-appointment-box">
                <div className="techin-appointment-title">
                  <div className="techin-title-tag center2">
                    <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                    <h6>Appointment</h6>
                    <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                  </div>
                  <h3>Make An Appointment</h3>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="techin-main-field">
                    <input type="text" placeholder="Full Name" />
                    <img src="assets/images/v1/a1.svg" alt="" />
                  </div>
                  <div className="techin-main-field">
                    <input type="email" placeholder="Email Address" />
                    <img src="assets/images/v1/a2.svg" alt="" />
                  </div>
                  <div className="teching-slect-wrapper"> 
                    <NiceSelect
										className="techin-a-select d-flex align-items-center"
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
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="techin-main-field field5 mb-20">
                        <input type="date" id="birthday" name="birthday" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="techin-main-field field5 mb-20">
                        <input type="time" id="appt" name="appt" />
                      </div>
                    </div>
                  </div>
                  <div className="techin-main-field-textarea">
                    <textarea className="button-text" name="textarea" placeholder="Message"></textarea>
                  </div>
                  <div className="techin-appointment-submit-btn mt-30">
                    <button id="techin-submit-btn" type="button" data-text="Submite now">
                      <span className="button-wraper">Submite now</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHomeOne;