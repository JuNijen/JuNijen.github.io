const weather   = document.querySelector("#weather span:first-child");
const city      = document.querySelector("#weather span:last-child");
const API_KEY   = "f8cb859ae4f9d7a0909be20e72baf19f";

// API에서 OK를 받았을 경우
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

// API에서 OK를 받지 못하고 오류를 받았을 경우
function onGeoError() {
    alert("현재 위치를 찾을 수 없습니다. GPS 또는 네트워크를 체크 해 주세요.");
}

// 현재 위치를 기반으로 날씨를 받아준다.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);