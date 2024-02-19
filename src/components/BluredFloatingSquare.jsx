/* eslint-disable react/prop-types */
import styles from "../modules/BluredFloatingSquare.module.css";
function BluredFloatingSquare({ className }) {
  return <div className={`${styles.square} ${className}`}></div>;
}

export default BluredFloatingSquare;
