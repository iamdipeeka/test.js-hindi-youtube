// const Clock = document.getElementsByClassName('clock')

// setInterval(() => {
//     let Date = new Date();
//     Clock.innerHTML = Date.toLocaleTimeString();
// }, 1000);


const clockElements = document.getElementsByClassName('clock');
const dayElements = document.getElementsByClassName('day');

// Assuming you want to update all elements with the 'clock' class
setInterval(() => {
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString();
    for (let i = 0; i < clockElements.length; i++) {
        clockElements[i].innerHTML = currentTime;
    }
    let currentDay = currentDate.toDateString();
    for (let i = 0; i < clockElements.length; i++) {
        dayElements[i].innerHTML = currentDay;
    }

}, 1000);



