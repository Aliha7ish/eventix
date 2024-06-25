/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styles from "../modules/BookingTicketsForm.module.css";
import ButtonComp from "./ButtonComp";
import PopUpWindow from "./PopUpWindow";
import { useState } from "react";

function BookingTicketsForm({ event_id }) {
  console.log("BookingTicketsForm rendered");

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    creditCardNo1: "",
    creditCardNo2: "",
    creditCardNo3: "",
    creditCardNo4: "",
    creditCard: "",
    cvv: "",
    expirationDateDisplay: "", // For MM/YY display
    expirationDate: "", // For yyyy-MM storage
  });

  const [errors, setErrors] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

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

  const getCombinedCreditCardNumber = () => {
    return (formData.creditCard = `${formData.creditCardNo1}${formData.creditCardNo2}${formData.creditCardNo3}${formData.creditCardNo4}`);
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

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called");

    if (validate()) {
      console.log("Validation passed");

      const dataToSubmit = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        event: event_id,

      };
      const token = localStorage.getItem("accessToken");

      try {
        console.log(dataToSubmit);
        const response = await fetch("http://127.0.0.1:8000/api/tickets/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`,
          },
          body: JSON.stringify(dataToSubmit),
        });

        if (response.ok) {
          const result = await response.json();
          setSubmissionStatus("Form submitted successfully!");
          console.log("Submission result:", result);
        } else {
          setSubmissionStatus("Failed to submit form.");
          console.error("Submission failed:", response.statusText);
        }
      } catch (error) {
        setSubmissionStatus("Failed to submit form.");
        console.error("Submission error:", error);
      }
      openPopup();
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <>
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
                    minLength={4}
                    maxLength={4}
                    name="creditCardNo1"
                    value={formData.creditCardNo1}
                    onChange={handleChange}
                  />
                  <input
                    id="card-number"
                    className={`form-control ${styles.bookingInput}`}
                    type="text"
                    name="creditCardNo2"
                    value={formData.creditCardNo2}
                    onChange={handleChange}
                    minLength={4}
                    maxLength={4}
                  />
                  <input
                    id="card-number"
                    className={`form-control ${styles.bookingInput}`}
                    type="text"
                    name="creditCardNo3"
                    value={formData.creditCardNo3}
                    onChange={handleChange}
                    minLength={4}
                    maxLength={4}
                  />
                  <input
                    id="card-number"
                    className={`form-control ${styles.bookingInput}`}
                    type="text"
                    name="creditCardNo4"
                    value={formData.creditCardNo4}
                    onChange={handleChange}
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

      {/* Popup for submission status */}
      {submissionStatus && (
        <PopUpWindow onClose={() => setSubmissionStatus(null)}>
          <div className={styles.popupContent}>
            <p>{submissionStatus}</p>
          </div>
        </PopUpWindow>
      )}
    </>
  );
}

export default BookingTicketsForm;

