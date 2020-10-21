// Dati


// button
var generetor = document.getElementById("buttonhtml");





generetor.addEventListener('click', function(){

  // calcolo chilometri
  var km = document.getElementById("kmHtml");
  var kmJs = km * 0.21 ;

  // discount
  var disc = document.getElementById("discount").value;


  if (disc == "minorenne"){
    var price = document.getElementById("cost")
    price.innerHTML = Math.floor(kmJs * 0.80) + ("€");
  }
  else if (disc == "over65"){
    var price = document.getElementById("cost")
    price.innerHTML = Math.floor(kmJs * 0.60) + ("€");
  }
  else if (disc == "nessuno"){
    var price = document.getElementById("cost");
    price.innerHTML = Math.floor(kmJs) + ("€");
  }






// CODICE TRENO
train = document.getElementById("trainNumber");
numtrain = Math.random(1) * 10000 ;
train.innerHTML =  (Math.floor(numtrain));


// NUMERO CARROZZA
carrozza = document.getElementById("carriage");
numCarr = Math.random(1) * 10 + 1 ;
carrozza.innerHTML =  (Math.floor(numCarr));


var disc = document.getElementById("discount").value;
var discName = document.getElementById("typeDiscount");
discName.innerHTML = disc.value;

// NOME CLIENTE
  var name = document.getElementById("firstname");
  var ticketName = document.getElementById("finalname");
  ticketName.innerHTML = name.value;
});

// <select name="cars" id="cars">
//   <option value="volvo">Volvo</option>
//   <option value="saab">Saab</option>
//   <option value="mercedes">Mercedes</option>
//   <option value="audi">Audi</option>
// </select>


// else if (eta >= 65){
// document.getElementById("prezzo").innerHTML = ("il prezzo del biglietto è di " ) + Math.floor(km * 0.60) + ("€");
// }

// else if (!isNaN(nome) || isNaN(km)){
//   document.getElementById("prezzo").innerHTML = ("inserire i dati corretti Grazie");
// }
//
// else {
//   document.getElementById("prezzo").innerHTML = ("il prezzo del biglietto è di " ) + Math.floor(km) + ("€");
// }
