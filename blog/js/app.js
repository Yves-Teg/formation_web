console.log("Le script est branche!");

const firstName = "Teguia"; 
const age = 27;
const city = "Yaoude";
let jsLevel = 2;

console.log(`${firstName}, ${age} ans, niveau JS : ${jsLevel}/10`);

jsLevel = jsLevel + 1;
console.log(`${firstName}, ${age} ans, niveau JS : ${jsLevel}/10`);

const firstName = "Yves"; 


// Exercice 2.3: Le laboratoire des types

// 1 et 2. Resultats des expressions observes en Console et observations en francais:
// typeof "5"        -> "string" (c'est un texte)
// typeof 5          -> "number" (c'est un nombre)
// typeof true       -> "boolean" (vrai ou faux)
// typeof undefined  -> "undefined" (valeur non definie)
// "5" + 3           -> "53" (JavaScript a colle les deux elements ensemble)
// "5" - 3           -> 2 (JavaScript a converti le texte en nombre pour soustraire)
// Number("5") + 3   -> 8 (La conversion explicite permet l'addition mathematique)
// Number("abc")     -> NaN (Not a Number : "abc" ne peut pas devenir un nombre)

// 3. Pourquoi "5" + 3 et "5" - 3 ne reagissent pas pareil?
/*
   L'opérateur '+' a une double fonction en JavaScript: il fait l'addition mathematique 
   mais il sert aussi a la concatenation (coller des textes). Des qu'un des deux cotes 
   est une chaine de caracteres (string), le '+' l'emporte et colle le reste comme du texte.
   
   Par contre, l'operateur '-' n'a aucune fonction textuelle. Il n'existe que pour les maths. 
   JavaScript va donc tenter automatiquement de convertir le texte "5" en nombre pour pouvoir 
   effectuer la soustraction.
*/

// Exercice 2.4: Portees en cage

const planet = "Terre";
{
    const city = "Douala";
    console.log(planet); // Affiche : "Terre" (Accessible car globale)
    console.log(city);   // Affiche : "Douala" (Accessible à l'intérieur du bloc)
}
console.log(planet);     // Affiche : "Terre" (Accessible au niveau global)

// 1 et 2. Execution de la derniere ligne et analyse de l'erreur :
console.log(city);       
// Resultat obtenu : ReferenceError: city is not defined
// Explication : La variable 'city' a ete declaree avec 'const' a l'interieur d'un bloc 
// de code { ... }. Elle est "en cage" et n'existe pas en dehors de ce bloc.
