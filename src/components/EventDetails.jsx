/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import ButtonComp from "./ButtonComp";
import LiveBadge from "./LiveBadge";
import sprite from "../assets/spriteCategory.svg";
import EventPassKey from "./EventPassKey";
import EventAttendeesComponent from "./EventAttendeesComponent";
import { useEvent } from "../contextAPI/EventsProvider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from "../modules/EventDetails.module.css";
function EventDetails() {
  const { id } = useParams();
  const { currentEvent, getEvent } = useEvent();
  useEffect(
    function () {
      getEvent(id);
    },
    [id]
  );
  const { eventName, description, image, organizer, category, isLive } =
    currentEvent;
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={`${styles.imageSide} col-md-4 col-12`}>
            {isLive ? <LiveBadge /> : null}
            <img src={image}></img>
          </div>
          <div
            className={`${styles.informationSide} col-md-8 col-12 px-md-5 px-3`}
          >
            <div className={styles.eventOrgContainer}>
              <p className={styles.eventName}>{eventName}</p>
              <p className={styles.organizer}>{organizer}</p>
            </div>
            <EventAttendeesComponent className={styles.attendContainer} />
            <div className={styles.descriptionContainer}>
              <h3>Description</h3>
              <p>{description}</p>
            </div>
            <div className={styles.eventInfoHostCat}>
              <div className={styles.hosts}>
                <h3>Hosts</h3>
              </div>
              <div className={styles.category}>
                <h3>Category</h3>
                <svg className={styles.categoryIcon}>
                  <use xlinkHref={`${sprite}#${category}`} />
                </svg>
              </div>
            </div>
            <footer className={styles.footer}>
              {isLive ? <EventPassKey /> : <EventAttendeesComponent />}
              <ButtonComp
                className="btn-gradient"
                link={`events/event/${id}/form`}
              >
                {isLive ? "Join now" : "Book a ticket"}
              </ButtonComp>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
