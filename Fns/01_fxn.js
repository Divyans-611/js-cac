function naam(){
    console.log("Eyahhhhh")
}
naam(); //function reference

// function addTwoNumbers(a,b){
//     return (a+b);
// }
// const sum = addTwoNumbers(22,88);
// console.log(sum);


function loginUsr(username){
    return `${username} logged in`    
}
//console.log(loginUsr("Jeff"));


// ************REST/SPREAD Operator(...num2)*************
function CartPrice(...num1){
    return num1;
}

console.log(CartPrice(300,400,500));


//to acess object using func
const user = {
    username : "halkuu",
    price : 3432
}

function accessObj(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
accessObj(user);

//direct bhi object pass kr skte h function mein
accessObj({
    username : "sksks",
    price : 233
})


//passing arr
const arr = [200,45,1924,245]
function returnSecond(array){
    return array[1];
}

console.log("Second element of the array is : ", returnSecond(arr));