const name = "Hugo"
const count = 500


//console.log(name+count);

//using backticks 

//console.log(`Hello name's ${name} and body count is ${count}`);

//methods realted to Strings
const xy = new String("halwa-bc");

// console.log(xy.length);
// console.log(xy.toUpperCase());
console.log(xy.charAt(3));
console.log(xy.indexOf('a'));


const substr = xy.substring(0,4);
console.log(substr);


//slice mein negative value de skte hain but substring mein agar negative values dya tb bhi ignore krdega
const anotherStr = xy.slice(-8,3);
console.log(anotherStr);

//removing space
const spaceStr = "     Haggi    ";
console.log(spaceStr)//this will print spaces too
console.log(spaceStr.trim()); // ts won't print the spaces


const url = "https://lolu.in/lolu%55op"
console.log(url.replace('%55' , '-'));