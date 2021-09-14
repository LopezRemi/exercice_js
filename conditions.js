console.log(" ##### exemple de conditions ##### \n")

var isAvailable = false;
 
//Exemple of a condition with a boolean value
if (isAvailable === true) {
    console.log("Meuble disponible");
}
else {
    console.log("Meuble indisponible");
}

var price = 240;

//&& est égal à "et" || est égal à "ou".
if (price<50) {
    console.log("meuble bas de gamme");
    }                                           
else if (price>=50 && price<=150) {
    console.log("meuble moyenne gamme");
}
else {
    console.log("meuble haut de gamme");
}
