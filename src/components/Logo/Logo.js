import React from "react";

import styles from "./Logo.module.scss";
import { Link } from "@reach/router";

function Logo({ title, shortTitle }) {
  return (
    <Link to="/" className={styles.link}>
      <div className={styles.logo}>
        <div />
        <div />
        <div />
      </div>
      <span className={styles.title}>{title}</span>
      <span className={styles.title + " " + styles.titleMobile}>
        {shortTitle}
      </span>
    </Link>
  );
}

export default Logo;
