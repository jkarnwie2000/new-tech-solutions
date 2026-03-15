import Link from "next/link";


const CtaHomeThree = () => {
  return (
    <>
      <div className="techin-cta-section2" style={{ backgroundImage: `url(/assets/images/cta/cta-bg1.png)` }}>
        <div className="container">
          <div className="techin-cta-wrap">
            <div className="row">
              <div className="col-xl-8 col-lg-8">
                <div className="techin-cta-content">
                  <div className="techin-cta-content-top">
                    <img src="assets/images/shape/cta-shape1.svg" alt="" />
                    <h6>Knock Us To Know 24/7</h6>
                    <img src="assets/images/shape/cta-shape1.svg" alt="" />
                  </div>
                  <div className="techin-cta-content-bottom">
                    <h2>Need A Consultation?</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 d-flex align-items-center justify-content-end">
                <div className="techin-title-btn">
                  <Link className="techin-default-btn pill techin-cta-btn" href="/contact-us" data-text="Get A Quote">
                    <span className="button-wraper">Get A Quote</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaHomeThree;