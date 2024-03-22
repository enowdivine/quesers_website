import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import styles from "./Gallery.module.css";

const images = [
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
  "/images/hero/heroImage.png",
];

const AdvancedCarousel = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <div className={styles.gallery}>
      <ul
        ref={scrollRef}
        style={{
          display: "flex",
          overflow: "auto",
          scrollSnapType: "x mandatory",
        }}
      >
        {images.map((img, i) => (
          <li className={styles.listItem} key={i}>
            <img src={img} />
          </li>
        ))}
      </ul>
      {/* <div>
        {activePageIndex + 1} / {pages.length}
      </div> */}
      {/* <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button> */}
      <ol className={styles.navigation}>
        {pages.map((_, i) => (
          <li key={i}>
            <button
              style={i === activePageIndex ? { opacity: 0.5 } : {}}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AdvancedCarousel;
