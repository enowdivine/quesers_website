import React from "react";
import styles from "./About.module.css";
import { IoIosSearch } from "react-icons/io";
import { RiDownload2Line } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.solutions}>
        <div className={styles.image}>
          <img src="/images/about/location.png" />
        </div>
        <div className={styles.content}>
          <h2>Quesers As A Solution</h2>
          <p>
            Quesers is a mobile app that serves as a search engine for past
            questions and answers. Our goal is to assist students to perform
            better in their academics by providing them with necessary study
            material such as past questions and answers.
          </p>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <div className={styles.icon}>
                <IoIosSearch />
              </div>
              <div className={styles.listContent}>
                <h3>Locate Questions and Answers</h3>
                <p>
                  Quesers efficient search engines rapidly locates questions and
                  their accompanying answers matching keywords provided by the
                  user
                </p>
              </div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.icon}>
                <RiDownload2Line />
              </div>
              <div className={styles.listContent}>
                <h3>Download Questions Alongside their Answers</h3>
                <p>
                  Browse through the rich feedback from your search, pick and
                  download the selected few.
                </p>
              </div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.icon}>
                <IoDocumentTextOutline />
              </div>
              <div className={styles.listContent}>
                <h3>Read and Enjoy!</h3>
                <p>Delve into the newly acquired reading material.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.community}>
        <div className={styles.content}>
          <h2>Quesers Community Platform</h2>
          <p>
            The Quesers Community Platform is a software service that enables
            you to upload your old past questions in a presentable way and earn
            income when it passes the review stage.
          </p>
          <p>
            In this way students can be able to earn from these old Questions
            they no longer have use for and at the same time helping junior
            students behind them who will reuse them while studying for their
            exams.
          </p>
          <div className={styles.btnDiv}>
            <a href="#">Join Community</a>
          </div>
        </div>
        <div className={styles.image}>
          <img src="/images/about/community.jpg" />
        </div>
      </div>

      <div className={styles.videoSection}>
        <h2>Who We Are</h2>
        <div className={styles.videoDiv}>
          <iframe
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/pQ5_sgjvpB8?si=X9pSbVYeP-mfb4Px`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
