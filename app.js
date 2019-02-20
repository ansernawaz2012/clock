const printDate = () => {

let todayDate = new Date();
let suffix = '';

let weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
let currentMonth = month[todayDate.getMonth()];

let dayOfWeek = weekday[todayDate.getDay()];
let dayOfMonth = todayDate.getDate();
let year = todayDate.getFullYear();

if (dayOfMonth % 10 == 3) {
    suffix = 'rd';
}else if(dayOfMonth % 10 == 2) {
    suffix = 'nd';
}else if(dayOfMonth % 10 == 1) {
    suffix = 'st';
}else{
    suffix = 'th';
}

document.getElementById('date').innerHTML = `${dayOfWeek} ${dayOfMonth}${suffix} ${currentMonth} ${year}`;

}

const moveHands = ()=> {
    
        
            let date = new Date(); //create date variable
      let h = 30 * ((date.getHours() % 12) + date.getMinutes() / 60); // 30 degrees hour
      let m = 6 * date.getMinutes(); // 6 degrees every minute
      let s = 6 * date.getSeconds(); // 6 degrees every second
      // setting the rotate CSS attribute to those degree values -->
      document.getElementById("seconds").style.cssText =
        "-webkit-transform:rotate(" + s + "deg);";
      document.getElementById("minutes").style.cssText =
        "-webkit-transform:rotate(" + m + "deg);";
      document.getElementById("hours").style.cssText =
        "-webkit-transform:rotate(" + h + "deg);";

        //retrieve hour mins and seconds from date variable

        let hour = date.getHours();

        let min = date.getMinutes();

        let sec = date.getSeconds();

        min = checkTime(min);  //add zero if m < 10

        sec = checkTime(sec);  //add zero if s < 10
  
        document.getElementById('digital').innerHTML = `${hour}:${min}:${sec}`;
        
        
printDate();


      setTimeout(moveHands, 1000); // calling the function every second
    
  }
  
  const checkTime=(i) => {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  window.onload = moveHands; // making sure the function starts on load of webpage
