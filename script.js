//constant variables for element id(s)
const cityInput = document.getElementById("search-form");
const searchBtn = document.getElementById("search-button");
const cityElement = document.getElementById("city");
const weatherDesc = document.getElementById("weather-desc");
const humidElement = document.getElementById("humid");
const windElement = document.getElementById("wind");
const tempElement = document.getElementById("temp");
 const iconElement = document.getElementById("weather-icon");

//function to activate weather API
function searchForm(city) {
    console.log(city);
    let apiKey = "134bd5dcb9c39910fd6b0440333776c2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios.get(apiUrl).then(response => {
        console.log(response);
        cityElement.textContent = response.data.name;
        weatherDesc.textContent = response.data.weather[0].description.toUpperCase();
        humidElement.textContent = response.data.main.humidity;
        windElement.textContent = Math.round(response.data.wind.speed);

        const temperatureInKelvin = response.data.main.temp;
        const temperatureInCelsius = Math.round(temperatureInKelvin - 273.15);
        tempElement.textContent = Math.round(temperatureInCelsius);

        const temperatureInFahrenheit = Math.round((temperatureInKelvin - 273.15) * 9/5 + 32);
        tempElement.textContent = temperatureInFahrenheit;

        iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    })

    .catch(error => {
        console.log(error);
    });
    
}

//function to activate search input + button 

function submitBtn(event){
    event.preventDefault();
    let cityInput = document.querySelector("#form-input");
    searchForm(cityInput.value);
}

let searchInput = document.getElementById("search-form");
searchInput.addEventListener("submit", submitBtn);

searchForm("Calabasas");


