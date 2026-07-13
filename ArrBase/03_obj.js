//Object literal -> singleton bnta ha,apne trh ka ek hi object h

//Constructor se -> singleton nhi bntaa, it has multiple instances



//Symbol
const mySym = Symbol("key1")

const JSUser = {
        name : "Divzzy",
        [mySym] : "mykey",
         age  : 21,
        anger : 99,
        isLoggedIn : false,
        email : "divzzy@gmail.com"
} //this is ann object


console.log(JSUser.age)
console.log(JSUser["email"]) //bina dot ke bhi access kr skte hain like this -> email is string so [brackets ke andar] "double" quotes mein...

//symbol ko define krne ke liye oject k andr [mySym] -> sqaure brackets mein daalte hainn

console.log(JSUser[mySym])
console.log(typeof (mySym))



//Changing the values
JSUser.email = "sdh@gmail.com"
//Object.freeze(JSUser) //iske baad koi changes nhi valid hogaa
JSUser.email = "lolol22@gmail.com"

//console.log(JSUser)


JSUser.greeting = function(){
    console.log("Hell0 bhains ki taint");
}

JSUser.greetingName = function(){
    console.log(`Hello user ${this.name}`);
}

console.log(JSUser.greeting);
console.log(JSUser.greeting());
console.log(JSUser.greetingName());










//Object.create -> constructor method

