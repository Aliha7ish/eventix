import { useFormik } from "formik";
// import InvalidInput from "./InvalidInput";

import SeparatorLine from "./SeparatorLine";
import SingleSignonButtons from "./SingleSignonButtons";
import { Link } from "react-router-dom";
import PasswordField from "./PasswordField";
function LoginForm() {
  const validate = (values) => {
    const errors = {};

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
      errors.password = "Choose strong password!";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form__login">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <p>log in</p>
          </div>
        </div>
        <div className="row">
          <div className="input-label-container col-12">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              type="email"
            />
            {/* {formik.errors.email && formik.touched.email ? (
              <InvalidInput>{formik.errors.email}</InvalidInput>
            ) : null} */}
          </div>
        </div>
        <div className="row">
          <PasswordField
            id="password"
            label="password"
            value={formik.values.password}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            col="12"
          />
          <Link
            to="/account-recovery-center"
            className="btn btn-link"
            style={{ marginTop: "6px" }}
          >
            forget password
          </Link>
        </div>

        <div className="col-12">
          <button
            className="btn btn-gradient"
            style={{ margin: "0 auto" }}
            type="submit"
          >
            log in
          </button>
        </div>

        <SeparatorLine />
        <SingleSignonButtons />
      </div>
    </form>
  );
}

export default LoginForm;
