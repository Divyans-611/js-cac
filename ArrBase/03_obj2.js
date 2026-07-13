//objects creation by constructors
//No singleton  but has multiple instances
const tinderUsr = new Object()

tinderUsr.name = "kallu"
tinderUsr.id = 232
tinderUsr.email = "kall@gmail.com"

//console.log(tinderUsr);

const usr2 = {
    email : "usr2@gmail.com",
    fullname: {
        usrFullName : {
            FirstName: "Hallu",
            LastName : "Gujii"
        }
    }
}

//console.log(usr2.fullname)
//console.log(usr2.usrFullName) ->nested h toh directly ni aayega
//console.log(usr2.fullname.usrFullName) // yehh dedega usrFullName

const obj1 = {1: "a" , 2 : "b"}
const obj2 = {3: "c",  4: "d"}
const obj3 = {5: "a" , 6: "b"}

// const objF = Object.assign({},obj1,obj2,obj3) // (target{} , source) dete hain...yha pr obj1,2,3, are 


//iski jgh we can also usee spread operator jaise arr mein kiya tha {...obj1,..obj2}
const objF = {...obj1,...obj2,...obj3} //spread operator use this syntzx to merge
console.log(objF);

//array of objects

const users = [
    {
        id : 1,
        email : "h@gmail"
    },
    {
        id : 2,
        email : "h33@gmail"
    },
    {
        id : 3,
        email : "23h@gmail"
    },
    {
        id : 4,
        email : "h88@gmail"
    }
]
console.log(users[1]);
console.log(users[1].email)

//to access key and value of any specfic object ->  here tinderUsr is the object
console.log(Object.keys(tinderUsr));
console.log(Object.values(tinderUsr));
console.log(Object.entries(tinderUsr));

console.table(tinderUsr);