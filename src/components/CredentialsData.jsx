export default function CredentialsData({}) {
  return (
    <div>
      <div className="row gy-3 justify-content-start">
        <div className="input-label-container col-12 col-sm-6">
          <label htmlFor="firstName">first name</label>
          <input
            id="firstName"
            name="firstName"
            className={`form-control ${
              isError(formik.errors.firstName, formik.touched.firstName)
                ? "input-invalid"
                : isError(!formik.errors.firstName, formik.touched.firstName)
                ? "input-valid"
                : null
            }`}
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          {isError(formik.errors.firstName, formik.touched.firstName) ? (
            <InvalidInput>{formik.errors.firstName}</InvalidInput>
          ) : (
            ""
          )}
        </div>

        <div className="input-label-container col-12 col-sm-6">
          <label htmlFor="lastName">last name</label>
          <input
            id="lastName"
            name="lastName"
            className={`form-control ${
              isError(formik.errors.lastName, formik.touched.lastName)
                ? "input-invalid"
                : isError(!formik.errors.lastName, formik.touched.lastName)
                ? "input-valid"
                : null
            }`}
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          {isError(formik.errors.lastName, formik.touched.lastName) ? (
            <InvalidInput>{formik.errors.lastName}</InvalidInput>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="input-label-container row gy-3">
        <div className="col-12">
          <label htmlFor="email">email address</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${
              isError(formik.errors.email, formik.touched.email)
                ? "input-invalid"
                : isError(!formik.errors.email, formik.touched.email)
                ? "input-valid"
                : null
            }`}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {isError(formik.errors.email, formik.touched.email) ? (
            <InvalidInput>{formik.errors.email}</InvalidInput>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="row gy-3">
        <PasswordField
          id="password"
          label="password"
          value={formik.values.password}
          handleChange={formik.handleChange}
          col="sm-6"
          className={
            isError(formik.errors.password, formik.touched.password)
              ? "input-invalid"
              : isError(!formik.errors.password, formik.touched.password)
              ? "input-valid"
              : null
          }
          error={
            isError(formik.errors.password, formik.touched.password) ? (
              <InvalidInput>{formik.errors.password}</InvalidInput>
            ) : (
              ""
            )
          }
        />
        <PasswordField
          id="re_password"
          label="confirm password"
          value={formik.values.re_password}
          handleChange={formik.handleChange}
          className={
            formik.errors.re_password
              ? "input-invalid"
              : !formik.errors.re_password &&
                formik.values.re_password.length > 1
              ? "input-valid"
              : ""
          }
          col="sm-6"
          error={
            formik.errors.re_password ? (
              <InvalidInput>{formik.errors.re_password}</InvalidInput>
            ) : (
              ""
            )
          }
        />

        <p style={{ marginTop: "6px", fontSize: "10px" }}>
          Use or more 8 characters with a mix of letters, numbers and symbols
        </p>
      </div>
    </div>
  );
}
