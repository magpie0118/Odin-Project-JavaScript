// MDN Learn - JS Functions

const myText = 'I am a string'
console.log(myText)
const newString = myText.replace('string', 'sausage')
console.log(newString)

const myArray = ['I', 'love', 'chocolate', 'candy']
const madeAString = myArray.join(' ')
console.log(madeAString)

const myNumber = Math.random()
console.log(myNumber)
// Produces a number between 0 and 1 (but not equal to 1)

function favoriteAnimal (animal) {
  console.log(animal + ' is my favorite animal!')
}

favoriteAnimal('Elephant')
// The function is favoriteAnimal and the parameter is animal

function showMessage () {
  alert('Hello Everyone')
}
showMessage()

// Declare a local variable within a Function
function showMessages () {
  let message = "Hello, I'm JavaScript"

  alert(message);
}
showMessages();

// Outer Variables
// Outer variables can be changed by a function
let userName = 'Arthur';

function showMyMessage () {
  let message = 'Hello, ' + userName;
  alert(message);
}
showMyMessage();

// Global Variables
