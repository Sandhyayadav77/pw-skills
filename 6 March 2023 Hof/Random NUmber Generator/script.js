let delay = 3000; // delay time in milliseconds
let timeLeft = delay / 1000; // convert milliseconds to seconds
let updateTime = setInterval(countdown, 1000); // countdown every second

function countdown() {
    timeLeft--;
    document.getElementById("updateTime").innerHTML = `Generating random number in ${timeLeft} seconds`;
    if (timeLeft <= 0) {
        clearInterval(updateTime);
        generateRandomNumber();
    }
}

function generateRandomNumber() {

    const randomNumber = Math.floor(Math.random() * 100);
    document.getElementById("RandomGeneratedNumber").innerHTML = `Random Number Generated: ${randomNumber}`;
}