/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useEvent } from "../contextAPI/EventsProvider";
import styles from "../modules/EventItem.module.css";
import VirtualBadge from "./VirtualBadge";
import { Link } from "react-router-dom";
import ButtonComp from "./ButtonComp";

function EventItem({ event, addButton = false }) {
  return (
    <Link to={`${event.id}`}>
      <li className={styles.item}>
        {event.type === "virtual" ? <VirtualBadge /> : null}
        <div className={styles.imgContainer}>
          <img src={event.image}></img>
        </div>
        <div className={styles.eventOrgContainer}>
          <p className={styles.eventName}>{event.title}</p>
          <p className={styles.organizer}>{event.owner.name}</p>
        </div>
        <div className={styles.eventDateContainer}>
          <p>start time: {event.start_time}</p>
          <p>end time: {event.end_time}</p>
        </div>
        {addButton ? <ButtonComp /> : ""}
      </li>
    </Link>
  );
}

export default EventItem;
