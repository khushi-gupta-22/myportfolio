// Select DOM Elements
const result = document.querySelector("#result");
const searchBtn = document.querySelector("#search-btn");
const cityRef = document.querySelector("#city");

// Your WeatherAPI Key
const apiKey = "ad25dcdcb6f4463da44164452252403"; 
const baseUrl = "https://api.weatherapi.com/v1/current.json";

// Function to Get Weather Data
const getWeather = () => {
    const cityValue = cityRef.value.trim();

    if (cityValue === "") {
        result.innerHTML = `<h3>Please enter a city name</h3>`;
        return;
    }

    const url = `${baseUrl}?key=${apiKey}&q=${cityValue}`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("City not found");
            return response.json();
        })
        .then(data => {
            result.innerHTML = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <h4 class="weather">${data.current.condition.text}</h4>
                <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
                <h1>${data.current.temp_c} &#176;C</h1>
                <div class="temp-container">
                    <div>
                        <h4 class="title">Humidity</h4>
                        <h4 class="temp">${data.current.humidity} %</h4>
                    </div>
                    <div>
                        <h4 class="title">Wind</h4>
                        <h4 class="temp">${data.current.wind_kph} km/h</h4>
                    </div>
                </div>
            `;
        })
        .catch(() => result.innerHTML = `<h3>City not found</h3>`);
};

searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
