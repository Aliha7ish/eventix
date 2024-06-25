/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styles from "../modules/PopUpWindow.module.css";
export default function PopUpWindow({ children }) {
  // -------------------------------------
  return (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>Popup content here !!</div>
    </Popup>
  );
}
