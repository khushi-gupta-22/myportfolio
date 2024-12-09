// typing animation
var typed = new Typed(".typing",{
    strings: ["","Web Designer","Web Developer","Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
// Aside
// const nav = document.querySelector(".nav"),
//     navList = nav.querySelectorAll(".li"),
//     totalNavList = navList.length;
//     for(let i=0; i<totalNavList; i++)
//     {
//         const a = navList[i].querySelector("a");
//         a.addEventListener("click", function()
//         {
//             for(let j=0; j<totalNavList; j++)
//             { 
//                 navList[j].querySelector("a").classList.remove
//             }
//             this.classList.add("active")
//             showSection(this);
//          })
//     }

// const nav = document.querySelector(".nav"),
//     navList = nav.querySelectorAll("li"),
//     totalNavList = navList.length;

// for (let i = 0; i < totalNavList; i++) {
//     const a = navList[i].querySelector("a");
//     a.addEventListener("click", function () {
//         // Remove "active" class from all links
//         for (let j = 0; j < totalNavList; j++) {
//             navList[j].querySelector("a").classList.remove("active");
//         }
//         // Add "active" class to the clicked link
//         this.classList.add("active");

//         // Call showSection with the clicked link
//         showSection(this);
//     });
// }

// function showSection(element) {
//     const target = element.getAttribute("href").substring(1); // Get the target ID
//     const section = document.getElementById(target); // Find the target section
//     const sections = document.querySelectorAll(".section"); // Assuming sections have class "section"

//     // Hide all sections
//     sections.forEach((sec) => sec.classList.remove("visible"));

//     // Show the target section
//     section.classList.add("visible");
// }



// let sections = document.querySelectorAll(".section");
// let navLinks = document.querySelectorAll("nav a");
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop -150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute("id");

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove("active");
//                 document.querySelector("nav a [href*=' + id +']").classList.add("active");
//             })
//         }
//     })
// }


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
