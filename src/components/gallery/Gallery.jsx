// Gallery.js

import React, { useRef } from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const galleryRef = useRef(null);

  return (
    <div>
      <div className={styles.container}>
        <h2>QUESERS APP SAMPLES</h2>
      </div>
      <div className={styles["gallery-container"]}>
        <div className={styles.gallery} ref={galleryRef}>
          {/* Add your images here */}
          <img
            src="/images/about/details-4.png"
            alt="Image 1"
            className={styles["gallery-item"]}
          />
          <img
            src="/images/about/details-4.png"
            alt="Image 2"
            className={styles["gallery-item"]}
          />
          <img
            src="/images/about/details-4.png"
            alt="Image 1"
            className={styles["gallery-item"]}
          />
          <img
            src="/images/about/details-4.png"
            alt="Image 2"
            className={styles["gallery-item"]}
          />
          <img
            src="/images/about/details-4.png"
            alt="Image 1"
            className={styles["gallery-item"]}
          />
          <img
            src="/images/about/details-4.png"
            alt="Image 2"
            className={styles["gallery-item"]}
          />
          <img
            src="/images/about/details-4.png"
            alt="Image 1"
            className={styles["gallery-item"]}
          />
          <img
            src="/images/about/details-4.png"
            alt="Image 2"
            className={styles["gallery-item"]}
          />
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
