var Auvergne=document.querySelector("#Auvergne");
var PageAuvergne=document.querySelector(".auvergne");

Auvergne.addEventListener("click",function(){
    PageAuvergne.classList.add("open") ;
});

var Corse=document.querySelector("#Corse");
var PageCorse=document.querySelector(".corse");

Corse.addEventListener("click",function(){
    PageCorse.classList.add("open") ;
});

var Bretagne=document.querySelector("#Bretagne");
var PageBretagne=document.querySelector(".bretagne");

Bretagne.addEventListener("click",function(){
    PageBretagne.classList.add("open") ;
});

var Pays=document.querySelector("#Pays");
var PagePays=document.querySelector(".pays");

Pays.addEventListener("click",function(){
    PagePays.classList.add("open") ;
});

var Centre=document.querySelector("#Centre");
var PageCentre=document.querySelector(".centre");

Centre.addEventListener("click",function(){
    PageCentre.classList.add("open") ;
});

var Normandie=document.querySelector("#Normandie");
var PageNormandie=document.querySelector(".normandie");

Normandie.addEventListener("click",function(){
    PageNormandie.classList.add("open") ;
});

var Bourgogne=document.querySelector("#Bourgogne");
var PageBourgogne=document.querySelector(".bourgogne");

Bourgogne.addEventListener("click",function(){
    PageBourgogne.classList.add("open") ;
});

var Hauts=document.querySelector("#Hauts");
var PageHauts=document.querySelector(".hauts");

Hauts.addEventListener("click",function(){
    PageHauts.classList.add("open") ;
});

var Grand=document.querySelector("#Grand");
var PageGrand=document.querySelector(".grand");

Grand.addEventListener("click",function(){
    PageGrand.classList.add("open") ;
});

var Ile=document.querySelector("#Ile");
var PageIle=document.querySelector(".ile");

Ile.addEventListener("click",function(){
    PageIle.classList.add("open") ;
});

var Nouvelle=document.querySelector("#Nouvelle");
var PageNouvelle=document.querySelector(".nouvelle");

Nouvelle.addEventListener("click",function(){
    PageNouvelle.classList.add("open") ;
});

var Occitanie=document.querySelector("#Occitanie");
var PageOccitanie=document.querySelector(".occitanie");

Occitanie.addEventListener("click",function(){
    PageOccitanie.classList.add("open") ;
});

var Provence=document.querySelector("#Provence");
var PageProvence=document.querySelector(".provence");

Provence.addEventListener("click",function(){
    PageProvence.classList.add("open") ;
});

var title = $(".test");
var temperature=$(".temperature");
var btnVille = $(".btn")
var meteoTexte = $("p")
var codeInseeVille = "";

btnVille.on('click', function(){
    let urlNomVille = 'https://geo.api.gouv.fr/communes?nom='
    let urlMeteoVille = "https://api.meteo-concept.com/api/forecast/daily/0?token=42dd3f1f49626595473e1a339aec22f6694150a0e1b407ffe1fe6a3186c01e18&insee=";
    nomVille = $(this).text();    
    console.log(nomVille)
    urlNomVille+=nomVille;
    console.log(urlNomVille)
    fetch(urlNomVille)
        .then(response => response.json())
        .then(data => { 
                codeInseeVille = data[0].code
                console.log(codeInseeVille)
                urlMeteoVille+=codeInseeVille

                fetch(urlMeteoVille)
                .then(response => response.json())
                .then(donnees => {
                    var tmin = donnees.forecast.tmin;
                    var tmax = donnees.forecast.tmax;
                    console.log($(this).next('p').html("Il fera " + tmin + "<strong>°C</strong>/" + tmax + "<strong>°C</strong>"));

            })
            .catch((error) => console.log("Erreur : " + error));

            // }
        })
        .catch((err) => console.log("Erreur : " + err));
})
