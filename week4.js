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
