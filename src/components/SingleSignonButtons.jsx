import sprite from "../assets/sprite.svg";
function SingleSignonButtons() {
  return (
    <div className="sso-grid-container">
      <div>
        <button className="btn btn-sso">
          <svg className="btn-icon">
            <use xlinkHref={`${sprite}#google-color-svgrepo-com`} />
          </svg>
          <span>Continue with Google</span>
        </button>
      </div>
      <div>
        <button className="btn btn-sso">
          <svg className="btn-icon">
            <use xlinkHref={`${sprite}#facebook-svgrepo-com`} />
          </svg>
          <span>Continue with Facebook</span>
        </button>
      </div>
    </div>
  );
}

export default SingleSignonButtons;
