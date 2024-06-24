/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../modules/VirtualBadge.module.css";

function VirtualBadge({ className = "" }) {
  return (
    <div className={`${className} ${styles.badge}`}>
      <span>Virtual</span>
    </div>
  );
}
export default VirtualBadge;
