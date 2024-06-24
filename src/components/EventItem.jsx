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
    const formattedDay = `${day}-${month}`;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;

    return { formattedDay, formattedTime };
  };
  const { formattedDay, formattedTime } = formatDateTime(event.start_time);
  return (
    <Link to={`/discover/${event.id}`}>
      <div className={styles.eventItem}>
        {event.type === "virtual" && (
          <div className={styles.eventHeader}>
            <VirtualBadge className={styles.headerVirtualBadge} />
          </div>
        )}
        <div className={styles.imgContainer}>
          <img src={event.image}></img>
        </div>
        <div className={styles.eventFooter}>
          <div className={styles.eventOuterOrgContainer}>
            <div className={styles.eventOrgContainer}>
              <p className={`text-truncate ${styles.eventName}`}>
                {event.title}
              </p>
              <p className={styles.organizer}>Osama</p>
            </div>
            <div className={styles.eventDateContainer}>
              <p>{formattedDay}</p>
              <p>{formattedTime}</p>
            </div>
          </div>
          {addButton ? (
            <ButtonComp
              link={`/discover/${event.id}`}
              className={`btn-gradient ${styles.eventBtn}`}
            >
              Join now
            </ButtonComp>
          ) : (
            ""
          )}
        </div>
      </div>
    </Link>
  );
}

export default EventItem;
