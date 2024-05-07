/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styles from "../modules/BookingTicketsForm.module.css";
import ButtonComp from "./ButtonComp";
function BookingTicketsForm() {
  return (
    <form>
      <p className={styles.formHeader}>Book your ticket</p>
      <div className={styles.personalInfoSide}>
        <p>Personal info</p>
        <article>
          <div>
            <label htmlFor="first-name">first name</label>
            <input
              type="text"
              id="first-name"
              className={`form-control ${styles.bookingInput}`}
              name="first name"
            />
          </div>
          <div>
            <label htmlFor="last-name">last name</label>
            <input
              id="last-name"
              className={`form-control ${styles.bookingInput}`}
              type="text"
              name="last name"
            />
          </div>
        </article>
      </div>
      <div className={styles.billingInfoSide}>
        <p>billing info</p>
        <article>
          <div className={styles.cardNoContainer}>
            <label htmlFor="card-number">card no.</label>
            <div className={styles.cardNoInputs}>
              <input
                id="card-number"
                className={`form-control ${styles.bookingInput}`}
                type="text"
                name="card-number-1"
                minLength={4}
                maxLength={4}
              />
              <input
                id="card-number"
                className={`form-control ${styles.bookingInput}`}
                type="text"
                name="card-number-2"
                minLength={4}
                maxLength={4}
              />
              <input
                id="card-number"
                className={`form-control ${styles.bookingInput}`}
                type="text"
                name="card-number-3"
                minLength={4}
                maxLength={4}
              />
              <input
                id="card-number"
                className={`form-control ${styles.bookingInput}`}
                type="text"
                name="card-number-4"
                minLength={4}
                maxLength={4}
              />
            </div>
          </div>
          <div className={styles.billingLastInputsContainer}>
            <div>
              <label htmlFor="exp-date">exp date</label>
              <input
                type="month"
                className={`form-control ${styles.bookingInput}`}
                name="exp-date"
                id="exp-date"
              />
            </div>
            <div>
              <label htmlFor="cvv-number">CVV</label>
              <input
                type="text"
                className={`form-control ${styles.bookingInput}`}
                id="cvv-number"
                name="cvv-number"
              />
            </div>
          </div>
        </article>
      </div>
      <ButtonComp className={`btn-gradient ${styles.bookingFormBtn}`}>
        Confirm
      </ButtonComp>
    </form>
  );
}

export default BookingTicketsForm;
