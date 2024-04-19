/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../modules/EventPassKey.module.css";
function EventPassKey() {
  return (
    <form className={styles.form}>
      <label htmlFor="key" className={styles.label}>
        private key
      </label>
      <input
        id="key"
        type="text"
        value=""
        name="key"
        className="form-control"
      />
    </form>
  );
}

export default EventPassKey;
