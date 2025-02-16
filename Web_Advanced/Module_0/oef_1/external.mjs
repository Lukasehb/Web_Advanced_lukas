'use strict';
const button = document.getElementById("Button");


button.addEventListener("click", () => {
    button.textContent = button.textContent === "Hallo!" ? "Tot ziens!" : "Hallo!";
});
