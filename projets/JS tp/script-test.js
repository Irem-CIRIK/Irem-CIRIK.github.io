//Les bases de JavaScript:


// Déclarer deux variables entières
let a = 12;
let b = 58;

// Additionner les deux variables et stocker le résultat dans une troisième variable
let resultat = a + b;

// Afficher le résultat dans la console
console.log("Le résultat de l'addition de", a, "+", b, "est :", resultat);


/*(1)alert(): Affiche la sortie sur une boîte de dialogue du navigateur 
(2)toLowerCase(): Convertit une chaîne de caractères en minuscules 
(3)Console.log() : Affiche la sortie sur la console du navigateur, utile pour le débogage*/

//2eme exercice


function addition(a, b){
    return a + b;
}

let somme = addition(10, 12);
console.log(somme);

//exo 2 demander a l utilisateur de saisir son prenom

// Demander à l'utilisateur de saisir son prénom
let prenom = prompt("Veuillez saisir votre prénom :");

// Définir une fonction nommée "hello" pour afficher le message
function hello(nom) {
    console.log("Bonjour " + nom);
}

// Appeler la fonction "hello" avec le prénom saisi par l'utilisateur
hello(prenom);


//les conditions:

let note = prompt("saisie ta note");//Cette structure conditionnelle évalue si la note saisie est supérieure ou égale à 10. Si c'est le cas (c'est-à-dire si la condition note >= 10 est vraie), le code à l'intérieur du bloc if est exécuté. Sinon, le code à l'intérieur du bloc else est exécuté.

if(note>=15){
    console.log("champion");//Si la note saisie est supérieure ou égale à 10, ce message est affiché dans la console.
}else if (note>=8){
    console.log("moyen");//Si la note saisie est inférieure à 10, ce message est affiché dans la console.
}else{
    console.log("nulllllllllll")
}

//les tableaux:

// Définition d'un tableau d'entiers
let tableaux = [10, 16, 80, 47, 49, 55, 68, 99];

// Affichage des entiers dans la console
console.log(tableaux);


//les objets:

// Définition de la variable d'objet eleve
let eleve = {
    prenom: 'zak',
    notes: [15, 16, 20]
};

// Affichage des différentes notes dans la console
console.log(eleve.notes);


//Les boucles:

// Définition de la variable d'objet eleve
let eleves = {
    prenom: 'zakui',
    notes: [15, 16, 20]
};

// Affichage de toutes les notes de l'élève
console.log("Les différentes notes saisies :");
for (let i = 0; i < eleves.notes.length; i++) {
    console.log("Note " + (i + 1) + " : " + eleves.notes[i]);
}




