console.log("coucou");
/**
 * Met un texte en majuscules.
 *
 * @param string {string}
 * @return {string}
 */
function uppercase(string) {
    return "";
}

/**
 * Retourne la première lettre d'un texte.
 * Exemple: "Chats et chiens" -> "C"
 *
 * @param string {string}
 * @returns string
 */
function firstLetter(string) {
    return "";
}

/**
 * Retourne le premier mot d'un texte.
 * Exemple: "Chats et chiens" -> "Chats"
 *
 * @param string {string}
 * @return {string}
 */
function firstWord(string) {
    return "";
}

/**
 * Prend un texte en entrée et remplace toutes les occurences
 * de la lettre "a" par "XXX".
 *
 * Exemple: "Ca va !" -> "CXXX vXXX"
 *
 * @param string {string}
 * @return {string}
 */
function pasDeA(string) {
    return "";}
/**
 * Doit retourner le résultat de l'addition de a et b
 *
 * @param a {number}
 * @param b {number}
 * @return {number}
 */
function addition(a, b) {
    return a+b;
}

/**
 * Doit retourner le résultat de la soustraction de a et b
 *
 * @param a {number}
 * @param b {number}
 * @return {number}
 */
function soustraction(a, b) {
    return a-b;
}

/**
 * Doit retourner le résultat de la multiplication de a et b
 *
 * @param a {number}
 * @param b {number}
 * @return {number}
 */
function multiplication(a, b) {
    return a*b;
}

/**
 * Doit retourner le résultat de la division entre a et b
 * En cas de division par zéro, on retourne NaN pour signaler
 * l'erreur.
 *
 * @param a {number}
 * @param b {number}
 * @return {number | NaN}
 */
function division(a, b) {
    return a/b;
}

/**
 * Doit retourner un nombre au carré
 * Exemple : 5 => 25
 *
 * @param a {number}
 * @return {number}
 */
function auCarre(a) {
    return a*a;
}

/**
 * Dit si le nombre a est pair ou impair.
 * Si le nombre est pair, la fonction doit retourner true,
 * sinon, elle doit retourner false
 *
 * @param a {number}
 * @return {boolean}
 */
function estPair(a) {
    return a%2==0;
}

/**
 * A partir d'un prix HT unitaire d'un produit
 * ainsi que de sa quantity, on veut connaitre le prix
 * total TTC arrondi à 2 chiffres après la virgule.
 * (On part du principe que la TVA est de 20%)
 *
 * @param priceHT {number}
 * @param quantity {number}
 * @return {number}
 */
function getPriceTTC(priceHT, quantity) {
    return (priceHT*quantity)*1,20;
}

/**
 * Prend un prix et une hausse/baisse (+20%, -20%...)
 * Retourne le nouveau prix après modification
 *
 * Exemple :
 * Si le prix initial est de 10 euros, et l'augmentation de 20%
 *
 * let newPrice = getNewPrice(10, 20);
 * newPrice --> 12euros
 *
 * @param price {number}
 * @param modif {number}
 * @return {number}
 */
function getNewPrice(price, modif) {
    
    return price*(1+(modif/100));}
/**
 * Retourne l'état d'un volume d'eau selon sa température.
 * Positif : liquide
 * Négatuf : solide
 * Au dela de 70° : gazeux
 *
 * @param temperature {number}
 * @return string
 */
function getWaterState(temperature) {
    let etat="";

    if (temperature<70){  
        etat="liquide";
    }
    else if (temperature<0)
        etat="liquide";
    else{
        etat="gazeux";  
    }
    return "";
}

/**
 * Doit afficher, ligne par ligne, une table de multiplication
 *  Par exemple, si je donne 5 en multiplier et 3 en max:
 *  5x1 = 5
 *  5x2 = 10
 *  5x3 = 15
 *
 * @param multiplier {number}
 * @param max {number}
 * @return void
 */
function displayMultiplyTable(multiplier, max) {
    for (let i=1; i<=max; i++){
         console.log(multiplier*i);
    }
}

displayMultiplyTable(5, 10);
/**
 * Met un texte en majuscules.
 *
 * @param string {string}
 * @return {string}
 */
function uppercase(string) {
    return string.toUpperCase();
}

/**
 * Retourne la première lettre d'un texte.
 * Exemple: "Chats et chiens" -> "C"
 *
 * @param string {string}
 * @returns string
 */
function firstLetter(string) {
    return string[0];
}
console.log(firstLetter("Pamuk"));


