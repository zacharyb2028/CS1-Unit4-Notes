// SINGLE LINE COMMENT
/* MULTI-LINE COMMENT */

/* The JS code below is an example STATEMENT (instruction/command) every statement ends in a SEMICOLON */
console.log("welcome to JS");

// VARIABLES are named storage containers for data

// DECLARE a new variable (make space)
let username;

// ASSIGN a value to a variable
username = "zachary.belitz";

// see the avlue stored in a variable
console.log(username);

// DECLARE + ASSIGN in one line
let pokemon = "pikachu";
let luckyNum = 27; // no quotes around numbers!

// look at our new variables
console.log(pokemon);
console.log(luckyNum);

// Change the value stored in a var
luckyNum = 20;
console.log(luckyNum);

// MATH OPERATORS (+, -, *, /)
let age = 15;
console.log(age);
let ageInTen = age + 10;
console.log(ageInTen);
let ageDogYears = age / 7;
console.log(ageDogYears);
let leoHumanYears = 5 * 7;
console.log(leoHumanYears);

// PEMDAS applies when you have multiple operators
let score = 0;
score = score + 8 - 9 / 21 * (4 + 6);
console.log(score);

// Combine 2 "literal" Strings (CONCATENATION)
console.log("My age is " + "age");
// OR concatenate a literal String with a VARIABLE
console.log("My age is " + age);
console.log("My age in 10 years will be " + ageInTen);
console.log("My age in dog years is " + ageDogYears);

// Can also concatenate while making variables
let user = "Zach";
let message = "Welcome " + user + "!";
console.log(message)

/* FUNCTIONS:
    Reusable sets of code statements that perform a specific taks/process/routine
*/

// console.log is a built-in function we use 
console.log("I just used a function")

// DEFINE (create) your own function
function prepareForSleep() {
    // STATEMENTS (actions) to execute for this routine
    console.log("1. Put on PJs");
    console.log("2. Brush Teeth");
    console.log("3. Read on my kindle");
}

// CALL (use) our function use its name
prepareForSleep();