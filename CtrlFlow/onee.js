// //falsy values

// false, 0 , -0 , BigInt, 0n, "" , null ,undefined, NaN // these are false values and other are true


// //truthy values

// "0", 'false'-> string k andar likhe h, " ",
// [], {}, function(){}

//************* Nullish Coalescing Operator (??) : null , undefined************
let val1;
//val1 = 5 ?? 10 // gives 5
//val1 = null ?? 10 // in this case gives 10
//val1 = undefined ?? 100 //in this case gives 100

val1 = undefined ?? 10 ?? 20 ?? 30 //returns 10 ->first value after null/undefined

console.log(val1);


//*************TERNARY OPERAATOR ******************

let x = 50
x > 100 ? console.log("Niceee") : console.log("Bhains ki taint")