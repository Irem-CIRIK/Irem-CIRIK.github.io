/**var button=document.querySelector('.contateznous')
var popup=document.querySelector('#pop')
var popupopen=document.queryselector('#popnone')
var buttonclose=document.querySelector('.close')
// definition des proprieter//
// j'applique la class pop qui est dans html a la variable popup**/

var buttonContactezNous=document.querySelector(".contacteznous");
var buttonClose = document.querySelector('.popup-close');
var popup=document.querySelector(".wrapper-popup")

buttonContactezNous.addEventListener("click",function(){
    popup.classList.add("open") ;
})
/**sur le buttonContactezNous quand on click sa (add)ouvre obligatoirement le popup  */

buttonClose.addEventListener("click", function() {
    popup.classList.remove("open");
});
   
/**sur le buttonClose quand on click sa (remove)ferme obligatoirement le popup  */

buttonEnvoyer=document.querySelector('#Envoyer');
modal=document.querySelector('.wrapper-popup1');
buttonClose = document.querySelector('.popup-close1');

buttonEnvoyer.addEventListener("click",function(){
    modal.classList.add("open") ;
});
    
buttonClose.addEventListener("click", function() {
    modal.classList.remove("open");});

buttonEnvoyer.addEventListener('click',function(){
    popup.classList.remove('open')
})