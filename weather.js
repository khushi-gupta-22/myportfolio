let result = document.querySelector("#result");
let searchBtn = document.querySelector("#search-btn");
let cityRef = document.querySelector("#city");
let key = "25fde16afdaeb5c05dfae8aee0707519";

let getWeather = () => {
    let cityValue = cityRef.value;
    if (cityValue.length == 0) {
        result.innerHTML = `<h3>Please enetr a city name</h3>`;
    }
    else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key} `
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);

            result.innerHTML = `
            <h2>${data.name}</h2>
            <h4 class ="weather>${data.weather[0].main}</h4>
            <h4 class="desc">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp} &#176; </h1>
            <div class = "temp-container">
                 <div>
                 <h4 class = "title">min</h4>
                 <h4 class = "temp"> ${data.main.temp_min}</h4>
                 </div>   
                 <div>
                 <h4 class = "title">max</h4>
                 <h4 class = "temp"> ${data.main.temp_max}</h4>
                 </div>   
            <div>      
            `;
        })
        .catch(() =>{
            result.innerHTML = `<h3>city not found</h3>`;
        })
    }

};
// window.addEventListener("load", getWeather);
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
