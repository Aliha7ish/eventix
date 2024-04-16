/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useEvent } from "../contextAPI/EventsProvider";
import styles from "../modules/EventItem.module.css";
import VirtualBadge from "./VirtualBadge";
import { useParams } from "react-router-dom";

function EventItem({ event }) {
  const { id } = useParams();
  const { getEvent } = useEvent();
  useEffect(
    function () {
      getEvent(id);
    },
    [id]
  );
  return (
    <li>
      {event?.isVirtual ? <VirtualBadge /> : null}
      <div className={styles.imgContainer}>
        <img src={event.image} />
      </div>
      <div className={styles.eventOrgContainer}>
        <p className={styles.eventName}>{event.eventName}</p>
        <p className={styles.organizer}>{event.organizer}</p>
      </div>
      <div className={styles.eventDateContainer}>
        <p>{event.date}</p>
        <p>{event.time}</p>
      </div>
    </li>
  );
}

export default EventItem;
