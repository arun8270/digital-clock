
function displayTime(){   
let dateTime = new Date();
let currentHour = dateTime.getHours();
let currentMin = dateTime.getMinutes();
let currentSec = dateTime.getSeconds();
let timePeriod = document.getElementById("ampm");
if(currentHour > 12){
    currentHour = currentHour - 12;
timePeriod.innerHTML = "PM"
}
    document.getElementById("hour").innerHTML = padZero(currentHour);
    document.getElementById("minute").innerHTML = padZero(currentMin);
    document.getElementById("second").innerHTML = padZero(currentSec);
}
setInterval(displayTime,500)
let padZero = function(num){
    return num <10 ? "0" + num : num;
}




