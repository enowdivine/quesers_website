import React from "react";
import Accordion from "../accordion/Accordion";
import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <Accordion />
      </div>
    </div>
  );
};

export default Faq;
