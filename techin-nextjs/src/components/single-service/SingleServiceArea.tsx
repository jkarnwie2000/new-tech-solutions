"use client";
import Link from "next/link";


const SingleServiceArea = () => {
  return (
    <>
      <section className="techin-section-padding6">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="techin-service-d-wrap">
                <div className="techin-service-d-thumb">
                  <img src="assets/images/service/img1.png" alt="" />
                </div>
                <div className="techin-service-d-title">
                  <h3>Cloud Solution</h3>
                  <img src="assets/images/service/Line.svg" alt="" />
                </div>
                <div className="techin-service-d-data">
                  <p>Unlock the full potential of the cloud with our customized Cloud Solutions. At TechIn, we offer end-to-end cloud services that are tailored to fit your business needs, providing flexibility, scalability, and security for your digital infrastructure.</p>
                  <p>We understand that each business is unique, so we offer tailored that meet your specific requirements. With cloud services, you only pay for what you use, reducing hardware and maintenance costs.</p>
                </div>
                <div className="techin-service-d-sub-title">
                  <h4>Key Features:</h4>
                  <p>Our cloud specialists have years of experience in designing, implementing, and managing cloud solutions across multiple industries. Our team is available around the clock to monitor and manage your cloud systems, ensuring optimal performance and uptime.</p>
                </div>
                <div className="techin-service-d-list-wraper">
                  <div className="techin-service-d-list-wrap">
                    <div className="techin-service-d-list-item">
                      <Link href="/service">
                        <img src="assets/images/service/icon1.svg" alt="" />
                        Cloud Migration
                      </Link>
                    </div>
                    <div className="techin-service-d-list-item">
                      <Link href="/service">
                        <img src="assets/images/service/icon1.svg" alt="" />
                        Cloud Management
                      </Link>
                    </div>
                    <div className="techin-service-d-list-item">
                      <Link href="/service">
                        <img src="assets/images/service/icon1.svg" alt="" />
                        Hybrid Cloud Solutions
                      </Link>
                    </div>
                    <div className="techin-service-d-list-item">
                      <Link href="/service">
                        <img src="assets/images/service/icon1.svg" alt="" />
                        Cloud Backup & Disaster Recovery
                      </Link>
                    </div>
                  </div>
                  <div className="techin-service-d-list-wrap">
                    <div className="techin-service-d-list-item">
                      <Link href="/service">
                        <img src="assets/images/service/icon1.svg" alt="" />
                        Cloud Security
                      </Link>
                    </div>
                    <div className="techin-service-d-list-item">
                      <Link href="/service">
                        <img src="assets/images/service/icon1.svg" alt="" />
                        Scalable Infrastructure
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="techin-service-d-thumb2">
                      <Link href="/single-service"><img src="assets/images/service/img2.png" alt="" /></Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="techin-service-d-thumb2 pb-0">
                      <Link href="/single-service"><img src="assets/images/service/img3.png" alt="" /></Link>
                    </div>
                  </div>
                </div>
                <div className="techin-service-d-sub-title">
                  <h4>Why Choose TechIn’s Cloud Solutions?</h4>
                  <p>This detailed description will give potential clients a clear understanding of the value and benefits of your Cloud Solutions service.</p>
                </div>
                <div className="techin-service-d-list-wraper pb-0">
                  <div className="techin-service-d-list-wrap">
                    <div className="techin-service-d-list-item">
                      <Link href="/service">
                        <img src="assets/images/service/icon1.svg" alt="" />
                        Customized for Your Business
                      </Link>
                    </div>
                    <div className="techin-service-d-list-item">
                      <Link href="/service">
                        <img src="assets/images/service/icon1.svg" alt="" />
                        Cost-Effective
                      </Link>
                    </div>
                  </div>
                  <div className="techin-service-d-list-wrap">
                    <div className="techin-service-d-list-item">
                      <Link href="/service">
                        <img src="assets/images/service/icon1.svg" alt="" />
                        Proven Expertise
                      </Link>
                    </div>
                    <div className="techin-service-d-list-item">
                      <Link href="/service">
                        <img src="assets/images/service/icon1.svg" alt="" />
                        24/7 Support
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar-area pl-25">
                <div className="widget widget2 widget_categories widget-categories">
                  <h4 className="widget_title">Our Services</h4>
                  <img src="assets/images/blog/line1.svg" alt="" />
                  <ul>
                    <li>
                      <Link href="/single-blog">
                        IT Management
                        <div className="techin-blog-meta-btn">
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.3594 9.39844L11.1094 15.6484C10.6406 16.1562 9.82031 16.1562 9.35156 15.6484C8.84375 15.1797 8.84375 14.3594 9.35156 13.8906L13.4531 9.75L1.5 9.75C0.796875 9.75 0.25 9.20312 0.25 8.5C0.25 7.83594 0.796875 7.25 1.5 7.25L13.4531 7.25L9.35156 3.14844C8.84375 2.67969 8.84375 1.85937 9.35156 1.39062C9.82031 0.882812 10.6406 0.882812 11.1094 1.39062L17.3594 7.64062C17.8672 8.10937 17.8672 8.92969 17.3594 9.39844Z" fill="#fff" />
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/single-blog">
                        Cloud Solutions
                        <div className="techin-blog-meta-btn">
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.3594 9.39844L11.1094 15.6484C10.6406 16.1562 9.82031 16.1562 9.35156 15.6484C8.84375 15.1797 8.84375 14.3594 9.35156 13.8906L13.4531 9.75L1.5 9.75C0.796875 9.75 0.25 9.20312 0.25 8.5C0.25 7.83594 0.796875 7.25 1.5 7.25L13.4531 7.25L9.35156 3.14844C8.84375 2.67969 8.84375 1.85937 9.35156 1.39062C9.82031 0.882812 10.6406 0.882812 11.1094 1.39062L17.3594 7.64062C17.8672 8.10937 17.8672 8.92969 17.3594 9.39844Z" fill="#fff" />
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/single-blog">
                        Cybersecurity
                        <div className="techin-blog-meta-btn">
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.3594 9.39844L11.1094 15.6484C10.6406 16.1562 9.82031 16.1562 9.35156 15.6484C8.84375 15.1797 8.84375 14.3594 9.35156 13.8906L13.4531 9.75L1.5 9.75C0.796875 9.75 0.25 9.20312 0.25 8.5C0.25 7.83594 0.796875 7.25 1.5 7.25L13.4531 7.25L9.35156 3.14844C8.84375 2.67969 8.84375 1.85937 9.35156 1.39062C9.82031 0.882812 10.6406 0.882812 11.1094 1.39062L17.3594 7.64062C17.8672 8.10937 17.8672 8.92969 17.3594 9.39844Z" fill="#fff" />
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/single-blog">
                        IT Consulting & Strategy
                        <div className="techin-blog-meta-btn">
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.3594 9.39844L11.1094 15.6484C10.6406 16.1562 9.82031 16.1562 9.35156 15.6484C8.84375 15.1797 8.84375 14.3594 9.35156 13.8906L13.4531 9.75L1.5 9.75C0.796875 9.75 0.25 9.20312 0.25 8.5C0.25 7.83594 0.796875 7.25 1.5 7.25L13.4531 7.25L9.35156 3.14844C8.84375 2.67969 8.84375 1.85937 9.35156 1.39062C9.82031 0.882812 10.6406 0.882812 11.1094 1.39062L17.3594 7.64062C17.8672 8.10937 17.8672 8.92969 17.3594 9.39844Z" fill="#fff" />
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/single-blog">
                        Data Backup & Recovery
                        <div className="techin-blog-meta-btn">
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.3594 9.39844L11.1094 15.6484C10.6406 16.1562 9.82031 16.1562 9.35156 15.6484C8.84375 15.1797 8.84375 14.3594 9.35156 13.8906L13.4531 9.75L1.5 9.75C0.796875 9.75 0.25 9.20312 0.25 8.5C0.25 7.83594 0.796875 7.25 1.5 7.25L13.4531 7.25L9.35156 3.14844C8.84375 2.67969 8.84375 1.85937 9.35156 1.39062C9.82031 0.882812 10.6406 0.882812 11.1094 1.39062L17.3594 7.64062C17.8672 8.10937 17.8672 8.92969 17.3594 9.39844Z" fill="#fff" />
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/single-blog">
                        Software Development
                        <div className="techin-blog-meta-btn">
                          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.3594 9.39844L11.1094 15.6484C10.6406 16.1562 9.82031 16.1562 9.35156 15.6484C8.84375 15.1797 8.84375 14.3594 9.35156 13.8906L13.4531 9.75L1.5 9.75C0.796875 9.75 0.25 9.20312 0.25 8.5C0.25 7.83594 0.796875 7.25 1.5 7.25L13.4531 7.25L9.35156 3.14844C8.84375 2.67969 8.84375 1.85937 9.35156 1.39062C9.82031 0.882812 10.6406 0.882812 11.1094 1.39062L17.3594 7.64062C17.8672 8.10937 17.8672 8.92969 17.3594 9.39844Z" fill="#fff" />
                          </svg>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_tag_cloud blog-update">
                  <h4>Get Updates</h4>
                  <img src="assets/images/blog/line2.svg" alt="" />
                  <div className="update-content">
                    <p>Subscribe email and get recent news and updates or offers.</p>
                  </div>
                  <form className="input-form" onSubmit={e => e.preventDefault()}>
                    <input type="email" placeholder="Email address..." />
                    <button type="submit">Search</button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default SingleServiceArea;