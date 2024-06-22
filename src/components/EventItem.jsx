/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../modules/EventItem.module.css";
import VirtualBadge from "./VirtualBadge";
import { Link } from "react-router-dom";
import ButtonComp from "./ButtonComp";

function EventItem({ event, addButton = false }) {
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    // Get day and month
    const day = date.getDate();
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
    );

    // Get hour, minute, and period (AM/PM)
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    const formattedMinutes = minutes.toString().padStart(2, "0"); // Ensure two digits

    return `${day}-${month} ${formattedHours}:${formattedMinutes}  ${period}`;
  };
  return (
    <Link to={`/events/${event.id}`}>
      <div className={styles.eventItem}>
        {event.type === "virtual" ? <VirtualBadge /> : null}
        <div className={styles.imgContainer}>
          <img src={event.image}></img>
        </div>
        <div className={styles.eventOrgContainer}>
          <p className={styles.eventName}>{event.title}</p>
          <p className={styles.organizer}>Osama</p>
        </div>
        <div className={styles.eventDateContainer}>
          <p>{formatDateTime(event.start_time)}</p>
        </div>
        {addButton ? <ButtonComp /> : ""}
      </div>
    </Link>
  );
}

export default EventItem;
