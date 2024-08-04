hambuger = document.querySelector(".hambuger");
hambuger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

const navLinks = document.querySelectorAll(".nav-bar ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    this.classList.add("active");
  });
});

const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("mouseenter", function () {
  dropdownMenu.style.display = "block";
});

dropdown.addEventListener("mouseleave", function () {
  dropdownMenu.style.display = "none";
});

const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".card-sec");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
const cardWidth = 500; // width of each card
const margin = 20; // margin between cards

const updateSliderPosition = () => {
  const newPosition = -(currentIndex * (cardWidth + margin));
  slider.style.transform = `translateX(${newPosition}px)`;
};

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});
