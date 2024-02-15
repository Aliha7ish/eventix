/* eslint-disable react/prop-types */
function FormSideContent({ children, order }) {
  return (
    <div className={`col-md-5 col-side-content order-md-${order}`}>
      {children}
    </div>
  );
}

export default FormSideContent;
