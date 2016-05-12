var dayNames = [
    "Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"];
toDay = new Date()
dayOfWeek = toDay.getDay(),
    hours = toDay.getHours(),
    minutes = toDay.getMinutes(),
    seconds = toDay.getSeconds(),
    day = toDay.getDate();
    
hours %= 12;
minutes >= 10 ? "0" + minutes : minutes;
seconds >= 10 ? "0" + seconds : Seconds;
ampm = hours >+ 12 ? 'pm' : 'am';





console.log( "Today is: " + (dayNames[dayOfWeek]) + " The " + day + "th") 
console.log( "The Time is:" + hours + ":" + minutes + ":" + seconds + ampm)            