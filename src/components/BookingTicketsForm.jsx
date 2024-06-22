/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styles from "../modules/BookingTicketsForm.module.css";
import ButtonComp from "./ButtonComp";
import PopUpWindow from "./PopUpWindow";
import { useState } from "react";
function BookingTicketsForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    creditCard: "",
    cvv: "",
    expirationDateDisplay: "", // For MM/YY display
    expirationDate: "", // For yyyy-MM storage
  });

  const [errors, setErrors] = useState({});

  const formatExpirationDateDisplay = (date) => {
    const [year, month] = date.split("-");
    return `${month}/${year.slice(-2)}`;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "expirationDate") {
      setFormData({
        ...formData,
        expirationDateDisplay: formatExpirationDateDisplay(value),
        expirationDate: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    // Validate first name
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    } else if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name should contain only letters";
    }

    // Validate last name
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name should contain only letters";
    }

    // Validate credit card number
    if (!formData.creditCard) {
      newErrors.creditCard = "Credit card number is required";
    } else if (!/^\d{16}$/.test(formData.creditCard)) {
      newErrors.creditCard = "Credit card number should be 16 digits";
    }

    // Validate CVV
    if (!formData.cvv) {
      newErrors.cvv = "CVV is required";
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = "CVV should be 3 or 4 digits";
    }

    // Validate expiration date
    if (!formData.expirationDate) {
      newErrors.expirationDate = "Expiration date is required";
    } else {
      const [year, month] = formData.expirationDate.split("-");
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;
      const expYear = parseInt(year, 10);
      const expMonth = parseInt(month, 10);

      if (
        expYear < currentYear ||
        (expYear === currentYear && expMonth < currentMonth)
      ) {
        newErrors.expirationDate = "Expiration date cannot be in the past";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data is valid:", formData);
      // Perform the desired action (e.g., submit the form)
    }
  };
  return (
    <PopUpWindow>
      <form
        onSubmit={handleSubmit}
        className={`${styles.form} container-fluid px-md-5 px-3`}
      >
        <div className="row">
          <p className={`${styles.formHeader} col-12`}>Book your ticket</p>
          <div className={`${styles.personalInfoSide} col-6`}>
            <p>Personal info</p>
            <article className="row">
              <div className="col-12 col-md-7 col-sm-9">
                <label htmlFor="firstName">first name</label>
                <input
                  type="text"
                  id="first-name"
                  className={`form-control ${styles.bookingInput}`}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <span>{errors.firstName}</span>}
              </div>
              <div className="col-12 col-md-7 col-sm-9">
                <label htmlFor="lastName">last name</label>
                <input
                  id="last-name"
                  className={`form-control ${styles.bookingInput}`}
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span>{errors.lastName}</span>}
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
                    <label htmlFor="expirationDate">exp date</label>
                    <input
                      type="month"
                      className={`form-control ${styles.bookingInput}`}
                      name="expirationDate"
                      id="exp-date"
                      value={formData.expirationDate}
                      onChange={handleChange}
                    />
                    {errors.expirationDate && (
                      <span>{errors.expirationDate}</span>
                    )}
                  </div>
                  <div className="col-md-4 col-12">
                    <label htmlFor="cvv-number">CVV</label>
                    <input
                      type="text"
                      className={`form-control ${styles.bookingInput}`}
                      id="cvv-number"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                    />
                    {errors.cvv && <span>{errors.cvv}</span>}
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div
            className={`${styles.btnContainer} d-flex justify-content-center justify-content-md-end`}
          >
            <button
              type="submit"
              className={`btn btn-gradient ${styles.bookingFormBtn}`}
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </PopUpWindow>
  );
}

export default BookingTicketsForm;
