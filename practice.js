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
