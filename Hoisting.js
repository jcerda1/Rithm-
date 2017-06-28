// What does the following code output? Why?

var firstName = 'Elie';

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

//This will return 'Tim', this is the defined firstName in the function.

displayFirstName(); // ?


// What does the following code output? Why?

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName();

//This will display 'Tim' same as the first function.

console.log(firstName) // ?
// What does the following code output? Why?
  //This will return 'Elie' because this is  global variable being called.

console.log(firstName) // ?
// var firstName = "Elie"
// What does the following code output? Why?

  //This will output "Elie"


// console.log(firstName) // ?
// firstName = 'Elie'
// What does the following code output? Why?

// function sayHi(){
//     return 'Hi ' + firstName;
//     var firstName = 'Elie'
// }

// sayHi(); // ?
// What does the following code output? Why?

// function sayHi(){
//     return 'Hi ' + firstName; 
//     firstName = 'Elie'
// }

// sayHi(); // ?
// What does the following code output? Why?

// sayHi() // ?

// function sayHi(){
//     return 'Hi!';
// }
// What does the following code output? Why?

// sayHi() // ?

// var sayHi = function(){
//     return 'Hi!';
// }
