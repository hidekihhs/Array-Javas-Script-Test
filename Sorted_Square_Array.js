
var array1 = [1, 2, 3, 5, 6, 8, 9];
var array2 = [-2, -1];
var array3 = [-10, -5, 0, 5, 10];


function squareArray(arr) {
  return arr.map(function (x) {
    return Math.pow(x, 2);  
  });
  
}

function compareNumbers(a, b) {
  return a - b;
}

function sortedSquareArray(arr) {
  return squareArray(arr).sort(compareNumbers);

}


console.log("\n array1 = [1, 2, 3, 5, 6, 8, 9]")
console.log( "Answer = " + sortedSquareArray(array1) )  
console.log("\n array2 = [-2, -1]")
console.log( "Answer = " + sortedSquareArray(array2) )  
console.log("\n array3 = [-10, -5, 0, 5, 10]")
console.log( "Answer = " + sortedSquareArray(array3) )  
