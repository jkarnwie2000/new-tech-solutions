import Link from "next/link";



const ProjectHomeThree = () => {
  return (
    <>
      <div className="techin-section-padding2">
        <div className="container">
          <div className="techin-section-title center">
            <div className="techin-title-tag center2">
              <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
              <h6>Latest Projects</h6>
              <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
            </div>
            <h2>Our Successful Project and Case Study</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="techin-p-item">
                <div className="techin-p-thumb">
                  <img src="assets/images/v1/img77.png" alt="" />
                </div>
                <div className="techin-p-content">
                  <p>CloudStream Integration</p>
                  <h6>IT Cloud Migration for Media Company</h6>
                  <div className="btn-icon">
                    <Link href="/single-portfolio"><img src="assets/images/v1/r-arrow.svg" alt="" /></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="techin-p-item">
                <div className="techin-p-thumb">
                  <img src="assets/images/v1/img6.png" alt="" />
                </div>
                <div className="techin-p-content">
                  <p>Cybersecurity</p>
                  <h6>Advanced Cybersecurity for a Financial Services Firm.</h6>
                  <div className="btn-icon">
                    <Link href="/single-portfolio"><img src="assets/images/v1/r-arrow.svg" alt="" /></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="techin-p-item">
                <div className="techin-p-thumb">
                  <img src="assets/images/v1/img5.png" alt="" />
                </div>
                <div className="techin-p-content">
                  <p>SecureNet Shield</p>
                  <h6>Network Security Overhaul for Financial Institution</h6>
                  <div className="btn-icon">
                    <Link href="/single-portfolio"><img src="assets/images/v1/r-arrow.svg" alt="" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHomeThree;