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
    <Link to={`/events/event/${event.id}`}>
      <li className={styles.item}>
        {event?.isVirtual ? <VirtualBadge /> : null}
        <div className={styles.imgContainer}>
          <img src={event.image}></img>
        </div>
        <div className={styles.eventOrgContainer}>
          <p className={styles.eventName}>{event.eventName}</p>
          <p className={styles.organizer}>{event.organizer}</p>
        </div>
        <div className={styles.eventDateContainer}>
          <p>{event.date}</p>
          <p>{event.time}</p>
        </div>
        {addButton ? <ButtonComp /> : ""}
      </li>
    </Link>
  );
}

export default EventItem;
