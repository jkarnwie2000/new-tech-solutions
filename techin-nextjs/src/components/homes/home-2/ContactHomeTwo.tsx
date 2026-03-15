"use client";
import VideoPopup from "@/modals/video-popup";
import NiceSelect from "@/ui/NiceSelect";
import { useState } from "react";


const ContactHomeTwo = () => {

   
  const [isVideoOpen, setIsVideoOpen] = useState(false);
    const selectHandler = () => {
    console.log("selected");
  };


  return (
    <>
      <section className="techin-apoontment-section" style={{ backgroundImage: `url(/assets/images/v2/a1.png)` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="techin-appointment-title2">
                <a className="techin-popup-video3 video-init"
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}>
                  <img src="assets/images/blog/play-btn.svg" alt="" />
                  <div className="waves waves3 wave-1"></div>
                  <div className="waves waves3 wave-2"></div>
                  <div className="waves waves3 wave-3"></div>
                </a>
                <div className="techin-title-tag tag2">
                  <span><img src="assets/images/v1/shape2.svg" alt="" /></span>
                  <h6>Play And Discover</h6>
                  <span><img src="assets/images/v1/shape2.svg" alt="" /></span>
                </div>
                <h2>We Are No.1 IT Solution Company In Earth</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="techin-appointment-box box-2">
                <div className="techin-appointment-title">
                  <div className="techin-title-tag center2">
                    <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                    <h6>Appointment</h6>
                    <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                  </div>
                  <h3>Make An Appointment</h3>
                </div>
                <form action="#">
                  <div className="techin-main-field field2">
                    <input type="text" placeholder="Full Name" />
                    <img src="assets/images/v1/a1.svg" alt="" />
                  </div>
                  <div className="techin-main-field field2">
                    <input type="email" placeholder="Email Address" />
                    <img src="assets/images/v1/a2.svg" alt="" />
                  </div>
                  <div className="teching-slect-wrapper">
                    <NiceSelect
                      className="techin-a-select wrapper2 d-flex align-items-center"
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
                      <div className="techin-main-field field2 mb-20">
                        <input type="date" id="birthday" name="birthday" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="techin-main-field field2 mb-20">
                        <input type="time" id="appt" name="appt" />
                      </div>
                    </div>
                  </div>
                  <div className="techin-main-field-textarea textarea2">
                    <textarea className="button-text" name="textarea" placeholder="Write Your Message"></textarea>
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

export default ContactHomeTwo;