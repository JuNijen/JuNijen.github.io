const timer = document.querySelector("#time-text");
console.log(timer);

function getClock(){
    const date          = new Date();
    let   christmasDate = new Date(`${date.getFullYear()}-12-25`);
    const currentDate   = new Date();

    //크리스마스가 지난 경우 내년을 기준으로 구해준다.
    if(christmasDate < currentDate){
        christmasDate = new Date(`${date.getFullYear()+1}-12-25`);
    }
    const needDate      = christmasDate - currentDate;
    // console.log("christmasDate :: " + christmasDate);
    // console.log("currentDate :: " + currentDate);
    // console.log("needDate :: " + needDate);

    const needDay    = Math.floor(needDate  / (1000*60*60*24));
    const needHours  = Math.floor((needDate / (1000*60*60)) % 24);
    const needMinute = Math.floor((needDate / (1000*60)) % 60);
    const needSecond = Math.floor(needDate  / 1000 % 60);

    timer.innerText = `${needDay}d ${needHours}h ${needMinute}m ${needSecond}s`;
}

getClock();
setInterval(getClock, 1000);