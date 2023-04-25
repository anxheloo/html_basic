/*

//1.Display some Output:

console.log("I like Pizza!");
console.log(" It's really good!");

//This will create a pop up.
window.alert("I really love pizza!");

*/

//-------------------------------------------------------------------------------------------------------------//

/*
 2.VARIABLES:
1. Declaration (var, let, const)
2. Assignment (= assigmnment operator)


let name = "Noel"; // String
let age = 17; // Number
let student = true; // Booleans

console.log("Hello", name);
console.log(name, "is :", age, " Years old!"); //We can also use this way: console.log(name + "is: " + age + " years old!");
console.log("Entrolled: ", student);

//-------------------------------------------------------------------------------------------------------------//

//3.To change an HTML element using JavaScript
document.getElementById("p1").innerHTML = "Hello " + name;
document.getElementById("p2").innerHTML = "You are " + age + " years old!";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
*/

//-------------------------------------------------------------------------------------------------------------//

/*
4.Accept User Input: 

Easy Way (using window prompt):
let username = window.prompt("Enter your name: ");
console.log(username);


Difficult way(HTML textbox):
1-We create a textbox with an id and a label for it
2-We create a button with an id and a Submit button
3-In our js file we create this function that check if Element with id "myButton" is clicked, 
if yes: get input textbox element by id("myText") and save to variable username.

document.getElementById("myButton").onclick = function () {
  let username = document.getElementById("myText").value;
  console.log("Hello", username);
  document.getElementById("myLabel").innerHTML = "Hello " + username;
};

*/

//-------------------------------------------------------------------------------------------------------------//

/*
5.Type Conversion = change the  data type of a value to another (string, number, boolean)

  let age = window.prompt("How old are you?");
  console.log(typeof age);
  console.log(typeof age)
  age = Number(age);
  age+=1;
*/

//-------------------------------------------------------------------------------------------------------------//

/*
6.const = a variable that can't be changed | Prevent a variable from being changed.

const PI = 3.14;
let radius;
let circumference;

radius = window.prompt("Enter the radius of circle: ");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference of our circle is: ", circumference);
*/

//-------------------------------------------------------------------------------------------------------------//

/* 
7.Some Math functions.

let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x, 2);
// x = Math.sqrt(x);
// x = Math.abs(x);

maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);

console.log();
console.log(maximum);
console.log(minimum);
*/

//-------------------------------------------------------------------------------------------------------------//

/*
8.Program to find the hypotenuse of a triangle. 

WAY 1 - With window prompt.

let firstSide = window.prompt("Enter the first side of the triangle: ");
firstSide = Number(firstSide);

let secondSide = window.prompt("Enter second side of the triangle: ");
secondSide = Number(secondSide);

hypotenuse = Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2));

console.log("The hypotenuse of the Triangle is: ", hypotenuse);


WAY 2 - Using HTML inputs: 

let hypotenuse;
let firstSide;
let secondSide;

document.getElementById("myButton").onclick = function () {
  firstSide = document.getElementById("first").value;
  firstSide = Number(firstSide);

  secondSide = document.getElementById("second").value;
  secondSide = Number(secondSide);

  hypotenuse = Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2));

  document.getElementById("result").innerHTML = "Hypotenuse is: " + hypotenuse;

  document.getElementById("c").value = hypotenuse;
};
*/

//-------------------------------------------------------------------------------------------------------------//

/* 
9.Exercise to Increase, Decrease and Reset the Text.

//WAY 1:

//1-We create the function
function increase() {
  //2-We get the text from <h1> and save it to result variable
  let result = document.getElementById("result").innerHTML;
  //3-Convert result variable to a number & handle math operations
  result = Number(result);
  result += 1;
  //4-Update the new result after increasing
  document.getElementById("result").innerHTML = result;
}

function reset() {
  document.getElementById("result").innerHTML = 0;
}

function decrease() {
  let result = document.getElementById("result").innerHTML;
  result = Number(result);
  result -= 1;
  document.getElementById("result").innerHTML = result;
}


//WAY 2: (Better)

let result = 0;

function increase() {
  result += 1;
  document.getElementById("result").innerHTML = result;
}

function reset() {
  result = 0;
  document.getElementById("result").innerHTML = result;
}

function decrease() {
  result -= 1;
  document.getElementById("result").innerHTML = result;
}

*/

//-------------------------------------------------------------------------------------------------------------//

/*10.Useful String properties & Methods:

let username = "  Anxheloo  ";
console.log(username.length);
console.log(username.charAt(0));
console.log(username.indexOf("A"));
//If we have 2 'o' inside username variable, we want the index of the last one
console.log(username.lastIndexOf("o"));

console.log(username);
//Remove white spaces
console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.toLowerCase());

let phoneNumber = "123-123-123";
console.log(phoneNumber);
console.log(phoneNumber.replaceAll("-", " "));

SLICING:
--------

let fullname = "Anxhelo Cenollari";
let firstname;
let lastname;

//To create a new String containing our 'lastname' from 'fullname', we specify the starting index of the 'lastname'.
lastname = fullname.slice(8);
console.log(lastname);

//To slice 'fullname' and get only the firstname, we use the slice() method and giving 2 arguments, the starting index, and the ending index(Excluded).
firstname = fullname.slice(0, 7);
console.log(firstname);

//We can also use the indexOf() method to eazy our work.
lastname = fullname.slice(fullname.indexOf(" ") + 1);
firstname = fullname.slice(0, fullname.indexOf(" "));
console.log(lastname);
console.log(firstname);

*/

/*11.Check if checkboxes and radiobuttons are selected: we get a boolean value.

function check() {
  const checked = document.getElementById("subscribe").checked;
  const checkRadio1 = document.getElementById("Visa").checked;
  const checkRadio2 = document.getElementById("Master").checked;
  const checkRadio3 = document.getElementById("Paypal").checked;

  if (checked) {
    console.log("You are subscribed!");
  } else {
    console.log("YOu are not subscribed!");
  }

  if (checkRadio1) {
    console.log("You choosed Visa payment!");
  } else if (checkRadio2) {
    console.log("You choosed Master Payment!");
  } else if (checkRadio3) {
    console.log("You choosed paypal payment");
  } else {
    console.log("You must select a payment type!");
  }
}

*/

/*12.SWITCH CASE |Suggested to use when we have many if else statements.

let grade = "A";

switch (grade) {
  case "A":
    console.log("You are a great Student");
    //If we dont use break, it will keep executing the code even if it finds the match.
    break; 

  case "B":
    console.log("You are a medium Student");
    break;

  case "C":
    console.log("You are a low Student");
    break;

  case "F":
    console.log("You failed!");

    //If our grade is none of our required statements, by default execute this code.
  default:
    console.log(grade, "is not a letter grade!");
}


DO WHILE LOOP:
-------------- 
                Do something, then check the condition, repeat if condition is true.


                let username;

                do{
                  username = window.prompt("Enter your name");
                }while(username == "");

                console.log("Hello", username);


FOR LOOP , break & continue:
---------
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


//When i == 7, break, this means we print from 1-7(excluding).
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}

//When i == 13, continue, this means we skip this value.
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    continue;
  }
  console.log(i);
}


EXERCISE |NESTED FOR LOOP:
---------

let symbol = window.prompt("Enter a symbol: ");
let rows = window.prompt("Enter number of rows: ");
let columns = window.prompt("Enter number of columns: ");

for (let i = 0; i <= rows; i++) {
  for (let j = 0; j <= columns; j++) {
    document.getElementById("mylabel").innerHTML += symbol;
  }
  document.getElementById("mylabel").innerHTML += "<br>";
}

*/
