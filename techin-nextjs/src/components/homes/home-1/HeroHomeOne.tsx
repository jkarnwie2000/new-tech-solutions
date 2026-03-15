import Link from "next/link";


const HeroHomeOne = () => {
  return (
    <>
      <div className="techin-hero-section" style={{ backgroundImage: 'url(/assets/images/hero/bg1.png)' }}>
        <div className="container">
          <div className="row techin_screenfix_right2">
            <div className="col-lg-5">
              <div className="techin-hero-content">
                <div className="techin-hero-tag">
                  <img src="assets/images/hero/shape1.svg" alt="" />
                  Get Best IT Solution Business
                </div>
                <h1>Unlocking the Power of Technology</h1>
                <p>At techin, we deliver innovative and reliable IT solutions tailored to meet your unique business needs.</p>
                <div className="techin-extra-mt">
                  <Link className="techin-default-btn" href="/contact-us" data-text="Get Start Now">
                    <span className="button-wraper">Get Start Now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="techin-hero-thumb" data-aos="fade-left" data-aos-duration="700">
                <img src="assets/images/hero/1.png" alt="" />
              </div>
              <div className="techin-hero-thumb2">
                <img src="assets/images/hero/Img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroHomeOne;