// let quote = document.querySelector("#quote")
// let author = document.querySelector("#author")
// let btn = document.querySelector("#btn")

// const url = "https://api.quotable.io";

// let getQuote = () => {
//     fetch(url)
//     .then((data) => data.json())
//     .then((item => {
//         quote.textContent = item.content ;
//         author.textContent = item.author;
//     }))
// };

// window.addEventListener("load",getQuote)
// btn.addEventListener("click",getQuote)
// getQuote();
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let btn = document.querySelector("#btn");

const url = "https://api.quotable.io/random";
// const url = "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random";

 
 



let getQuote = () => {
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((item) => {
        quote.textContent = item.content;
        author.textContent = item.author;
    })
    .catch((error) => {
        console.error("Error fetching the quote:", error);
        quote.textContent = "Failed to fetch quote";
        author.textContent = "";
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
