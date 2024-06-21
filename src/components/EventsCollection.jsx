/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";
import EventItem from "./EventItem";
import styles from "../modules/EventsCollection.module.css";
import { useEvent } from "../contextAPI/EventsProvider";

function EventsCollection({ collectionName }) {
  const { events } = useEvent();
  return (
    <article className={`container-fluid ${styles.container}`}>
      <p className={styles.collectionName}>{collectionName}</p>
      <ul>
        {events.map((event) => {
          return <EventItem key={event.id} event={event} />;
        })}
      </ul>
    </article>
  );
}

export default EventsCollection;
