// Exercice 4.1: Gammes

// 1- compte de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2- compte a rebours de 10 a 1
let i= 10; // The counter is initialized outside.
while ( i >= 1) { // The condition for continuation
    console.log(i); //Decrement at each iteration to avoid an infinite loop.
    i--;
} 
console.log("Decollage !");

// 3- Les nombres pairs de 0 a 20, de deux façons
// 1ere facon: Un if avec continue
for (let i = 0; i<= 20; i++) {
    if(i % 2 !== 0) { // If the number is odd, the remainder of the division will be non-zero
        continue;
    }
    console.log(i);
}

// 2eme facon: Un pas de 2.
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}
/* the best method is method 2.
Because, with method 1, the loop must eecute multiple times and perform rejections to find the odd
number, whereas method 2 is shorted and involves no conditions.
*/

// Exercice 4.2: Table du marche

// 1- table de multiplication de 7 avec for
for (let i = 1; i <= 10; i = i + 1) {
  
  // We simply calculate the result.
  let resultat = 7 * i;
  
  // We join the pieces with plus signs at each turn.
  console.log("7 x " + i + " = " + resultat);
}

// 2- avec while
let i = 1;
while (i <= 10) {
   let resultat = 7 * i;
   console.log("7 x " + i + " = " + resultat);  // We join our text segments and variables together.
   i = i + 1;   // We add 1 to 'i' to move to the next iteration.
}

/* 
3- pour ce probleme precis je prefere la boucle for car on connait exactement et a l'avance 
le nobre de tour a effectuer.
 */

//Exercice 4.3: Ta playlist
// 1-
const playlist = ["Bolivienne", "Essaie encore", "A dix", "Me and my girlfriends", "Le prix de la reussite"];

// 2- Affiche premier, dernier et nombre total.
  // first
console.log ("first title : " + playlist[0]);
  // last
let indexDernier = playlist.length - 1;
console.log("last title : " + playlist[indexDernier]);
  // Total number of elements
console.log("Total number of elements : " + playlist.length);

// 3- Ajoute un titre avec push, reaffiche le total.
  // add title with push
playlist.push("La madrina");
  // New total number of elements
 console.log("New total number of elements : " + playlist.length);
 
 // 4- Un for...of qui affiche chaque titre
for (const titre of playlist) { // The loop takes each piece one by one automatically
  console.log(titre);
}

// 5-  La numerotation : un for classique qui affiche "1. [titre]", "2. [titre]"
for (let i = 0; i < playlist.length; i = i + 1) {
    let numeroAffiche = i + 1;  // // We calculate the display number for human-readable output (i + 1)
    console.log(numeroAffiche + ". " + playlist[i]);  //We string the pieces together to create: "1. Bohemian Rhapsody"
}