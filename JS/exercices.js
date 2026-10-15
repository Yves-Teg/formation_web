

// Exercice 4.4: Chercher dans la liste
const playlist = ["Bolivienne", "Essaie encore", "A dix", "Me and my girlfriends", "Le prix de la reussite", "La madrina"];

// 1- Recherche d'un titre strictement égal
const searchTerm = "A dix";

for (const title of playlist) {
  if (title === searchTerm) {
    console.log("Trouvé !");
  }
}

// 2- Compter les titres de plus de 10 caractères (les espaces comptent aussi)
let counter = 0;

for (const title of playlist) {
  if (title.length > 10) {
    counter = counter + 1;
  }
}
 console.log("Number of long-form titles : " + counter);



