//Un alert espone 5 numeri casuali.
//Da li parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire un prompt alla volta
// i numeri che ha visto precedentemente.
//Dopo che sono stati inseriti i 5 numeri,
//il software dice quanti e quali
// dei numeri da indovinare sono stati individuati

alert('ciao');

//Un alert espone 5 numeri casuali
var arreyNumeriRandom = [];
var arreyNumeriPrompt = [];
var risultato = 0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numeriPresenti(lista, numero) {
  for (var i = 0; i < lista.length; i++) {
    if (lista[i] == numero) {
      return true;
    }
    else {
      return false;
    }
  }
}

for (var i = 1; i < 6; i++) {
  arreyNumeriRandom.push(getRandomIntInclusive(1, 100));
}
alert(arreyNumeriRandom);

//Da li parte un timer di 30 secondi
//Dopo 30 secondi l'utente deve inserire un prompt alla volta
// i numeri che ha visto precedentemente

var i = 0;

setTimeout(function() {
  while (i < 5) {
    var numeroUtente = parseInt(prompt('inserire un numero'));
    arreyNumeriPrompt.push(numeroUtente);
    console.log(arreyNumeriPrompt);
  }
  i++
  break;
}
var y = 0;

while (y < 5) {
  if (numeriPresenti(arreyNumeriRandom, arreyNumeriPrompt[y]) == true) {
    risultato++;
  }
  y++
}
console.log(risultato);

}, 1000);
