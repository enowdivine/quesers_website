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
          <div className={styles.user}>
            <div className={styles.icon}>
              <FaUserCircle />
            </div>
            <h2>Charlie Frost</h2>
            <p>User</p>
            <div className={styles.comment}>
              <blockquote>
                <p>
                  <i>
                    My experience with the app so far is good . Especially for a
                    student just entering the university it helps you prepare
                    for exams more efficiently.
                  </i>
                </p>
              </blockquote>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.user}>
            <div className={styles.icon}>
              <FaUserCircle />
            </div>
            <h2>Tabi Lizzy</h2>
            <p>User</p>
            <div className={styles.comment}>
              <blockquote>
                <p>
                  <i>
                    Excellent app and an amazing UI. it is easy to navigate.
                  </i>
                </p>
              </blockquote>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.user}>
            <div className={styles.icon}>
              <FaUserCircle />
            </div>
            <h2>Mbu Tabenyang Desmond</h2>
            <p>User</p>
            <div className={styles.comment}>
              <blockquote>
                <p>
                  <i>
                    Great app easy to use, having solved passed CA and Exams
                    questions especially FET.
                  </i>
                </p>
              </blockquote>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.user}>
            <div className={styles.icon}>
              <FaUserCircle />
            </div>
            <h2>Nji Daniel</h2>
            <p>User</p>
            <div className={styles.comment}>
              <blockquote>
                <p>
                  <i>
                    Excellent UI..Easy to use and very fast. Thanks for this
                    app..it will really go a long way.
                  </i>
                </p>
              </blockquote>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.user}>
            <div className={styles.icon}>
              <FaUserCircle />
            </div>
            <h2>Charlie Frost</h2>
            <p>User</p>
            <div className={styles.comment}>
              <blockquote>
                <p>
                  <i>
                    My experience with the app so far is good . Especially for a
                    student just entering the university it helps you prepare
                    for exams more efficiently.
                  </i>
                </p>
              </blockquote>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonial;
