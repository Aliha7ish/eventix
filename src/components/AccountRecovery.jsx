/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "../modules/AccountRecovery.module.css";
import PasswordField from "./PasswordField";
import { useFormik } from "formik";
function AccountRecovery() {
  const validate = (values) => {
    const errors = {};

    if (!values.passwordRet) {
      errors.email = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      passwordRet: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className={`content-flex`}>
        <div className={`${styles.images}`}>
          <div className={styles.imgContainer}>
            <img src="src\images\img-icons\Rectangle30.png" alt="icon" />
          </div>
          <div className={`${styles.middleImage} ${styles.imgContainer}`}>
            <img src="src\images\img-icons\Rectangle24.png" alt="icon" />
          </div>
          <div className={styles.imgContainer}>
            <img src="src\images\img-icons\Rectangle30.png" alt="icon" />
          </div>
        </div>

        <div className={`${styles.textContainer}`}>
          <h2>account recovery</h2>
          <p>
            Enter the last password you remember using with this Eventix account
          </p>
        </div>
        <PasswordField
          id="passwordRet"
          value={formik.values.passwordRet}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          col={12}
          label={null}
          btnCustomClass={styles.showPasswordBtn}
        />
        <div className={styles.buttons}>
          <Link to="/account-recovery-center" className="btn btn-link">
            try another way
          </Link>
          <button className="btn btn-gradient">continue</button>
        </div>
      </div>
    </div>
  );
}

export default AccountRecovery;
