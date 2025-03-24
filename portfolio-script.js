// typing animation
var typed = new Typed(".typing",{
    strings: ["","Data Analyst","Web Developer","Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// Navigation function for clicking on a project card
function navigateTo(page) {
    window.location.href = page;
}



let sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjust offset for your header height
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            // Correct selector for the current section
            document.querySelector(`nav a[href*="${id}"]`).classList.add("active");
        }
    });
};
