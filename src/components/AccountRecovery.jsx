/* eslint-disable react/prop-types */
import styles from "../modules/AccountRecovery.module.css";
import PasswordField from "./PasswordField";
import { useFormik } from "formik";
import ButtonComp from "./ButtonComp";
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
          <h2>password recovery</h2>
          <p>Enter your email or phone number</p>
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
          <ButtonComp className="btn-gradient">continue</ButtonComp>
        </div>
      </div>
    </div>
  );
}

export default AccountRecovery;
