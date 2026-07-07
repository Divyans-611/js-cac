let score = "30" //this is string
console.log(typeof(score));


//now to convert it to number
//datatype written in uppercase hhere "Number(x) " converts string to number
let valInNumber = Number(score);
console.log(valInNumber);
console.log(typeof(valInNumber));

/* NaN ->  Not a Number */

// "30" string => 30 number
// "30abss" string => NaN ->  Not a Number bitchh

let isLogged = 1
let boolIsLogged = Boolean(isLogged);
console.log(typeof(isLogged)); //this says number i.e. 1
console.log(boolIsLogged); //this gives 1 ka boolean value i.e. (true)

// 0->false
// "" empty string -> false
// "kuchh bhi not empty string" -> true