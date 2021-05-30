const city_name = document.getElementsByClassName('city')[0]; 
const farengateButton = document.getElementsByClassName('button--f')[0];
const celsiumButton = document.getElementsByClassName('button--c')[0];
menu = document.getElementsByClassName('drop-down-menu')[0];
const searchButton = document.querySelector('.search-input__button');
const languageButton = document.getElementsByClassName('button drop-down-menu__face-button')[0];
const language_menu = document.querySelector(".language-menu-name");

const city_input = document.querySelector('.search-input');
var language = localStorage.getItem("site_language");

languageButton.addEventListener('click', function() {
  menu.classList.toggle('drop-down-menu--open');
  languageButton.classList.toggle('drop-down-menu__face-button--open'); 
});

RUButton = document.getElementById('ru');
ENButton = document.getElementById('en');


farengateButton.addEventListener('click', function() {

  localStorage.setItem('temp_degr', '°F');
  setForecast(localStorage.getItem('city_name'));  
});

celsiumButton.addEventListener('click', function() {

  localStorage.setItem('temp_degr', '°C');
  setForecast(localStorage.getItem('city_name'));   
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
    language = 'ru';
    ChangeSiteLanguage();
    languageButton.click();
    searchButton.click();
});


ENButton.addEventListener('click', () => {

    localStorage.setItem('site_language', 'en')
    language = 'en';
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

searchButton.addEventListener('click', () => {
  
  setForecast(city_input.value);    
});

city_input.addEventListener('keypress', function(event) {

  if (event.keyCode == 13 || event.which == 13 ) {

      city_name.blur();
      searchButton.click();
  //     localStorage.setItem('city_name', city_input.value);
  //     setForecast(localStorage.getItem('city_name'));
  }
});

// Run
if (city_name.textContent == "")
    city_name.textContent = localStorage.getItem('city_name');
if (localStorage.getItem('city_name') == null)
    localStorage.setItem('city_name', 'minsk');
    
showTime();
ChangeSiteLanguage();
setForecast(localStorage.getItem('city_name'));
