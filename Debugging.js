// 1. person;
  //Reference error. Person has not been defined.

// 2. var data = {};
// data.displayInfo();
  // undefined cannot be called as a method, this will be a typeError


// 3. var data = {};
// data.displayInfo.foo = "bar";
  //typeError, trying to assign a value to undefined.


// 4. function data(){
//     var thing = "foo"; }
//     data();
//     thing;

  //referenceError, thing is out of scope here and cannot be called since it only exists in the function


// Part II
// Fix the broken code and explain what was wrong:

//1. 
for(var i = 0; i < 5; i++) {
     console.log(i); 
}
// should be i < 5 

//2. 
function addIfEven(num){
  if(num % 2 === 0) {
    return num + 5 ;
    }
    return num;
}

// should use strict comparison instead of equal = 


//3.
function loopToFive(){
  for(var i = 0; i < 5; i++) {
    console.log(i);
  }
}

// semicolons instead of commas inside of condition


//4.
var numbers = [1,2,3,4,5,6,7,8];

function displayEvenNumbers() {
  var evenNumbers = [];
  for(var i  = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i])
    }
  }
  return evenNumbers;
}
displayEvenNumbers(); // should return [2,4,6,8] 

//var numbers should be outside of function
// for loop should be separated by a ; 
// The if statement should not have a ; after the condition
// We should loop until i < numbers.length
// use strict comparison 
// (numbers[i]) should be pushed not i
// return outside of loop







