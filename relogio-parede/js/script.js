const numbers = document.querySelectorAll('.number');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

let rotateDeg = 30;

numbers.forEach(element => {
    element.style.transform = `rotate(${rotateDeg}deg)`;
    rotateDeg += 30;
});

const getTime = () => {
    const date = new Date();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }
}

// translate(0, -50%) rotate(0deg);

setInterval(() => {

    const {seconds, minutes, hours} = getTime();
    
    hourHand.style.transform = `translate(0, -50%) rotate(${(hours * 30) + (minutes / 2)}deg)`
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`
    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`

}, 1000);