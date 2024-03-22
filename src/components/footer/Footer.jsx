import React from "react";
import styles from "./Footer.module.css";
import { FaSearchLocation, FaTelegramPlane } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import {
  FaTwitter,
  FaFacebook,
  FaInstagramSquare,
  FaSkype,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.quesers}>
          <div>
            <h2>
              Ques<span className={styles.brand}>ers</span>
            </h2>
            <div>
              <i>A Weapon To Academic Success</i>
            </div>
            <div>
              <p>University of Buea</p>
              <p>Cameroon</p>
            </div>
            <div className={styles.socials}>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagramSquare />
              </a>
              <a href="#">
                <FaSkype />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.listItem}>
            <div className={styles.icon}>
              <FaSearchLocation />
            </div>
            <div>
              <h2>Location:</h2>
              <p>University of Buea, Cameroon</p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.icon}>
              <MdOutlineEmail />
            </div>
            <div>
              <h2>Email:</h2>
              <p>findieteam00@gmail.com</p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.icon}>
              <IoPhonePortraitOutline />
            </div>
            <div>
              <h2>Call:</h2>
              <p>University of Buea, Cameroon</p>
            </div>
          </div>
        </div>
        <div className={styles.formDiv}>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button>
              <span>
                <FaTelegramPlane />
              </span>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
