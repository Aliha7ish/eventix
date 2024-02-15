import EventixWordGradient from "./EvintexWordGradient";

/* eslint-disable react/prop-types */
function FormHeader({ children = null }) {
  return (
    <header className="form__header">
      {children} <EventixWordGradient />
    </header>
  );
}

export default FormHeader;
