const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const forecastDesc = document.querySelector('.forecastDesc');

function SetCoords(lng, lat) {

    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [lng, lat], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

}

async function setForecast(e) {
    const city = localStorage.getItem('city');
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=92188f77e30dfcf5b448452a868180d6&units=metric`;
    // const url = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=92188f77e30dfcf5b448452a868180d6&units=imperial`;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=en&&appid=92188f77e30dfcf5b448452a868180d6&units=metric`;
    const res = await fetch(url);
    
    if (!res.ok) {        
        e.innerText = "IncorrectCity";
        return false;
    }
    else{     
    const data = await res.json();

    weather_descriptions[0].innerHTML = data.list[0].weather[0].description;
    humidities[0].innerHTML = `${data.list[0].main.humidity}%`;
    winds[0].innerHTML = `${data.list[0].wind.speed} m/s`;
    
    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.add(`owf-${data.list[i].weather[0].id}`);
        current_degr = localStorage.getItem('temp_degr');
        degrees = data.list[i].main.temp;
        if (current_degr == '°F')
            degrees = CelsInFar(degrees);

        if (i != 0) {

            temperatures[i].textContent = `${degrees}${ current_degr}`;

        } else {

            temperatures[i].textContent = `${getTemperatureString()}:${degrees}${ current_degr}`;

        }

    }


    UpdateMap(data.city.coord.lon, data.city.coord.lat);
    return true;
    }
}

setForecast(localStorage.getItem('city'));