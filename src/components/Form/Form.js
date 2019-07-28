import React, { useEffect, useRef } from "react";
import faker from "faker";

import styles from "./Form.module.scss";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Form({ onSubmit }) {
  const nameInput = useRef(null);
  const speciesInput = useRef(null);
  const daysInput = useRef(null);

  useEffect(() => {
    nameInput.current.value = faker.name.findName();
    speciesInput.current.value = shuffle([
      "fikus",
      "awokado",
      "jakaś roślina",
      "kaktus",
      "aloes",
      "paproć",
      "pelargonia",
      "szeflera drzewkowata",
      "echmea wstęgowata",
      "aspidistria wyniosła",
      "dracena deremeńska",
      "zielistka sternbergera",
      "pandan veitcha",
      "epipremnum złociste",
      "fiołek",
      "palma koralowa",
      "jabłoń",
      "bonsai"
    ])[0];
    daysInput.current.value = Math.round((Math.random() * 60) % 60);
  }, [nameInput, speciesInput, daysInput]);

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Add new green family member</h1>
      <form className={styles.form}>
        <div className={styles.column}>
          <label className={styles.label}>Name</label>
          <input ref={nameInput} className={styles.input} />
          <label className={styles.label}>Species</label>
          <input ref={speciesInput} className={styles.input} />
          <label className={styles.label}>Should be water every X days</label>
          <input ref={daysInput} className={styles.input} />
          <button
            className={styles.button}
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              onSubmit({
                name: nameInput.current.value,
                species: speciesInput.current.value,
                days: daysInput.current.value,
                start: Math.round(Date.now() / 86400000),
                last: Math.round(Date.now() / 86400000),
                happiness: 0
              });
            }}
          >
            Submit
          </button>
        </div>
        <div className={styles.column}>
          <h2>Remember to check your plants needs</h2>
          <p className={styles.description}>
            If you have an internet connection, there are no excuses for you.
            Find the species of your plant and how often it requires watering or
            other activities.{" "}
          </p>
          <p className={styles.description}>
            Our integrated AI will learn from users and suggest you the best
            settings without additional activities, but for now, you have to do
            this by yourself.
          </p>
        </div>
      </form>
    </div>
  );
}

export default Form;
