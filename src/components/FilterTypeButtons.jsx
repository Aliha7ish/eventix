/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../modules/FilterTypeButtons.module.css";
import { useState } from "react";
export default function FilterTypeButtons({ left, right, handleFilter }) {
  const [active, setActive] = useState("left");

  return (
    <div className={styles["toggle-container"]}>
      <div
        onClick={(e) => {
          setActive("left");
          handleFilter(e.currentTarget.getAttribute("data-value"));
        }}
        data-value={left}
        className={`${styles["toggle-panel"]} ${styles["toggle-panel-left"]}`}
      >
        <p>{left}</p>
      </div>
      <div
        onClick={(e) => {
          setActive("right");
          handleFilter(e.currentTarget.getAttribute("data-value"));
        }}
        data-value={right}
        className={`${styles["toggle-panel"]} ${styles["toggle-panel-right"]}`}
      >
        <p>{right}</p>
      </div>
      <div
        className={`${styles.toggle} ${
          active === "left" ? styles["toggle-left"] : styles["toggle-right"]
        }`}
      ></div>
    </div>
  );
}
