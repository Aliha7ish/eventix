/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function AlertMessage({ err }) {
  return (
    <div className="alert alert-warning" role="alert">
      {err}
    </div>
  );
}
