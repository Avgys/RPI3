const weatherIcon = document.getElementsByClassName('weather-icon');
const temperature = document.getElementsByClassName('temperature');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const forecastDesc = document.querySelector('.forecastDesc');
const weather_date = document.getElementsByClassName('weather-date  ');
const html_city = document.querySelector('.city');
city_input = document.querySelector('.search-input');

async function setForecast(e) {
    let city = e;
    
    const lang = localStorage.getItem('site_language');
    if (city == undefined)
        city = city_input.value;
        
    const current_degr = localStorage.getItem('temp_degr');
    var url = null;
    
    if(current_degr == "°C")
    {
        url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&&appid=92188f77e30dfcf5b448452a868180d6&units=metric`;
    }else{

        if(current_degr == "°F")
        url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&&appid=92188f77e30dfcf5b448452a868180d6&units=imperial`;
  
    }
    const res = await fetch(url);
    
    if (!res.ok) {   
        alert(translations[lang].city_not_found);  
        e.innerText = translations[lang].city_not_found;
        return false;
    }
    else{     
    localStorage.setItem('city_name',city);
    const data = await res.json();
    // forecastDesc.innerHTML = data.list[0].weather[0].description;
    humidity.innerHTML = `${data.list[0].main.humidity}%`;
    wind.innerHTML = `${data.list[0].wind.speed} m/s`;
    forecastDesc.innerHTML = data.list[0].weather[0].description;
    humidity.innerHTML = `${translations[lang].airHumidity}: ${data.list[0].main.humidity}%`;
    if(current_degr == "°C")
    {
        wind.innerHTML = `${translations[lang].windSpeed}: ${data.list[0].wind.speed} m/s`;
    }else{

        if(current_degr == "°F")
        wind.innerHTML = `${translations[lang].windSpeed}: ${data.list[0].wind.speed} knots`;
    }
    var today = new Date();
    for (let i = 0; i < weatherIcon.length; i++) {
        weatherIcon[i].classList.add(`owf-${data.list[i].weather[0].id}`);
        degrees = data.list[i].main.temp;

        if (i != 0){
            weather_date[i-1].innerHTML = `${translations[lang].weekDaysSh[(today.getDay()+i)%7]}`;
            temperature[i].textContent = `${degrees} ${current_degr}`;
        } else{

            temperature[i].textContent = `${translations[lang].temperature} ${degrees}${current_degr}`;
        }
    }

    SetCoordsMap(data.city.coord.lon, data.city.coord.lat);
    html_city.innerHTML = `${city}, ${data.city.country}`;

    return true;
    }
    return true;
}