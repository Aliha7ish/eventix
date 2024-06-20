/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import EventItem from "./EventItem";
import styles from "../modules/EventsCollection.module.css";

function EventsCollection({ collection, collectionName }) {
  const fetchEvents = async function () {
    const response = await fetch("http://127.0.0.1:8000/api/events", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };
  console.log(fetchEvents());
  return (
    <article className={`container-fluid ${styles.container}`}>
      <p className={styles.collectionName}>{collectionName}</p>
      <ul>
        {/* {fetchEvents.map((event) => {
          return <EventItem key={event.id} event={event} />;
        })} */}
      </ul>
    </article>
  );
}

export default EventsCollection;
