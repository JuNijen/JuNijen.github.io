const timer = document.querySelector("#time-text");
console.log(timer);

function getClock(){
    // const christmas = {
    //     month : 12,
    //     day : 25,
    //     hours : 00,
    //     seconds : 00,
    // };

    const date      = new Date();
    const christmasDate = new Date(`${date.getFullYear()}-12-25`);
    const currentDate   = new Date();

    // console.log("getFullYear :: " + date.getFullYear());
    // console.log("getFullYear+1 :: " + new Date(`${date.getFullYear()+1}-12-25`));
    // console.log("christmasDate :: " + christmasDate);

    //크리스마스가 지난 경우 내년을 기준으로 구해준다.
    if(christmasDate < currentDate){
        christmasDate = new Date(`${date.getFullYear()+1}-12-25`);
    }
    const needDate      = christmasDate - currentDate;

    const needDay    = Math.floor(needDate  / (1000*60*60*24));
    const needHours  = Math.floor((needDate / (1000*60*60)) % 24);
    const needMinute = Math.floor((needDate / (1000*60)) % 60);
    const needSecond = Math.floor(needDate  / 1000 % 60);
    
    // local current time
    // const date      = new Date();
    // const currentMonth     = date.getMonth();
    // const currentDay       = date.getDate();
    // const currentHours     = date.getHours();
    // const currentMinutes   = date.getMinutes();
    // const currentSeconds   = date.getSeconds();
    // const currentMonth     = String(date.getMonth()).padStart(2, "0");
    // const currentDay       = String(date.getDate()).padStart(3, "0");
    // const hours     = String(date.getHours()).padStart(2, "0");
    // const minutes   = String(date.getMinutes()).padStart(2, "0");
    // const seconds   = String(date.getSeconds()).padStart(2, "0");
    // timer.innerText = `${currentMonth} ${coDay}d ${hours}h ${minutes}m ${seconds}s`;
    // console.log(`${currentMonth} ${currentDay}d ${currentHours}h ${currentMinutes}m ${currentSeconds}s`);

    //크리스마스는 12월에 있기에 12월보다 큰 수는 있지 않다.
    //현재 날짜가 25일보다 크다면, 월을 하나 빼서 계산한다.
    // if(christmas[Day] <  Day){
    //     currentMonth = christmas - currentMonth - 1;
    // }
    // else{
    //     currentMonth = christmas - currentMonth;
    // }
    // month = (christmas.day < currentDay)? christmas.day - currentMonth -1 : christmas.day - currentMonth;
    // month = (christmas.day < currentDay)? christmas.day - currentMonth -1 : christmas.day - currentMonth;
    // console.log("chrost,as :: " + christmas + " dfdf " + christmas.day);
    // console.log("month :: " + month);

    timer.innerText = `${needDay}d ${needHours}h ${needMinute}m ${needSecond}s`;
}

getClock();
setInterval(getClock, 1000);