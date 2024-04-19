/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../modules/EventAttendeesComponent.module.css";
function EventAttendeesComponent({ className = "" }) {
  return (
    <div className={`${styles.attendeesContainer} ${className}`}>
      <div className={styles.imagesContainer}>
        <img
          className={styles.attendImg}
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <img
          className={styles.attendImg}
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <img
          className={styles.attendImg}
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
      <div>
        <p className={styles.total}>+78 attendees</p>
      </div>
    </div>
  );
}

export default EventAttendeesComponent;
