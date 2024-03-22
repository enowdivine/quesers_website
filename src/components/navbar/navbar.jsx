import React from "react";
import styles from "./navbar.module.css";
import MobileNav from "./mobileNav";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <img src="/images/logo.png" />
        <h2>
          Ques<span className={styles.ers}>ers</span>
        </h2>
      </div>
      <div className={styles.links}>
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
      </div>
      <MobileNav />
    </div>
  );
};

export default Navbar;
