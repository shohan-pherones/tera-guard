"use strict";

/////////////////////////////////////////////////////////////
// Elements
/////////////////////////////////////////////////////////////

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const header = document.querySelector(".header");
const message = document.createElement("div");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const navLinks = document.querySelector(".nav__links");

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
