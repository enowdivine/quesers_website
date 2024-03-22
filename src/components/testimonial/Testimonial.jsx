import React from "react";
import styles from "./Testimonial.module.css";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import { FaUserCircle } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}></div>
      <Carousel fade>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <div className={styles.user}>
            <div className={styles.icon}>
              <FaUserCircle />
            </div>
            <h2>Tabi Lizzy</h2>
            <p>User</p>
            <div className={styles.comment}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                fugiat deleniti facilis minima consequatur, voluptatum
                laboriosam mollitia magnam nobis. Quos blanditiis, repellendus
                consequatur similique expedita recusandae. At hic iure impedit?
              </p>
            </div>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <div className={styles.user}>
            <div className={styles.icon}>
              <FaUserCircle />
            </div>
            <h2>Tabi Lizzy</h2>
            <p>User</p>
            <div className={styles.comment}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                fugiat deleniti facilis minima consequatur, voluptatum
                laboriosam mollitia magnam nobis. Quos blanditiis, repellendus
                consequatur similique expedita recusandae. At hic iure impedit?
              </p>
            </div>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <div className={styles.user}>
            <div className={styles.icon}>
              <FaUserCircle />
            </div>
            <h2>Tabi Lizzy</h2>
            <p>User</p>
            <div className={styles.comment}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                fugiat deleniti facilis minima consequatur, voluptatum
                laboriosam mollitia magnam nobis. Quos blanditiis, repellendus
                consequatur similique expedita recusandae. At hic iure impedit?
              </p>
            </div>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonial;
