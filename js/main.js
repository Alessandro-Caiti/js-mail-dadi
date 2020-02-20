// Esercizio mail

var partecipanti = ["tizio@mail.com", "caio@mail.com", "sempronio@mail.com", "pippo@mail.com", "pluto@mail.com", "paperino@mail.com"];
var persona = prompt("Inserisci la tua e-mail per partecipare");
var accettato = false;

for (var i = 0; i < partecipanti.length; i++) {
    if (partecipanti[i] == persona) {
        accettato = true;
    }
}

if (accettato) {
    document.getElementById('risultato').innerHTML = "Puoi entrare " + persona;
} else {
    document.getElementById('risultato').innerHTML = "Non puoi entrare " + persona;
}




// Esercizio dadi
//
// var guerriero = Math.floor(Math.random() * 10) + 1;
// var mago = Math.floor(Math.random() * 10) + 1;
// document.getElementById('risultato').innerHTML = "Il mago ha tirato: " + mago;
// document.getElementById('risultato-2').innerHTML = "Il guerriero ha tirato: " + guerriero;
//
// if (mago > guerriero) {
//     document.getElementById('vincitore').innerHTML = "Il mago ha sconfitto il guerriero";
// } else if (mago == guerriero) {
//      document.getElementById('vincitore').innerHTML = "Il mago e il guerriero sono alla pari";
// } else {
//      document.getElementById('vincitore').innerHTML = "Il guerriero ha sconfitto il mago"
// }
