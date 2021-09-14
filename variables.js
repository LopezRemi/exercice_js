console.log(" ##### exemple de variable ##### \n")

// Exemple of two variables with strings
var userFirstname = "Rémi";
var baseSentence = "Salut ";

// Display of the two variables in the console of the web browser
console.log(baseSentence + userFirstname);
console.log(baseSentence + userFirstname);
console.log(baseSentence + userFirstname);
console.log(baseSentence + userFirstname);
 

// Exemple de variables avec incrementation
var age = 15;
console.log(age);
age = age + 1;
age += 1;
age ++;
console.log(age);

var isAdult = false;

var items = new Array();
console.log(items);
items = [];
console.log(items);
// Aucune valeur donc résultats identique
// items = ();
//  toujours aucune valeur, ce qui produit une erreur
items = ["a", "b"];
console.log(items);

var items = ["premiere élément", "deuxième élément", "troisième élément"];
console.log(items);
//oui
console.log(items[1]);
//cela affiche le deuxième élément ca on part de zero en js.
console.log(items[2]);
//cela affiche le dernière élément, car on part de zero.
console.log(items[0]);

var player = ["jhon", "Doe", 34, true];
console.log(player);
//oui
console.log(player[0]);
console.log(player[0] + " " + player[1]);
player[2] += 6;
console.log(player[2]);
console.log(player[3]);
// ce n'est pas pratique.

var player = {
        "firstname" : "John",
        "lastname" : "Doe",
        "age" : 34,
        "isAdult" : true
    };
console.log(player);
console.log(player["firstname"]);
console.log(player["firstname"] + " " + player["lastname"]);
player["age"] += 6
console.log(player["age"]);
console.log(player["isAdult"]);
//la lisibilité du code est augmenté.

var car = {
        "type" : "Clio",
        "brand" : "Renault",
        "date" : 2006,
        "color" : "orange",
        "passengers" : ["Mike", "Claire", "Anna", "Louis"]
    };
console.log(car);

car["color"]="noir";

console.log("une " + car["brand"] + " " + car["type"] + " de couleur " + car["color"] + " modèle " + car["date"] 
 + " à été apercue avec à sont bord 4 passagers");

console.log(car["passengers"][0]);
console.log("4 individus ont été aperçus à son bord : " + 
    car["passengers"][3]+ ", "
    +car["passengers"][1]+ ", "
    +car["passengers"][0]+ " et "
    +car["passengers"][2]);

var a = 14
var b = 38
var product = []
console.log(a,b,product);
product[0] = a;
product[1] = b;
product[7] = 50;
console.log(product);
//index entre 2 et 6 vide.