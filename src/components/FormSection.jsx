/* eslint-disable react/prop-types */
function FormSection({ children }) {
  return (
    <section className="container-fluid form__grid">
      <div className="row form-row">{children}</div>
    </section>
  );
}
export default FormSection;
