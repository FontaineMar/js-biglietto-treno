var eta = parseInt(prompt("Quanti hanni hai?"));
var km = parseInt(prompt("Quanti km percorrerai?"));

km = (km * 0.21);

if (eta < 18){
document.getElementById("prezzo").innerHTML = ("il prezzo del biglietto è di " ) + Math.floor(km * 0.80) + ("€");
}

else if (eta >= 65){
document.getElementById("prezzo").innerHTML = ("il prezzo del biglietto è di " ) + Math.floor(km * 0.60) + ("€");
}

else if (isNaN(eta) || isNaN(km)){
  document.getElementById("prezzo").innerHTML = ("inserire i dati corretti Grazie");
}

else {
  document.getElementById("prezzo").innerHTML = ("il prezzo del biglietto è di " ) + Math.floor(km) + ("€");
}
