// dati
 var UNIT_COST = 0.21;

// button
var generetor = document.getElementById("buttonhtml");

// input
var km = document.getElementById("kmHtml");
var disc = document.getElementById("discount");

// OUTPUT
var ticketName = document.getElementById("finalname");
var ticketCost = document.getElementById("cost");
var typeDiscount = document.getElementById('typeDiscount');


generetor.addEventListener('click', function(){
  var name = document.getElementById("firstname");


// IMPOSTO I VALORI
  var nameSur = name.value;
    console.log(nameSur);
  var distance = km.value;
    console.log('valore km', distance);
  var discYO = disc.value;
    console.log('valore discount', discYO);

// IMPOSTO IL PRIMO CASO
  var price = parseInt(distance * UNIT_COST);
  var discountMessage = "Nessuno sconto applicato";

// CALCOLO DEGLI ALTRI CASI
  if (discYO == "minorenne"){
      price -= price * 0.20;
       discountMessage = "sconto giovani";
  }
  else if (discYO == "over65"){
      price -= price * 0.40 ;
       discountMessage =" sconto Over 65";
  }

  typeDiscount.innerHTML = discountMessage;
  ticketCost.innerHTML =  price.toFixed(2) + ("€") ;
  ticketName.innerHTML = nameSur;


// CODICE TRENO
train = document.getElementById("trainNumber");
numtrain = Math.random(1) * 10000 ;
train.innerHTML =  (Math.floor(numtrain));


// NUMERO CARROZZA
carrozza = document.getElementById("carriage");
numCarr = Math.random(1) * 10 + 1 ;
carrozza.innerHTML =  (Math.floor(numCarr));

 document.getElementById("ticket").style.display = 'block';

});
