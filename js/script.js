// creazione variabile lista
var lista = document.getElementById("lista");


// Chiedi all’utente il cognome
var nuovoUtente = prompt('Inserisci il tuo cognome');

// inseriscilo in un array con altri cognomi
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
cognomi.push(nuovoUtente);

// cognomi aggiornati alfabeticamente
cognomi.sort(function(a,b){return a.toLowerCase().localeCompare(b.toLowerCase());});
console.log(cognomi);
// individua posizione nuovo utente in array cognomi
var posizione = cognomi.indexOf(nuovoUtente);

for( i = 0; i < cognomi.length; i++){
    // stampa la lista ordinata alfabeticamente
  var itemLista = lista.innerHTML;
  lista.innerHTML = itemLista + '<li>' + cognomi[i] + '</li>';

  if( cognomi[i] === nuovoUtente ){
    // Scrivi anche la posizione della lista in cui il nuovo utente si trova
    lista.innerHTML = itemLista + '<li>' + cognomi[i] + ' La tua posizione all\'interno della lista è: ' + (posizione + 1) + '</li>' ;
  }

}
