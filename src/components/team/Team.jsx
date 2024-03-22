import React from "react";
import styles from "./Team.module.css";
import {
  FaTwitter,
  FaFacebook,
  FaInstagramSquare,
  FaSkype,
  FaLinkedin,
} from "react-icons/fa";

const Team = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>OUR GREAT TEAM</h2>
        <div className={styles.team}>
          <div className={styles.member}>
            <img src="/images/team/desmond.jpeg" />
            <h3>Oben Desmond</h3>
            <div className={styles.role}>
              <i>Chief Executive Officer</i>
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
          <div className={styles.member}>
            <img src="/images/team/ndeh.jpeg" />
            <h3>Akumah Ndeh-Ngwa</h3>
            <div className={styles.role}>
              <i>Designer</i>
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
          <div className={styles.member}>
            <img src="/images/team/agnes.jpeg" />
            <h3>Tambeayuk Agnes</h3>
            <div className={styles.role}>
              <i>Marketer</i>
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
          <div className={styles.member}>
            <img src="/images/team/lizzy.jpeg" />
            <h3>Tabi Lizzy</h3>
            <div className={styles.role}>
              <i>Marketer</i>
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
          <div className={styles.member}>
            <img src="/images/team/theola.jpeg" />
            <h3>Theola Ashu</h3>
            <div className={styles.role}>
              <i>Content Writer</i>
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
      </div>
    </div>
  );
};

export default Team;
