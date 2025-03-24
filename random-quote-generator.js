// let quote = document.querySelector("#quote");
// let author = document.querySelector("#author");
// let btn = document.querySelector("#btn");

// // const url = "https://api.quotable.io/random";
// const url = "https://api.api-ninjas.com/v1/quotes";
// const api = "Z3lpeXHnPgok1VAEMTNKy1k5d7JQyvYbLamCk2Dw"


 
 



// let getQuote = () => {
//     fetch(url)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((item) => {
//         quote.textContent = item.content;
//         author.textContent = item.author;
//     })
//     .catch((error) => {
//         console.error("Error fetching the quote:", error);
//         quote.textContent = "Failed to fetch quote";
//         author.textContent = "";
//     });
// };

// window.addEventListener("load", getQuote);
// btn.addEventListener("click", getQuote);
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let btn = document.querySelector("#btn");

const url = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "Z3lpeXHnPgok1VAEMTNKy1k5d7JQyvYbLamCk2Dw";

// Fetch a random quote from the API
let getQuote = () => {
    fetch(url, {
        method: "GET", 
        headers: {
            "X-Api-Key": apiKey // Adding the API key in the header
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((item) => {
        // Assuming the response contains an array of quotes
        if (item && item.length > 0) {
            quote.textContent = item[0].quote;
            author.textContent = item[0].author;
        } else {
            quote.textContent = "No quote found!";
            author.textContent = "";
        }
    })
    .catch((error) => {
        console.error("Error fetching the quote:", error);
        quote.textContent = "Failed to fetch quote";
        author.textContent = "";
    });
};

// Call getQuote when the page loads or when the button is clicked
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
