// EXERCICE 3.2: LA MENTION

// 1- Declaration et bloc if / else if / else
const grade = 14; 

if (grade < 10) {
    console.log("Echec");
} else if (grade >= 10 && grade <= 11) {
    console.log("Passable");
} else if (grade >= 12 && grade <= 13) {
    console.log("Assez bien");
} else if (grade >= 14 && grade <= 15) {
    console.log("Bien"); 
} else {
    console.log("Tres bien");
}


// 2- Zone de test
// Modifie la variable "grade" a la ligne 6 avec ces valeurs pour verifier la console :
// Si grade = 9   -> Affiche : "Echec"
// Si grade = 10  -> Affiche : "Passable"
// Si grade = 13  -> Affiche : "Assez bien"
// Si grade = 16  -> Affiche : "Tres bien"


// 3- Gestion des garde-fou

const gradeTest = 11.5; 

// Test du piege 11.5

if (grade < 0 || grade > 20) {
    console.log("Note invalide"); // Garde fou pour bloquer -3
} else if (grade < 10) {
    console.log("Echec");
} else if (grade < 12) { // Capte automatiquement 11.5 qui est entre 10 et 11.99
    console.log("Passable");
} else if (grade < 14) {
    console.log("Assez bien");
} else if (grade < 16) {
    console.log("Bien");
} else {
    console.log("Tres bien");
}

