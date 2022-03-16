
// MDN Learn - JS Functions

const myText = 'I am a string'
console.log(myText)
const newString = myText.replace('string', 'sausage')
console.log(newString);

const myArray = ['I', 'love', 'chocolate', 'candy'];
const madeAString = myArray.join(' ');
console.log(madeAString);

const myNumber = Math.random();
console.log(myNumber)

function favoriteAnimal(animal) {
  console.log(animal + " are my favorite animals!")
}
favoriteAnimal('Elephants')

// Eloquent JavaScript
// CH 1 Values, Types and Operators
// Parentheses Exponent Multiplication Division Addition Subtraction

console.log(100 + 4 * 11) // answer is 144
console.log((100 + 4) * 11) //answer is 1144
console.log(100 % 20) // no remainder when dividing so answer is zero
console.log(100 / 20) // answer is 5

//Strings

console.log('Down by the Sea')
console.log("Swim in the ocean")
console.log('Float on the ocean')
console.log("This is the first line \nAnd this is the second line")
console.log("A newline character is written like \"\\n\".")
console.log("con" + "cat" + "en" + "ate") //adding strings together
console.log(`half of 100 is ${100 / 2}`) // backtick must be used in this case
console.log("Half of 100 is ${100 / 2}") // use backtick
console.log('Half of 100 is ${100 / 2}') // use backtick

//Display Data Type

console.log(typeof 4.5) // number
console.log(typeof "x") //string
console.log(- (10 - 2)) // answer is -8; unary operation

// Boolean values
// Comparison
console.log(3 > 2) //true
console.log(3 < 2) //false
console.log("Ardvark" < "Zoroaster") // True because Z comes after A
console.log("z" < "a") //False because z comes after
console.log("Itchy" != "Scratchy") //True
console.log("Apple" == "Orange") //false
console.log(NaN == NaN) //False

//Logical Operators
console.log(true && false) // && represents AND - output is False
console.log(true && true) // output is true
console.log(false || true) // || represents OR - output true
console.log(false || false) // || output is false
console.log(1 + 1 == 2 && 10 * 10 > 50) // output is true
console.log(true ? 1:2) // output is 1
console.log(false ? 1:2) // output is 2
console.log(true? 1:3) // output is 1
console.log(false? 1:3) // output is 3

// Empty values
console.log(8 * null) // it's like multiplying 8 * 0; result is zero
console.log("5" - 1) //4
console.log("5" +1) //51
console.log("five" * 2) //NaN
console.log(false == 0) // true --- bc true == 1
console.log(null == undefined) // True
console.log (null == 0) // false
console.log(null || "user") //user
console.log("Agnes" || "user") // Agnes

// CH 2 - PROGRAM STRUCTURE (ELOQUENT JavaScript)
//Variables AKA Bindings

let ten = 10;
console.log(ten * ten); //100

let mood = "light";
console.log(mood); //light

mood = "dark";
console.log(mood); //dark; variable value has been changed

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt); // 105

let one = 1, two = 2; //declaring multiple variables on one line
console.log(one + two); //3

var name = "Ayda"; // var is acceptable but preferred is let(can be changed) or const(cannot be changed)
const greeting = "Hello";
console.log(greeting + name); //Hello Ayda

// Functions

// prompt("Enter passcode");
console.log(Math.max(2,3,4,20)); // 20 -- Math.max gives the largest value
console.log(Math.min(2, 4) + 100); // 102

// Control Flow
let theNumber = Number(prompt("Pick a Number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}

if (1 + 1 == 2) console.log("It's true"); // It's true

let num = Number(prompt("Pick a Number"));
if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

// While Loops

let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2; // prints 0, 2, 4, 6, 8, 10, 12
}

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result); //1024

// Do Loops

let yourName = prompt("Who are you?"); // Variable definition

do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

// For Loops
for (let numb = 0; numb <= 12; numb = numb +2) {
  console.log(numb);
}

let results = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  results = results * 2;
}
console.log(result);

// Breaking out of a Loop

for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }

// Counting more efficiently

for (let number = 0; number <= 12; number += 2) {
  console.log(number);
 }

// Capitalization & Comments

// use camelCase OR camel_case

// This is a one line Comments

/* this
is a
multi
line
comment
*/
