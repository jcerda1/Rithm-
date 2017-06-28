// Create an object that has your firstName, lastName, and occupation as keys.
var obj = {
	firstName : 'Jeramiah',
	lastName :  'Cerda',
	occupation : 'student'
}

// Access each value from your object using both dot notation and bracket notation.
console.log(obj.firstName);
console.log(obj['lastName']);
console.log(obj.occupation);

// Add a key for hobby to your object. 
obj.hobby = 'reading'

//Remove the key and value for occupation.
delete obj.occupation;

// What is the difference between dot notation and bracket notation?

  // When we need to evaluate an expression we should use bracket notation
  // if the property is know then use dot notation