import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import styles from "./Gallery.module.css";

const images = [
  "/images/app/one.png",
  "/images/app/two.png",
  "/images/app/three.png",
  "/images/app/four.png",
  "/images/app/five.png",
  "/images/app/six.png",
  "/images/app/seven.png",
  "/images/app/eight.png",
  "/images/app/nine.png",
  "/images/app/ten.png",
  "/images/app/eleven.png",
  "/images/app/twelve.png",
  "/images/app/thirtheen.png",
  "/images/app/fourteen.png",
  "/images/app/fifteen.png",
  "/images/app/sixteen.png",
  "/images/app/seventeen.png",
  "/images/app/eighteen.png",
  "/images/app/nineteen.png",
  "/images/app/twenty.png",
  "/images/app/twentyone.png",
  "/images/app/twentytwo.png",
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
      {/* <ol className={styles.navigation}>
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
      </ol> */}
    </div>
  );
};

export default AdvancedCarousel;
