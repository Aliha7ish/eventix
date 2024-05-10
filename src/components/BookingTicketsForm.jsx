/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styles from "../modules/BookingTicketsForm.module.css";
import ButtonComp from "./ButtonComp";
function BookingTicketsForm() {
  return (
    <form className={`${styles.form} container-fluid px-md-5 px-3`}>
      <div className="row">
        <p className={`${styles.formHeader} col-12`}>Book your ticket</p>
        <div className={`${styles.personalInfoSide} col-6`}>
          <p>Personal info</p>
          <article className="row">
            <div className="col-12 col-md-7 col-sm-9">
              <label htmlFor="first-name">first name</label>
              <input
                type="text"
                id="first-name"
                className={`form-control ${styles.bookingInput}`}
                name="first name"
              />
            </div>
            <div className="col-12 col-md-7 col-sm-9">
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
        <div className={`${styles.billingInfoSide} col-6`}>
          <p>billing info</p>
          <article className="row">
            <div className={`${styles.cardNoContainer} col-12`}>
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
            <div className={`${styles.billingLastInputsContainer} col-12`}>
              <div className="row justify-content-md-between">
                <div className="col-md-4 col-12">
                  <label htmlFor="exp-date">exp date</label>
                  <input
                    type="month"
                    className={`form-control ${styles.bookingInput}`}
                    name="exp-date"
                    id="exp-date"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <label htmlFor="cvv-number">CVV</label>
                  <input
                    type="text"
                    className={`form-control ${styles.bookingInput}`}
                    id="cvv-number"
                    name="cvv-number"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
        <div
          className={`${styles.btnContainer} d-flex justify-content-center justify-content-md-end`}
        >
          <ButtonComp className={`btn-gradient ${styles.bookingFormBtn}`}>
            Confirm
          </ButtonComp>
        </div>
      </div>
    </form>
  );
}

export default BookingTicketsForm;
