function berechnen(){

wandpreis = 9
deckenpreis = 12
tuerenpreis = 70
fensterpreis = 25

A = document.getElementById("deckenflaeche").value;
B = document.getElementById("wandflaeche").value;
C = document.getElementById("tuerenanzahl").value;
D = document.getElementById("fensteranzahl").value;
document.getElementById("gesamtpreis").innerHTML = A * deckenpreis + B * wandpreis + C * tuerenpreis + D * fensterpreis + " €";
}

function löschen(){
    document.getElementById("deckenflaeche").innerHTML = "";
    document.getElementById("wandflaeche").innerHTML = "";
    document.getElementById("tuerenanzahl").innerHTML = "";
    document.getElementById("fensteranzahl").innerHTML = "";
    document.getElementById("gesamtpreis").innerHTML = "‎";
}