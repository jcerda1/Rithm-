//1.Create an array of your favorite foods (call it favoriteFoods). Make sure it has at least three elements.

var favoriteFoods = ['pizza','lasagna','steak','macandcheese','stone crab claws','risotto'];

//2Access the second element in favoriteFoods.

console.log(favoriteFoods[1]);

//3.Change the last element in favoriteFoods to some other food.
 favoriteFoods[5] = 'lamb chops';

//4.Remove the first element in favoriteFoods and store it in a variable called formerFavoriteFood.

var formerFavoriteFood = favoriteFoods.shift();

//5. Add a favorite food to the back of the favoriteFoods array.
favoriteFoods.push('eggs');

//6. Add a favorite food to the front of the favoriteFoods array.
favoriteFoods.unshift('peppers');

// 7.What happens when you try to pop from an empty array?

  //undefined is returned.

// 8. In the examples below, use splice to convert the first array to the second array:
var nums = [2, 3, 4, 5] //-> [2, 4, 5] 
nums.splice(1,1);

var alpha = ["alpha", "gamma", "delta"] // ->["alpha", "beta", "gamma", "delta"]
alpha.splice(1,0,'beta')


var integers = [10,-10,-5,-3,2,1] //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
integers.splice(1,4,9,8,7,6,5,4,3,2)
