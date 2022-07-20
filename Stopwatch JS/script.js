const stopwatch = document.getElementById("time");
const play = document.getElementById("play-btn");
const pause = document.getElementById("pause-btn");
const reset = document.getElementById("reset-btn");

let startTime;
let elaspedTime = 0;
let stopWatchInterval;

const updateTime = (elaspedTime) =>{
    let hh = elaspedTime/3600000;
    let hrs = Math.floor(hh);

    let hhstr;
    if(hrs < 10){
        hhstr = `0${hrs.toString()}`;
    }else{
        hhstr = `${hrs.toString()}`;
    }

    let mm = (hh-hrs)*60;
    let mins = Math.floor(mm);

    let mmstr;
    if(mins < 10){
        mmstr = `0${mins.toString()}`;
    }else{
        mmstr = `${mins.toString()}`;
    }

    let ss = (mm-mins)*60;
    let secs = Math.floor(ss);

    let ssstr;
    if(secs < 10){
        ssstr = `0${secs.toString()}`;
    }else{
        ssstr = `${secs.toString()}`;
    }

    let ms = (ss-secs)*1000;
    let miliSecs = Math.floor(ms);

    stopwatch.innerText = `${hhstr} : ${mmstr} : ${ssstr} : ${miliSecs.toString()}`; 
}

const startStopwatch = () =>{
    startTime = Date.now() - elaspedTime;

    play.style.display = "none";
    pause.style.display = "block";

    stopWatchInterval = setInterval(() =>{
        elaspedTime = Date.now() - startTime;
        updateTime(elaspedTime);
    }, 1);   

}

const pauseStopwatch = () =>{
    clearInterval(stopWatchInterval);
    
    play.style.display = "block";
    pause.style.display = "none";

}

const resetStopwatch = () => {
    clearInterval(stopWatchInterval);
    stopwatch.innerText = "00 : 00 : 00 : 000";
    elaspedTime = 0;

    play.style.display = "block";
    pause.style.display = "none";
}
play.addEventListener("click", startStopwatch);
pause.addEventListener("click", pauseStopwatch);
reset.addEventListener("click", resetStopwatch);

