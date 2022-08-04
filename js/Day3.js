// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const titleText = document.querySelector("h2");

const superEventHandler = {
  // mouseOn
  handleMouseOn: function () {
    titleText.innerText = "The mouse is here!";
    titleText.style.color = colors[0];
  },
  // mouseOff
  handleMouseOff: function () {
    titleText.innerText = "The mouse is gone!";
    titleText.style.color = colors[1];
  },
  // resize
  handleResize() {
    titleText.innerText = "You just resized!";
    titleText.style.color = colors[2];
  },
  // mouseRightClick
  handleRightClick: function () {
    titleText.innerText = "That was a right click!";
    titleText.style.color = colors[4];
  }
};

titleText.addEventListener("click", superEventHandler.handleRightClick);
titleText.addEventListener("mouseenter", superEventHandler.handleMouseOn);
titleText.addEventListener("mouseleave", superEventHandler.handleMouseOff);
window.addEventListener("resize", superEventHandler.handleResize);
