import React from "react";
import styles from "./errorpage.module.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to={"/"}>Return Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
