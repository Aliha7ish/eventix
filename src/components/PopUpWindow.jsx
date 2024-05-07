/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import styles from "../modules/PopUpWindow.module.css";
export default function PopUpWindow() {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>{<Outlet />}</div>
    </div>
  );
}
