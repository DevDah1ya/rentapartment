import { useDispatch } from "react-redux";
import { setCity } from "../redux/actions";
import store from "../redux/store";
import "../css/NavBar.css";

export default function NavBar() {
  const dispatch = useDispatch();

  const HandleNavClick = (event) => {

    const clickedElement = event.target;
    const buttons = document.querySelectorAll("button"); // Replace with the actual selector
    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    clickedElement.classList.add("active");
    dispatch(setCity(clickedElement.textContent));
  };
  return (
    <div id="btnDiv">
        <div >
            <button className="active" onClick={HandleNavClick}>
                New York
            </button>
            <button onClick={HandleNavClick}>Mumbai</button>
            <button onClick={HandleNavClick}>Paris</button>
            <button onClick={HandleNavClick}>London</button>
        </div>
        <div>
            <button id="viewAll">View All <svg xmlns="http://www.w3.org/2000/svg" fill="#1717fa" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg> </button>
        </div>
    </div>
  );
}
