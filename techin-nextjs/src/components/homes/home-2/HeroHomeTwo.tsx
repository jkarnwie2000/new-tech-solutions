import Link from "next/link";

const HeroHomeTwo = () => {
  return (
    <>
      <div className="techin-hero-section" style={{ backgroundImage: 'url(/assets/images/hero/hero-bg2.png)' }}>
        <div className="container">
          <div className="techin-hero-content2">
            <div className="techin-hero-tag tag2">
              <img src="assets/images/hero/shape2.svg" alt="" />
              Get Best IT Solution Business
              <img src="assets/images/hero/shape2.svg" alt="" />
            </div>
            <h1>Innovative IT Solutions for You</h1>
          </div>
          <div className="techin-hero-thumb thumb2" data-aos="fade-up" data-aos-duration="700">
            <img src="assets/images/hero/hero-thumb2.png" alt="" />
            <Link className="techin-popup-video2" href="/contact-us">
              <img className="teching-rotated" src="assets/images/hero/Circle-Button.svg" alt="" />
              <div className="play-btn">
                <img src="assets/images/hero/btn.svg" alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroHomeTwo;