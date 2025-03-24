let searchBtn = document.querySelector("#search-btn");
let countryInp = document.querySelector("#country-inp");
let result = document.querySelector("#result");

let getCountry = () => {
  result.innerHTML = "";  
  let countryName = countryInp.value; 
  if (!countryName) {
      result.innerHTML = "<p>Please enter a country name.</p>";
      return;
  }
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
  .then((response) =>{
     if (!response.ok) {
          throw new Error("Country not found");  // Throw an error if the country is not found
      }
        return response.json();
      })
  .then((data) => {
        let countryData = data[0];
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        let currencyCode = Object.keys(countryData.currencies)[0]; 
        let currencyName = countryData.currencies[currencyCode].name;
       
        
        if (!countryData) {
            result.innerHTML = "<p>Country not found.</p>";
            return;
        }
        result.innerHTML = `
          <img src= "${data[0].flags.svg}" 
          class = "flag-img">
          <h2>${data[0].name.common}</h2>

          <div class ="wrapper">
            <div class="data-wrapper">
               <h4>Capital:</h4>
               <span>${data[0].capital[0]}</span>
            </div> 
          </div>   
          <div class ="wrapper">
            <div class="data-wrapper">
               <h4>Continents:</h4>
               <span>${data[0].continents[0]}</span>
            </div> 
          </div>   
          <div class ="wrapper">
            <div class="data-wrapper">
               <h4>Population:</h4>
               <span>${data[0].population}</span>
            </div> 
          </div>  
          <div class ="wrapper">
            <div class="data-wrapper">
               <h4>Currency:</h4>
               <span>${currencyName} (${currencyCode})</span>
            </div> 
          </div>    
        
        `;
    })
    .catch(() =>{
      // if(countryName.length == 0){
      //   result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      // }
      // else{
        result.innerHTML = `<h3> Please enter a valid country name</h3>`;
      // }

    });
  };

    

// window.addEventListener("load",getCountry);
searchBtn.addEventListener("click",getCountry);