'use scrict';

// Voorbeeld start-code
let naam = prompt("Wat is je naam?");
let score = 0;

let som = prompt("wat is 5 + 5");

    if (som == "10"){
        score++;
        alert("correct, score: " + score);

      
    } else alert("fout, het juist antwoord was 10. score: " + score);

let land = prompt("Welk land staat bekend voor hun frietjes?")

if (land == "België" || land == "belgie" ){
    score++;
    alert("correct, score: " + score);

  
} else alert("fout, het juist antwoord was België. score: " + score);

let geschiedenis =prompt("Welk schip zonk tijdens zijn eerste reis in 1912?")

if (geschiedenis == "Titanic"|| geschiedenis =="titanic"){
    score++;
    alert("correct, score: " + score);

  
} else alert("fout, het juist antwoord was Titanic. score: " + score);

alert(" Porficiat " + naam + " jouw score is " + score + "/3")


// Stel hier je vragen...
// Hou de score bij...
// Toon het resultaat...