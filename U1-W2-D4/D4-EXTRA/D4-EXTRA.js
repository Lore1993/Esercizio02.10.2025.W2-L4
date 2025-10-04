// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (a,b) {
    let somma = a+b
    let random = Math.floor(Math.random() *10)+1;
    return somma + random
 }
const checkArray = function (giveMeRandom){
    if (giveMeRandom >5){console.log("Valore maggiore di 5")}
else {console.log("Minore di 5")} }

let risultato = giveMeRandom(2, 1) // 
console.log("Risultato:", risultato)

checkArray(risultato) 

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
  { id: 1, name: "Laptop", price: 1000, quantity: 1 },
  { id: 2, name: "Mouse", price: 25, quantity: 2 },
  { id: 3, name: "Monitor", price: 200, quantity: 1 },
];

const shoppingCartTotal = function () {
    let totale = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    totale += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return totale
}
console.log("Totale carrello:", shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function addToShoppingCart(newItem) {


    let totalItems = 0;
     const existingItem = shoppingCart.find(item => item.id === newItem.id)
    if (existingItem) {

        existingItem.quantity += newItem.quantity;
    } else {
      
        shoppingCart.push(newItem);
 
    }

 
    return totalItems;
}
const nuovoProdotto = { id: 4, name: "Keyboard", price: 150, quantity: 1 };
console.log(addToShoppingCart(nuovoProdotto)); // 10
console.log(shoppingCart);


const nuovoProdotto1 = { id: 2, name: "Mouse", price: 25, quantity: 1 };
console.log(addToShoppingCart(nuovoProdotto1)); // Aggiorna la quantità
console.log(shoppingCart);




/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart (shoppingCart) {
let mostExpensive = [0]
if (shoppingCart.length === 0) return null;
 for (i=0; i <shoppingCart.length; i++) {
        if (shoppingCart[i].price > mostExpensive.price) {
            mostExpensive = shoppingCart[i]; 
        }
    }

    return mostExpensive;

}
const mostExpensive = maxShoppingCart(shoppingCart);
console.log("ID:", mostExpensive.id);
console.log("Nome:", mostExpensive.name);
console.log("Prezzo:", mostExpensive.price);


/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = function (shoppingCart) {
if (shoppingCart.length === 0) return null; // caso array vuoto
    return shoppingCart[shoppingCart.length - 1];
}
const latest = latestShoppingCart(shoppingCart)
console.log("last add", latest)
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const loopUntil= function(x) {
  let consecutive = 0

 while (consecutive<3) {
let random =  Math.floor(Math.random() *10);
console.log(random)
if (random>x ) {consecutive++}
else {consecutive=0}
console.log("consecutive + 1");

 } }
const numero = Math.floor(Math.random() *10);
const day = loopUntil(numero)
console.log("True", day)*/


/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
bay = [0,"1",5,5,10,5]

const average = function (a) {
  let sum = 0;       // somma dei numeri
    let count = 0;     // contatore dei numeri validi

    for (let value of a) {
        if (typeof value === "number") {  // salto i valori non numerici
            sum += value;
            count++;
        }
    }

    if (count === 0) return 0; // se non ci sono numeri, ritorna 0
    return sum / count; 

}

console.log ("media",average(bay))


/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const parole = ["Gatto", "Elefante", "Topo", "Gallina"]
const longest = function (a) {
let longsn = ""
for (let x of a) {
  if ( x.length > longsn.length) {longsn = x}
}
return longsn
}
console.log("parola piu lunga", longest(parole))

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const a = ["Buongiorno", "senza", "SPAM"]

const filter = function (emailContent) {
  for (let x of emailContent) {
    if (x !== "SCAM" || x !== "SPAM") {console.log("No SPAM or SCAM word")}
    else {console.log("SCAM word present") }
  }
}
console.log(filter(a))



/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const longTimeNoSee = function (x) {
const today = new Date("2025/10/04");             
  const pastDate = new Date(x)
  const diffMs = today - pastDate;
   const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
   return diffDays;
}
console.log(longTimeNoSee("1993-08-23"));
console.log(longTimeNoSee("2024-12-12"))

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const matrixGenerator = function (x,y) {
const row = (x)
const column = (y)
const matrix = [];

for (let i = 0; i < row; i++) {
  matrix[i] = [];
  for (let j = 0; j < column; j++) {
    matrix[i][j] = `${i}${j}`;
  }
}


  return matrix;
};


console.table(matrixGenerator(7, 4));