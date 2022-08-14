// 번호에 맞는 이미지의 이름을 리턴
function getImageName(number) {
    return `background_${number}.jpg`
}

const imageList = [getImageName(1), getImageName(2), getImageName(3), getImageName(4), getImageName(5)];
const currentImage = imageList[Math.floor(Math.random() * imageList.length)];

// 이미지에 블랙 그라디언트를 오버레이처럼 덧데어줌
document.body.style =
    `background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('../img/${currentImage}');`;
// `background: transparent url('../img/${currentImage}');`;
// `background: transparent url('../img/${currentImage}') no-repeat center;`;