"use client";
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";


const BlogGridArea = () => {
  
    const selectHandler = () => {
    console.log("selected");
  };


  return (
    <>
      <section className="techin-section-padding3">
        <div className="container">
          <div className="techin-blog-header">
            <a className="techin-showing-result" href="#">Showing 1 - 8 of 40 Result</a>
            <div className="teching-slect-wrapper"> 
              <NiceSelect
                className="d-flex align-items-center"
                options={[
                  { value: "00", text: "Nothing" },
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
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-wrapper">
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="/single-blog">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 8C5.5625 8 4.25 7.25 3.53125 6C2.8125 4.78125 2.8125 3.25 3.53125 2C4.25 0.78125 5.5625 0 7 0C8.40625 0 9.71875 0.78125 10.4375 2C11.1562 3.25 11.1562 4.78125 10.4375 6C9.71875 7.25 8.40625 8 7 8ZM5.5625 9.5H8.40625C11.5 9.5 14 12 14 15.0938C14 15.5938 13.5625 16 13.0625 16H0.90625C0.40625 16 0 15.5938 0 15.0938C0 12 2.46875 9.5 5.5625 9.5Z" fill="#222627" />
                      </svg>By Admin
                    </Link>
                    <Link href="/single-blog">
                      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 11C6.28125 11 5.1875 10.75 4.21875 10.2812C3.96875 10.4062 3.71875 10.5 3.4375 10.625C2.84375 10.8438 2.15625 11 1.5 11C1.28125 11 1.09375 10.875 1 10.6562C0.9375 10.4688 1.03125 10.25 1.1875 10.125V10.0938H1.21875C1.25 10.0625 1.3125 10 1.375 9.96875C1.46875 9.875 1.625 9.71875 1.78125 9.53125C1.9375 9.3125 2.125 9.03125 2.21875 8.75C1.4375 7.84375 1 6.71875 1 5.5C1 2.46875 3.90625 0 7.5 0C11.0625 0 14 2.46875 14 5.5C14 8.5625 11.0625 11 7.5 11ZM15 5.5H14.9688C14.9688 5.34375 14.9688 5.1875 14.9688 5.03125C18.3438 5.21875 20.9688 7.625 20.9688 10.5C20.9688 11.7188 20.5312 12.8438 19.75 13.75C19.8438 14.0312 20.0312 14.2812 20.1875 14.5C20.3438 14.7188 20.5 14.8438 20.5938 14.9688C20.6562 15 20.7188 15.0625 20.75 15.0625C20.75 15.0938 20.7812 15.0938 20.7812 15.0938C20.9688 15.25 21.0312 15.4688 20.9688 15.6562C20.9062 15.875 20.6875 16 20.5 16C19.8125 16 19.125 15.8438 18.5312 15.625C18.25 15.5 18 15.4062 17.75 15.2812C16.7812 15.75 15.6875 16 14.5 16C11.5 16 8.96875 14.3125 8.21875 11.9688C11.875 11.6562 15 9.03125 15 5.5Z" fill="#222627" />
                      </svg>(03) Comments
                    </Link>
                  </div>
                  <h5 className="blog-title"><Link href="/single-blog">How to Optimize Your IT Infrastructure for Maximum Efficiency</Link></h5>
                </div>
                <div className="blog-img">
                  <Link href="/single-blog"><img src="assets/images/blog/img1.png" alt="Blog Image" />
                    <div className="blog-date-wrap">
                      <div className="blog-year">
                        <span>2024</span>
                      </div>
                      <div className="blog-month">
                        <h4>12</h4>
                        <h6>Jun</h6>
                      </div>
                    </div>
                  </Link>
                  <Link className="techin-default-btn blog-btn1" href="/single-blog" data-text="Read More">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-wrapper">
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="/single-blog">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 8C5.5625 8 4.25 7.25 3.53125 6C2.8125 4.78125 2.8125 3.25 3.53125 2C4.25 0.78125 5.5625 0 7 0C8.40625 0 9.71875 0.78125 10.4375 2C11.1562 3.25 11.1562 4.78125 10.4375 6C9.71875 7.25 8.40625 8 7 8ZM5.5625 9.5H8.40625C11.5 9.5 14 12 14 15.0938C14 15.5938 13.5625 16 13.0625 16H0.90625C0.40625 16 0 15.5938 0 15.0938C0 12 2.46875 9.5 5.5625 9.5Z" fill="#222627" />
                      </svg>By Admin
                    </Link>
                    <Link href="/single-blog">
                      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 11C6.28125 11 5.1875 10.75 4.21875 10.2812C3.96875 10.4062 3.71875 10.5 3.4375 10.625C2.84375 10.8438 2.15625 11 1.5 11C1.28125 11 1.09375 10.875 1 10.6562C0.9375 10.4688 1.03125 10.25 1.1875 10.125V10.0938H1.21875C1.25 10.0625 1.3125 10 1.375 9.96875C1.46875 9.875 1.625 9.71875 1.78125 9.53125C1.9375 9.3125 2.125 9.03125 2.21875 8.75C1.4375 7.84375 1 6.71875 1 5.5C1 2.46875 3.90625 0 7.5 0C11.0625 0 14 2.46875 14 5.5C14 8.5625 11.0625 11 7.5 11ZM15 5.5H14.9688C14.9688 5.34375 14.9688 5.1875 14.9688 5.03125C18.3438 5.21875 20.9688 7.625 20.9688 10.5C20.9688 11.7188 20.5312 12.8438 19.75 13.75C19.8438 14.0312 20.0312 14.2812 20.1875 14.5C20.3438 14.7188 20.5 14.8438 20.5938 14.9688C20.6562 15 20.7188 15.0625 20.75 15.0625C20.75 15.0938 20.7812 15.0938 20.7812 15.0938C20.9688 15.25 21.0312 15.4688 20.9688 15.6562C20.9062 15.875 20.6875 16 20.5 16C19.8125 16 19.125 15.8438 18.5312 15.625C18.25 15.5 18 15.4062 17.75 15.2812C16.7812 15.75 15.6875 16 14.5 16C11.5 16 8.96875 14.3125 8.21875 11.9688C11.875 11.6562 15 9.03125 15 5.5Z" fill="#222627" />
                      </svg>(03) Comments
                    </Link>
                  </div>
                  <h5 className="blog-title"><Link href="/single-blog">How to Ensure Seamless IT Integration Across Departments</Link></h5>
                </div>
                <div className="blog-img">
                  <Link href="/single-blog"><img src="assets/images/blog/img3.png" alt="Blog Image" />
                    <div className="blog-date-wrap">
                      <div className="blog-year">
                        <span>2024</span>
                      </div>
                      <div className="blog-month">
                        <h4>12</h4>
                        <h6>Jun</h6>
                      </div>
                    </div>
                  </Link>
                  <Link className="techin-default-btn blog-btn1" href="/single-blog" data-text="Read More">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-wrapper">
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="/single-blog">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 8C5.5625 8 4.25 7.25 3.53125 6C2.8125 4.78125 2.8125 3.25 3.53125 2C4.25 0.78125 5.5625 0 7 0C8.40625 0 9.71875 0.78125 10.4375 2C11.1562 3.25 11.1562 4.78125 10.4375 6C9.71875 7.25 8.40625 8 7 8ZM5.5625 9.5H8.40625C11.5 9.5 14 12 14 15.0938C14 15.5938 13.5625 16 13.0625 16H0.90625C0.40625 16 0 15.5938 0 15.0938C0 12 2.46875 9.5 5.5625 9.5Z" fill="#222627" />
                      </svg>By Admin
                    </Link>
                    <Link href="/single-blog">
                      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 11C6.28125 11 5.1875 10.75 4.21875 10.2812C3.96875 10.4062 3.71875 10.5 3.4375 10.625C2.84375 10.8438 2.15625 11 1.5 11C1.28125 11 1.09375 10.875 1 10.6562C0.9375 10.4688 1.03125 10.25 1.1875 10.125V10.0938H1.21875C1.25 10.0625 1.3125 10 1.375 9.96875C1.46875 9.875 1.625 9.71875 1.78125 9.53125C1.9375 9.3125 2.125 9.03125 2.21875 8.75C1.4375 7.84375 1 6.71875 1 5.5C1 2.46875 3.90625 0 7.5 0C11.0625 0 14 2.46875 14 5.5C14 8.5625 11.0625 11 7.5 11ZM15 5.5H14.9688C14.9688 5.34375 14.9688 5.1875 14.9688 5.03125C18.3438 5.21875 20.9688 7.625 20.9688 10.5C20.9688 11.7188 20.5312 12.8438 19.75 13.75C19.8438 14.0312 20.0312 14.2812 20.1875 14.5C20.3438 14.7188 20.5 14.8438 20.5938 14.9688C20.6562 15 20.7188 15.0625 20.75 15.0625C20.75 15.0938 20.7812 15.0938 20.7812 15.0938C20.9688 15.25 21.0312 15.4688 20.9688 15.6562C20.9062 15.875 20.6875 16 20.5 16C19.8125 16 19.125 15.8438 18.5312 15.625C18.25 15.5 18 15.4062 17.75 15.2812C16.7812 15.75 15.6875 16 14.5 16C11.5 16 8.96875 14.3125 8.21875 11.9688C11.875 11.6562 15 9.03125 15 5.5Z" fill="#222627" />
                      </svg>(03) Comments
                    </Link>
                  </div>
                  <h5 className="blog-title"><Link href="/single-blog">How IT Infrastructure Can Improve Efficiency and Productivity</Link></h5>
                </div>
                <div className="blog-img">
                  <Link href="/single-blog"><img src="assets/images/blog/img2.png" alt="Blog Image" />
                    <div className="blog-date-wrap">
                      <div className="blog-year">
                        <span>2024</span>
                      </div>
                      <div className="blog-month">
                        <h4>12</h4>
                        <h6>Jun</h6>
                      </div>
                    </div>
                  </Link>
                  <Link className="techin-default-btn blog-btn1" href="/single-blog" data-text="Read More">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-wrapper">
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="/single-blog">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 8C5.5625 8 4.25 7.25 3.53125 6C2.8125 4.78125 2.8125 3.25 3.53125 2C4.25 0.78125 5.5625 0 7 0C8.40625 0 9.71875 0.78125 10.4375 2C11.1562 3.25 11.1562 4.78125 10.4375 6C9.71875 7.25 8.40625 8 7 8ZM5.5625 9.5H8.40625C11.5 9.5 14 12 14 15.0938C14 15.5938 13.5625 16 13.0625 16H0.90625C0.40625 16 0 15.5938 0 15.0938C0 12 2.46875 9.5 5.5625 9.5Z" fill="#222627" />
                      </svg>By Admin
                    </Link>
                    <Link href="/single-blog">
                      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 11C6.28125 11 5.1875 10.75 4.21875 10.2812C3.96875 10.4062 3.71875 10.5 3.4375 10.625C2.84375 10.8438 2.15625 11 1.5 11C1.28125 11 1.09375 10.875 1 10.6562C0.9375 10.4688 1.03125 10.25 1.1875 10.125V10.0938H1.21875C1.25 10.0625 1.3125 10 1.375 9.96875C1.46875 9.875 1.625 9.71875 1.78125 9.53125C1.9375 9.3125 2.125 9.03125 2.21875 8.75C1.4375 7.84375 1 6.71875 1 5.5C1 2.46875 3.90625 0 7.5 0C11.0625 0 14 2.46875 14 5.5C14 8.5625 11.0625 11 7.5 11ZM15 5.5H14.9688C14.9688 5.34375 14.9688 5.1875 14.9688 5.03125C18.3438 5.21875 20.9688 7.625 20.9688 10.5C20.9688 11.7188 20.5312 12.8438 19.75 13.75C19.8438 14.0312 20.0312 14.2812 20.1875 14.5C20.3438 14.7188 20.5 14.8438 20.5938 14.9688C20.6562 15 20.7188 15.0625 20.75 15.0625C20.75 15.0938 20.7812 15.0938 20.7812 15.0938C20.9688 15.25 21.0312 15.4688 20.9688 15.6562C20.9062 15.875 20.6875 16 20.5 16C19.8125 16 19.125 15.8438 18.5312 15.625C18.25 15.5 18 15.4062 17.75 15.2812C16.7812 15.75 15.6875 16 14.5 16C11.5 16 8.96875 14.3125 8.21875 11.9688C11.875 11.6562 15 9.03125 15 5.5Z" fill="#222627" />
                      </svg>(03) Comments
                    </Link>
                  </div>
                  <h5 className="blog-title"><Link href="/single-blog">How Cloud Computing is Transforming Business Operations</Link></h5>
                </div>
                <div className="blog-img">
                  <Link href="/single-blog"><img src="assets/images/blog/img4.png" alt="Blog Image" />
                    <div className="blog-date-wrap">
                      <div className="blog-year">
                        <span>2024</span>
                      </div>
                      <div className="blog-month">
                        <h4>12</h4>
                        <h6>Jun</h6>
                      </div>
                    </div>
                  </Link>
                  <Link className="techin-default-btn blog-btn1" href="/single-blog" data-text="Read More">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-wrapper">
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="/single-blog">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 8C5.5625 8 4.25 7.25 3.53125 6C2.8125 4.78125 2.8125 3.25 3.53125 2C4.25 0.78125 5.5625 0 7 0C8.40625 0 9.71875 0.78125 10.4375 2C11.1562 3.25 11.1562 4.78125 10.4375 6C9.71875 7.25 8.40625 8 7 8ZM5.5625 9.5H8.40625C11.5 9.5 14 12 14 15.0938C14 15.5938 13.5625 16 13.0625 16H0.90625C0.40625 16 0 15.5938 0 15.0938C0 12 2.46875 9.5 5.5625 9.5Z" fill="#222627" />
                      </svg>By Admin
                    </Link>
                    <Link href="/single-blog">
                      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 11C6.28125 11 5.1875 10.75 4.21875 10.2812C3.96875 10.4062 3.71875 10.5 3.4375 10.625C2.84375 10.8438 2.15625 11 1.5 11C1.28125 11 1.09375 10.875 1 10.6562C0.9375 10.4688 1.03125 10.25 1.1875 10.125V10.0938H1.21875C1.25 10.0625 1.3125 10 1.375 9.96875C1.46875 9.875 1.625 9.71875 1.78125 9.53125C1.9375 9.3125 2.125 9.03125 2.21875 8.75C1.4375 7.84375 1 6.71875 1 5.5C1 2.46875 3.90625 0 7.5 0C11.0625 0 14 2.46875 14 5.5C14 8.5625 11.0625 11 7.5 11ZM15 5.5H14.9688C14.9688 5.34375 14.9688 5.1875 14.9688 5.03125C18.3438 5.21875 20.9688 7.625 20.9688 10.5C20.9688 11.7188 20.5312 12.8438 19.75 13.75C19.8438 14.0312 20.0312 14.2812 20.1875 14.5C20.3438 14.7188 20.5 14.8438 20.5938 14.9688C20.6562 15 20.7188 15.0625 20.75 15.0625C20.75 15.0938 20.7812 15.0938 20.7812 15.0938C20.9688 15.25 21.0312 15.4688 20.9688 15.6562C20.9062 15.875 20.6875 16 20.5 16C19.8125 16 19.125 15.8438 18.5312 15.625C18.25 15.5 18 15.4062 17.75 15.2812C16.7812 15.75 15.6875 16 14.5 16C11.5 16 8.96875 14.3125 8.21875 11.9688C11.875 11.6562 15 9.03125 15 5.5Z" fill="#222627" />
                      </svg>(03) Comments
                    </Link>
                  </div>
                  <h5 className="blog-title"><Link href="/single-blog">Managed IT Services vs. In-House IT: What’s Best for Your Business?</Link></h5>
                </div>
                <div className="blog-img">
                  <Link href="/single-blog"><img src="assets/images/blog/img5.png" alt="Blog Image" />
                    <div className="blog-date-wrap">
                      <div className="blog-year">
                        <span>2024</span>
                      </div>
                      <div className="blog-month">
                        <h4>12</h4>
                        <h6>Jun</h6>
                      </div>
                    </div>
                  </Link>
                  <Link className="techin-default-btn blog-btn1" href="/single-blog" data-text="Read More">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-wrapper">
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="/single-blog">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 8C5.5625 8 4.25 7.25 3.53125 6C2.8125 4.78125 2.8125 3.25 3.53125 2C4.25 0.78125 5.5625 0 7 0C8.40625 0 9.71875 0.78125 10.4375 2C11.1562 3.25 11.1562 4.78125 10.4375 6C9.71875 7.25 8.40625 8 7 8ZM5.5625 9.5H8.40625C11.5 9.5 14 12 14 15.0938C14 15.5938 13.5625 16 13.0625 16H0.90625C0.40625 16 0 15.5938 0 15.0938C0 12 2.46875 9.5 5.5625 9.5Z" fill="#222627" />
                      </svg>By Admin
                    </Link>
                    <Link href="/single-blog">
                      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 11C6.28125 11 5.1875 10.75 4.21875 10.2812C3.96875 10.4062 3.71875 10.5 3.4375 10.625C2.84375 10.8438 2.15625 11 1.5 11C1.28125 11 1.09375 10.875 1 10.6562C0.9375 10.4688 1.03125 10.25 1.1875 10.125V10.0938H1.21875C1.25 10.0625 1.3125 10 1.375 9.96875C1.46875 9.875 1.625 9.71875 1.78125 9.53125C1.9375 9.3125 2.125 9.03125 2.21875 8.75C1.4375 7.84375 1 6.71875 1 5.5C1 2.46875 3.90625 0 7.5 0C11.0625 0 14 2.46875 14 5.5C14 8.5625 11.0625 11 7.5 11ZM15 5.5H14.9688C14.9688 5.34375 14.9688 5.1875 14.9688 5.03125C18.3438 5.21875 20.9688 7.625 20.9688 10.5C20.9688 11.7188 20.5312 12.8438 19.75 13.75C19.8438 14.0312 20.0312 14.2812 20.1875 14.5C20.3438 14.7188 20.5 14.8438 20.5938 14.9688C20.6562 15 20.7188 15.0625 20.75 15.0625C20.75 15.0938 20.7812 15.0938 20.7812 15.0938C20.9688 15.25 21.0312 15.4688 20.9688 15.6562C20.9062 15.875 20.6875 16 20.5 16C19.8125 16 19.125 15.8438 18.5312 15.625C18.25 15.5 18 15.4062 17.75 15.2812C16.7812 15.75 15.6875 16 14.5 16C11.5 16 8.96875 14.3125 8.21875 11.9688C11.875 11.6562 15 9.03125 15 5.5Z" fill="#222627" />
                      </svg>(03) Comments
                    </Link>
                  </div>
                  <h5 className="blog-title"><Link href="/single-blog">The Importance of Data Backup & Disaster Recovery in the Digital Age</Link></h5>
                </div>
                <div className="blog-img">
                  <Link href="/single-blog"><img src="assets/images/blog/img6.png" alt="Blog Image" />
                    <div className="blog-date-wrap">
                      <div className="blog-year">
                        <span>2024</span>
                      </div>
                      <div className="blog-month">
                        <h4>12</h4>
                        <h6>Jun</h6>
                      </div>
                    </div>
                  </Link>
                  <Link className="techin-default-btn blog-btn1" href="/single-blog" data-text="Read More">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-wrapper">
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="/single-blog">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 8C5.5625 8 4.25 7.25 3.53125 6C2.8125 4.78125 2.8125 3.25 3.53125 2C4.25 0.78125 5.5625 0 7 0C8.40625 0 9.71875 0.78125 10.4375 2C11.1562 3.25 11.1562 4.78125 10.4375 6C9.71875 7.25 8.40625 8 7 8ZM5.5625 9.5H8.40625C11.5 9.5 14 12 14 15.0938C14 15.5938 13.5625 16 13.0625 16H0.90625C0.40625 16 0 15.5938 0 15.0938C0 12 2.46875 9.5 5.5625 9.5Z" fill="#222627" />
                      </svg>By Admin
                    </Link>
                    <Link href="/single-blog">
                      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 11C6.28125 11 5.1875 10.75 4.21875 10.2812C3.96875 10.4062 3.71875 10.5 3.4375 10.625C2.84375 10.8438 2.15625 11 1.5 11C1.28125 11 1.09375 10.875 1 10.6562C0.9375 10.4688 1.03125 10.25 1.1875 10.125V10.0938H1.21875C1.25 10.0625 1.3125 10 1.375 9.96875C1.46875 9.875 1.625 9.71875 1.78125 9.53125C1.9375 9.3125 2.125 9.03125 2.21875 8.75C1.4375 7.84375 1 6.71875 1 5.5C1 2.46875 3.90625 0 7.5 0C11.0625 0 14 2.46875 14 5.5C14 8.5625 11.0625 11 7.5 11ZM15 5.5H14.9688C14.9688 5.34375 14.9688 5.1875 14.9688 5.03125C18.3438 5.21875 20.9688 7.625 20.9688 10.5C20.9688 11.7188 20.5312 12.8438 19.75 13.75C19.8438 14.0312 20.0312 14.2812 20.1875 14.5C20.3438 14.7188 20.5 14.8438 20.5938 14.9688C20.6562 15 20.7188 15.0625 20.75 15.0625C20.75 15.0938 20.7812 15.0938 20.7812 15.0938C20.9688 15.25 21.0312 15.4688 20.9688 15.6562C20.9062 15.875 20.6875 16 20.5 16C19.8125 16 19.125 15.8438 18.5312 15.625C18.25 15.5 18 15.4062 17.75 15.2812C16.7812 15.75 15.6875 16 14.5 16C11.5 16 8.96875 14.3125 8.21875 11.9688C11.875 11.6562 15 9.03125 15 5.5Z" fill="#222627" />
                      </svg>(03) Comments
                    </Link>
                  </div>
                  <h5 className="blog-title"><Link href="/single-blog">The Benefits of Custom Software Solutions for Growing Businesses</Link></h5>
                </div>
                <div className="blog-img">
                  <Link href="/single-blog"><img src="assets/images/blog/img7.png" alt="Blog Image" />
                    <div className="blog-date-wrap">
                      <div className="blog-year">
                        <span>2024</span>
                      </div>
                      <div className="blog-month">
                        <h4>12</h4>
                        <h6>Jun</h6>
                      </div>
                    </div>
                  </Link>
                  <Link className="techin-default-btn blog-btn1" href="/single-blog" data-text="Read More">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-wrapper">
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="/single-blog">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 8C5.5625 8 4.25 7.25 3.53125 6C2.8125 4.78125 2.8125 3.25 3.53125 2C4.25 0.78125 5.5625 0 7 0C8.40625 0 9.71875 0.78125 10.4375 2C11.1562 3.25 11.1562 4.78125 10.4375 6C9.71875 7.25 8.40625 8 7 8ZM5.5625 9.5H8.40625C11.5 9.5 14 12 14 15.0938C14 15.5938 13.5625 16 13.0625 16H0.90625C0.40625 16 0 15.5938 0 15.0938C0 12 2.46875 9.5 5.5625 9.5Z" fill="#222627" />
                      </svg>By Admin
                    </Link>
                    <Link href="/single-blog">
                      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 11C6.28125 11 5.1875 10.75 4.21875 10.2812C3.96875 10.4062 3.71875 10.5 3.4375 10.625C2.84375 10.8438 2.15625 11 1.5 11C1.28125 11 1.09375 10.875 1 10.6562C0.9375 10.4688 1.03125 10.25 1.1875 10.125V10.0938H1.21875C1.25 10.0625 1.3125 10 1.375 9.96875C1.46875 9.875 1.625 9.71875 1.78125 9.53125C1.9375 9.3125 2.125 9.03125 2.21875 8.75C1.4375 7.84375 1 6.71875 1 5.5C1 2.46875 3.90625 0 7.5 0C11.0625 0 14 2.46875 14 5.5C14 8.5625 11.0625 11 7.5 11ZM15 5.5H14.9688C14.9688 5.34375 14.9688 5.1875 14.9688 5.03125C18.3438 5.21875 20.9688 7.625 20.9688 10.5C20.9688 11.7188 20.5312 12.8438 19.75 13.75C19.8438 14.0312 20.0312 14.2812 20.1875 14.5C20.3438 14.7188 20.5 14.8438 20.5938 14.9688C20.6562 15 20.7188 15.0625 20.75 15.0625C20.75 15.0938 20.7812 15.0938 20.7812 15.0938C20.9688 15.25 21.0312 15.4688 20.9688 15.6562C20.9062 15.875 20.6875 16 20.5 16C19.8125 16 19.125 15.8438 18.5312 15.625C18.25 15.5 18 15.4062 17.75 15.2812C16.7812 15.75 15.6875 16 14.5 16C11.5 16 8.96875 14.3125 8.21875 11.9688C11.875 11.6562 15 9.03125 15 5.5Z" fill="#222627" />
                      </svg>(03) Comments
                    </Link>
                  </div>
                  <h5 className="blog-title"><Link href="/single-blog">How to Ensure Your Business Stays Compliant with IT Regulations</Link></h5>
                </div>
                <div className="blog-img">
                  <Link href="/single-blog"><img src="assets/images/blog/img8.png" alt="Blog Image" />
                    <div className="blog-date-wrap">
                      <div className="blog-year">
                        <span>2024</span>
                      </div>
                      <div className="blog-month">
                        <h4>12</h4>
                        <h6>Jun</h6>
                      </div>
                    </div>
                  </Link>
                  <Link className="techin-default-btn blog-btn1" href="/single-blog" data-text="Read More">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-wrapper">
                <div className="blog-content">
                  <div className="blog-meta">
                    <Link href="/single-blog">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 8C5.5625 8 4.25 7.25 3.53125 6C2.8125 4.78125 2.8125 3.25 3.53125 2C4.25 0.78125 5.5625 0 7 0C8.40625 0 9.71875 0.78125 10.4375 2C11.1562 3.25 11.1562 4.78125 10.4375 6C9.71875 7.25 8.40625 8 7 8ZM5.5625 9.5H8.40625C11.5 9.5 14 12 14 15.0938C14 15.5938 13.5625 16 13.0625 16H0.90625C0.40625 16 0 15.5938 0 15.0938C0 12 2.46875 9.5 5.5625 9.5Z" fill="#222627" />
                      </svg>By Admin
                    </Link>
                    <Link href="/single-blog">
                      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 11C6.28125 11 5.1875 10.75 4.21875 10.2812C3.96875 10.4062 3.71875 10.5 3.4375 10.625C2.84375 10.8438 2.15625 11 1.5 11C1.28125 11 1.09375 10.875 1 10.6562C0.9375 10.4688 1.03125 10.25 1.1875 10.125V10.0938H1.21875C1.25 10.0625 1.3125 10 1.375 9.96875C1.46875 9.875 1.625 9.71875 1.78125 9.53125C1.9375 9.3125 2.125 9.03125 2.21875 8.75C1.4375 7.84375 1 6.71875 1 5.5C1 2.46875 3.90625 0 7.5 0C11.0625 0 14 2.46875 14 5.5C14 8.5625 11.0625 11 7.5 11ZM15 5.5H14.9688C14.9688 5.34375 14.9688 5.1875 14.9688 5.03125C18.3438 5.21875 20.9688 7.625 20.9688 10.5C20.9688 11.7188 20.5312 12.8438 19.75 13.75C19.8438 14.0312 20.0312 14.2812 20.1875 14.5C20.3438 14.7188 20.5 14.8438 20.5938 14.9688C20.6562 15 20.7188 15.0625 20.75 15.0625C20.75 15.0938 20.7812 15.0938 20.7812 15.0938C20.9688 15.25 21.0312 15.4688 20.9688 15.6562C20.9062 15.875 20.6875 16 20.5 16C19.8125 16 19.125 15.8438 18.5312 15.625C18.25 15.5 18 15.4062 17.75 15.2812C16.7812 15.75 15.6875 16 14.5 16C11.5 16 8.96875 14.3125 8.21875 11.9688C11.875 11.6562 15 9.03125 15 5.5Z" fill="#222627" />
                      </svg>(03) Comments
                    </Link>
                  </div>
                  <h5 className="blog-title"><Link href="/single-blog">How to Ensure Your Business Stays Compliant with IT Regulations</Link></h5>
                </div>
                <div className="blog-img">
                  <Link href="/single-blog"><img src="assets/images/blog/img20.png" alt="Blog Image" />
                    <div className="blog-date-wrap">
                      <div className="blog-year">
                        <span>2024</span>
                      </div>
                      <div className="blog-month">
                        <h4>12</h4>
                        <h6>Jun</h6>
                      </div>
                    </div>
                  </Link>
                  <Link className="techin-default-btn blog-btn1" href="/single-blog" data-text="Read More">
                    <span className="button-wraper">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="techin-pagination center">
            <Link className="pagi-btn" href="/single-blog">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.601562 7.64062L6.85156 1.39062C7.32031 0.882812 8.14062 0.882812 8.60938 1.39062C9.11719 1.85938 9.11719 2.67969 8.60938 3.14844L4.50781 7.25H16.5C17.1641 7.25 17.75 7.83594 17.75 8.5C17.75 9.20312 17.1641 9.75 16.5 9.75H4.50781L8.60938 13.8906C9.11719 14.3594 9.11719 15.1797 8.60938 15.6484C8.14062 16.1562 7.32031 16.1562 6.85156 15.6484L0.601562 9.39844C0.09375 8.92969 0.09375 8.10938 0.601562 7.64062Z" fill="#2F2BEB" />
              </svg>
            </Link>
            <ul>
              <li><a className="current" href="#">1</a></li>
              <li><Link href="/single-blog">2</Link></li>
              <li><Link href="/single-blog">3</Link></li>
              <li><Link href="/single-blog">4</Link></li>
            </ul>
            <Link className="pagi-btn" href="/single-blog">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3984 7.64062L11.1484 1.39062C10.6797 0.882812 9.85938 0.882812 9.39062 1.39062C8.88281 1.85938 8.88281 2.67969 9.39062 3.14844L13.4922 7.25H1.5C0.835938 7.25 0.25 7.83594 0.25 8.5C0.25 9.20312 0.835938 9.75 1.5 9.75H13.4922L9.39062 13.8906C8.88281 14.3594 8.88281 15.1797 9.39062 15.6484C9.85938 16.1562 10.6797 16.1562 11.1484 15.6484L17.3984 9.39844C17.9062 8.92969 17.9062 8.10938 17.3984 7.64062Z" fill="#2F2BEB" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridArea;