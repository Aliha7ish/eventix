/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styles from "../modules/PopUpWindow.module.css";
export default function PopUpWindow({ children }) {
  // -------------------------------------
  return (
    <div className={`${styles.popup}`}>
      <div className={styles.popupContent}>{children}</div>
    </div>
  );
}
