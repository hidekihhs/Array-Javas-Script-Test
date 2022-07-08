
var coins1 =  [5, 7, 1, 1, 2, 3, 22];
var coins2 = [1, 1, 1, 1, 1];
var coins3 = [1, 5, 1, 1, 1, 10, 15, 20, 100];


function changeArray(arr) {

var aux_arr = [...arr];
var change_created = 0;
var change_to_be_created =0;

  while( aux_arr.length >= 0 ){
    
    change_to_be_created = change_created + 1;
  
    if((aux_arr.length) == 0){
      return change_created + 1;
    }
    
    if ( (Math.min(...aux_arr)) > change_to_be_created ){
       return change_to_be_created;
    }
    else{ 
      change_created += Math.min(...aux_arr);
      aux_arr.splice([aux_arr.indexOf(Math.min(...aux_arr))], 1);
    }
    
  }
  
}

console.log("\n coins1 =  [5, 7, 1, 1, 2, 3, 22]")
console.log( "Change = " + changeArray(coins1) )  
console.log("\n coins2 = [1, 1, 1, 1, 1]")
console.log( "Change = " + changeArray(coins2) )  
console.log("\n coins3 = [1, 5, 1, 1, 1, 10, 15, 20, 100]")
console.log( "Change = " + changeArray(coins3) )  
