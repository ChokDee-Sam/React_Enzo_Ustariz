/* 
    1. Les méthodes des tableaux.

    Les méthodes associées à tous les tableaux via leur prototype font partie des raisons de leur existence.
    
    Elles sont très pratiques et il est très important de les connaître.
    On peut les apercevoir dans le prototype des tableaux, en affichant un tableau dans la console.

    Découvrons ensemble les principales méthodes des tableaux.
*/

/* 
    1. Array.prototype.forEach(callback(element, index, array))

    Définition: Exécute une fonction callback sur chaque élément d'un tableau.
    
    La callback est TOUJOURS appelée avec TOUS les paramètres.
    C'est au dev de choisir celui ou ceux qu'il veut utiliser.

    Valeur de retour : undefined

*/

const numbers = [1,2,3,4,5,6]




/* 
    2. Array.prototype.map(callback(element, index, array))
    
    Définition: Permet de retourner un nouveau tableau contenant les résultats du retour d'une fonction callback appelée sur chaque élément d'un tableau.


    Valeur de retour : un nouveau tableau contenant le retour de chaque appel de la fonction callback.

*/

const people = [
  {
    name: "Pedro",
    age: 25
  },
  {
    name: "Sara",
    age: 26
  },
  {
    name: "Maria",
    age: 27
  }
]


/* 
    3. Array.prototype.filter(callback(el, index, array))

    Valeur de retour : Un tableau contenant les éléments ayant passés le test de la retour de la fonction callback.
    Si la fonction retourne true, on garde l'élément dans le tableau retourné, sinon on l'ignore.

    Permet de filtrer les éléments d'un tableau.
*/

const heights = [170,185,198,162,187,155,178,207,201,189]



/* 
    4. Array.prototype.reduce(callback(accumulator, currentValue, currentIndex, array), valeurInitiale)

    Définition: Accumule chaque valeur d'un tableau à une valeur initiale.
    Si une valeur initiale n'est pas fournie, le premier élément du tableau est utilisé.
    
    Exemples : Permet de faire des moyennes, d'accumuler des valeurs et de résoudre toutes sortes de problèmes.


    Valeur de retour: l'accumulateur après toutes les opérations.

*/

const marks = [18,5,17,12,20,16,14]


/* 
    5. Array.prototype.sort(callback(firstEl, secondEl))

    Définition: Permet de trier des chaînes de caractères, des nombres, des objets, etc...

    Valeur de retour : Le même tableau trié.

    Utilise un algo d'insertion implémenté différemment suivant chaque navigateur.

    Exemple : 

    base
    [10,4,12]

    étape 1
    |partie triée|
    [|4,10|,12]

    étape 2
    Si 12 est plus grand que 10 il est à sa place, fin du tri.
    [|4,10,12|]
*/

const letters = ["z","b","a","d","e"];


const numbers2 = [10,55,2,250,500,85]


// On peut aussi trier des tableaux d'objets
const store = [
    {
        item: "Cahier",
        price: 20
    },
    {
        item: "Sac",
        price: 60
    },
    {
        item: "Stylo",
        price: 2
    },
]

