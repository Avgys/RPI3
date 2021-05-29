// let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let weekDays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let weekDaysSh=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const time = document.querySelector('.time');


function showTime() {
  let lang = localStorage.getItem("site_language");
    let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();
      day = translations[lang].weekDays[today.getDay()];
      date = today.getDate();
      month = translations[lang].months[today.getMonth()];
  
    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
  //<br/>${day}<span>, </span>${month}<span> </span>${date}
    setTimeout(showTime, 1000);
  }
  
  // Add Zeros
  function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  } 