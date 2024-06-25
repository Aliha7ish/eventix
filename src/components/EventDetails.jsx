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
import PopUpWindow from "./PopUpWindow";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import BookingTicketsForm from "./BookingTicketsForm";
function EventDetails({ id }) {
  // const { id } = useParams();

  const { currentEvent, getEvent } = useEvent();
  useEffect(() => {
    getEvent(id);
  }, []);
  const { title, description, image, owner, category, isLive } = currentEvent;
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
              <p className={styles.eventName}>{title}</p>
              <p className={styles.organizer}>user</p>
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
              <Popup
                trigger={
                  <button className="btn-gradient">
                    {isLive ? "Join now" : "Book a ticket"}
                  </button>
                }
              >
                <PopUpWindow>
                  <BookingTicketsForm />
                </PopUpWindow>
              </Popup>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
