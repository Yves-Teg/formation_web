// EXERCICE 3.4: LE SWITCH DES JOURS

// 1- Declaration de la variable et structure switch
const day = "mardi";

switch (day) {
    case "lundi":
        console.log("Lundi : Introduction a JavaScript et variables.");
        break;
    case "mardi":
        console.log("Mardi : Les types de donnees et la portee."); // S'execute pour "mardi"
        break; // 
    case "mercredi":
        console.log("Mercredi : Les operateurs logiques et booleens.");
        break;
    case "jeudi":
        console.log("Jeudi : Les structures conditionnelles (if/else).");
        break;
    case "vendredi":
        console.log("Vendredi : Pratique et revisions de la semaine.");
        break;
    default:
        console.log("Repos"); // Programme par defaut pour le week-end
}

// 2- Le test du "break" manquant
/*
   Si tu enleves le 'break' sous le cas "mardi" :
   JavaScript va afficher "Mardi : Les types de donnees." Mais il va continuer 
   et afficher Aussi "Mercredi: Les operateurs logiques" sans s'arreter. 
   C'est ce qu'on appelle la chute (fall-through). 
*/
