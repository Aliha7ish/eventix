import { useState } from "react";
import sprite from "../assets/sprite.svg";

/* eslint-disable react/prop-types */
function PasswordField({
  id,
  value,
  handleChange,
  handleBlur,
  col,
  label = "password",
  error = null,
  className = null,
  btnCustomClass = null,
}) {
  const [showPassword, setShowPassword] = useState(false);
  function handleShowPassword(el) {
    if (el.closest(".show-password-btn") !== null) {
      return setShowPassword((e) => !e);
    } else return;
  }
  return (
    <div className={`input-label-container password-container col-${col}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={`form-control ${className}`}
        type={showPassword ? "text" : "password"}
        name={id}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error}
      <button
        type="button"
        className={`show-password-btn ${btnCustomClass}`}
        onClick={(e) => handleShowPassword(e.target)}
      >
        <svg className="password-icon">
          <use
            xlinkHref={`${sprite}#${
              showPassword
                ? "eye-sharp-svgrepo-com"
                : "eye-off-sharp-svgrepo-com"
            }`}
          />
        </svg>
      </button>
    </div>
  );
}

export default PasswordField;
