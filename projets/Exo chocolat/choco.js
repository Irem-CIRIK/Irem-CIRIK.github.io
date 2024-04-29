var BtnContactez=document.querySelector("#contacteznous")
var Popup=document.querySelector(".popup1")
var BtnClose=document.querySelector(".popup-close")
var BtnAnnuler=document.querySelector(".btnnone")

BtnContactez.addEventListener('click',function(){
    Popup.classList.add("open");
})

BtnClose.addEventListener('click',function(){
    Popup.classList.remove("open");
})

BtnAnnuler.addEventListener("click",function(){
    Popup.classList.remove("open");
})

var BtnEnvoyer=document.querySelector(".btnenvoyer")
var Popup1=document.querySelector(".popup2")
var BtnClose1=document.querySelector(".popup2-close")

BtnEnvoyer.addEventListener("click",function(){
    Popup1.classList.add("open");
})

BtnEnvoyer.addEventListener("click",function(){
    Popup.classList.remove("open");
})

BtnClose1.addEventListener("click",function(){
    Popup1.classList.remove("open");
})


