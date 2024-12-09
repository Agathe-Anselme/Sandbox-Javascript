"use strict";

let js = "amazing";
if (js === "amazing") alert("Javascript is fun!");

/*
// 1. Introduction to console.log
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

// 2. Introduction to variables
let firstName = "Agathe";
console.log(firstName);
console.log(firstName);

// 3. Variable name conventions : Camel case
let myFirstJob = "Farmer";
let myCurrentJob = "Programmer";

// 4. Declaration of variables
let country = "France";
let continent = "Europe";
console.log(country);
console.log(continent);

// 5. Data type in Javascript
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);

// 6. Mutating variables
let age = 30;
age = 31;

// 7. const or let ?
const birthYear = 1991;

// 8. Operators
const ageAgathe = 2024 - 1984; 
console.log(ageAgathe);
let now = 2024;
const ageMilo = now - 2019;
const ageSacha = now - 2022;
console.log(ageAgathe, ageMilo, ageSacha);

console.log(ageAgathe *2, ageAgathe / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// 9. Concatenation
const firstName = "Agathe";
const lastName = "Anselme";
console.log(firstName + " " + lastName)

// 10. Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
console.log(x);

// 11. Comparison operators
console.log(ageAgathe > ageMilo); // >, <, >=, <=
console.log(ageMilo >= 18);
console.log(now - 1991 > now - 2018);

const firstName = "Agathe";
const job = "developer";
const birthYear = "1984";
const year = 2024
const Agathe = "I'm" + " " + firstName + ", a" + " " + (year - birthYear) + " year old" + " " + job;
console.log(Agathe);

const agatheNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(agatheNew);

console.log("Just a regular string...")

console.log("String with \n\ multiple \n\ lines.")

// 12. Conditions
const age = 15;

if(age>=18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Go back home. Wait another ${yearsLeft} years.`);
}

const birthYear = 1984;

let century;
if(birthYear <= 2000) {
    century = 20;
}  else {
    century = 21;
}
console.log(century);

// 13. Calculate BMI
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log("John's BMI is higher than Mark's!")
}

//const inputYear = '1991';
//console.log(Number(inputYear), inputYear);
//console.log(Number(inputYear) + 18);

//const age = 40;
//if(age === 40) 
//console.log("You're getting old");

// 14. Boolean logic
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 => FALSE
    console.log("Cool! 23 is an amazing number)")
} else if(favourite === 7) {
    console.log("7 is also a cool number")
} else {
    console.log("Number is not 23 or 7")
}

if (favourite !== 23) console.log("Why not 23?");


// 15. Logical operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


//const shouldDrive = hasDriversLicense && hasGoodVision;
//  if(shouldDrive) {
//    console.log("Sarah is able to drive!")
//} else {
//    console.log("Someone else should drive...");
//}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

const day = "Tuesday";

switch(day){
    case "Monday": //day === "Monday"
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "Tuesday":
        console.log("Prepare theory videos");
        break;
    case "Wednesday":
        console.log("Enjoy the day off");
        break;
       default:
        console.log("Not a valid day!"); 
}

// 16. Conditional ternary operators
const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);


const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20
console.log(`The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}`);


function logger() {
    console.log("My name is Agathe");
}
// calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor (2, 2);
console.log(appleOrangeJuice);


// 17. Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// 18. Arrow function
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(1984);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
}
*/ 

//Functions calling other functions
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
