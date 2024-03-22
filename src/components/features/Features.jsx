import React from "react";
import styles from "./Features.module.css";
import { SiSimpleanalytics } from "react-icons/si";
import { MdAttachMoney, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FiFlag } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { IoMdHappy } from "react-icons/io";
import { BsFiles } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuUsers } from "react-icons/lu";

const Features = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.features}>
          <h2>CHECK THE FEATURES</h2>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <div className={styles.listIcon}>
                <IoMdSearch />
              </div>
              <div className={styles.listDetails}>
                Search Questions & Answers
              </div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.listIcon}>
                <SiSimpleanalytics />
              </div>
              <div className={styles.listDetails}>Real Rime Analytics</div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.listIcon}>
                <MdAttachMoney />
              </div>
              <div className={styles.listDetails}>Earn money</div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.listIcon}>
                <MdOutlineShoppingCart />
              </div>
              <div className={styles.listDetails}>Buy Authentic Solutions</div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.listIcon}>
                <FaRegStar />
              </div>
              <div className={styles.listDetails}>Star Content</div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.listIcon}>
                <FiFlag />
              </div>
              <div className={styles.listDetails}>
                Flag Inappropriate Content
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cardDiv}>
        <div className={styles.container}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <span className={styles.icon}>
                <IoMdHappy />
              </span>
              <h2>232</h2>
              <p>Happy Clients</p>
            </div>
            <div className={styles.card}>
              <span className={styles.icon}>
                <BsFiles />
              </span>
              <h2>521</h2>
              <p>Files</p>
            </div>
            <div className={styles.card}>
              <span className={styles.icon}>
                <MdOutlineFileDownload />
              </span>
              <h2>1463</h2>
              <p>Downloads</p>
            </div>
            <div className={styles.card}>
              <span className={styles.icon}>
                <LuUsers />
              </span>
              <h2>15</h2>
              <p>Providers</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.howItWorks}>
          <div className={styles.image}>
            <img src="/images/about/details-1.png" />
          </div>
          <div className={styles.content}>
            <h2>How Does Quesers Work?</h2>
            <p>
              <i>
                Quesers is a 2 party system geared towards providing solutions
                to Examinations and Continued Assessment questions. Quesers
                breaches the gap caused by lack of availability by bringing the
                knowledge to the population. Steps on how to use the Mobile app.
              </i>
            </p>
            <div className={styles.list}>
              <p>
                <span>
                  <FaCheck />
                </span>
                <a href="#">Download</a> the Quesers app from playstore
              </p>
              <p>
                <span>
                  <FaCheck />
                </span>
                <a href="#">Download</a> the Quesers app from AppStore
              </p>
              <p>
                <span>
                  <FaCheck />
                </span>{" "}
                Launch app and undergo phone number Authentication process
              </p>
              <p>
                <span>
                  <FaCheck />
                </span>
                Select an initial category for application suggestions
              </p>
              <p>
                <span>
                  <FaCheck />
                </span>
                If not satisfied by suggestions, search and download paper
              </p>
              <p>
                <span>
                  <FaCheck />
                </span>
                Read and Enjoy
              </p>
            </div>
            <div>
              <p>
                Quesers was designed for the masses with upmost simplicity, yet
                providing quality well needed content.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.analysis}>
          <div className={styles.content}>
            <h2>Real-time Analysis of Provided Content</h2>
            <p>
              <i>
                Content Providers earn are paid for the data they provide
                depending on the number of downloads they get per paper they
                provide.
              </i>
            </p>
            <p>
              Real time graphical anaylis of the provided content is present to
              the provider for monitoring and transparency purposes. To become a
              provider:
            </p>
            <div className={styles.list}>
              <p>
                <span>
                  <FaCheck />
                </span>
                Must be a user of the Quesers application
              </p>
              <p>
                <span>
                  <FaCheck />
                </span>
                A written composition requesting to a content provider
              </p>
              <p>
                <span>
                  <FaCheck />
                </span>
                No payment required
              </p>
            </div>
          </div>
          <div className={styles.image}>
            <img src="/images/about/details-4.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
