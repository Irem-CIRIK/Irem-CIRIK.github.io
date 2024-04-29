alert('Bonjour');

// les const a et b sont des valeurs constante qui ne changerons pas) //
const a = 12 ;
const b = 58 ;

// cree notre propre fonction qui s'appel addition //
function addition(a, b) {
    return a + b 
}
/* nous avons affecter var ici car cette declaration de variable
 n'est pas constante elle change selon le a et b
 nous avons mis apres somme le nom de la fonction pour l'utiliser*/
var sommes = addition(a, b) ;

/*le console est present ici la pour l'afficher l'or de probleme
 dans inspecté puis console ( ceci est dedier au devloppeur)*/
console.log(sommes);

// variable prenom qui prend en valeur le prenom rentré par l'utilisateur//
var prenom = prompt ("Quel est votre prénom?");

// retourne "bonjour + le prenom qui est entré en parametre"//
function hello( prenom){
    console.log(" bonjour " + prenom);
}

var resultat = hello( prenom ) ;

// pour afficher un truc ou on peux saisir la note  obtenu//
let note = prompt("saisie ta note ?")

// condition 
if (note <= 0){
    console.log('grosse merde');
} else if (note > 0 && note <= 10) {
    console.log('vasy bg tes sur la bonne voix')
} else { 
    console.log ('fares la grosse vache ta la moyenne');
};

// html dans JVS
document.write('Hello Irem!');


// tableau simple
let tableau = [ 10, 16, 80, 47, 49, 55, 68, 99];
console.log(tableau);



// ceci est un objet eleve qui possede 2 attribue; prenom et notes 
let eleve = {
    prenom : 'irem',
    notes: [15, 16, 20]
};
console.log(eleve.notes)


// BOUCLE
/* i est le compteur par lequel on commence ( en info on commence toujours par  0) 
while c'est tant que notes.length est la longeur de mes notes
(15,16,20) donc ceci est egale a 2 car 0,1,2 
le concol.log eleve.notes[i] i++(i+1) c'est pour que ca affiche 
jusqu'a que la condition ce termine de notes.length */
var i=0
while ( i<eleve.notes.length){
    console.log(eleve.notes[i]);
    i++;
}

var i=0
while (i<=8){
    document.write(i);
      i=i+1;
}

var contenuDeBody= document.body // recupere l'element body
console.log(contenuDeBody);

var monTexte=document.querySelector('.mon-texte') // selectionne l'element qui a la class 'mon-texte'
console.log(monTexte);

var monPrenom=document.querySelector('.mon-prenom') // selectionne l'element qui a la class 'mon-texte'
console.log(monPrenom);

var maDiv= document.createElement('div');
var Ul=document.createElement('ul');

var li=document.createElement('li');
li.textContent= 'champignon';
Ul.append(li);

var li=document.createElement('li');
li.textContent= 'creme fraiche';
Ul.append(li);

var li=document.createElement('li');
li.textContent= 'sel ';
Ul.append(li);

var li=document.createElement('li');
li.textContent= 'poivre';
Ul.append(li);

var li=document.createElement('li');
li.textContent= 'salade';
Ul.append(li);

maDiv.append(Ul);
document.body.prepend(maDiv);

/* pour faire pareil que en haut mais plus simple avec un tableau 

var liste=['champignon,'creme fraiche','sel','poivre','salade']
var ingredient = document.createElement('ul')


for(let i=0, i<=liste.length ;i=i+){
  var recette= liste[i] ;
  var li=document.createElement('li');
  li.textContent=recette;
};
document.body.prepend(ingredient); */

var input= document.querySelector('.ma-saisie');

input.addEventListener('input', function() {
    var maSaisie= document.querySelector('.ma-saisie').value;
    console.log(maSaisie);
});

var Ul=document.createElement('ul');
var button=document.querySelector('#addTaskBtn')


button.addEventListener('click',function(){
    var valeurSaisie = document.querySelector('#newTaskInput').value;
    var li = document.createElement('li');
    li.textContent = valeurSaisie;
    
    li.addEventListener('click', function() {
        this.classList.toggle("tachefaite"); // .togglr sert à créer une classe si elle n'existe pas ou supprime la classe si elle existe deja
    })
  
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Bouton Hafso";
    li.append(deleteButton);

    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation();
        li.remove();
    })

      Ul.append(li);
    document.body.append(Ul);

})
var Ul = document.createElement('ul');
var button = document.querySelector('#addTaskBtn');
var inputSaisie = document.querySelector('.ma-saisie');

inputSaisie.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        var valeurSaisie = document.querySelector('#newTaskInput').value;
        var li = document.createElement('li');
        li.textContent = valeurSaisie;

        li.addEventListener('click', function() {
            this.classList.toggle("tachefaite");
        });

        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Bouton Hafso";
        li.append(deleteButton);

        deleteButton.addEventListener('click', function(event) {
            event.stopPropagation();
            li.remove();
        });

        Ul.append(li);
        document.body.append(Ul);

    }
});
    



