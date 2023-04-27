/*

//
----------------------
1.Display some Output:
----------------------

console.log("I like Pizza!");
console.log(" It's really good!");

//This will create a pop up.
window.alert("I really love pizza!");

*/

/*
-------------
 2.VARIABLES:
 ------------

1. Declaration (var, let, const)
2. Assignment (= assigmnment operator)
---------------------------------------

let name = "Noel"; // String
let age = 17; // Number
let student = true; // Booleans

console.log("Hello", name);
console.log(name, "is :", age, " Years old!"); //We can also use this way: console.log(name + "is: " + age + " years old!");
console.log("Entrolled: ", student);


---------------------------------------------
3.To change an HTML element using JavaScript
---------------------------------------------
document.getElementById("p1").innerHTML = "Hello " + name;
document.getElementById("p2").innerHTML = "You are " + age + " years old!";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
*/

/*
--------------------
4.Accept User Input: 
--------------------

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

/*
-----------------------------------------------------------------------------------------
5.Type Conversion = change the  data type of a value to another (string, number, boolean)
-----------------------------------------------------------------------------------------

  let age = window.prompt("How old are you?");
  console.log(typeof age);
  age = Number(age);
  age+=1;
*/

/*
-----------------------------------------------------------------------------------
6.const = a variable that can't be changed | Prevent a variable from being changed.
-----------------------------------------------------------------------------------

const PI = 3.14;
let radius;
let circumference;

radius = window.prompt("Enter the radius of circle: ");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference of our circle is: ", circumference);
*/

/* 
----------------------
7.Some Math functions.
----------------------

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

/*
-----------------------------------------------
8.Program to find the hypotenuse of a triangle. 
-----------------------------------------------

WAY 1 - With window prompt.

let firstSide = window.prompt("Enter the first side of the triangle: ");
firstSide = Number(firstSide);

let secondSide = window.prompt("Enter second side of the triangle: ");
secondSide = Number(secondSide);

hypotenuse = Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2));

console.log("The hypotenuse of the Triangle is: ", hypotenuse);


---------------------------
WAY 2 - Using HTML inputs: 
---------------------------

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

/* 
----------------------------------------------------
9.Exercise to Increase, Decrease and Reset the Text.
----------------------------------------------------

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

/*
--------------------------------------
10.Useful String properties & Methods:
--------------------------------------

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

--------
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

/*
-----------------------------------------------------------------------------
11.Check if checkboxes and radiobuttons are selected: we get a boolean value.
-----------------------------------------------------------------------------

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

/*
-------------------------------------------------------------------------------------------------------------------------------
12.SWITCH CASE, FOR LOOP, BREAK, CONTINUE, TERNARY OPERATOR |Suggested to use switch case when we have many if else statements.
-------------------------------------------------------------------------------------------------------------------------------

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

--------------
DO WHILE LOOP:
-------------- 
                Do something, then check the condition, repeat if condition is true.


                let username;

                do{
                  username = window.prompt("Enter your name");
                }while(username == "");

                console.log("Hello", username);

----------------------------
FOR LOOP , break & continue:
----------------------------
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

--------------------------
EXERCISE |NESTED FOR LOOP:
--------------------------

let symbol = window.prompt("Enter a symbol: ");
let rows = window.prompt("Enter number of rows: ");
let columns = window.prompt("Enter number of columns: ");

for (let i = 0; i <= rows; i++) {
  for (let j = 0; j <= columns; j++) {
    document.getElementById("mylabel").innerHTML += symbol;
  }
  document.getElementById("mylabel").innerHTML += "<br>";
}


---------------------------------------------------
Ternary operator = shortcut for if/else statement.
--------------------------------------------------- 

 1-a condition with ? 
 2-expression if True : 
 3-expression if False

let adult = checkAge(21);

function checkAge(age) {
  return age >= 18 ? true : false;
}

console.log(adult);

*/

/*
-----------------------------------------------
Function = Define once, and use it many times.
-----------------------------------------------

startProgram();

function startProgram() {
  let username = window.prompt("Enter a name:");
  let age = window.prompt("Enter age: ");
  happy(username, age);
}

function happy(a, b) {
  console.log("Happy your ", b, " birthday", a, ", wish u luck!");
}

-----------------------------------------
Find area of a Rectangle using Functions:
-----------------------------------------

let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

function calculate(a, b) {
  return a * b;
}

area = calculate(width, height);
console.log("Area is: " + area);



-------------------------------------------------
 Variable Scope = Where a Variable is Accessible
 -----------------------------------------------

 let = variables are limited to block scope {}
 var = variables are limited to function scope {}

 global variable = Suggested to use let instead of var, cuz it will mess with browser



 -----------------------------------------------
 Template Literals (``), different from ('')
 ----------------------------------------------

let username = "Bro";
let items = 3;
let price = 80;

console.log("Hello", username);
console.log("You have", items, "items in your cart.");
console.log("Your total is:", price);

console.log(`Hello ${username}`);
console.log(`You have ${items} items in your cart.`);
console.log(`Your total is: ${price}`);

//We use this <br> tags here but they will be printed as they are here without any functionality.
let text = `Hello ${username}<br>
            You have ${items} items in your cart.<br>
            Your total is: ${price}.`;
console.log(text);

//When we set the <label> text to be equal to our 'text' variable, <br> tags will work.
document.getElementById("myLabel").innerHTML = text;

*/

/* 
------------------------
14.NUMBER GUESSING GAME
------------------------

const answer = Math.floor(Math.random() * 10 + 1);
console.log(answer);
let guesses = 0;

function does() {
  let guess = document.getElementById("guessField").value;
  // guess = Number(guess);

  if (guess != Number(guess)) {
    window.alert("Enter a number not a letter.");
  }

  if (guess == answer) {
    window.alert(`${answer} is the #. It took you ${guesses} guesses.`);
  } else if (guess < answer) {
    window.alert("Too Small!");
  } else if (guess > answer) {
    window.alert("Too Large!");
  }

  guesses += 1;
  document.getElementById("guessField").value = "";
}

*/

/* 
----------------------
15.Convert Temperature 
---------------------

let temporary;
let celcius;
let farenight;
let result;

//When button is click it will call this function
function convert() {
  //CHeck if the radio button for celcius is checked
  celcius = document.getElementById("celcius").checked;
  //CHeck if the radio button for farenight is checked
  farenight = document.getElementById("Fahreneight").checked;
  //Get the value in the textbox
  temporary = document.getElementById("tempbox").value;

  //If no value is entered show an alert to enter a value.
  if (temporary == "") {
    alert("Enter a Value to Continue");
  }
  //Else, check if calcius is checked and convert to celcius or if farenight is checked convert to farenight
  else {
    if (celcius) {
      result = (temporary - 32) / 1.8;
      document.getElementById("result").innerHTML = result + "°C";
    } else if (farenight) {
      result = temporary * 1.8 + 32;
      document.getElementById("result").innerHTML = result + "°F";
    } else {
      alert("Please, Select a type of temp to convert to: ");
    }
  }
}

*/

/* 
-------------------------------------------------------
 16.Array = a container that can store multiple values.
-------------------------------------------------------

let fruits = ["apple", "orange", "banana"];
console.log(fruits);

//Changing the element at index 2 from banana to lemon
fruits[2] = "lemon";
console.log(fruits);

//Printing element at index 1
console.log(fruits[1]);

//Adding another fruit
fruits.push("Coconut");
console.log(fruits);

//Removing the last fruit
fruits.pop();
console.log(fruits);

//Add element to beggining of the list
fruits.unshift("peanapple");
console.log(fruits);

//Remove element from beggining of the list
fruits.shift();
console.log(fruits);

//Print the length of the array
console.log(fruits.length);

//Sort the list in alphabetic order
fruits.sort();

//Sort the list in reverse alphabetic order
fruits.sort().reverse();

---------------------------------------------------------------------------------------------
//ITERATE OVER AN ARRAY
---------------------------------------------------------------------------------------------

let prices = [5, 10, 15, 20, 25];

//WAY 1 - OLD SCHOOL
for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}

//WAY 2 - Using forEach Function
prices.forEach(function (price) {
  console.log(price);
});

//WAY 3
for (let price in prices) {
  console.log(prices[price]);
}

//WAY 4
for (let price of prices) {
  console.log(price);
}

//2D array
let f = ["apple", "orange", "banana"];
let vegetables = ["carrots", "onions", "patatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [f, vegetables, meats];

for (let i = 0; i < groceryList.length; i++) {
  for (let j = 0; j < groceryList[0].length; j++) {
    console.log(groceryList[i][j]);
  }
  console.log(" ");
}

*/

/* 
------------------------------------------------------------------------------------------------------------------------------
17.SPREAD OPERATOR = unpack elements such as arrays or strings, useful when we have a list and want to pass those elements 
as arguments in a function, so we can't pass it as a list but we want individual elements. Thats why we use spread operator.
------------------------------------------------------------------------------------------------------------------------------

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

//Doesnt work
// let maximum = Math.max(numbers)

//This works
let maximum = Math.max(...numbers);
console.log(maximum);

let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9];

//This will be added as a whole array without specifying elements
a.push(b);
console.log(a);

//To add elements one by one, we need to unpack the 'b' array and add them.
a.push(...b);
console.log(a); 

----------------------------------------
REST PARAMETERS - is opposite of SPREAD
---------------------------------------

//Lets say we have many variables and we want to build a function that calculates the sum of our variables, but 
the number of arguments for that function may change. 

let a = 1;
let b = 2;
let c = 4;
let d = 5;

console.log(sum(a, b));
console.log(sum(a, b, c, d));

function sum(...numbers) {
  let result = 0;
  for (let i of numbers) {
    result += i;
  }
  return result;
}


*/

/* 
---------------------------------------------------------------
19.CALLBACKS - pass a function as argument to another function.
---------------------------------------------------------------
In this case: 
1- We have created function displayDOM() with 1 parameter to change an HTML element.
2- function p() with 1 argument to print on console.
3-function sum() that takes 2 variables as parameters and 2 functions. 


sum(5, 7, displayDOM, p);


function sum(x, y, ourFunction, ourFunction2) {
  let sum = x + y;
  ourFunction(sum);
  ourFunction2(sum);
}

function displayDOM(output) {
  document.getElementById("mylabel").innerHTML = output;
}

function p(output) {
  console.log(output);
}
*/

/* 
----------------------------------------------------------------------------------------------------------------
20.map() and forEach() functions are used to iterate over arrays and perform operations on each element.
   The main difference between the map() and forEach() functions is: the map() function returns a new array, 
   while the forEach() function does not. 
----------------------------------------------------------------------------------------------------------------

//1.We create the list
numbers = [1, 2, 3, 4];

//2.We create the function to square given element
function square(element) {
  return Math.pow(element, 2);
}

//3.Function print for printing given element
function print(element) {
  console.log(element);
}

//4.Executes square function for each element of the numbers list using map().
let squares = numbers.map(square);

//5.Executing print function for each element of our new list using forEach function.
squares.forEach(print);

---------------
MAP EXAMPLE
--------------

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
    age: 22,
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
    age: 20,
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
    age: 16,
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
    age: 21,
  },
];

//WAY 1
let names = characters.map(getNames);
console.log(names);

function getNames(datas) {
  return datas.name;
}

//WAY 2
let names = characters.map((character) => character.name);
console.log(names);


//GET CHARACTER NAMES AND GENDER: 
let datas = characters.map((character) => ({
  name: character.name,
  gender: character.gender,
}));
console.log(datas);

// GET ONLY THE FIRST NAME FROM THE FULL NAME

let fullname = characters.map(character => character.name.split(" ")[0])

let append! = fullname.map((character) => character + "!");
console.log(a);

----------------------------------------------------------------------------------------------------
filter() - creates a new array with all elements that passes the condition provided by the function.
----------------------------------------------------------------------------------------------------

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
    age: 22
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
    age: 20
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
    age: 16
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
    age: 21
  },
];


//WAY 1
function checkAge(element) {
  return element >= 18;
}

let checkAge = characters.filter(checkAge);

console.log(checkAge);

//WAY 2
let checkGender = characters.filter(
  (character) => character.gender === "male"
);


-------------------------------------------------------------------------------------------------
reduce() - For Example: Calculate the total mass for each of our characters |Type of accumulator
-------------------------------------------------------------------------------------------------

//1. Get total mass of all characters
let totalMass = characters.reduce(
  (acc, cur) => acc + Number(cur.mass), // acc is the accumulated value, cur is the current value, 0 is the starting point
  0
);

console.log(totalMass);

//2. Get total height
let totalHeight = characters.reduce((acc, cur) => acc + Number(cur.height), 0);
console.log(totalHeight);

//3. Get total number of characters by eye color
let result = characters.reduce((acc, cur) => {
  const color = cur.eye_color;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});



// let prices = [20, 30, 40, 50, 60, 30];
// let total = prices.reduce(checkout);

// function checkout(total, element) {
//   return (total += element);
// }

// console.log(total);




/*


-------------------------------------------------------------------------------------
some() - At least one character with these features
-------------------------------------------------------------------------------------

1.Is there at least one male character?

let oneMaleCharacter = characters.some(
  (character) => character.gender === "male");

2.Is there at least one character with blue eyes?

let blueEye = characters.some((character) => character.eye_color === "blue");
console.log(blueEye);


//3.NOTE: Difference between some() and filter() method is that the first checks if at least one data passes the condition 
while filter add the data that passes the condition to a new list. 

let height = characters.some((character) => character.height >= 202);
let filterHeight = characters.filter((character) => character.height > 210);

 */

/*


---------------------------------------------------------
sort()
---------------------------------------------------------

// Sort by mass
let byMass = characters.sort();
console.log(byMass);

// Sort by gender
let byGender = characters.sort((a, b) => {
  if (a === "female") return -1; // returns females first
  return 1; // than return males
});

console.log(byGender);

let myNames = characters.sort((a, b) => {
  if (a.name > b.name) return -1;
  return 1;
});

console.log(myNames);

 */
