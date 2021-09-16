

//Exercice  1

let number = Math.random();

console.log(number);

//Exercice 2

var numb = 12.42359;

numb = Math.round((numb + Number.EPSILON) * 100) / 100; // POURQUOI ?

console.log(numb);

//Exercice 3

var age = "35";

console.log(typeof(age));

age = parseInt(age);

console.log(age);
console.log(typeof(age));

//Exercice 4

var texte = "AXEL !";
var maxLength = 20;

console.log(`${texte} ${texte.length}`);

if (texte.length >= maxLength) {
    console.log("Your texte is too long")
    } 
    else {
    console.log("OK")
    }

//Exercice 5

var texte = "a nice boat";               //comment transformer un string en array.

console.log(typeof(texte))

const words = texte.split(" ");
console.log(words[2]);

const chars = texte.split('');
console.log(chars[8]);

const texteCopy = texte.split(" ");
console.log(texteCopy);

//Exercice 6

var name = "Paul Dumas";
var expectedName = "paul dumas";

name = name.toLowerCase();

if (name === expectedName) {
  console.log("OK Paul you can come in");
}
else {
  console.log("We do not know you");
}
  //Exercice 7

  var newStudent = "Ryan Oper"
  var students = [
      "Jhon Doe",
      "Marc Alm",
      "Jimmy Turner"];

console.log(typeof(newStudent))
console.log(typeof(students)) 

students.push(newStudent);
console.log(students);

students.push("Franck Martin", "Tom Hawkins");
console.log(students);

//Exercice 8

var transactions = [102, 51, 4563, 42, 78, 146, 10563];
var researched = 44;


if (researched === true) {
    console.log("We found a matching transaction")
    }
    else {
        console.log("No match")
    }

    console.log(transactions.includes(researched));

//exercice 9

var students = [
    "Jhon Doe",
    "Marc Alm",
    "Jimmy Turner"];

    students.sort();
    console.log(students);
    console.log(students[students.length-1]);


//Part 2
//Exercice 1

function prod(){ 
    console.log("I am the product function");    
    return;
} 

prod();

function product(a,b) {
    return (a*b);
}

var result = product(4,30);

console.log(("The result of the function is : ") + result);

//Exercice 2

function showDigits() {
    for (i=0; i <= 9; i++){
    console.log(i);
    }}

    showDigits();

//Exercice 3    

function welcome(firstname, lastName) {
return "Bienvenue " + firstname + " " + lastName;
}

var hello = welcome("paul", "Morea");
console.log(hello);

//Exercice 4

function isAdult(age) {
    if (age => 18) { 
        age = true
        console.log("true")}
    else console.log("false")
    if (age === true)
        console.log("Welcome to the site")
    else console.log("Not allowed to the site"); 
}

isAdult(19);


