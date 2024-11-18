const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 500,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content .section__subheader", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__container .mision", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__container .mision .section__description", {
  ...scrollRevealOption,
  origin: "left",
  delay: 500,
});

ScrollReveal().reveal(".about__container .vision", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__container .vision .section__description", {
  ...scrollRevealOption,
  origin: "right",
  delay: 500,
});

ScrollReveal().reveal(".skill__content .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".skill__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".skill__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".skill__btn", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".skill__card", {
  duration: 1000,
  interval: 500,
  delay: 100,
});

const portfolio = document.querySelector(".portfolio__image");

const portfolioContent = Array.from(portfolio.children);

portfolioContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  portfolio.appendChild(duplicateNode);
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
});
