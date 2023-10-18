//hide witch after 2s
const hideWitch = () => {
  const witchElement = document.querySelector(".container");
  witchElement.style.display = "none";
};
setTimeout(hideWitch, 2000);

//show content after 2s 
const showNavbar = () => {
  const navbar = document.querySelector(".delay");
  navbar.style.display = "block";
};
setTimeout(showNavbar, 2000);

// JavaScript to toggle sections only on mobile devices
if (window.innerWidth <= 767) {
  const sections = document.querySelectorAll('.delay');
  const menuBtn = document.querySelector('.menu-btn');

  menuBtn.addEventListener('click', () => {
    sections.forEach((section) => {
      section.classList.toggle('show');
    });
  });
}
