// Exercice 4.1: Gammes

// 1- compte de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2- compte a rebours de 10 a 1
let i= 10 // The counter is initialized outside.
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
    else(console.log(i));
}

// 2eme facon: Un pas de 2.
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}
/* the best method is method 2.
Because, with method 1, the loop must eecute multiple times and perform rejections to find the odd
number, whereas method 2 is shorted and involves no conditions.
*/