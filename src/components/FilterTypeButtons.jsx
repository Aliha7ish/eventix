/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../modules/FilterTypeButtons.module.css";
import { useState } from "react";
export default function FilterTypeButtons() {
  const [active, setActive] = useState("left");
  console.log(active);
  return (
    <div className={styles["toggle-container"]}>
      <div
        onClick={() => setActive("left")}
        className={`${styles["toggle-panel"]} ${styles["toggle-panel-left"]}`}
      >
        <p>Virtual</p>
      </div>
      <div
        onClick={() => setActive("right")}
        className={`${styles["toggle-panel"]} ${styles["toggle-panel-right"]}`}
      >
        <p>Realtime</p>
      </div>
      <div
        className={`${styles.toggle} ${
          active === "left" ? styles["toggle-left"] : styles["toggle-right"]
        }`}
      ></div>
    </div>
  );
}
