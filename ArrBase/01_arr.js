const arr = [0,2,4,5,6,7]
console.log(arr.length);
//console.log(typeof(arr))

//Array methods
// arr.push(45)
// console.log(arr);

// arr.pop();
// arr.pop();
// console.log(arr);

arr.unshift(9) //yeh arr ke start mein insert huaa....harr element kaa index shift hua hai
//Unshift is not optimised
console.log(arr);

arr.shift()//aage waala 9 hata degaa yeh
console.log(arr);



console.log(arr.includes(7)); //True arr mein 7 haii
console.log(arr.indexOf(7));
console.log(arr.at(2));


//join() -> arr ke elements ko add krke ek string mein dediyaa
// const newArr = arr.join();
// console.log(arr);
// console.log(newArr); //string

// console.log(typeof(newArr));



// slice, splice(manipulates original arr)

//slice [a,b)
const myn1 = arr.slice(1,3);
console.log(myn1);

//splice [a,b] // b tak ke baad ke elements katt jayege aur alag ho jayege
console.log("B ",arr);
const myn2 = arr.splice(1,3);
console.log("C ",arr);
console.log(myn2);