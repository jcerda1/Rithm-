// Make a function for add, subtract, multiply, and divide. 
//Each of these functions should accept two parameters and return the sum, difference, product and quotient.

function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    return num1/num2
}

// add(2,2); // 4
// subtract(2,2); // 0
// multiply(2,2); // 4
// divide(2,2); // 1

// Write a function called sayHello that 
//takes in a string as a parameter. 
//If the parameter passed to the function is your first name, 
//it should return "Hello Boss", but if the parameter passed to the 
//function is any other name, it should return the string "Hello" and the name parameter.

function sayHello(string) {
  var results = "";
  if(string === 'Jeramiah') {
    results = 'Hello Boss';
  } else {
    results = 'Hello' + " " + string;
  }
    return results;
}

console.log(sayHello('Alex'));

// for this example, my first name is Tim
sayHello("Tim"); // "Hello Boss"
sayHello("Janey"); // "Hello Janey"
sayHello("Elie"); // "Hello Elie"


//Write a function called average which accepts an 
//array as a parameter. The function should return the average of all
//of the numbers in the array (you can assume that the array passed to the 
//function will contain only numbers)

function average(array) {
    var sum = array.reduce(function(x,y) {
        return x + y
    });
    return sum/array.length;
}


average([1,2,3,4,5]); // 3
average([1,2,3,4,5,6]); // 3.5
average([10,20]); // 15


//Write a function called createStudent, 
//which accepts two parameters both of which are strings. 
//The function should return an object with the keys firstName and
//lastName and the values should be each of the

function createStudent(str1, str2) {
  var obj = {};
    obj.firstName = str1;
    obj.lastName = str2
    return obj;
}

createStudent("Elie", "Schoppik");
// /*
// {
//     firstName: "Elie",
//     lastName: "Schoppik"
// }
// */
createStudent("Tim", "Garcia");
// /*
// {
//     firstName: "Tim",
//     lastName: "Garcia"
// }
// */

// Using your createStudent function, 
//create three students and save them each in a variable.
//Then create a variable called students, which is an array
//that will store your three students


var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppik");

var students = [tim, matt, elie];

console.log(students)

// your students array should contain three objects 
//each with the keys of firstName and lastName.
//If they do not - make sure you correctly implement 
//the createStudent function from above!
// Write a function called findStudentByFirstName, 
//which accepts one parameter, a string. 
//This function should iterate through the students array you 
//just made and if the parameter passed to the function is the 
//same as one of the first name's of the students, the function should return true. 
//Otherwise it should return false. 
//This function should be case insensitive so that you can 
//search successfully regardless of capitalization


function findStudentByFirstName(str) {
  var name = str.toLowerCase();
  for(var i = 0; i < students.length; i++) {
    if(students[i].firstName.toLowerCase() === name) {
      return true;
    }
  }
    return false;
}

console.log(findStudentByFirstName('elie')) // true
findStudentByFirstName('Elie') // true
findStudentByFirstName('Janey') // false
findStudentByFirstName('Janey') // false
findStudentByFirstName('TIM') // true
findStudentByFirstName('MMMaaaTTTtttTTT') // false


//Write a function called extractEveryThird which 
//accepts an array as a parameter. The function should iterate 
//over the array and return a new array with every 3rd element in the array
//passed to the function.

function extractEveryThird(arr){
    var newArr = [];
    for(var i = 2; i < arr.length; i += 3){
        newArr.push(arr[i]);
    }
    
    return newArr;  
}
console.log(extractEveryThird([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))


extractEveryThird([1,2,3]); // [3]
extractEveryThird([1,2,3,4,5,6]); // [3,6]
extractEveryThird(["a","b","c","d"]); // ["c"]
extractEveryThird(["first value", "second value", "third value"]); // ["third value"]


// Write a function called countEvensAndOdds which accepts an
//array as a parameter. This function should return an object with 
//the count of even numbers and the count of odd numbers. 
//The object returned should have the keys oddCount and evenCount.

function countEvensAndOdds(array) {
  var obj = {
      evenCount : 0,
      oddCount : 0
  };
    
  for(var i = 0; i < array.length; i++) {
    if(i % 2 === 0) {
      obj['evenCount']++
    } else {
      obj['oddCount']++
    }
  }
    return obj;
}

console.log(countEvensAndOdds([1,2,3,4]));
// /* 
//  {
//     oddCount:2,
//     evenCount:2
//  }
// */
console.log(countEvensAndOdds([1,2,3,4,5,6,7]));
// /* 
//  {
//     oddCount:4,
//     evenCount:3
//  }
// */
// In the following example, 
//what will be printed in the console? 
//Make sure you first try read this code before pasting it into the console :)

// var myVar = "Hello from global";

// function scopePractice() {
//    var myVar = "Hello from function scope";
// }

// scopePractice();
// console.log(myVar);

// var tricky = "Hello from global";

// function trickyScopePractice() {
//     tricky = "Hello from function scope";
// }

// console.log(tricky);


//'Hello from global';
//'Hello from global';






