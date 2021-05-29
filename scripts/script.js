const city = document.getElementById('city'); 
const farengateButton = document.getElementsByClassName('button--f')[0];
const celsiumButton = document.getElementsByClassName('button--c')[0];
menu = document.getElementsByClassName('drop-down-menu')[0];
const searchButton = document.querySelector('.search-input__button');
const languageButton = document.getElementsByClassName('button drop-down-menu__face-button')[0];
const language_menu = document.querySelector(".language-menu-name");

var language = localStorage.getItem("site_language");

languageButton.addEventListener('click', function() {
  menu.classList.toggle('drop-down-menu--open');
  languageButton.classList.toggle('drop-down-menu__face-button--open'); 
});

RUButton = document.getElementById('ru');
ENButton = document.getElementById('en');

const city_input = document.querySelector('.search-input');

farengateButton.addEventListener('click', function() {

  localStorage.setItem('temp_degr', '°F');

  searchButton.click();
});

celsiumButton.addEventListener('click', function() {

  localStorage.setItem('temp_degr', '°C');

  searchButton.click();
});

function ChangeSiteLanguage(){
  city_input.placeholder = translations[language].searchInput;
  searchButton.textContent = translations[language].searchButton;
  temperature.textContent = translations[language].apparentTemperature;
  wind.textContent = translations[language].windSpeed;
  humidity.textContent = translations[language].airHumidity;
  languageButton.innerHTML = translations[language].languageButton;
  language_menu.textContent = translations[language].languageButton;
}

RUButton.addEventListener('click', () => {

    localStorage.setItem('site_language', 'ru')
    ChangeSiteLanguage();
    languageButton.click();
    searchButton.click();
});


ENButton.addEventListener('click', () => {

    localStorage.setItem('site_language', 'en')
    ChangeSiteLanguage();
    languageButton.click();
    searchButton.click();
});

current_lang = localStorage.getItem('site_language');
current_degr = localStorage.getItem('temp_degr');
current_city = localStorage.getItem('city_name');

if (current_degr == null) {

  localStorage.setItem('temp_degr', '°C');
  current_degr = localStorage.getItem('temp_degr');
}

if (current_lang == null){
  
  localStorage.setItem('site_language', 'en');
  current_lang = localStorage.getItem('site_language');
}


function hideText(e) {   
  e.target.innerText = " ";  
}



searchButton.addEventListener('click', () => {

  setForecast();
});

// city.addEventListener('keypress', function(event) {

//   if (event.keyCode == 13) {


//       city.blur();
//       search.click();
//       localStorage.setItem('city_name', city_name.value);

//   }

// });

// function setCity(e) {  
//   if (e.type === 'keypress') {    
//     // Make sure enter is pressed
//     if (e.which == 13 || e.keyCode == 13) {
//       if(e.target.innerText != ""){
//         localStorage.setItem('city', e.target.innerText);
//         setForecast(e.target);
//         }
//         city.blur();
//     }
//   } else {
//     if (e.target.innerText == ""){
//       city.textContent = localStorage.getItem('city');
//     } 
//   }
// }

// city.addEventListener('keypress', setCity);
// city.addEventListener('click', hideText);
// city.addEventListener('blur', getCity);

// Run
showTime();
ChangeSiteLanguage();
setForecast(localStorage.getItem('city_name'));