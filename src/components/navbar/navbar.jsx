import React from "react";
import styles from "./navbar.module.css";

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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#" className={styles.btn}>
              Become a Vendor
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
