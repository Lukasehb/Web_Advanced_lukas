'use strict'

const speciaal = document.querySelectorAll('.special');
const paragraaf = document.querySelectorAll("p");


speciaal.forEach(speciaal => speciaal.style.color ="red");

paragraaf.forEach(paragraph => 
    {if(!paragraph.classList.contains("special")) 
        { paragraph.style.textDecoration ="underline";}  
});

const specialCount = speciaal.length;

document.getElementById("output").textContent = `Aantal gevonden "special": ${specialCount}`;

