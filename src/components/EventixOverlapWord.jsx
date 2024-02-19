/* eslint-disable react/prop-types */
import EventixWordGradient from "./EvintexWordGradient";
import styles from "../modules/EventixOverlapWord.module.css";

function EventixOverlapWord({ className = "", word }) {
  return (
    <span className={`${styles["text-box"]} ${className}`}>
      <span className={styles["overlap-word"]}>{word}</span>
      <EventixWordGradient />
    </span>
  );
}

export default EventixOverlapWord;
