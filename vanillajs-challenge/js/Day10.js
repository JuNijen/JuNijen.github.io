const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

//메인 버튼
const colorButton = document.querySelector("button");
const body = document.body;

//참고자료 : https://hianna.tistory.com/454
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeRandomGradient(event) {
  //랜덤한 색상을 지정 해 준다.
  const colorA = colors[rand(0, colors.length)];
  const colorB = colors[rand(0, colors.length)];

  console.log(`colorA :: ${colorA}, colorB :: ${colorB}`);

  //참고자료 : https://blog.idrisolubisi.com/how-to-create-beautiful-gradients-with-javascript
  body.style.background = `linear-gradient(to right, ${colorA}, ${colorB})`;
}

//클릭 이벤트 등록
colorButton.addEventListener("click", makeRandomGradient);