

var person;
var yourNumber;
var magicNumber;


person = prompt('Welkom! Wat is je naam', '');
alert('Hey ' + person + '!');

magicNumber = Math.floor(Math.random() * 26);


yourNumber = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...", "");
alert('Je nummer is ' + yourNumber)
alert('het magische nummer is ' + magicNumber)

//function
const guessIt = function(){
while (yourNumber != magicNumber) {
    alert("helaas, probeer het opnieuw")
yourNumber = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...", "");

    guessIt();    
}

if (yourNumber == magicNumber){
    alert('Gefeliciteerd, je hebt gewonnen');
    confirm('Dag ' + person + ' Tot de volgende keer!');
}
}
guessIt();