import React from "react";
import styles from "./Hero.module.css";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <h1>Weapon to Academic Success.</h1>
            <h1 className={styles.brandContent}>
              Ques<span>ers</span>
            </h1>
            <h2>An Educational and Financial Aid to Youths</h2>
            <div className={styles.actionBtns}>
              <a href="#" className={styles.started}>
                Get Started
              </a>
              <a href="#" className={styles.community}>
                Join Community
              </a>
            </div>
            <div className={styles.appBtns}>
              <a href="#">
                <FaGooglePlay />
                Google Play
              </a>
              <a href="#">
                <FaApple />
                App Store
              </a>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <img src="/images/hero/heroImage.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
