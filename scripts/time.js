
const time = document.querySelector('.time');
const html_date = document.querySelector('.date');

function showTime() {
  let lang = localStorage.getItem("site_language");
    var today = new Date();
    hour = today.getHours();
    min = today.getMinutes();
    sec = today.getSeconds();
    day = translations[lang].weekDays[today.getDay()];
    date = today.getDate();
    month = translations[lang].months[today.getMonth()];
  
    // Output Time
    // html_date.textContent = ` `;
    time.textContent = `${day}, ${month} ${date} ${hour}:${addZero(min)}:${addZero(sec)}`;
    
    setTimeout(showTime, 1000);
  }
  
  // Add Zeros
  function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  } 