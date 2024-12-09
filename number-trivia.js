let getFactBtn = document.querySelector("#get-fact-btn");
let ranFactBtn = document.querySelector("#ran-fact-btn");
let fact = document.querySelector(".fact");
let url = "http://numbersapi.com/";

let fetchFact = (num) => {
    let finalUrl = url + num;
    fetch(finalUrl)
    .then((resp) => resp.text())
    .then((data) => {
        fact.innerHTML = `
        <h2>${num}</h2>
        <p>${data}</p>`;
        document.querySelector(".container").append(fact);
        
    })

}

let getFact = () => {
    let numInput = document.querySelector("#num-input").value;
    let num = parseInt(numInput);

    if (numInput) {
        if(num>=0 && num<= 300){
            fetchFact(num);
        }else{
            fact.style.display = "block"
            fact.innerHTML = `
            <p class="msg">Please enter a number between 0 to 300.</p>;
            `
        }    
    }else {
        fact.style.display = "block"
        fact.innerHTML = `<p class = "msg">The input field cannot be empty`;

    }
    
};

let getRandomFact = () => {
    let num = Math.floor(Math.random()*301);
    fetchFact(num);
};

getFactBtn.addEventListener("click", getFact);
ranFactBtn.addEventListener("click",getRandomFact);
window.addEventListener("load",getRandomFact);
