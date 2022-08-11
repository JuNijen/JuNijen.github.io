// 실시간으로 범위 값을 업데이트해야 합니다.
// 유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
// 유저에게 게임의 승패를 알려야 합니다.

const arrangeForm = document.querySelector("#arrange-input input");
const guessForm = document.querySelector("#user-input input");
const submitButton = document.querySelector("#user-input button");
const answerText = document.querySelector("#answer");
const gameResultText = document.querySelector("#game-result");
const HIDDEN_CLASSNAME = "hidden"

console.dir(arrangeForm);
console.dir(guessForm);
console.dir(submitButton);


// 참고자료 : https://hianna.tistory.com/454
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function onSubmit(event) {
    event.preventDefault();

    const randomArrange = parseInt(arrangeForm.value); //랜덤 범위 입력을 받는 폼
    const userInput = parseInt(guessForm.value); //추측 정답 입력을 받는 폼

    // 0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
    // 범위에는 음수가 포함될 수 없습니다.
    if (randomArrange > 0 && userInput > 0) {

        //랜덤한 숫자를 생성 해 주고 화면에 가시적으로 표기 해 준다.
        const randomNumber = rand(1, randomArrange);
        answerText.innerText = `you chose: ${userInput}, the machine chose: ${randomNumber}`;

        //숫자가 서로 같은지를 체크한다.
        if (userInput === randomNumber) {
            gameResultText.innerText = "You won!";
        } else {
            gameResultText.innerText = "You lost!";
        }

        //숨겨져있던 항목을 표기합니다.
        answerText.classList.remove(HIDDEN_CLASSNAME);
        gameResultText.classList.remove(HIDDEN_CLASSNAME);

    }

}

submitButton.addEventListener("click", onSubmit);
// randomInput.addEventListener("submit", onSubmit);
// submitButton.addEventListener("submit", onSubmit);