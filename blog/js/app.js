// Exercice 3.1: Vrai ou Faux

// 1- Predisons chaque resultat:
// 5 ===5 (True)
// "5" === 5(False, a text string cannot be a number.)
// 5 == 5 (True, this text becomes a cipher)
// 10 > 9 (True)
// "b" > "a"(True, In JavaScript, a letter that appears later in the alphabet is considered greater)
// true && false (False, but a piece of information cannot be both true and false. )
// true || false (True, a piece of information is either true or false.)
// !true (False, ! reverses the result)
// (age >== 18 && age < 60) avec age = 70 ( False)

// 2- test en console

console.log(5 === 5);
console.log("5" === 5); 
console.log("5" == 5);        
console.log(10 > 9);          
console.log("b" > "a");       
console.log(true && false);   
console.log(true || false);  
console.log(!true);          

const age = 70;
console.log(age >= 18 && age < 60);

// 3- score: 8/9 j'ai rate l'avant dernier