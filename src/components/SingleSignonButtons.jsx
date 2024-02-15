import sprite from "../assets/sprite.svg";
function SingleSignonButtons() {
  return (
    <div className="sso-grid-container">
      <div className="">
        <button className="btn btn-sso">
          <svg className="btn-icon">
            <use xlinkHref={`${sprite}#google-color-svgrepo-com`} />
          </svg>
          <span>Continue with google</span>
        </button>
      </div>
      <div className="">
        <button className="btn btn-sso">
          <svg className="btn-icon">
            <use xlinkHref={`${sprite}#facebook-svgrepo-com`} />
          </svg>
          <span>Continue with facebook</span>
        </button>
      </div>
    </div>
  );
}

export default SingleSignonButtons;
