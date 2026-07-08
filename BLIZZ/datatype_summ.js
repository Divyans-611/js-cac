// pass by Reference (Non-primitive)

// Arrays, Objects, Function

const heroes = ["Shaktimaan","Bhaiuns","Ki","Taint"];
//object
let blehh = {
    name: "Lol",
    age: 23,
}

console.log(heroes[1]);
console.table(heroes);

//functions
function plio(){
    console.log("Hizrrr");
}
plio();


// ***********************MEMORY STUFF**********************

//Stack (primitive)

let myName = "Jiggu gammm"

let name2 = myName
name2 = "Niggu btchh"

console.log(myName);
console.log(name2);

//Heap(Non-primitive)

//heap mein copy ki jgh actual value pass ki gyi and usse idhr mein change aa gya real value mein
let usrOne = {
    email: "Higgu@gcom",
    upi: "nhi@ybl"
}
let usrTwo = usrOne
usrTwo.email = "jdns@kmd"
console.log(usrOne.email);