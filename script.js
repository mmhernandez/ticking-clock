function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}
setInterval( function() {
    var time = getSecondsSinceStartOfDay();

    //gets the current date time
    var currentTime = new Date();

    //pull the current hour (in decimal) since the start of day
    var hours = time / 3600;
    var hoursInDeg = hours * 30; //determine how many degrees the hour hand must move per hour

    var minutes = time / 60;
    var minutesInDeg = minutes * 6; //determine how many degress the minute hand must move per minute
    
    //get the current second
    var currentSecond = currentTime.getSeconds();
    var secondsInDeg = currentSecond * 6; //determine how many degrees on the clock the second hand must move per second


    var actualHoursInDeg;
    var actualMinutesInDeg;
    var actualSecondsInDeg;
    if(secondsInDeg < 180 || hoursInDeg < 180) {
        actualSecondsInDeg = secondsInDeg += 180;
        actualHoursInDeg = hoursInDeg += 180
        actualMinutesInDeg = minutesInDeg += 180;
    } else {
        actualSecondsInDeg = secondsInDeg -= 180;
        actualHoursInDeg = hoursInDeg -= 180;
        actualMinutesInDeg = minutesInDeg -= 180;
    }

    //update style elements of the clock hands to their appropriate degree of rotation for the current time
    document.getElementById("seconds").style.transform = `rotate(${actualSecondsInDeg}deg)`;
    document.getElementById("hours").style.transform = `rotate(${actualHoursInDeg}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${actualMinutesInDeg}deg)`;

}, 1000);

