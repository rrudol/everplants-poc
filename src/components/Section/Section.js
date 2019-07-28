import React from "react";

import styles from "./Section.module.scss";

function Section({ children, title }) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
}

export default Section;
