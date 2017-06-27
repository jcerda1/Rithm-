// Exercises
// Complete both parts of the exercises before moving on. 
// It is essential that you complete these exercises as they are the building blocks for the next section!

// Part I

// Write the code necessary to do the following:

// Create an empty array called arr.
var arr = [];
// Add your first name to the arr variable
arr.push('Jeramiah');
// Add your last name to the end of the arr variable
arr.push('Cerda');
// Add your favorite color to the beginning of the arr variable
arr.unshift('grey');
// Your variable arr should look like this (using Elie for a first name, Schoppik 
//for a last name and purple for a favorite color) ["purple", "Elie", "Schoppik"]. Keep going!

// Remove the favorite color from the arr variable 
//(remember this is the first value in the array - what method can you use to remove the first value in an array?)
arr.shift();
// Create another array called arr2.
var arr2 = [];
// Add your favorite number to arr2
arr2.push(21)
// Add the string "JavaScript" to the end of the arr2 variable
arr2.push('JavaScript');
// Your variable arr2 should look like this (using 42 as a favorite number) [42, "JavaScript"].

// See if the value 42 exists in the arr2 array. Do this using the indexOf method. 
arr2.indexOf(21)

//What does indexOf return to you if the value passed to it can not be found in the array?

  // It should return -1 if the indexOf is not found.


// Create a new variable called combinedArr which is the result of your arr and arr2 variables combined into one array.
var combinedArr = arr.concat(arr2);
// Your combinedArr variable should look like this (using our previous values) ["Elie", "Schoppik", 42, "JavaScript"]

// Part II

// Complete the following, starting from the following array: 
var arr = ["JavaScript", "Python", "Ruby", "Java"]

// Return the following array: ["Python", "Ruby"].

arr.pop()
arr.shift();

// Combine the array with the array ["Haskell", "Clojure"].
var arr2 = arr.concat(["Haskell", "Clojure"])
// Return the string "JavaScript, Python, Ruby, Java".
arr = ["JavaScript", "Python", "Ruby", "Java"]
// Try to explain, in your own words (or diagrams!) what the difference is between passing by value vs. passing by reference.

  //when passing by value, that value is not pointing to any other value but its own. When we pass by reference the varialble
  // name is pointing to another value that can be changed if changes are made to the any iteration of that value. 





