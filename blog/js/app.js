// EXERCICE 3.3: LE JUSTE PRIX DU TRANSPORT

//  1 et 2 : Les regles et la logique avec operateurs
const amount = 45000; // Montant du panier d'achat
const isLocal = true; // true = en ville, false = hors ville

if (amount === 0) {
    console.log("panier vide");
} else if (amount >= 50000) {
    console.log("Livraison gratuite");
} else if (isLocal === true) {
    console.log("Frais de livraison : 1 000 FCFA");
} else {
    console.log("Frais de livraison : 2 500 FCFA");
}


// 3- Test des 4 cas en Console
// Cas 1 : amount = 0     et isLocal = true  -> Affiche : "panier vide"
// Cas 2 : amount = 55000 et isLocal = false -> Affiche : "Livraison gratuite"
// Cas 3 : amount = 30000 et isLocal = true  -> Affiche : "Frais de livraison : 1 000 FCFA"
// Cas 4 : amount = 30000 et isLocal = false -> Affiche : "Frais de livraison : 2 500 FCFA"


// 4- Question Bonus en commentaire
/* 
   Pourquoi tester « panier vide » en premier ?
   Parce que le chiffre 0 est inferieur a 50 000. Si on plaçait la verification 
   du panier vide apres le test de livraison locale (isLocal === true), un panier a 
   0 FCFA declencherait une livraison a 1 000 FCFA au lieu d'afficher "panier vide".
   L'ordre du haut vers le bas evite ce bug de logique.
*/
