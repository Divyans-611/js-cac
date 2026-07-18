//Engineering krle bahut scope hai....MADARCHOD

//scope of the program
if(true){
    //scope ke andar jo value likhte hain woh baahar nahi jaani chahiye -> block scope
    let a = 10 
    const b = 20
    var c = 30 //global scope hotaa hai
}


//console.log(a)
//console.log(b)
//console.log(c)


//nested scope -> scope ke andar scope
function one(){
    const username = "halkuuu"

    function two(){
        const web = "yt"
        console.log(username);
    }
    //console.log(web)
    two()
}
one()



// ****************** Mini Hoisting *********************


addOne(5); //yeh wala access kr lega
function addOne(val){
    return val+1;
}




//addTwo(5); //yeh isko access nhi kr payega bcx declaration baad m huaa h
const addTwo = function(num){ //function hi hai but also called expression...
    return num+2;
}
addTwo(5);
