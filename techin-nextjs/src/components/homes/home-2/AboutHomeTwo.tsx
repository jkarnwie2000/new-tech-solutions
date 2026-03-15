import Link from "next/link";



const AboutHomeTwo = () => {
  return (
    <>
      <section className="techin-section-padding12">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="techin-about-thumb thumb2 position-r">
                <img src="assets/images/v1/about-thumb1.png" alt="" />
                <div className="techin-about-thumb2 thumb2">
                  <img src="assets/images/v2/img1.png" alt="" />
                </div>
                <div className="techin-about-info-wrap wrap2">
                  <div className="techin-about-info-icon">
                    <a href="tel:009"><img src="assets/images/v2/Icon1.svg" alt="" /></a>
                  </div>
                  <div className="techin-about-info-text text2">
                    <a href="tel:009">Call Us Any Time</a>
                    <a href="tel:009"><span>+(009) 1888 000 2222</span></a>
                  </div>
                </div>
                <div className="techin-about-frame frame1">
                  <img src="assets/images/v2/Bg1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="techin-about-content">
                <div className="techin-title-tag">
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                  <h6>About Us</h6>
                  <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
                </div>
                <h2>Empowering Your Business With <span className="title">techin</span> IT Solutions</h2>
                <p>At Techin, we deliver innovative IT solutions that empower businesses in the digital age. Our experienced team provides customized strategies, robust support, and cutting-edge technology tailored to your needs, ensuring efficiency, security, and reliability.</p>
                <div className="techin-iconbox-wraper">
                  <div className="techin-iconbox-wrap">
                    <div className="techin-iconbox-icon">
                      <img src="assets/images/v1/icon1.svg" alt="" />
                    </div>
                    <div className="techin-iconbox-data">
                      <h5>Providing Skillful Services</h5>
                    </div>
                  </div>
                  <div className="techin-iconbox-wrap">
                    <div className="techin-iconbox-icon">
                      <img src="assets/images/v1/icon2.svg" alt="" />
                    </div>
                    <div className="techin-iconbox-data">
                      <h5>24/7 Support For Clients</h5>
                    </div>
                  </div>
                </div>
                <div className="techin-about-info-wraper">
                  <Link className="techin-default-btn" data-text="More Information" href="/about-us">
                    <span className="button-wraper">More Information</span>
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

export default AboutHomeTwo;