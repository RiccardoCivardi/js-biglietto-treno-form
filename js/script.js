/* 
UTENTE --> Nome - Cognome
UTENTE --> Km da percorrere
UTENTE --> Selezionare la fascia d'età (maggiorenne, minorenne, over 65)
Prezzo biglietto = km * 0.21€/km
Sconto minorenni: 20%
Sconto over 65: 40% 
---> Stampare in pagina biglietto con:
Nome e Cognome, Costo del biglietto (2 decimali) 
*/
// ----------------------------------


/* DATA LAYER */

// default
const priceForKm = 0.21;
const discountJunior = 0.2;
const discountSenior = 0.4;
const btnReset = document.querySelector('#btn-clear');
const info = document.querySelector('#info');
let isInfoVisible = false;
const btnInput = document.querySelector('#btn-input');

// inseriti dall'utente
let namePassenger = document.querySelector('#nome-cognome');
let kmPassenger = document.querySelector('#km-tratta');
let agePassenger = document.querySelector('#fascia-eta');

// inizializzate
let totalPrice, typeTicket;

//output 
/* PRESENTATION LAYER */

const priceTicket = document.querySelector('#price-ticket');
const nameTicket = document.querySelector('#name-passenger');
const Ticket = document.querySelector('#type-ticket');


/* BUSINESS LAYER */

// info che appare al click

info.addEventListener('click',toggleText);

function toggleText(){
  
  if(isInfoVisible){
    document.querySelector('ul').classList.add('d-none');
    isInfoVisible = false;
  }else{
    document.querySelector('ul').classList.remove('d-none');
    isInfoVisible = true;
  }
}

// logica del biglietto

btnInput.addEventListener('click',ticket);

function ticket(){
  //prezzo standard
  totalPrice = kmPassenger.value * priceForKm;
  typeTicket = "standard";
  
  //applico lo sconto se necessario e assegno il tipo di biglietto
  if (agePassenger.value === "minorenne") {
    totalPrice *= 1 - discountJunior;
    typeTicket = "junior";
  } else if (agePassenger.value === "senior") { 
    totalPrice *= 1 - discountSenior;
    typeTicket = "senior";
  }
  
  /* PRESENTATION LAYER  */
  priceTicket.innerHTML = totalPrice.toFixed(2);
  nameTicket.innerHTML = namePassenger.value;
  Ticket.innerHTML = typeTicket;

};


// reset con il bottone annulla sia degli input che del biglietto

btnReset.addEventListener('click', function(){
  kmPassenger.value = '';
  namePassenger.value = '';
  agePassenger.value = 'maggiorenne';

  /* PRESENTATION LAYER  */
  priceTicket.innerHTML = '';
  nameTicket.innerHTML = '';
  Ticket.innerHTML = '';
})
















