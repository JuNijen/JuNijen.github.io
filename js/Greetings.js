const loginForm  = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting   = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY     = "username";


// 로그인 버튼이 눌렸을 경우
function onLoginSubmit(event) {

  // 기본 루틴으로 돌아가는 동작을 제한한다.
  event.preventDefault();
  
  // loginInput에 받아온 유저네임을 저장 및 표기 해 준다.
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

// 받아 온 유저 이름을 화면에 가시적으로 표기 해 준다.
function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


//저장된 유저 네임이 있는지 체크
const savedUsername = localStorage.getItem(USERNAME_KEY);

//저장된 유저 네임이 없다면 로그인폼을 보여준다.
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}
//저장된 유저 네임이 있다면 데이터를 불러와준다.
else {
  paintGreetings(savedUsername);
}