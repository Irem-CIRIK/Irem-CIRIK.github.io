//Javascript 2eme partie

/*var note = 20;

console.log(note);//on affiche la valeur en console.

document.write(note);//on ecrit la valeur dans le document.*/

//Selecteur HTML 

for (let i = 0; i <= 8; i++) {
    console.log(i);  // Affiche le chiffre dans la console
    document.write(i + "<br>");  // Affiche le chiffre dans le document HTML avec un saut de ligne
}

var contenuDeBody = document.body // recupere l élément body.
console.log(contenuDeBody)

//Selecteur (JS)

var monTexte = document.querySelector(".test");
console.log(monTexte);


//Selectionne un seul element.

var body = document.querySelector("body");
var monTexte = document.querySelector(".monTexte");
var logo = document.querySelector("#mon-logo");


//Selectionne de plusieurs éléments possibles.

var mesTextes = document.querySelectorAll("p");
var mesListes = document.querySelectorAll("ul");



//Creation d un element sans passer par le HTML.

var maDiv = document.createElement("div");

var monTitre = document.createElement("h1");
monTitre.textContent = "hello tout le monde";

maDiv.append(monTitre);
document.body.prepend(maDiv);



//Les evenements dans le code.

//Cet exemple nous permet de capturer le clicsur le bouton ayant comme classe «mon-bouton» :
/*var bouton = document.querySelector("#mon-bouton");

bouton.addEventListener("click",function(){
    console.log("Je viens de cliquer sur mon bouton");
});*/







//exo tp01:
//Créer une application simple de liste de tâches qui permet à l'utilisateur d'ajouter, de marquer comme terminée, et de supprimer des tâches. 

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('taskButton');
    const taskList = document.getElementById('taskList');

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
});
