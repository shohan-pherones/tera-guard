"use strict";

/////////////////////////////////////////////////////////////
// Elements
/////////////////////////////////////////////////////////////

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const header = document.querySelector(".header");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const message = document.createElement("div");
const section1 = document.querySelector("#section--1");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");

/////////////////////////////////////////////////////////////
// Modal window
/////////////////////////////////////////////////////////////

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////////
// Smooth scrolling
/////////////////////////////////////////////////////////////

// Page navigation
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Button scrolling
btnScrollTo.addEventListener("click", () => {
  section1.scrollIntoView({ behavior: "smooth" });
});

/////////////////////////////////////////////////////////////
// Menu fade
/////////////////////////////////////////////////////////////

function handleHover(e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
}

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

/////////////////////////////////////////////////////////////
// Cookie element
/////////////////////////////////////////////////////////////

message.classList.add("cookie-message");
message.innerHTML =
  'We use cookies for improving functionalities and analytics. <button class="btn btn--close-cookie">Got it</button>';
header.append(message);

document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  message.remove();
});

message.style.backgroundColor = "#37383d";
message.style.width = "100vw";
message.style.height =
  Number.parseInt(getComputedStyle(message).height) + 50 + "px";

/////////////////////////////////////////////////////////////
// Tabbed component
/////////////////////////////////////////////////////////////

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((tabContent) =>
    tabContent.classList.remove("operations__content--active")
  );

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
