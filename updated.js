// // Function to navigate to specific sections smoothly
// function scrollToSection(sectionId) {
//     document.getElementById(sectionId).scrollIntoView({
//         behavior: 'smooth'
//     });
// }

// // Function to slide projects left or right within a section
// function slide(direction, containerId) {
//     const container = document.getElementById(containerId + '-container');
//     const scrollAmount = container.clientWidth; // Scroll by the width of the container

//     if (direction === 1) {
//         // Slide to the right
//         container.scrollBy({
//             left: scrollAmount,
//             behavior: 'smooth'
//         });
//     } else if (direction === -1) {
//         // Slide to the left
//         container.scrollBy({
//             left: -scrollAmount,
//             behavior: 'smooth'
//         });
//     }
// }

// Navigation function for clicking on a project card
function navigateTo(page) {
    window.location.href = page;
}
