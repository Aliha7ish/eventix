/* eslint-disable react/prop-types */
import styles from "../modules/BodyGradientBackground.module.css";
function BodyGradientBackground({ width, height = 0 }) {
  return (
    <div
      className={styles["shape-gradient"]}
      style={{ width: `${width}rem`, height: `${width + height}rem` }}
    ></div>
  );
}

export default BodyGradientBackground;
