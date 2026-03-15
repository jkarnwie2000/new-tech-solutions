"use client";
import VideoPopup from "@/modals/video-popup";
import Link from "next/link";
import { useState } from "react";



const SingleBlogArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);


  return (
    <>
      <section className="techin-section-padding blog-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-left">
                <div className="techin-blog">
                  <div className="techin-blog-img">
                    <img src="assets/images/blog/img12.png" alt="Blog Image" />
                    <div className="blog-meta-box">
                      <div className="blog-meta single-meta">
                        <Link href="/single-blog">
                          <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25 0.5C5.91406 0.5 6.5 1.08594 6.5 1.75V3H11.5V1.75C11.5 1.08594 12.0469 0.5 12.75 0.5C13.4141 0.5 14 1.08594 14 1.75V3H15.875C16.8906 3 17.75 3.85938 17.75 4.875V6.75H0.25V4.875C0.25 3.85938 1.07031 3 2.125 3H4V1.75C4 1.08594 4.54688 0.5 5.25 0.5ZM0.25 8H17.75V18.625C17.75 19.6797 16.8906 20.5 15.875 20.5H2.125C1.07031 20.5 0.25 19.6797 0.25 18.625V8ZM2.75 11.125V12.375C2.75 12.7266 3.02344 13 3.375 13H4.625C4.9375 13 5.25 12.7266 5.25 12.375V11.125C5.25 10.8125 4.9375 10.5 4.625 10.5H3.375C3.02344 10.5 2.75 10.8125 2.75 11.125ZM7.75 11.125V12.375C7.75 12.7266 8.02344 13 8.375 13H9.625C9.9375 13 10.25 12.7266 10.25 12.375V11.125C10.25 10.8125 9.9375 10.5 9.625 10.5H8.375C8.02344 10.5 7.75 10.8125 7.75 11.125ZM13.375 10.5C13.0234 10.5 12.75 10.8125 12.75 11.125V12.375C12.75 12.7266 13.0234 13 13.375 13H14.625C14.9375 13 15.25 12.7266 15.25 12.375V11.125C15.25 10.8125 14.9375 10.5 14.625 10.5H13.375ZM2.75 16.125V17.375C2.75 17.7266 3.02344 18 3.375 18H4.625C4.9375 18 5.25 17.7266 5.25 17.375V16.125C5.25 15.8125 4.9375 15.5 4.625 15.5H3.375C3.02344 15.5 2.75 15.8125 2.75 16.125ZM8.375 15.5C8.02344 15.5 7.75 15.8125 7.75 16.125V17.375C7.75 17.7266 8.02344 18 8.375 18H9.625C9.9375 18 10.25 17.7266 10.25 17.375V16.125C10.25 15.8125 9.9375 15.5 9.625 15.5H8.375ZM12.75 16.125V17.375C12.75 17.7266 13.0234 18 13.375 18H14.625C14.9375 18 15.25 17.7266 15.25 17.375V16.125C15.25 15.8125 14.9375 15.5 14.625 15.5H13.375C13.0234 15.5 12.75 15.8125 12.75 16.125Z" fill="#222627" />
                          </svg> January 12, 2024
                        </Link>
                        <Link href="/single-blog">
                          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 11C6.28125 11 5.1875 10.75 4.21875 10.2812C3.96875 10.4062 3.71875 10.5 3.4375 10.625C2.84375 10.8438 2.15625 11 1.5 11C1.28125 11 1.09375 10.875 1 10.6562C0.9375 10.4688 1.03125 10.25 1.1875 10.125V10.0938H1.21875C1.25 10.0625 1.3125 10 1.375 9.96875C1.46875 9.875 1.625 9.71875 1.78125 9.53125C1.9375 9.3125 2.125 9.03125 2.21875 8.75C1.4375 7.84375 1 6.71875 1 5.5C1 2.46875 3.90625 0 7.5 0C11.0625 0 14 2.46875 14 5.5C14 8.5625 11.0625 11 7.5 11ZM15 5.5H14.9688C14.9688 5.34375 14.9688 5.1875 14.9688 5.03125C18.3438 5.21875 20.9688 7.625 20.9688 10.5C20.9688 11.7188 20.5312 12.8438 19.75 13.75C19.8438 14.0312 20.0312 14.2812 20.1875 14.5C20.3438 14.7188 20.5 14.8438 20.5938 14.9688C20.6562 15 20.7188 15.0625 20.75 15.0625C20.75 15.0938 20.7812 15.0938 20.7812 15.0938C20.9688 15.25 21.0312 15.4688 20.9688 15.6562C20.9062 15.875 20.6875 16 20.5 16C19.8125 16 19.125 15.8438 18.5312 15.625C18.25 15.5 18 15.4062 17.75 15.2812C16.7812 15.75 15.6875 16 14.5 16C11.5 16 8.96875 14.3125 8.21875 11.9688C11.875 11.6562 15 9.03125 15 5.5Z" fill="#222627" />
                          </svg> (13) Comment
                        </Link>
                        <Link href="/single-blog">
                          <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 0.75C14.625 0.75 17.1641 2.19531 19 3.91406C20.8359 5.59375 22.0469 7.625 22.6328 9.03125C22.75 9.34375 22.75 9.69531 22.6328 10.0078C22.0469 11.375 20.8359 13.4062 19 15.125C17.1641 16.8438 14.625 18.25 11.5 18.25C8.33594 18.25 5.79688 16.8438 3.96094 15.125C2.125 13.4062 0.914062 11.375 0.328125 10.0078C0.210938 9.69531 0.210938 9.34375 0.328125 9.03125C0.914062 7.625 2.125 5.59375 3.96094 3.91406C5.79688 2.19531 8.33594 0.75 11.5 0.75ZM5.875 9.5C5.875 11.5312 6.92969 13.3672 8.6875 14.3828C10.4062 15.3984 12.5547 15.3984 14.3125 14.3828C16.0312 13.3672 17.125 11.5312 17.125 9.5C17.125 7.50781 16.0312 5.67188 14.3125 4.65625C12.5547 3.64062 10.4062 3.64062 8.6875 4.65625C6.92969 5.67188 5.875 7.50781 5.875 9.5ZM11.5 7C11.5 6.72656 11.4219 6.49219 11.3438 6.21875C11.2656 6.02344 11.4219 5.75 11.6562 5.75C13.2188 5.82812 14.6641 6.92188 15.0938 8.5625C15.6406 10.5547 14.4688 12.5859 12.4375 13.1328C10.4453 13.6797 8.375 12.4688 7.86719 10.4766C7.78906 10.2031 7.75 9.92969 7.75 9.69531C7.71094 9.46094 7.98438 9.30469 8.17969 9.38281C8.45312 9.46094 8.6875 9.5 9 9.5C10.3672 9.5 11.5 8.40625 11.5 7Z" fill="#222627" />
                          </svg> (63) View
                        </Link>
                      </div>
                    </div>
                    <Link className="blog-thumb-category" href="/blog">Cloud Solutions</Link>
                  </div>
                  <div className="techin-blog-content">
                    <h2 className="blog-title1"><Link href="/single-blog">How IT Infrastructure Can Improve Efficiency and Productivity</Link></h2>
                    <p className="blog-text">Packages and web page editors now use Ipsum as their default model textlayout. The point of using are Ipsum is that it has a more-or-less normal distribution of letterng It is a long fact that a reader will be distracted by the content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal of letters, as opposed to using Content here, content here, making it look like readable English. packages and web page editors now use Lorem Ipsum as their default model.</p>
                    <p>In today’s fast-paced business environment, a well-designed IT infrastructure is a critical factor in enhancing operational efficiency and productivity. Companies, regardless of their size, rely heavily on technology to streamline processes, support daily operations, and drive innovation. In this blog, we’ll explore how investing in the right IT infrastructure can lead to tangible improvements in efficiency and productivity for your business.</p>
                    <div className="blog-d-list-wrap">
                      <div className="blog-d-list-item">
                        <Link href="/blog"><img src="assets/images/blog/7.svg" alt="" />Streamlining Operations with Scalable Solutions</Link>

                        <Link href="/blog"><img src="assets/images/blog/7.svg" alt="" />Automating Repetitive Tasks to Boost Productivity</Link>
                        <Link href="/blog"><img src="assets/images/blog/7.svg" alt="" />Enhancing Communication and Collaboration</Link>
                        <Link className="mb-10" href="/blog"><img src="assets/images/blog/7.svg" alt="" />Reducing Downtime and Enhancing Reliability</Link>
                      </div>
                      <div className="blog-d-list-item">
                        <Link href="/blog"><img src="assets/images/blog/7.svg" alt="" />Leveraging Analytics for Informed Decision-Making</Link>
                        <Link href="/blog"><img src="assets/images/blog/7.svg" alt="" />Improved Data Management and Accessibility</Link>
                      </div>
                    </div>
                    <div className="blog-d-thumb">
                      <img src="assets/images/blog/img13.png" alt="" />
                      <a className="techin-popup-video video-init"
                        onClick={() => setIsVideoOpen(true)}
                        style={{ cursor: "pointer" }}
                      >
                        <img src="assets/images/blog/play-btn.svg" alt="" />
                        <div className="waves wave-1"></div>
                        <div className="waves wave-2"></div>
                        <div className="waves wave-3"></div>
                      </a>
                    </div>
                    <p className="blog-text">Investing in a modern, well-designed IT infrastructure is no longer optional for businesses aiming to improve efficiency and productivity. From automating repetitive tasks to streamlining communication and enhancing data accessibility, IT infrastructure forms the backbone of a successful, agile, and competitive company. By leveraging scalable, reliable, and automated systems, businesses can maximize productivity and create an environment where innovation and efficiency thrive. At techin, we specialize in delivering customized IT infrastructure solutions tailored to the unique needs of businesses, helping you stay ahead in a rapidly evolving digital world.</p>
                    <blockquote className="blockquote-text">
                      "Upgrading our IT infrastructure has drastically reduced downtime and improved efficiency. Automation has freed our team from repetitive tasks, and seamless data access has streamlined operations. We're now more productive and connected than ever."
                      <span><img src="assets/images/blog/8.svg" alt="" /></span>
                      <div className="authore-box">
                        <div className="icon-blog">
                        </div>
                        <div className="text-blog">Jamil Rayhan</div>
                      </div>
                    </blockquote>
                    <p className="blog-text">Automation is at the heart of a modern IT infrastructure. By automating routine and repetitive tasks, such as data backups, software updates, and network monitoring, businesses can free up valuable time for their employees to focus on more strategic initiatives. Automation tools integrated within IT systems can manage tasks like patch management, system diagnostics, and reporting, reducing the manual workload and minimizing human errors. This improved efficiency ultimately leads to higher productivity levels across teams and departments.</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="blog-d-thumb2">
                          <img src="assets/images/blog/img14.png" alt="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="blog-d-thumb2">
                          <img src="assets/images/blog/img15.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <p className="blog-text">Efficient communication and collaboration are essential for team productivity. An optimized IT infrastructure can support advanced communication tools such as VoIP systems, video conferencing platforms, and collaborative software solutions like Slack or Microsoft Teams. These tools enable seamless real-time communication between team members, whether they are in the same office or working remotely. The right IT infrastructure also ensures that employees have reliable access to company data and collaborative platforms, reducing the lag or interruptions that may slow down workflow and collaboration efforts.</p>
                    <div className="tag-share">
                      <div className="tag-share-tag">
                        <h6>Tags:</h6>
                        <ul>
                          <li><Link href="/blog">Cloud</Link></li>
                          <li><Link href="/blog">Cloud Solution</Link></li>
                          <li><Link href="/blog">Consulting</Link></li>
                        </ul>
                      </div>
                      <div className="tag-share-social">
                        <h6>Share:</h6>
                        <ul>
                          <li>
                            <a href="https://www.behance.net/">
                              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.25 5.4375C8.59375 5.8125 9.25 6.84375 9.25 8.21875C9.25 10.4688 7.375 11.4375 5.34375 11.4375H0V0.375H5.21875C7.09375 0.375 8.75 0.90625 8.75 3.125C8.75 4.21875 8.21875 4.9375 7.25 5.4375ZM2.40625 2.25V4.84375H4.875C5.75 4.84375 6.375 4.46875 6.375 3.53125C6.375 2.5 5.59375 2.25 4.71875 2.25H2.40625ZM5.03125 9.5625C6 9.5625 6.8125 9.21875 6.8125 8.09375C6.8125 6.96875 6.15625 6.5 5.0625 6.5H2.40625V9.5625H5.03125ZM16.2188 2.03125V0.9375H11.75V2.03125H16.2188ZM18 7.5625C18 7.6875 17.9688 7.84375 17.9688 7.96875H12.1875C12.1875 9.25 12.875 10 14.1562 10C14.8125 10 15.6875 9.65625 15.9062 8.96875H17.8438C17.25 10.7812 16 11.6562 14.0938 11.6562C11.5625 11.6562 9.96875 9.9375 9.96875 7.4375C9.96875 5.03125 11.625 3.1875 14.0938 3.1875C16.5938 3.1875 18 5.1875 18 7.5625ZM12.1875 6.5625H15.7812C15.6875 5.5 15.125 4.875 14 4.875C12.9688 4.875 12.25 5.53125 12.1875 6.5625Z" fill="#222627" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com">
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.982 0.00101299H4.28531C3.78547 -0.0105907 3.28834 0.0775941 2.82299 0.260409C2.35763 0.443224 1.93341 0.716999 1.57513 1.06572C1.21684 1.41444 0.931692 1.8311 0.736356 2.29134C0.541021 2.75157 0.439421 3.24614 0.4375 3.74611L0.4375 11.2363C0.439421 11.7363 0.541021 12.2308 0.736356 12.6911C0.931692 13.1513 1.21684 13.568 1.57513 13.9167C1.93341 14.2654 2.35763 14.5392 2.82299 14.722C3.28834 14.9048 3.78547 14.993 4.28531 14.9814H11.982C12.4819 14.993 12.979 14.9048 13.4444 14.722C13.9097 14.5392 14.3339 14.2654 14.6922 13.9167C15.0505 13.568 15.3357 13.1513 15.531 12.6911C15.7263 12.2308 15.8279 11.7363 15.8298 11.2363V3.74611C15.8279 3.24614 15.7263 2.75157 15.531 2.29134C15.3357 1.8311 15.0505 1.41444 14.6922 1.06572C14.3339 0.716999 13.9097 0.443224 13.4444 0.260409C12.979 0.0775941 12.4819 -0.0105907 11.982 0.00101299ZM14.2914 11.2363C14.2929 11.5371 14.2337 11.8352 14.1174 12.1126C14.0011 12.39 13.83 12.6411 13.6144 12.8509C13.3988 13.0607 13.1432 13.2249 12.8627 13.3337C12.5822 13.4424 12.2827 13.4935 11.982 13.4838H4.28531C3.98465 13.4935 3.68512 13.4424 3.40464 13.3337C3.12417 13.2249 2.8685 13.0607 2.65292 12.8509C2.43734 12.6411 2.26628 12.39 2.14997 12.1126C2.03365 11.8352 1.97447 11.5371 1.97596 11.2363V3.74611C1.97447 3.4453 2.03365 3.14727 2.14997 2.86985C2.26628 2.59242 2.43734 2.3413 2.65292 2.1315C2.8685 1.92169 3.12417 1.75751 3.40464 1.64877C3.68512 1.54003 3.98465 1.48896 4.28531 1.49861H11.982C12.2827 1.48896 12.5822 1.54003 12.8627 1.64877C13.1432 1.75751 13.3988 1.92169 13.6144 2.1315C13.83 2.3413 14.0011 2.59242 14.1174 2.86985C14.2337 3.14727 14.2929 3.4453 14.2914 3.74611V11.2363Z" fill="#121213" />
                                <path d="M8.13297 3.64373C7.37194 3.64373 6.62801 3.8694 5.99524 4.2922C5.36247 4.71501 4.86929 5.31595 4.57805 6.01905C4.28682 6.72214 4.21062 7.49581 4.35909 8.24221C4.50756 8.98861 4.87403 9.67423 5.41216 10.2124C5.95028 10.7505 6.6359 11.1169 7.3823 11.2654C8.1287 11.4139 8.90237 11.3377 9.60546 11.0465C10.3086 10.7552 10.9095 10.262 11.3323 9.62927C11.7551 8.9965 11.9808 8.25257 11.9808 7.49154C11.9856 6.98488 11.8894 6.48234 11.6978 6.01331C11.5062 5.54427 11.2229 5.11815 10.8646 4.75988C10.5064 4.4016 10.0802 4.11836 9.6112 3.92671C9.14216 3.73506 8.63962 3.63886 8.13297 3.64373ZM8.13297 9.80089C7.67622 9.80089 7.22973 9.66545 6.84996 9.41169C6.47019 9.15794 6.1742 8.79727 5.99941 8.37529C5.82462 7.95331 5.77889 7.48898 5.86799 7.04101C5.9571 6.59304 6.17704 6.18155 6.50001 5.85858C6.82298 5.53562 7.23447 5.31567 7.68244 5.22657C8.13041 5.13746 8.59474 5.18319 9.01672 5.35798C9.4387 5.53277 9.79937 5.82876 10.0531 6.20854C10.3069 6.58831 10.4423 7.03479 10.4423 7.49154C10.448 7.79638 10.3922 8.09923 10.2781 8.38198C10.1641 8.66474 9.9942 8.9216 9.77861 9.13718C9.56302 9.35277 9.30617 9.52267 9.02341 9.63671C8.74065 9.75074 8.4378 9.80659 8.13297 9.80089Z" fill="#121213" />
                                <path d="M11.8454 4.66842C12.3706 4.66842 12.7963 4.24268 12.7963 3.71751C12.7963 3.19234 12.3706 2.7666 11.8454 2.7666C11.3203 2.7666 10.8945 3.19234 10.8945 3.71751C10.8945 4.24268 11.3203 4.66842 11.8454 4.66842Z" fill="#222627" />
                              </svg>
                            </a>
                          </li>

                          <li>
                            <a href="https://www.twitter.com">
                              <svg width="18" height="18" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.3682 2.43269C16.321 2.35584 16.2533 2.29365 16.1728 2.25308C16.0922 2.21251 16.002 2.19516 15.9121 2.20297L15.0993 2.27366L15.8724 0.706481C15.9177 0.615492 15.9333 0.512585 15.9171 0.412242C15.9008 0.311899 15.8535 0.21917 15.7819 0.147111C15.7102 0.0750528 15.6177 0.0272907 15.5174 0.0105456C15.4172 -0.00619945 15.3142 0.00891781 15.223 0.0537672L13.1654 1.061C12.5325 0.732103 11.8136 0.605916 11.1065 0.699567C10.3994 0.793219 9.73819 1.10217 9.21268 1.5845C8.75801 2.01587 8.40544 2.54336 8.18073 3.12844C7.95602 3.71352 7.86485 4.34141 7.91388 4.96624C6.73758 4.84885 5.60936 4.4389 4.63209 3.77375C3.65482 3.10861 2.85958 2.20943 2.31887 1.15819C2.27994 1.08622 2.22348 1.02525 2.1547 0.980922C2.08593 0.936597 2.00708 0.910352 1.92546 0.904624C1.84384 0.898897 1.7621 0.913871 1.68781 0.948158C1.61352 0.982444 1.54909 1.03493 1.50049 1.10076C1.14417 1.60692 0.935627 2.20221 0.89818 2.82009C0.860733 3.43796 0.995855 4.05408 1.28844 4.59957C1.1283 4.55871 0.957117 4.50459 0.769365 4.44164C0.689897 4.41499 0.604887 4.40935 0.522594 4.42526C0.440301 4.44117 0.363523 4.4781 0.299719 4.53246C0.235915 4.58681 0.187256 4.65675 0.158468 4.73547C0.12968 4.81418 0.121742 4.89901 0.135426 4.9817C0.236779 5.64852 0.501612 6.27989 0.9063 6.81947C1.31099 7.35905 1.84295 7.79008 2.45472 8.07409C2.28787 8.13219 2.11743 8.17941 1.94447 8.21545C1.85985 8.2329 1.78142 8.2726 1.71725 8.33045C1.65308 8.3883 1.60549 8.46221 1.57939 8.54457C1.55328 8.62693 1.54961 8.71475 1.56874 8.799C1.58788 8.88326 1.62913 8.96088 1.68825 9.02389C2.57515 9.88095 3.68487 10.4718 4.89107 10.7291C3.74596 11.5247 2.34147 11.8559 0.961535 11.6557C0.865938 11.6523 0.77146 11.6772 0.68994 11.7272C0.60842 11.7773 0.543484 11.8503 0.503271 11.9371C0.463058 12.0239 0.449355 12.1206 0.463881 12.2152C0.478406 12.3097 0.520514 12.3979 0.584927 12.4686C1.28955 13.2417 3.85512 14.1252 6.54881 14.186C6.65557 14.186 6.76602 14.186 6.88014 14.186C9.15409 14.2959 11.3796 13.5046 13.0737 11.9837C14.376 10.7305 15.259 9.10534 15.6018 7.33081C15.7798 6.32263 15.7854 5.29155 15.6183 4.2815C15.6128 4.24174 15.6062 4.19977 15.6018 4.16333L16.3627 2.93742C16.4098 2.86186 16.4352 2.77483 16.4361 2.68583C16.4371 2.59682 16.4136 2.50926 16.3682 2.43269Z" fill="#222627" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com">
                              <svg width="10" height="18" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.26296 8.50593H0.396489C0.0949817 8.50593 0 8.39549 0 8.10944V5.82991C0 5.52841 0.110444 5.43342 0.396489 5.43342H2.26407V3.77679C2.24163 3.03369 2.41736 2.298 2.77321 1.64525C3.14708 0.993513 3.74293 0.498015 4.45193 0.249264C4.9178 0.082563 5.40947 -0.000442427 5.90424 0.00408169H7.75305C8.017 0.00408169 8.13076 0.114524 8.13076 0.381794V2.53211C8.13076 2.79606 8.02032 2.90982 7.75305 2.90982C7.24391 2.90982 6.73477 2.90982 6.22563 2.92859C6.12054 2.91318 6.0133 2.92255 5.91247 2.95595C5.81164 2.98935 5.72002 3.04586 5.64491 3.12097C5.5698 3.19607 5.5133 3.2877 5.47989 3.38853C5.44649 3.48936 5.43713 3.5966 5.45254 3.70169C5.43376 4.26715 5.45254 4.81495 5.45254 5.39919H7.6404C7.94191 5.39919 8.05566 5.50963 8.05566 5.81445V8.09619C8.05566 8.3977 7.96179 8.49268 7.6404 8.49268H5.45033V14.641C5.45033 14.9613 5.35645 15.075 5.01629 15.075H2.65945C2.37672 15.075 2.26296 14.9646 2.26296 14.6786V8.50593Z" fill="#222627" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="blog-d-admin-author" style={{ backgroundImage: `url(/assets/images/blog/admin.png)` }}>
                      <div className="blog-d-admin-thumb">
                        <img src="assets/images/blog/img16.png" alt="" />
                      </div>
                      <div className="blog-d-admin-content">
                        <h5>Emily Carter</h5>
                        <p className="text">Project Manager</p>
                        <p>Emily Carter is a skilled IT consultant with over 10 years of experience. She specializes in optimizing IT infrastructures and driving digital transformation for businesses, helping them enhance efficiency and streamline operations.</p>
                      </div>
                      <div className="author-social-link">
                        <ul>
                          <li>
                            <Link href="/blog">
                              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.25 5.4375C8.59375 5.8125 9.25 6.84375 9.25 8.21875C9.25 10.4688 7.375 11.4375 5.34375 11.4375H0V0.375H5.21875C7.09375 0.375 8.75 0.90625 8.75 3.125C8.75 4.21875 8.21875 4.9375 7.25 5.4375ZM2.40625 2.25V4.84375H4.875C5.75 4.84375 6.375 4.46875 6.375 3.53125C6.375 2.5 5.59375 2.25 4.71875 2.25H2.40625ZM5.03125 9.5625C6 9.5625 6.8125 9.21875 6.8125 8.09375C6.8125 6.96875 6.15625 6.5 5.0625 6.5H2.40625V9.5625H5.03125ZM16.2188 2.03125V0.9375H11.75V2.03125H16.2188ZM18 7.5625C18 7.6875 17.9688 7.84375 17.9688 7.96875H12.1875C12.1875 9.25 12.875 10 14.1562 10C14.8125 10 15.6875 9.65625 15.9062 8.96875H17.8438C17.25 10.7812 16 11.6562 14.0938 11.6562C11.5625 11.6562 9.96875 9.9375 9.96875 7.4375C9.96875 5.03125 11.625 3.1875 14.0938 3.1875C16.5938 3.1875 18 5.1875 18 7.5625ZM12.1875 6.5625H15.7812C15.6875 5.5 15.125 4.875 14 4.875C12.9688 4.875 12.25 5.53125 12.1875 6.5625Z" fill="#222627" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <a href="https://www.instagram.com">
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.982 0.00101299H4.28531C3.78547 -0.0105907 3.28834 0.0775941 2.82299 0.260409C2.35763 0.443224 1.93341 0.716999 1.57513 1.06572C1.21684 1.41444 0.931692 1.8311 0.736356 2.29134C0.541021 2.75157 0.439421 3.24614 0.4375 3.74611L0.4375 11.2363C0.439421 11.7363 0.541021 12.2308 0.736356 12.6911C0.931692 13.1513 1.21684 13.568 1.57513 13.9167C1.93341 14.2654 2.35763 14.5392 2.82299 14.722C3.28834 14.9048 3.78547 14.993 4.28531 14.9814H11.982C12.4819 14.993 12.979 14.9048 13.4444 14.722C13.9097 14.5392 14.3339 14.2654 14.6922 13.9167C15.0505 13.568 15.3357 13.1513 15.531 12.6911C15.7263 12.2308 15.8279 11.7363 15.8298 11.2363V3.74611C15.8279 3.24614 15.7263 2.75157 15.531 2.29134C15.3357 1.8311 15.0505 1.41444 14.6922 1.06572C14.3339 0.716999 13.9097 0.443224 13.4444 0.260409C12.979 0.0775941 12.4819 -0.0105907 11.982 0.00101299ZM14.2914 11.2363C14.2929 11.5371 14.2337 11.8352 14.1174 12.1126C14.0011 12.39 13.83 12.6411 13.6144 12.8509C13.3988 13.0607 13.1432 13.2249 12.8627 13.3337C12.5822 13.4424 12.2827 13.4935 11.982 13.4838H4.28531C3.98465 13.4935 3.68512 13.4424 3.40464 13.3337C3.12417 13.2249 2.8685 13.0607 2.65292 12.8509C2.43734 12.6411 2.26628 12.39 2.14997 12.1126C2.03365 11.8352 1.97447 11.5371 1.97596 11.2363V3.74611C1.97447 3.4453 2.03365 3.14727 2.14997 2.86985C2.26628 2.59242 2.43734 2.3413 2.65292 2.1315C2.8685 1.92169 3.12417 1.75751 3.40464 1.64877C3.68512 1.54003 3.98465 1.48896 4.28531 1.49861H11.982C12.2827 1.48896 12.5822 1.54003 12.8627 1.64877C13.1432 1.75751 13.3988 1.92169 13.6144 2.1315C13.83 2.3413 14.0011 2.59242 14.1174 2.86985C14.2337 3.14727 14.2929 3.4453 14.2914 3.74611V11.2363Z" fill="#121213" />
                                <path d="M8.13297 3.64373C7.37194 3.64373 6.62801 3.8694 5.99524 4.2922C5.36247 4.71501 4.86929 5.31595 4.57805 6.01905C4.28682 6.72214 4.21062 7.49581 4.35909 8.24221C4.50756 8.98861 4.87403 9.67423 5.41216 10.2124C5.95028 10.7505 6.6359 11.1169 7.3823 11.2654C8.1287 11.4139 8.90237 11.3377 9.60546 11.0465C10.3086 10.7552 10.9095 10.262 11.3323 9.62927C11.7551 8.9965 11.9808 8.25257 11.9808 7.49154C11.9856 6.98488 11.8894 6.48234 11.6978 6.01331C11.5062 5.54427 11.2229 5.11815 10.8646 4.75988C10.5064 4.4016 10.0802 4.11836 9.6112 3.92671C9.14216 3.73506 8.63962 3.63886 8.13297 3.64373ZM8.13297 9.80089C7.67622 9.80089 7.22973 9.66545 6.84996 9.41169C6.47019 9.15794 6.1742 8.79727 5.99941 8.37529C5.82462 7.95331 5.77889 7.48898 5.86799 7.04101C5.9571 6.59304 6.17704 6.18155 6.50001 5.85858C6.82298 5.53562 7.23447 5.31567 7.68244 5.22657C8.13041 5.13746 8.59474 5.18319 9.01672 5.35798C9.4387 5.53277 9.79937 5.82876 10.0531 6.20854C10.3069 6.58831 10.4423 7.03479 10.4423 7.49154C10.448 7.79638 10.3922 8.09923 10.2781 8.38198C10.1641 8.66474 9.9942 8.9216 9.77861 9.13718C9.56302 9.35277 9.30617 9.52267 9.02341 9.63671C8.74065 9.75074 8.4378 9.80659 8.13297 9.80089Z" fill="#121213" />
                                <path d="M11.8454 4.66842C12.3706 4.66842 12.7963 4.24268 12.7963 3.71751C12.7963 3.19234 12.3706 2.7666 11.8454 2.7666C11.3203 2.7666 10.8945 3.19234 10.8945 3.71751C10.8945 4.24268 11.3203 4.66842 11.8454 4.66842Z" fill="#222627" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com">
                              <svg width="18" height="18" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.3682 2.43269C16.321 2.35584 16.2533 2.29365 16.1728 2.25308C16.0922 2.21251 16.002 2.19516 15.9121 2.20297L15.0993 2.27366L15.8724 0.706481C15.9177 0.615492 15.9333 0.512585 15.9171 0.412242C15.9008 0.311899 15.8535 0.21917 15.7819 0.147111C15.7102 0.0750528 15.6177 0.0272907 15.5174 0.0105456C15.4172 -0.00619945 15.3142 0.00891781 15.223 0.0537672L13.1654 1.061C12.5325 0.732103 11.8136 0.605916 11.1065 0.699567C10.3994 0.793219 9.73819 1.10217 9.21268 1.5845C8.75801 2.01587 8.40544 2.54336 8.18073 3.12844C7.95602 3.71352 7.86485 4.34141 7.91388 4.96624C6.73758 4.84885 5.60936 4.4389 4.63209 3.77375C3.65482 3.10861 2.85958 2.20943 2.31887 1.15819C2.27994 1.08622 2.22348 1.02525 2.1547 0.980922C2.08593 0.936597 2.00708 0.910352 1.92546 0.904624C1.84384 0.898897 1.7621 0.913871 1.68781 0.948158C1.61352 0.982444 1.54909 1.03493 1.50049 1.10076C1.14417 1.60692 0.935627 2.20221 0.89818 2.82009C0.860733 3.43796 0.995855 4.05408 1.28844 4.59957C1.1283 4.55871 0.957117 4.50459 0.769365 4.44164C0.689897 4.41499 0.604887 4.40935 0.522594 4.42526C0.440301 4.44117 0.363523 4.4781 0.299719 4.53246C0.235915 4.58681 0.187256 4.65675 0.158468 4.73547C0.12968 4.81418 0.121742 4.89901 0.135426 4.9817C0.236779 5.64852 0.501612 6.27989 0.9063 6.81947C1.31099 7.35905 1.84295 7.79008 2.45472 8.07409C2.28787 8.13219 2.11743 8.17941 1.94447 8.21545C1.85985 8.2329 1.78142 8.2726 1.71725 8.33045C1.65308 8.3883 1.60549 8.46221 1.57939 8.54457C1.55328 8.62693 1.54961 8.71475 1.56874 8.799C1.58788 8.88326 1.62913 8.96088 1.68825 9.02389C2.57515 9.88095 3.68487 10.4718 4.89107 10.7291C3.74596 11.5247 2.34147 11.8559 0.961535 11.6557C0.865938 11.6523 0.77146 11.6772 0.68994 11.7272C0.60842 11.7773 0.543484 11.8503 0.503271 11.9371C0.463058 12.0239 0.449355 12.1206 0.463881 12.2152C0.478406 12.3097 0.520514 12.3979 0.584927 12.4686C1.28955 13.2417 3.85512 14.1252 6.54881 14.186C6.65557 14.186 6.76602 14.186 6.88014 14.186C9.15409 14.2959 11.3796 13.5046 13.0737 11.9837C14.376 10.7305 15.259 9.10534 15.6018 7.33081C15.7798 6.32263 15.7854 5.29155 15.6183 4.2815C15.6128 4.24174 15.6062 4.19977 15.6018 4.16333L16.3627 2.93742C16.4098 2.86186 16.4352 2.77483 16.4361 2.68583C16.4371 2.59682 16.4136 2.50926 16.3682 2.43269Z" fill="#222627" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com">
                              <svg width="10" height="18" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.26296 8.50593H0.396489C0.0949817 8.50593 0 8.39549 0 8.10944V5.82991C0 5.52841 0.110444 5.43342 0.396489 5.43342H2.26407V3.77679C2.24163 3.03369 2.41736 2.298 2.77321 1.64525C3.14708 0.993513 3.74293 0.498015 4.45193 0.249264C4.9178 0.082563 5.40947 -0.000442427 5.90424 0.00408169H7.75305C8.017 0.00408169 8.13076 0.114524 8.13076 0.381794V2.53211C8.13076 2.79606 8.02032 2.90982 7.75305 2.90982C7.24391 2.90982 6.73477 2.90982 6.22563 2.92859C6.12054 2.91318 6.0133 2.92255 5.91247 2.95595C5.81164 2.98935 5.72002 3.04586 5.64491 3.12097C5.5698 3.19607 5.5133 3.2877 5.47989 3.38853C5.44649 3.48936 5.43713 3.5966 5.45254 3.70169C5.43376 4.26715 5.45254 4.81495 5.45254 5.39919H7.6404C7.94191 5.39919 8.05566 5.50963 8.05566 5.81445V8.09619C8.05566 8.3977 7.96179 8.49268 7.6404 8.49268H5.45033V14.641C5.45033 14.9613 5.35645 15.075 5.01629 15.075H2.65945C2.37672 15.075 2.26296 14.9646 2.26296 14.6786V8.50593Z" fill="#222627" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="comments-wrap">
                      <h3 className="blog-inner-title">Comments (02)</h3>
                      <img className="comment-thumb" src="assets/images/blog/line1.svg" alt="" />
                      <ul className="comment-list">
                        <li className="comment-item">
                          <div className="post-comment">
                            <div className="comment-authore">
                              <div className="comment-avater">
                                <img src="assets/images/blog/img17.png" alt="Comment Author" />
                              </div>
                              <div className="comment-content">
                                <span className="commented-on"> <img src="assets/images/blog/6.svg" alt="" /> January 12, 2024</span>
                                <h5>James Walker</h5>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod te mpor incididunt ut la bore et dolore magna aliqua Lorem ipsum dolor sit amet.</p>
                              </div>
                            </div>
                            <div className="reply_and_edit">
                              <Link href="/blog-details" className="replay-btn"> Reply</Link>
                            </div>
                          </div>

                          <ul className="children">
                            <li className="comment-item">
                              <div className="post-comment">
                                <div className="comment-authore">
                                  <div className="comment-avater">
                                    <img src="assets/images/blog/img18.png" alt="reply Author" />
                                  </div>
                                  <div className="comment-content">
                                    <span className="commented-on"> <img src="assets/images/blog/6.svg" alt="" /> January 12, 2024</span>
                                    <h5>Masum Vai</h5>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod te mpor incididunt ut la bore et dolore Lorem ipsum dolor sit amet.</p>
                                  </div>
                                </div>
                                <div className="reply_and_edit">
                                  <Link href="/blog-details" className="replay-btn btn2"> Reply</Link>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="form-title">
                      <h3 className="blog-inner-title title-color">Lave a Reply</h3>
                      <img className="comment-thumb" src="assets/images/blog/line1.svg" alt="" />
                    </div>
                    <div id="respond" className="comment-respond">

                      <div className="row">
                        <div className="col-md-6 form-group">
                          <input type="text" placeholder="Complete Name" />
                        </div>
                        <div className="col-md-6 form-group">
                          <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="col-12 form-group">
                          <textarea name="textarea" placeholder="Comment"></textarea>
                        </div>
                        <div className="col-lg-12">
                          <div className="techin-form-box">
                            <input type="checkbox" id="css" />
                            <label htmlFor="css">
                              Save my name, email, & website in this browser for the next time I comment.
                            </label>
                          </div>
                        </div>
                        <div className="col-12 form-group mb-0">
                          <button id="techin-submit-btn" className="blog-btn" type="submit" data-text="Submit A Comment">
                            <span className="button-wraper">Submit A Comment</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar-area pl-25">
                <div className="widget widget_search">
                  <h4 className="widget_title">Search Here...</h4>
                  <img src="assets/images/blog/line1.svg" alt="" />
                  <form className="search-form input-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="search" placeholder="Search Here..." />
                    <button type="submit">Search</button>
                  </form>
                </div>
                <div className="widget">
                  <h4 className="widget_title">Latest News</h4>
                  <img src="assets/images/blog/line1.svg" alt="" />
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <Link href="/single-blog"><img src="assets/images/blog/img9.png" alt="Blog Image" /></Link>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <Link href="/blog">
                            <img src="assets/images/blog/6.svg" alt="" />
                            24 Feb, 2022</Link>
                          <div className="post-title"><Link className="text-inherit" href="/single-blog">How to Optimize Your IT Infrastructure for...</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link href="/single-blog"><img src="assets/images/blog/img10.png" alt="Blog Image" /></Link>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <Link href="/blog">
                            <img src="assets/images/blog/6.svg" alt="" />
                            January 12, 2024</Link>
                          <div className="post-title"><Link className="text-inherit" href="/single-blog">How IT Infrastructure Can Improve Efficiency...</Link></div>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link href="/single-blog"><img src="assets/images/blog/img11.png" alt="Blog Image" /></Link>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <Link href="/blog">
                            <img src="assets/images/blog/6.svg" alt="" />
                            January 12, 2024</Link>
                          <div className="post-title"><Link className="text-inherit" href="/single-blog">How to Ensure Seamless IT Integration Across...</Link></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget widget_categories widget-categories">
                  <h4 className="widget_title">Category</h4>
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
                  <form className="input-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Email address..." />
                    <button type="submit">Search</button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Q5PG0rMXgvw"}
      />
      {/* video modal end */}


    </>
  );
};

export default SingleBlogArea;