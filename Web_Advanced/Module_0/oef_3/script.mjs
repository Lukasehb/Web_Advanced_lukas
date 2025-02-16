'use strict';
const button = document.getElementById("themaKnop");
const links = document.querySelectorAll("a");


button.addEventListener("click", () => {
    button.textContent = button.textContent === "Donker thema" ? "Licht thema" : "Donker thema";

    if (document.body.style.backgroundColor == "black") //if the backgournd color is black switch to light mode
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"; // text bcomes black again so that it can be red when it's light mode
        links.forEach(link => link.style.color = "blue"); // link become blue again so that it doesn't stay green
        
    } else  {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        links.forEach(link => link.style.color = "green");}

});