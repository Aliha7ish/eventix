import style from "../modules/Home.module.css";
import pic from "../images/home-background.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className={style.home}>
        <div className={style.circle1}></div>
        <div className={style.circle2}></div>
        <div className={`${style.layer} ${style.layer1}`}></div>
        <div className={`${style.layer} ${style.layer2}`}></div>
        <div className={`${style.layer} ${style.layer3}`}></div>
        <div className={`${style.bg} ${style.bg1}`}></div>
        <div className={`${style.bg} ${style.bg2}`}></div>

        <img src={pic} alt="home pic" className={style.homeImg} />
        <h1 className={style.title}>
          E<span className={style.letterX}>X</span>
        </h1>
        <div className={style.address}>
          <p className={style.light}>
            Craft unforgettable moments
            <span className={style.dark}>Real-time or Virtual.</span>
          </p>
        </div>
        <div className={style.text}>
          {" "}
          <p className={style.info}>
            Elevate every occasion effortlessly, blending style with efficiency.
            From physical gatherings to virtual affairs, our user-friendly
            platform ensures extraordinary moments etched in memories. Welcome
            to Eventix, where every detail matters, and every experience is
            elevated.
          </p>
        </div>
        <Link to="events">
          <button className={`${style.btn} ${style.btn1}`}>Get started</button>
        </Link>
        <Link path="about">
          <button className={`${style.btn} ${style.btn2}`}>Learn more</button>
        </Link>

        <p className={style.greyNavigate}>
          Already have an account?{" "}
          <Link to="login">
            <span className={style.loginBtn}>Log In</span>
          </Link>
        </p>
      </div>
    </>
  );
}
