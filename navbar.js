
// Navbar hide and Show 
let isOpen = false;

let navbar = document.getElementById("navL");

function humbergerlist() {

    if (isOpen) {

        navbar.classList.remove("hideShow");

    }
    else {
        navbar.classList.add("hideShow");
    }
    isOpen = !isOpen

}
// Scrolling to words on click in navbar
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navBtn');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});