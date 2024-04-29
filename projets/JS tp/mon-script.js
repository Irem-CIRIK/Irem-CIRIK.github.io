/*function addition(a, b){
    return a + b; // return veux dire envoie le resultat a + b
}
let resultat = addition(12, 58);
console.log(resultat);
 // function s appel "addition"
alert('bonjour');
var valeurSaisie = prompt('saisi ton prenom') //permets de stocker la valeur dans une variable saisie dans une fenetre"prompt"

 function hello(prenom) { //fonction s appel "Hello"
    console.log("Bonjour " + prenom + " ! ");//permets d afficher dans la console bonjour plus le prenom saisi
 }
hello(valeurSaisie) //Permets de saisir la vraie valeur defini par la fct

let note = prompt('saisi ta note') //saisir une note
if (note<=0) { //if=si
    console.log("arrete l ecole c est mieux!");
} else if(note < 10 && note >= 0) {//Sinon si
    console.log("Continue a travailler !"); 
} else {//sinon
    console.log("Bravo tu as la moyenne!");
}
const TableauEntiers=[10,16,80,47,49,55,68,99];
//Construction tableau
console.log("TableauEntiers",TableauEntiers )//Afficher le tableau dans la console
let eleve={
    prenom:'Zakaria',
    notes:[18,19,20]
};
console.log(eleve)//eleve affiche toute ce qu il y a dans les accolades 
var notes =[18,19,20];//Crée un tableau 'notes'
for (let i=0;i< TableauEntiers.length;i++){
    const note = TableauEntiers[i];
    console.log(i);
}// for (let i = 0; i < notes.length; i++) { : Cette ligne commence une boucle for qui itère sur chaque élément du tableau notes. La variable i est utilisée comme un index pour accéder à chaque élément du tableau. La boucle commence avec i égal à 0, puis elle continue tant que i est inférieur à la longueur du tableau notes, et à chaque itération, i est incrémenté de 1.
// const note = notes[i]; : À chaque itération de la boucle, cette ligne récupère l'élément du tableau à l'index i et le stocke dans une variable note.
// console.log(note); : Cette ligne affiche la valeur de la variable note dans la console du navigateur ou de l'environnement d'exécution JavaScript. À chaque itération de la boucle, elle affiche la valeur de l'élément actuel du tableau notes.
*/


//noter du HTML en passant par le JS

/*var maDiv = document.createElement('div');

var monTitre = document.createElement('h1');
monTitre.textContent = 'Hello';
maDiv.append(monTitre);
document.body.prepend(maDiv);*/

/*for (let i=0;i<=8;i++){

    console.log(i);
    document.write(i+"<br>"); //permets d afficher en colonne
}*/
/*var contenuDeBody = document.body
console.log(contenuDeBody);*/
/*var texte =document.querySelector(".texte")
console.log(texte);*/
/*var zak = document.querySelector('.zak')
console.log(zak)*/


//Exercice liste a puce 1ere maniere avec une boucle

listeCourse = ["champignon", "salade", "tomate", "olive"];

var maDiv = document.createElement('div');
var maListe = document.createElement('ul');

//Affiche la liste de course en liste a puce en HTML

/*for(i=0;i<listeCourse.length;i++){
    var contenuListe = document.createElement('li');
    contenuListe.append(listeCourse[i]);
    maListe.append(contenuListe);
}

maDiv.append(maListe);
document.body.prepend(maDiv);/*

//exercice afficher liste a puce 2eme manieres.

/*var maDiv =document.createElement('div');
var ul=document.createElement('ul');

var li=document.createElement('li');
li.textContent= 'champignon';
ul.append(li);

var li=document.createElement('li');
li.textContent= 'creme fraiche';
ul.append(li);

var li=document.createElement('li');
li.textContent= 'poivre';
ul.append(li);

var li=document.createElement('li');
li.textContent= 'salade';
ul.append(li);

maDiv.append(ul);
document.body.prepend(maDiv);*/

//exercice en bas permets est de faire un bouton en html et de faire qu en javascipt et qu on puisse voir ce qu i lnote dedans en direct en console

/*var inputfield = document.querySelector('#input-field');

inputfield.addEventListener('input',function(event){
    var saisieUtilisateur = event.target.value;
    console.log(saisieUtilisateur);
});*/
//Append sert a ajouter a la fin et Prepend sert a ajouter au debut


//Exo tp1:


/*document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('task-button');
    const taskList = document.getElementById('tasklist');

    // Fonction pour créer un nouvel élément de tâche
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Créer le bouton "Supprimer"
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        // Ajouter le bouton "Supprimer" à l'élément <li>
        li.appendChild(deleteBtn);

        // Marquer comme terminée lorsqu'un élément <li> est cliqué
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        return li;
    }

    // Ajouter une tâche
    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }
    });
});*/


/*explication exercice 

Bien sûr ! Le langage de code que vous voyez dans l'exemple que j'ai fourni est JavaScript, qui est l'un des langages de programmation les plus couramment utilisés pour créer des sites web interactifs.

Voyons maintenant les différentes parties de ce code :

document.addEventListener('DOMContentLoaded', function() { ... }); : Cette ligne écoute l'événement DOMContentLoaded, qui est déclenché lorsque le navigateur a entièrement chargé le HTML de la page. Lorsque cet événement se produit, la fonction anonyme à l'intérieur des crochets { ... } est exécutée. Cela garantit que le script JavaScript est exécuté après que la page HTML ait été complètement chargée, ce qui est important pour s'assurer que le script peut accéder à tous les éléments HTML de la page.

const taskInput = document.getElementById('task-input'); : Cette ligne utilise document.getElementById pour obtenir une référence à l'élément HTML avec l'identifiant task-input. Cet élément est un champ de texte où l'utilisateur peut saisir de nouvelles tâches.

const addTaskBtn = document.getElementById('task-button'); : Cette ligne obtient une référence à l'élément HTML avec l'identifiant task-button, qui est un bouton utilisé pour ajouter une nouvelle tâche.

const taskList = document.getElementById('tasklist'); : Cette ligne obtient une référence à l'élément HTML avec l'identifiant tasklist, qui est une liste <ul> où nous ajoutons nos tâches.

function createTaskElement(taskText) { ... } : Ceci est une fonction déclarée pour créer un nouvel élément de tâche. Elle prend un paramètre taskText qui est le texte de la tâche à ajouter.

li.textContent = taskText; : Cette ligne définit le texte de l'élément <li> à taskText, le texte de la tâche.

const deleteBtn = document.createElement('button'); : Cette ligne crée un nouvel élément de bouton.

deleteBtn.textContent = 'Supprimer'; : Cette ligne définit le texte du bouton "Supprimer".

deleteBtn.addEventListener('click', function() { ... }); : Cette ligne ajoute un écouteur d'événements au bouton "Supprimer" qui supprime l'élément <li> parent de la liste lorsqu'il est cliqué.

li.appendChild(deleteBtn); : Cette ligne ajoute le bouton "Supprimer" à l'élément <li> de la tâche.

li.addEventListener('click', function() { ... }); : Cette ligne ajoute un écouteur d'événements à l'élément <li> de la tâche. Lorsque cet élément est cliqué, la fonction anonyme à l'intérieur des crochets { ... } est exécutée. Cette fonction bascule la classe CSS completed, qui modifie l'apparence de l'élément pour montrer qu'il est terminé.

addTaskBtn.addEventListener('click', function() { ... }); : Cette ligne ajoute un écouteur d'événements au bouton "Ajouter Tâche" qui déclenche l'ajout d'une nouvelle tâche à la liste lorsque le bouton est cliqué.

En résumé, ce script JavaScript est responsable de la création et de la gestion de la liste de tâches, en permettant à l'utilisateur d'ajouter de nouvelles tâches, de les marquer comme terminées et de les supprimer.*/


