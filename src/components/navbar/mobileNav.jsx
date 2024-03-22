import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MdOutlineMenu } from "react-icons/md";
import styles from "./navbar.module.css";

const MobileNav = () => {
  const { pathname } = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  return (
    <div className={styles.mobileNav}>
      {/* <!-- Offcanvas Menu Section Begin --> */}
      <div className="offcanvas-menu-overlay"></div>
      <div className={`canvas-open`} onClick={() => setShowCanvas(!showCanvas)}>
        <MdOutlineMenu />
      </div>

      <Offcanvas
        show={showCanvas}
        onHide={() => setShowCanvas(!showCanvas)}
        className={styles.offcanvas_menu_wrapper}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>
              Ques<span>ers</span>
            </h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.offcanvas_menu}>
            <nav className="mainmenu mobile-menu">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="/become-a-vendor" className={styles.btn}>
                    Become a Vendor
                  </a>
                </li>
              </ul>
            </nav>
            <ul className="top-widget">
              <li>
                <i className="fa fa-phone"></i> (+237) 345-678-690
              </li>
              <li>
                <i className="fa fa-envelope"></i> findieteam00@gmail.com
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* <!-- Offcanvas Menu Section End --> */}
    </div>
  );
};

export default MobileNav;
