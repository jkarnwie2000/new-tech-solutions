import Link from "next/link";


const ServiceArea = () => {
  return (
    <>
      <div className="techin-section-padding2">
        <div className="container">
          <div className="techin-section-title center">
            <div className="techin-title-tag center2">
              <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
              <h6>Working Process</h6>
              <span><img src="assets/images/v1/shape1.svg" alt="" /></span>
            </div>
            <h2>Our Unique And Awesome Services</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="techin-service-wrap2 wrap3">
                <div className="techin-service-thumb">
                  <img src="assets/images/v2/s1.png" alt="" />
                  <div className="techin-service-icon2">
                    <img src="assets/images/v2/icon4.svg" alt="" />
                  </div>
                </div>
                <div className="techin-service-content2">
                  <h5>IT Management</h5>
                  <p>Comprehensive management of your IT infrastructure, network monitoring, security, minimal downtime.</p>
                  <Link className="techin-default-btn techin-service-btn" data-text="Read More" href="/about-us">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="techin-service-wrap2 wrap3">
                <div className="techin-service-thumb">
                  <img src="assets/images/v2/s2.png" alt="" />
                  <div className="techin-service-icon2">
                    <img src="assets/images/v2/icon5.svg" alt="" />
                  </div>
                </div>
                <div className="techin-service-content2">
                  <h5>Cloud Solutions</h5>
                  <p>Design, deployment, and management of cloud tailored to your business needs, scalability, flexibility, and cost-efficiency.</p>
                  <Link className="techin-default-btn techin-service-btn" data-text="Read More" href="/about-us">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="techin-service-wrap2 wrap3">
                <div className="techin-service-thumb">
                  <img src="assets/images/v2/s3.png" alt="" />
                  <div className="techin-service-icon2">
                    <img src="assets/images/v2/icon6.svg" alt="" />
                  </div>
                </div>
                <div className="techin-service-content2">
                  <h5>Cybersecurity</h5>
                  <p>Protection of your digital assets through security measures, encryption to safeguard against cyber threats.</p>
                  <Link className="techin-default-btn techin-service-btn" data-text="Read More" href="/about-us">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="techin-service-wrap2 wrap3">
                <div className="techin-service-thumb">
                  <img src="assets/images/about-us/img1.png" alt="" />
                  <div className="techin-service-icon2">
                    <img src="assets/images/about-us/icon1.svg" alt="" />
                  </div>
                </div>
                <div className="techin-service-content2">
                  <h5>IT Consulting & Strategy</h5>
                  <p>Expert IT consultation to develop tailored strategies for digital transformation, optimizing your technology for growth.</p>
                  <Link className="techin-default-btn techin-service-btn" data-text="Read More" href="/about-us">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="techin-service-wrap2 wrap3">
                <div className="techin-service-thumb">
                  <img src="assets/images/about-us/img2.png" alt="" />
                  <div className="techin-service-icon2">
                    <img src="assets/images/about-us/icon2.svg" alt="" />
                  </div>
                </div>
                <div className="techin-service-content2">
                  <h5>Data Backup & Recovery</h5>
                  <p>Reliable data backup and disaster recovery solutions to ensure business continuity in the face of unexpected events.</p>
                  <Link className="techin-default-btn techin-service-btn" data-text="Read More" href="/about-us">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="techin-service-wrap2 wrap3">
                <div className="techin-service-thumb">
                  <img src="assets/images/about-us/img3.png" alt="" />
                  <div className="techin-service-icon2">
                    <img src="assets/images/about-us/icon3.svg" alt="" />
                  </div>
                </div>
                <div className="techin-service-content2">
                  <h5>Software Development</h5>
                  <p>Custom software solutions designed to meet your unique business requirements, from development to deployment.</p>
                  <Link className="techin-default-btn techin-service-btn" data-text="Read More" href="/about-us">
                    <span className="button-wraper">Read More</span>
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

export default ServiceArea;