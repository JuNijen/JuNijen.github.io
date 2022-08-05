const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const body = document.querySelector("body");
// const titleText = document.querySelector("h2");


function handleResize() {
  let windowWidth = window.innerWidth;
  // let windowHeight = window.innerHeight;
  // titleText.innerText = windowWidth + " + " + windowHeight;

  if(windowWidth >= 1250){
    // biggest
    body.style.backgroundColor = colors[3];  
  }
  else if(windowWidth >= 1000){
    // middle
    body.style.backgroundColor = colors[2];
  }
  else{
    // smallest
    body.style.backgroundColor = colors[1];
  }
}

window.addEventListener("resize", handleResize);
