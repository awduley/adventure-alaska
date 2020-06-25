// Variables from the dom
let credit = document.querySelector('.end__year');

// Get full year method
let fullYear = new Date().getFullYear();

// Adding fullYear into the credit span
credit.innerText = fullYear;