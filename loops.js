//exercice 1
var i = 0;
while (i <= 9) {
  console.log("One run of the loop");
  i += 2
}

//exercice 2
for (var i=0; i <=9 ; i+= 2) {
  console.log("One run of the loop");
}

//exercice 3
for (var i=0; i <=100; i+=2) {
   console.log(i);
}

//exercice 4
for (var i=0; i <=100; i++) {
  console.log(i);
  if (i % 2 === 0) {
    console.log("is even")
  }
  else {
    console.log("is odd")
  }
     }

//Exercise 5

var item = ["First item", "Second item", "Third item", "Fourth item"];
for (var i=0; i <= 3; i++) {
  console.log(item[i]);
}

//Exercice 6

customers = [
  "Albin Term",
  "Anna Sandgrove",
  "John Doe",
  "Terrance Head",
  "Yan Mock",
  "Zoe Durst"
];
console.log("List of all customers : ");
for (i=0; i <= 5; i++) {
  console.log(customers[i]);
}


//Exercice 7

var items = ["First item",
  "Second item",
  "Third item", 
  "Fourth item"];

  for(var item of items){
    console.log(item);
}

//Exercice 8

var citizen = {
  "firstname" : "John",
  "lastname" : "Doe",
  "age" : 45,
  "income" : 60000
};
citizen["sexe"]=0;

for (var key in citizen) 
  if (key === "sexe") {
    if (citizen["sexe"]===0){
      console.log(key + " " + "Male");
  }
  else if (citizen["sexe"]===1){
    console.log(key + " " + "female");
  }
    } 
    else {
      console.log(key + " " + citizen[key])  
    }

//Exercise 9

var citizens = [
  {
    "firstname" : "John",
    "lastname" : "Doe"
  },
  {
    "firstname" : "Anna",
    "lastname" : "Molner"
  },
  {
    "firstname" : "Harry",
    "lastname" : "Trueman"
  },
  {
    "firstname" : "Cecile",
    "lastname" : "Mercier"
  }
];  


for(var citizen of citizens){
  console.log("citoyen : ");
  for(var key in citizen) {
    console.log(key + " : " +citizen[key])
  }
}
 






  


