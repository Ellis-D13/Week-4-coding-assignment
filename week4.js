//create array 
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//subtact first element from the last element
let result = ages[ages.length - 1] - ages[0];
console.log("Subtraction result:", result);
//add a new age to the array 
let newAge = 50; 
ages.push(newAge);
//subtract first element from the last element again
result = ages[ages.length - 1] - ages[0];
console.log("Updated subtraction result:", result);
//calculate average age
let sum = 0; 
 for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let average = sum / ages.length; 
console.log("Average age:", average);

// create an array with names
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// calculate average number of letters per name
var totalLetters = 0; 
for (var i = 0; i < names.length; i++) {
    totalLetters += names[i].length; 
}
var averageLetters = totalLetters / names.length; 

console.log("Average number of letters per name: " + averageLetters); 
// concat all the names together, separated by spaces
var concatenatedNames = names.join(` `); 
console.log("Concatenated names: " + concatenatedNames);

//access the last element in an array
var array = [1, 2, 3, 4, 5]; 
var lastElement = array[array.length - 1];
console.log(lastElement); 

//access the first element in an array
var array = [1, 2, 3, 4, 5];
var firstElement = array[0];
console.log(firstElement);

//create a new name array called nameLengths
 let nameLengths = [];

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

// write a loop to iterate over the nameLenghts array and calcuate the sum of all the elements in the array. 
let nameLenghts = [3, 5, 3, 5, 4, 3];
{
    let sum = 0; 

    for (let i = 0; i < nameLenghts.length; i++) {
        sum += nameLenghts[i];
    }
    let result = sum; 
    console.log("Sum of name lengths:", result);
}

// write a function that takes two parameters, word and n, as aguments and retursn the work concatenated to itself n number of times. 
function concatenateWord(word, n) {
    let concatenateWord = ``;

    for (let i = 0; i < n; i++) {
        concatenateWord += word; 
    }
    return concatenateWord;
}

// Example usage
function example() {
    let result = concatenateWord('Hello', 3);
    console.log(result);
}

example();

// write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by space. 

function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
// in use
let fullName = getFullName('John', 'Doe');
console.log(fullName); 

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function isSumGreaterThan100(numbers) {
    let sum = 0; 

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }
    return sum > 100; 
}

// example usage
{
let numbers = [20, 30, 60];
let result = isSumGreaterThan100(numbers);
console.log(result);
}

// Write a function that takes an array of numbers and returns the average of all the elements in the array.

function calculateAverage(numbers) {
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length; 
}
// example usage
let numbers = [10, 20, 30, 40, 50];
{ 
    let sum = 0; 

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length; 
    console.log(average);
}
