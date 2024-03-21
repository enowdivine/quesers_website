import React from "react";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>CHECK OUR PRICING</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.title}>Free</div>
            <div className={styles.content}>
              <div>
                <p className={styles.price}>
                  XAF
                  <sub>
                    <p className={styles.amount}>0</p>
                  </sub>{" "}
                  <p className={styles.month}>/ month</p>
                </p>
                <p>Free on playstore</p>
              </div>
            </div>
            <div className={styles.cfooter}>
              <a href="#">Download Android Now</a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.title}>Free</div>
            <div className={styles.content}>
              <div>
                <p className={styles.price}>
                  XAF
                  <sub>
                    <p className={styles.amount}>0</p>
                  </sub>{" "}
                  <p className={styles.month}>/ month</p>
                </p>
                <p>Free on AppStore</p>
              </div>
            </div>
            <div className={styles.cfooter}>
              <a href="#">Download iOS Now</a>
            </div>
          </div>

          <div className={styles.card2}>
            <div className={styles.title}>Paper</div>
            <div className={styles.content}>
              <div>
                <p className={styles.price}>
                  XAF
                  <sub>
                    <p className={styles.amount}>undefined</p>
                  </sub>{" "}
                  <p className={styles.month}>/ month</p>
                </p>
                <p className={styles.details}>Depends on Provider</p>
                <p>One time Purchase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
