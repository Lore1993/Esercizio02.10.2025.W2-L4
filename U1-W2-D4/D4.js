/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1,l2){
    risultato = l1 * l2;
return risultato
}
console.log("Area rettangolo", area (10,5))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (a,b) {
    let risultato = 0
     if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return("Errore: devi inserire un numero intero!")
    }
    else if (a === b) {risultato= (a+b)*3; return (a + b) * 3;}
    else {risultato = a + b; return a + b;}
  }
console.log("Numeri uguali", crazySum (3,3))
console.log("Numeri decimali", crazySum (1.5,5))
console.log("Risultato corretto", crazySum(3,6))


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (d) {
    let result = d-19
    if (d > 19) {return (result = result*3)}
    else {return"il risultato e' " + result}
}
console.log("minore",crazyDiff (18))
console.log("ugualee",crazyDiff (19))
console.log("maggiore",crazyDiff (20))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
    if (!Number.isInteger(n))
        {return ("Errore: devi inserire un numero intero!")}
    else if (n >= 20 && n <= 100) {return ("TRUE")}
    else if (n === 400) {return ("true")}
    else {return ("false")}
    }
    console.log("diverso",boundary (1))
    console.log("tra 20 e 100", boundary(23))
    console.log("400", boundary (400))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (l) {
  if (typeof l !== "string") {
    return "Errore: inserisci una stringa!";
  }

  if (l.startsWith("EPICODE")) {
    return l; 
  } else {
    return "EPICODE " + l; 
  }
};

console.log(epify("EPICODE 2.0")); 
console.log(epify("Ciao a tutti"));         
console.log(epify(123));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (p) {
    if (p<0) {return("Errore devi inserire un numero positivo")}
    else if (p %7 === 0 || p % 3 === 0) {return ("corretto e'un multiplo di 3 o 7")}
    else {return ("Non e'un multiplo di 3 o 7")}
}
console.log("Multiplo di 7",check3and7(14))
console.log("Multiplo di 3 e 7",check3and7(21))
console.log("Negativo",check3and7(-1))
console.log("Non multiplo",check3and7(4))


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (a) {
    if (typeof a !== "string") {return ("errore, inserisci una stringa")}
    else {return a.split("").reverse().join("");}
}
console.log("epicode",reverseString("epicode"))
console.log("prova", reverseString("itopinonavevanonipoti"))
console.log("numero", reverseString(9))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (string) {
     if (typeof string !== "string") {return ("errore, inserisci una stringa")}
   {
  const first = string.charAt(0).toUpperCase()
  const inside = string.slice(1) 
  let finalString
  if (string.length === 1) {
    finalString = first
  } else {
    finalString = first + inside
  }
  return finalString
}}
console.log ("Normale",upperFirst("ciao bella"))
console.log ("solo una lettera",upperFirst("c"))
console.log ("numero",upperFirst(3))




/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (x) {
if (typeof x !== "string") {
        return "Errore: devi inserire una stringa";
    }
    return x.slice(1, x.length - 1); 
}
console.log("numero", cutString(1))
console.log("Ciao",cutString ("ciao"))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (y) {
    const randomNumber = Math.floor(Math.random() * 11)
    if (typeof y !== "number") {
        return "Errore: devi inserire un numero";
    }
    else return randomNumber
}
console.log ("stringa", giveMeRandom ("ciao"))
console.log("numero", giveMeRandom(10) )
console.log("numero", giveMeRandom(10) )
console.log("numero", giveMeRandom(10) )
console.log("numero", giveMeRandom(10) )
console.log("numero", giveMeRandom(10) )
console.log("numero", giveMeRandom(10) )
console.log("numero", giveMeRandom(10) )
console.log("numero", giveMeRandom(10) )
console.log("numero", giveMeRandom(10) )
console.log("numero", giveMeRandom(10) )
console.log("numero", giveMeRandom(10) )
console.log("numero", giveMeRandom(10) )
console.log("numero", giveMeRandom(10) )
console.log("numero", giveMeRandom(10) )