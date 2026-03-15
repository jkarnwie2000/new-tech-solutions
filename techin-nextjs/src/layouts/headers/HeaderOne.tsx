"use client";
import OffCanvas from "@/common/OffCanvas";
import Sidebar from "@/common/Sidebar";
import menu_data from "@/data/menu-data";
import useSticky from "@/hooks/use-sticky";
import Link from "next/link";
import { useState } from "react";


const HeaderOne = () => {

  const {sticky } = useSticky();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className={`site-header techin-header-section techin-header-one ${sticky ? 'sticky-menu' : ''}`} id="sticky-menu">
        <div className="container">
          <div className="techin-header-menu ">
            <nav className="navbar site-navbar">

              <div className="row gx-3 align-items-center">
                <div className="col-12 col-sm-auto ">
                  <div className="header-logo1 techin_screenfix_left">
                    <Link href="/">
                      <img src="assets/images/logo/logo-white.svg" alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div className="techin-main-menu-item techin_screenfix_right">
                    <nav className="main-menu menu-style1 d-none d-xl-block menu-left">
                      <ul>
                        {menu_data.map((item, i) => (
                          <li key={i} className={`${item.has_dropdown ? 'menu-item-has-children' : ''}`}>
                            <Link href={item.link}>{item.title}</Link>
                            {item.has_dropdown && (
                              <ul className="sub-menu"> 
                                {item.sub_menus?.map((sub_item, sub_i) => {
                                  if ('has_inner_dropdown' in sub_item) {
                                    return (
                                      <li key={sub_i} className={`${sub_item.has_inner_dropdown ? 'menu-item-has-children' : ''}`}>
                                        <Link href={sub_item.link || "#"} className={`${sub_item.has_inner_dropdown ? 'no-border' : ''}`}>{sub_item.title}</Link>
                                        {sub_item.has_inner_dropdown && (
                                          <ul className="sub-menu">
                                            {sub_item.sub_menus?.map((inner_sub_item, inner_sub_i) => (
                                              <li key={inner_sub_i}>
                                                <Link href={inner_sub_item.link || "#"}>{inner_sub_item.title}</Link>
                                              </li>
                                            ))} 
                                          </ul>
                                        )}
                                      </li>
                                    );
                                  } else {
                                    return (
                                      <li key={sub_i} >
                                        <Link href={sub_item.link || "#"}>{sub_item.title}</Link>
                                      </li>
                                    );
                                  }
                                })}
                              </ul>
                            )}
                          </li>
                        ))}                         
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
                <form className="header-search-form">
                  <input type="text" placeholder="Search Here..." />
                  <i className="ri-search-line"></i>
                </form>
                <div className="techin-header-triger" onClick={() => setOpen(!open)}>
                  <img src="assets/images/hero/1.svg" alt="" />
                </div>
              </div>

              <button className="techin-menu-toggle d-inline-block d-xl-none" onClick={() => setOpenMenu(!openMenu)}>
                <span></span>
              </button>

            </nav>
          </div>
        </div>

        <div className="techin-header-search-section">
          <div className="container">
            <div className="techin-header-search-box">
              <input type="search" placeholder="Search here..." />
              <button id="header-search" type="button"><i className="ri-search-line"></i></button>
              <p>Type above and press Enter to search. Press Close to cancel.</p>
            </div>
          </div>
          <div className="techin-header-search-close">
            <i className="ri-close-line"></i>
          </div>
        </div>
      </header>
      <div className="search-overlay"></div>

      <Sidebar open={open} setOpen={setOpen} />
      <OffCanvas openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default HeaderOne;