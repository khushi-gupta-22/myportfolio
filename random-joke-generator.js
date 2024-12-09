const jokeContainer = document.querySelector("#joke");
const button = document.querySelector("#btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let getJoke = () => {
    jokeContainer.textContent = "Loading..."
    fetch(url)
    .then(data => data.json())
    .then(_item => {
        // jokeContainer.textContent = `${_item.joke}`;
        // backtics are used to embedding variables directly into a string without having to concatenate.
        // other way of writing the above line
        // jokeContainer.textContent = _item.joke + ""; 
        // below lines for not showing undefined even for once
        if (_item.joke) {
            jokeContainer.textContent = _item.joke;
        } else if (_item.setup && _item.delivery) {
            jokeContainer.textContent = `${_item.setup} ... ${_item.delivery}`;
        } else {
            jokeContainer.textContent = "No joke found.";
        }
    }     
);
}
btn.addEventListener("click", getJoke);
getJoke();
