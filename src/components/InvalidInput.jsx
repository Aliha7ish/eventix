/* eslint-disable react/prop-types */
import styles from "../modules/InvalidInput.module.css";
function InvalidInput({ children }) {
  return <p className={styles.error}>{children}</p>;
}

export default InvalidInput;
