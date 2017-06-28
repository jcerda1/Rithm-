// // Given the following array, write a function 
// //called printEvens that console.logs all of the even numbers

var nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

function printEvens() {
  for(var i = 0; i < nestedArr.length; i++) {
    for(var j = 0; j < nestedArr[i].length; j++) {
      if(nestedArr[i][j] % 2 === 0) {
        console.log(nestedArr[i][j])
      }
    }
  }
}


printEvens();  

// // // 2
// // // 4
// // // 6
// // // 8
// // // 10
// // // 12


// // Given the following array, write a function 
// //called sumTotal returns the sum of all numbers in the array

var nestedArr = [[[1,2],[3,4]],[[5,6]]];

function sumTotal() {
  var count = 0;
  for(var i = 0; i < nestedArr.length; i++) {
    for(var j = 0; j < nestedArr[i].length; j++) {
      for(var k = 0; k < nestedArr[i][j].length; k++ ) {
           count += nestedArr[i][j][k]
      }
    }
  }
    return count;
}
sumTotal(); // 21

