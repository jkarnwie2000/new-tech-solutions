"use client";

import NiceSelect from "@/ui/NiceSelect";

const ContactusArea = () => {
  
    const selectHandler = () => {
    console.log("selected");
  };

  return (
    <>
      <div className="techin-section-padding6">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 order-lg-2 d-flex align-items-center">
              <div className="techin-contact-us-thumb">
                <img src="assets/images/portfolio/img8.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="techin-default-content pr-50">
                <div className="techin-title-tag">
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                  <h6>Contact Us</h6>
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                </div>
                <h2>TechIn Contact Information Here</h2>
                <div className="techin-appointment-box box-3 light-bg1">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="techin-main-field field4">
                          <input type="text" placeholder="First Name" />
                          <img src="assets/images/v1/a1.svg" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="techin-main-field field4">
                          <input type="text" placeholder="Last Name" />
                          <img src="assets/images/v1/a1.svg" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="techin-main-field field4">
                          <input type="email" placeholder="Email Address" />
                          <img src="assets/images/v1/a2.svg" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="teching-slect-wrapper"> 
                          <NiceSelect
                            className="techin-a-select wrapper4 d-flex align-items-center"
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
                      <div className="col-lg-12"></div>
                    </div>
                    <div className="techin-main-field-textarea textarea2">
                      <textarea className="button-text2" name="textarea" placeholder="Message Here..."></textarea>
                    </div>
                    <div className="techin-appointment-submit-btn mt-30">
                      <button className="techin-default-btn" type="button" data-text="Send Message">
                        <span className="button-wraper">Send Message</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactusArea;