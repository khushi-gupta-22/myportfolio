let details = document.querySelector(".details")
let imgContainer = document.querySelector(".img-container")
let btn = document.querySelector("#btn")

let url = "https://random-data-api.com/api/v2/users?response_type=json";

let getUser = () => {
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        imgContainer.innerHTML = `<img src= ${data.avatar}>`;
        details.innerHTML = `
        <h2> ${data.first_name} ${data.last_name} </h2>
        <h3> ${data.employment.title} </h3>
        <h4> ${data.address.city} </h4> 
        `;

        let randomcolor = 
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

        document.documentElement.style.setProperty
        ("--theme-color", randomcolor);


    });



};
window.addEventListener("load", getUser);
btn.addEventListener("click", getUser);

 