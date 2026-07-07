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



//************************ Operations **************************


let val  = 300
let negVal = -val
//console.log(negVal);

let a ="blehh "
let b ="sexyy "
//console.log(a+b); 

//String related stuff

//going from left to right ----->
console.log("1" + 2 + 3) //1st wala is string so sbko string hi consider =>123
console.log(1 + 2 + "3") //1st and 2nd ko number consider and last ko string => 33

// let num1,num2,num3
// num1 = num2 = num3 = 2+2
// console.log(num1)
