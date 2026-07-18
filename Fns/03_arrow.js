//this keyword ==> current object ke baare mein batata haii

const user = {
    username : "halkii",
    price : 404,

    welcomeMsg : function(){
        console.log(`Hi there ${this.username}, your price is ${this.price}...`) //current context is user so this refers to user only...
        // console.log(this);
        // console.table(this);
    }
}
//user.welcomeMsg();

user.username = "kiuii"
user.welcomeMsg();

console.log(this) //outside the scope -> in the node environment ....this will refer to an empty object {}...nthg else


//*************** ARROW FUNCTION ***************
// function chai(){
//     let username = "gobiuu" 
//     //console.log(this.username);
//     console.log(this)
// }
// chai();


// const chai = function(){ //yeh normal way h function ko declare krke rkhne ka 


// }
// //using arrow func
// const chai = () => { //yeh h using arrow function to declare and store the function

// }


const chai = () => {
    let username = "jibhuu"
    //console.log(this.username);
    console.log(this)
}
//chai();

const addTwo = (num1,num2) => {
    return num1+num2;
}
console.log(addTwo(4 , 2))

//implicit rreturn ->  bina return ke same line mein hi likhh do

const addThree = (n1,n2,n3) => (n1+n2+n3);
console.log(addThree(3,4,5));