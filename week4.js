// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.

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

//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//Use a loop to iterate through the array and calculate the average number of letters per name.
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

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
{let nameLengths = [3, 5, 3, 5, 4, 3];
{
    let sum = 0; 

    for (let i = 0; i < nameLengths.length; i++) {
        sum += nameLengths[i];
    }
    let result = sum; 
    console.log("Sum of name lengths:", result);
}
}
// write a function that takes two parameters, word and n, as aguments and retursn the work concatenated to itself n number of times. 
function concatenateWord(word, n) {
    let concatenateWord = '';

    for (let i = 0; i < n; i++) {
        concatenateWord += word; 
    }
    return concatenateWord;
}

// Example usage
// 'example' function used to create a new scope and create a new delcared 'result'
{
    function example() {
        let result = concatenateWord('Hello', 3);
        console.log(result);
    }
}
// variables declared within scope doesn't conflict with previous executions
example();
// write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by space. 
// getFullName function takes firstName and lastName as parameters and concats with a `' '` space using the '+' operator
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
// in use the function concats the first and last names together with a space to create the full name
let fullName = getFullName('John', 'Doe');
// prints to the console 
console.log(fullName); 

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
// the function initalizes a variable 'sum' to 0. 
function isSumGreaterThan100(numbers) {
    let sum = 0; 
// using a for loop to iterate over the 'numbers' array and add each number to the 'sum' variable
// keyword 'for', initialization 'let i = 0', condition 'i < numbers.length', update 'i++' or the increment operator 
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }
// using a comparison ('sum . 100') to check the sum of all nums is > 100   
    return sum > 100; 
}

// pass an array [20, 30,60] to the 'isSumGreaterThan100' function. The total is 110 so it prints 'true'
{
let numbers = [20, 30, 60];
let result = isSumGreaterThan100(numbers);
console.log(result);
}

// Write a function that takes an array of numbers and returns the average of all the elements in the array.
// function initalizes variable 'sum' to 0. 
function calculateAverage(numbers) {
    let sum = 0; 
// Using a 'for' loop run through the 'numbers' array and add each number to the 'sum' variable    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
// return the aveage by dividing 'sum' by the length of the 'numbers' array 
    return sum / numbers.length; 
}
// pass an array '[10, 20, 30, 40, 50]' to 'calculateAverage' function 
let numbers = [10, 20, 30, 40, 50];
{ 
    let sum = 0; 

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let average = sum / numbers.length; 
    console.log(average);
}

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
// the function creates variables 'sum1' and 'sum2' to 0 to be used to calculate the sums of 'arr1' and 'arr2'
function isAverageGreaterThan(arr1, arr2) {
    let sum1 = 0; 
    let sum2 = 0;
// separate loops to go over again each array and calculate sums
// loop one 'arr1'
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }
// loop two 'arr2'    
    for (let i = 0; i < arr2.length; i++) {
        sum2 += arr2[i];
    }
// taking the sums and calculating the averages by dividing the sums by the lengths    
    let average1 = sum1 / arr1.length; 
    let average2 = sum2 / arr2.length; 
// compare the two averages by using the '>' operator and return 'true' if average of 'arr1' < 'arr2'
    return average1 > average2; 
}
// Passing the two arrays to the 'isAverageGreaterThan' function
// elements in array1 average greater than array2 so the function prints 'true'
{
let array1 = [10, 20, 30];
let array2 = [5, 15, 25];
let result = isAverageGreaterThan(array1, array2);
console.log(result); }

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
// function 'willBuyDrink' uses 'isHotOutside' and 'moneyInPocket' as parameters the '&&' operator checks to see if both conditions are true: 'IsHotOutside' is 
// 'true' and 'moneyInPocket' is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
// if both conditions are satisfied the function returns 'true' otherwise will return 'false'
// Below I use 'true' for 'isHot' and '15.75' for 'money' - which is greater than 10.50 for 'moneyInPocket' 
{
let isHot = true; 
let money = 15.75;
let result = willBuyDrink(isHot, money); }
// both coditions are met so the function returns 'true' when printed to the console.
console.log(result); 

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function getUniqueElements(array) {
    //create an empty object to store unique elements
    let uniqueElements = {}

    // Iterate over the input array
    for (let i = 0; i < array.length; i++) {
        // use the elements as keys in the object to store unique values
        uniqueElements[array[i]] = true; 
    }
    // extract the keys from the object to get the unique elements
    let result = Object.keys(uniqueElements);

    // return the unique elements as a new array
    return result;
}
// This function solves the problem of extracting only the unique elements from an array and returning them in a new array. You can remove duplicate elements and work 
//with only the distinct values. Using an object as a hash table you go over the input arry and store each element as a key in the object. Object keys are 
//unique, dupicates will overwrite the previous occurrance with only the unique elements being stored. Then the keys are extracted using 'Object.keys' and 
//return them as a new array
