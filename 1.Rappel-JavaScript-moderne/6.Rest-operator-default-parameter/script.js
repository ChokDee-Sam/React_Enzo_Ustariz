/* 
    1. Rest operator
    Les paramètres du reste permettent d'accepter un nombre indéfini d'arguments rendus disponibles sous forme d'un tableau.
*/

function concatenation(...strings){
  console.log(strings);
  return strings.reduce((acc,cur) => acc + cur)
}

console.log(concatenation("Je ", "suis ", "heureux."));



/* 
    2. Les paramètres par défaut.

    Ils permettent de définir une valeur par défaut si un argument correspondant au paramètre en question n'est pas fourni.
*/

function welcoming(userName = "visiteur"){
  return `Bienvenue, ${userName}.`
}
console.log(welcoming("Paul"));
console.log(welcoming("Sara"));
console.log(welcoming());

