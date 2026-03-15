import Link from "next/link";



const PortfolioHomeTwo = () => {
  return (
    <>
      <div className="techin-section-padding9">
        <div className="container">
          <div className="techin-section-title center">
            <div className="techin-title-tag center2">
              <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
              <h6>Latest Projects</h6>
              <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
            </div>
            <h2>Our Successful Project and Case Study</h2>
          </div>
        </div>
        <div className="techin-p-column">
          <div className="techin-p-wrap">
            <div className="techin-p-thumb2">
              <img src="assets/images/v2/img6.png" alt="" />
              <div className="techin-p-content2">
                <p>CloudStream Integration</p>
                <h6>IT Cloud Migration for Media Company</h6>
                <div className="techin-p-btn2">
                  <Link href="/single-portfolio"><img src="assets/images/v2/icon7.svg" alt="" /></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="techin-p-wrap portfolio-last">
            <div className="techin-p-thumb2">
              <img src="assets/images/v2/img9.png" alt="" />
              <div className="techin-p-content2">
                <p>Cybersecurity</p>
                <h6>Advanced Cybersecurity for TechNova.</h6>
                <div className="techin-p-btn2">
                  <Link href="/single-portfolio"><img src="assets/images/v2/icon7.svg" alt="" /></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="techin-p-wrap">
            <div className="techin-p-thumb2">
              <img src="assets/images/v2/img7.png" alt="" />
              <div className="techin-p-content2">
                <p>SecureNet Shield</p>
                <h6>Network Security Overhaul for Financial Institution.</h6>
                <div className="techin-p-btn2">
                  <Link href="/single-portfolio"><img src="assets/images/v2/icon7.svg" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="techin-p-thumb2">
              <img src="assets/images/v2/img8.png" alt="" />
              <div className="techin-p-content2">
                <p>Cybersecurity</p>
                <h6>Smart Network Infrastructure Overhaul</h6>
                <div className="techin-p-btn2">
                  <Link href="/single-portfolio"><img src="assets/images/v2/icon7.svg" alt="" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="techin-p-btn">
          <Link className="techin-default-btn pill" data-text="View More Project" href="/single-portfolio">
            <span className="button-wraper">View More Project</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PortfolioHomeTwo;