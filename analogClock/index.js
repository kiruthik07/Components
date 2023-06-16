function rotateClockHands() {
    var time = new Date();
    var hour = time.getHours() % 12;
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    var hourAngle = (hour*30) + (minutes/2);
    var minutesAngle = (minutes*6) + (seconds/10);
    var secondsAngle = (seconds*6);

    var hoursHand = document.getElementById("Hour");
    var minutesHand = document.getElementById("Minutes");
    var secondsHand = document.getElementById("Seconds");

    hoursHand.style.transform = `rotate(${hourAngle}deg)`;
    minutesHand.style.transform = `rotate(${minutesAngle}deg)`;
    secondsHand.style.transform = `rotate(${secondsAngle}deg)`;
}

setInterval(rotateClockHands, 1000);
