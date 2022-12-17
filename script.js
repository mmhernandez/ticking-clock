function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

//run this function on a set interval (every second)
setInterval( function() {
    var time = getSecondsSinceStartOfDay();

    var hours = time / 3600; //pull the current hour (in decimal format) since the start of day
    var hoursInDeg = hours * 30; //the hour hand must move 30 degress (on the 360 degree clock) every hour

    var minutes = time / 60; //get the current minute (in decimal format) since the start of day
    var minutesInDeg = minutes * 6; //the minute hand must move 6 degrees (on the 360 degree clock) every minute
    
    var currentSecond = new Date().getSeconds(); //get the current second
    var secondsInDeg = currentSecond * 6; //the minute hand must move 6 degrees (on the 360 degree clock) every second

    //because the degrees on the clock have the 0 bearing at the bottom (at 6:00), the calculated degrees for each variable need to be adjusted to display properly
    var actualHoursInDeg;
    var actualMinutesInDeg;
    var actualSecondsInDeg;
    if(secondsInDeg < 180 || hoursInDeg < 180) {
        actualHoursInDeg = hoursInDeg += 180
        actualMinutesInDeg = minutesInDeg += 180;
        actualSecondsInDeg = secondsInDeg += 180;
    } else {
        actualHoursInDeg = hoursInDeg -= 180;
        actualMinutesInDeg = minutesInDeg -= 180;
        actualSecondsInDeg = secondsInDeg -= 180;
    }

    //update style elements of the clock hands to their appropriate degree of rotation for the current time
    document.getElementById("seconds").style.transform = `rotate(${actualSecondsInDeg}deg)`;
    document.getElementById("hours").style.transform = `rotate(${actualHoursInDeg}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${actualMinutesInDeg}deg)`;
}, 1000);

