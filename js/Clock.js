const clock = document.querySelector("h2#clock");

// 현재 시간을 표기 해 준다.
function getClock() {
  const date    = new Date();
  const hours   = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 초기 시간을 받아온 후, 1초마다 갱신
getClock();
setInterval(getClock, 1000);