// Variables from the dom
let credit = document.querySelector('.end__year');
const lines = document.querySelector('.nav__lines');
const line1 = document.querySelector('.nav__line--1');
const line2 = document.querySelector('.nav__line--2');
const line3 = document.querySelector('.nav__line--3');
const navLinks = document.querySelector('.nav__links');
let fullYear;

// Functionality for the hamburger button
lines.addEventListener('click', () => {
  line1.classList.toggle('nav__action--1');
  line2.classList.toggle('nav__action--2');
  line3.classList.toggle('nav__action--3');
  navLinks.classList.toggle('drop-down')
;});

// Get full year method
fullYear = new Date().getFullYear();

// Adding fullYear into the credit span
credit.innerText = fullYear;