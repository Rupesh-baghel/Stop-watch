"use strict"

let timer = document.querySelector(".timer")
let startbtn = document.querySelector("#startbtn")
let pausebtn = document.querySelector("#pausebtn")
let resetbtn = document.querySelector("#resetbtn")

let mins ='0';
let sec = '0';
let msec ='0';

let timerId = null;

function startTimer() {
    msec++;
    // console.log(msec);
    if (msec == 99) {
        msec = 0;
        sec++;
        if (sec == 60) {
            sec =0;
            mins++;
        };
    };
    // let msecString;
    // if(msec<10){msecString=`0${msec}`}
    //     else{ msecString=msec;}
    let minsString = mins < 10 ? `0${mins}`:mins;
    let secString = sec < 10 ? `0${sec}`:sec;
    let msecString = msec< 10 ? `0${msec}`:msec;
    // console.log(msecString);

    timer.innerHTML=`${minsString}:${secString}:${msecString}`
}
startbtn.addEventListener("click",function(){
    if(timerId !==null){
        clearInterval(timerId)
    }
     timerId=setInterval(startTimer,10);
})

pausebtn.addEventListener("click",function(){
    clearInterval(timerId);
})
resetbtn.addEventListener("click",function(){
    location.reload();
})




















