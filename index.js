
let cercleBas = document.querySelector('#cercle');
let cercleCentre = document.querySelector('#cercleCentre');
let cercleHaut = document.querySelector('#cercleHaut');
let button = document.querySelector('button');
 
let change;
let secondChange;

//Feu du bas passe au gris et feu du milieu passe au orange 
function greenToGrey() {
    cercleBas.style.background = "grey";
}

function greyToOrange() { 
    cercleCentre.style.background = "orange";
} 

//Feu du milieu passe au gris et feu du haut passe au rouge
function delay() {
    change = setTimeout(orangeToRed,2000);
}


function orangeToRed() {
    cercleHaut.style.background = "red";
    cercleCentre.style.background = "grey";
}

//Feu du haut passe au gris et feu du bas repasse au vert
function secondDelay() {
    secondChange = setTimeout(backToGreen,5000);
}

function backToGreen() {
    cercleHaut.style.background = "grey";
    cercleBas.style.background = "green";
}


function execute() {
            greenToGrey();
            greyToOrange();
            delay();
            secondDelay();                 
}


function repeat() {
    
    execute();
    setInterval(execute, 8000);
    
}

