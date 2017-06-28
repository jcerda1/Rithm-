// Write a function called myName that logs your full name. 
//Save your full name to a variable inside of the function body, then use console.log to print your name to the console.

function myName() {
	var myName = 'Jeramiah Cerda';
	console.log(myName);

}

myName(); // if your full name was Elie Schoppik this function would return "Elie Schoppik" 

// Create an array called favoriteFoods which contains the strings "pizza" and "ice cream".
var favoriteFoods = ['pizza','ice cream'];

// Write a function called randomFood. 
//The function should use Math.random to randomly choose a favorite food in your 
//favoriteFoods array to return. For example, your function will return either pizza or ice cream, 
//depending on what you get back from Math.random.

function randomFood() {
	if(Math.random() > 0.5) {
      console.log(favoriteFoods[0])
	} else {
      console.log(favoriteFoods[1]);
	}
}

randomFood(); // either returns "pizza" or "ice cream"


// Create a variable called numbers which is an array that contains the numbers 1 through 10.
var numbers = [1,2,3,4,5,6,7,8,9,10];

// Write a function called displayOddNumbers which iterates over
// the numbers array and console.logs out all of the numbers that are odd. 
//Here is what that might look like:

function displayOddNumbers(){
  for(var i = 1 ; i < numbers.length; i+= 2) {
    console.log(i);
  }
}

// displayOddNumbers(); 

// // 1
// // 3
// // 5
// // 7
// // 9
// Write a function called displayEvenNumbers which iterates over 
//the numbers array and console.logs out all of the numbers that are even. 
//Here is what that might look like:
function displayEvenNumbers(){
  for(var i = 2 ; i < numbers.length; i+= 2) {
    console.log(i);
  }
}

// displayEvenNumbers(); 

// // 2
// // 4
// // 6
// // 8
// // 10

// Create a function called returnFirstOddNumber which iterates over 
//the numbers array and returns the first odd number it finds

function returnFirstOddNumber() {
  for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        console.log(numbers[i]);
        break;
    }
  } 
}
// returnFirstOddNumber(); 
// 1

// Create a function called returnFirstEvenNumber which iterates over 
//the numbers array and returns the first even number it finds

function returnFirstEvenNumber() {
  for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        console.log(numbers[i]);
        break;
    }
  } 
}
// returnFirstEvenNumber(); 
// 2


// Create a function called returnFirstHalf which returns the first half of the numbers array

function returnFirstHalf(){
  for(var i = 0; i < numbers.length/2; i++) {
  	console.log(numbers[i])
  }
}

// returnFirstHalf(); 
// [1,2,3,4,5]


// Create a function called returnSecondHalf which returns the second half of the numbers array

function returnSecondHalf(){
  for(var i = numbers.length/2; i < numbers.length; i++) {
  	console.log(numbers[i])
  }
}

// returnSecondHalf(); 

// // [6,7,8,9,10]







