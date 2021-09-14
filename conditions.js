console.log(" ##### exemple de conditions ##### \n")


//exercice 1
if (true) {
    console.log("Condition is working !");
  }
if (false) {
    console.log("Condition is working !");
  }
else {
    console.log("Condition is not working !");
  }
if (false === false) {
    console.log("Condition is working !");
  }

//exercice 2
var content = 123;
if (content) {
    console.log("Condition is OK");
  }
else {
    console.log("Condition is KO");
  }

//exercice 3
var price = "forty five";
if (price === 45) {
    console.log("The price is a number");
  }
else if (price == 45) {
    console.log("The price is a string");
  }
else {
    console.log("The price is something else");
  }

//exercise 4
var age = 21;
if (age>= 18) {
    console.log("Entry allowed");
  }
else if (age<=18) {
    console.log("Entry not allowed");
 }

 //exercise 5
var store = ["Walmart", "Colorado", "South-Park", 483,];

if (store[1] = "Walmart" && store[2] === "South-Park") {
    console.log("The Walmart in South-Park has " + store[3] + " employes")
}
else if (store[0] = "Walmart" || store[1] === "Colorado") {
    console.log("Hum this is an other Walmart from Colorado");
}
else if (store[0] = "Walmar") {
    console.log("Too bad this is just a Walmart");
}
else {
    console.log("test");
}

//exercise 6
var student = {
    "Name":"John Doe",
    "Grade":14,
}
if (student["Grade"]<10) {
    console.log("Recalé");   
}
else if (student["Grade"]<=10 && student["Grade"]>=12) {
    console.log("Passable");
}  
else if (student["Grade"]<=14) {
    console.log("moyen");
}
else if (student["Grade"]<=16) {
    console.log("Bien");
} 
else  {
    console.log("Trés bien");
}

//Exercice 7
var meal = {
    "foodType":"meat",
    "cookedAt":80,
    "temperature":60,
}
if (meal["temperature"]===meal["cookedAt"]) {
    meal["status"]="Cooked";
    console.log(meal["status"]);
    }
else if (meal["temperature"]<meal["cookedAt"]) {
    meal["status"]="Uncooked";
    console.log(meal["status"]);
    }
else  {meal["status"]="Overcooked";
    console.log(meal["status"]);
    }

//Exercice 8
var number = 42;
if (number > 0) {
  if(number%2 === 0) {
    console.log("number is even");
  }
  else {
    console.log("number is odd");
}}
else {
    console.log("Please enter a number at least greater than 0");
}

//coucou