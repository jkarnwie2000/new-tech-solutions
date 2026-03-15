
const GoogleMap = () => {
  return (
    <>
      <div className="responsive-map">
        <iframe className="techin-contact-us-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" width="600" height="450" allowFullScreen></iframe>
        <div className="container">
          <div className="techin-contact-us-info">
            <div className="techin-contact-us-title">
              <h3>Let’s Get In Touch!</h3>
              <img src="assets/images/portfolio/line.svg" alt="" />
            </div>
            <div className="techin-iconbox-contact-wrap">
              <div className="techin-iconbox-contact-icon">
                <img src="assets/images/portfolio/icon1.svg" alt="" />
              </div>
              <div className="techin-iconbox-contact-data">
                <h5>Office Time</h5>
                <p>Mon-Fri: 10:00Am-09:00Pm</p>
              </div>
            </div>
            <a href="tel:009">
              <div className="techin-iconbox-contact-wrap pb-30">
                <div className="techin-iconbox-contact-icon">
                  <img src="assets/images/portfolio/icon2.svg" alt="" />
                </div>
                <div className="techin-iconbox-contact-data">
                  <h5>Call Us Any Time</h5>
                  <p>+(009) 1888 000 2222</p>
                </div>
              </div>
            </a>
            <a href="mailto:name@gmail.com">
              <div className="techin-iconbox-contact-wrap pb-30">
                <div className="techin-iconbox-contact-icon">
                  <img src="assets/images/portfolio/icon3.svg" alt="" />
                </div>
                <div className="techin-iconbox-contact-data">
                  <h5>Email Address</h5>
                  <p>info@techin.com</p>
                </div>
              </div>
            </a>
            <div className="techin-iconbox-contact-wrap">
              <div className="techin-iconbox-contact-icon">
                <img src="assets/images/portfolio/icon4.svg" alt="" />
              </div>
              <div className="techin-iconbox-contact-data">
                <h5>Office Address</h5>
                <p>12th Street, New York, USA</p>
              </div>
            </div>
            <div className="shape-up">
              <img src="assets/images/portfolio/shape-up.svg" alt="" />
            </div>
            <div className="shape-down">
              <img src="assets/images/portfolio/shape-down.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default GoogleMap;