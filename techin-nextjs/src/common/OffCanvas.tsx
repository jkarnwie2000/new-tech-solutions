"use client";
import Link from "next/link";
import { useState } from "react";

const mobile_menu_data = [
  {
    title: "Demo",
    has_dropdown: true,
    link: "#",
    submenu: [
      { title: "Home 01", link: "/" },
      { title: "Home 02", link: "/home-2" },
      { title: "Home 03", link: "/home-3" },
    ],
  },
  {
    title: "Pages",
    has_dropdown: true,
    link: "#",
    submenu: [
      { title: "About Us", link: "/about-us" },
      { title: "Pricing", link: "/pricing" },
      { title: "Blog", link: "/blog" },
      { title: "Blog grid", link: "/blog-grid" },
      { title: "Blog Details", link: "/single-blog" },
      { title: "service", link: "/service" },
      { title: "service details", link: "/single-service" },
      { title: "team", link: "/team" },
      { title: "team details", link: "/single-team" },
      { title: "faq", link: "/faq" },
      { title: "errors 404", link: "/errors-404" }, 
    ],
  },
  {
    title: "Portfolio",
    has_dropdown: true,
    link: "#",
    submenu: [
      { title: "Portfolio", link: "/portfolio" },
      { title: "Portfolio Details", link: "/single-portfolio" },
    ],
  },
  {
    title: "Blog",
    has_dropdown: true,
    link: "#",
    submenu: [
      { title: "Blog", link: "/blog" },
      { title: "Blog Grid", link: "/blog-grid" },
      { title: "Blog details", link: "/single-blog" },
    ],
  },
  {
    title: "Contact Us",
    has_dropdown: false,
    link: "/contact-us",
  },
];


interface OffCanvasProps {
  setOpenMenu: (value: boolean) => void;
  openMenu: boolean;
}


const OffCanvas = ({setOpenMenu, openMenu} : OffCanvasProps) => {

    const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };


  return (
    <>
      <div className={`techin-menu-wrapper ${openMenu ? "techin-body-visible" : ""}`}>
        <div className="techin-menu-area text-center">
          <div className="techin-menu-mobile-top">
            <div className="mobile-logo">
              <Link href="/">
                <img src="assets/images/logo/logo1.svg" alt="logo" />
              </Link>
            </div>
            <button className="techin-menu-toggle mobile" onClick={() => setOpenMenu(false)}>
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="techin-mobile-menu">
            <ul>
              {mobile_menu_data.map((item, i) => (
                <li key={i} className={`menu-item-has-submenu menu-item-has-children techin-item-has-children ${navTitle === item.title ? "techin-active" : ""}`}>
                  <Link href={item.link}>{item.title}
                  {item.has_dropdown ? <span className="techin-mean-expand" onClick={() => openMobileMenu(item.title)}></span> : null} 
                  </Link>
                  {item.has_dropdown && (
                    <ul className={`sub-menu techin-submenu ${navTitle === item.title ? "techin-open" : ""}`} style={{ display: navTitle === item.title ? "block" : "none", }}>
                      {item.submenu?.map((submenu, i) => (
                        <li key={i}>
                          <Link href={submenu.link}>{submenu.title}</Link>
                        </li>                        
                      ))} 
                    </ul>                    
                  )}
                </li>
              ))} 
            </ul>
          </div>
          <div className="techin-mobile-menu-btn">
            <Link className="techin-default-btn sm-size" href="/contact-us" data-text="Get in Touch"><span className="btn-wraper">Get in Touch</span></Link>
            <Link className="techin-default-btn sm-size" href="/contact-us" data-text="Get in Touch"><span className="btn-wraper">Get in Touch</span></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
