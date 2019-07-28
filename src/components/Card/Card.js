import React from "react";

import styles from "./Card.module.scss";

export function CardContainer(props) {
  return (
    <article {...props} className={styles.card}>
      {props.children}
    </article>
  );
}

export function CardTitle(props) {
  return (
    <h2 className={styles.title} {...props}>
      {props.children}
    </h2>
  );
}

export function CardMeta({ items, children }) {
  return (
    <div className={styles.meta}>
      {items && items.map(e => <span key={e}>{e}</span>)}
      {children}
    </div>
  );
}

export function CardButton({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
export function CardTwoColumns({ children }) {
  return <div>{children}</div>;
}
