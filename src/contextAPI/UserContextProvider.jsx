/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { passwordValidationRegex, specialCharacters } from "../App";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
const UsersContext = createContext();
const BASE_URL = "http://127.0.0.1:8000";

function UserContextProvider({ children }) {
  const validateCredentialData = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (specialCharacters.test(values.firstName)) {
      errors.firstName = "letters only";
    } else if (/\s/.test(values.firstName)) {
      errors.firstName = "whitespace is not allowed";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (specialCharacters.test(values.lastName)) {
      errors.lastName = "letters only";
    } else if (/\s/.test(values.lastName)) {
      errors.lastName = "whitespace is not allowed";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "at least 8 characters!";
    } else if (!passwordValidationRegex.test(values.password)) {
      errors.password =
        "at least 1 lowercase letter, 1 uppercase letter, 1 symbol, 1 digit";
    }

    if (
      values.re_password !== values.password &&
      formikCredential.touched.re_password
    ) {
      errors.re_password = "passwords are not identical";
    } else if (!values.re_password) {
      errors.re_password = "confirm assigned password";
    }

    return errors;
  };
  const validateSecondaryData = (values) => {
    const errors = {};

    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(values.phoneNumber)) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }

    if (!values.gender) {
      errors.gender = "Gender is required";
    }

    if (!values.profession) {
      errors.profession = "Profession is required";
    }

    if (!values.salary) {
      errors.salary = "Salary is required";
    } else if (isNaN(Number(values.salary))) {
      errors.salary = "Salary must be a number";
    } else if (Number(values.salary) < 0) {
      errors.salary = "Salary must be greater than or equal to 0";
    }

    if (!values.address) {
      errors.address = "Address is required";
    }

    if (!values.interests) {
      errors.fieldOfInterest = "Field of interest is required";
    }

    return errors;
  };
  const formikCredential = useFormik({
    initialValues: {
      password: "",
      re_password: "",
      email: "",
      firstName: "",
      lastName: "",
      name: "",
      // --------------------Second page------------------
    },
    validateOnChange: false,
    validateOnBlur: false,
    validateCredentialData,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const name = `${values.firstName} ${values.lastName}`;
        delete values.firstName;
        delete values.lastName;
        values.name = name;
        values.is_provider = false;
        console.log(values);
        const response = await fetch(`${BASE_URL}/api/auth/users/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Sign up failed");
        }

        const data = await response.json();
        console.log("Sign up successful:", data);
      } catch (error) {
        console.error("Error signing up:", error.message);
      }
    },
  });

  const formikSecondary = useFormik({
    initialValues: {
      phoneNumber: "",
      gender: "",
      profession: "",
      salary: "",
      address: "",
      interests: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validateSecondaryData,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const name = `${values.firstName} ${values.lastName}`;
        delete values.firstName;
        delete values.lastName;
        values.name = name;
        values.is_provider = false;
        console.log(values);
        const response = await fetch(`${BASE_URL}/api/auth/users/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Sign up failed");
        }

        const data = await response.json();
        console.log("Sign up successful:", data);
      } catch (error) {
        console.error("Error signing up:", error.message);
      }
    },
  });
}
export { UserContextProvider };
