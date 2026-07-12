const marvel = ["iron man","loki","captain"];
const dc = ["flash","aquaman","batman"];

//to join them -> concatenation
//const heroes = marvel.concat(dc);
//heroes.unshift(44)


//spread kiyaa isko "..." use krke
const heroes = [...marvel,...dc];
console.log(heroes);

const array = [1,2,3,[4,5,6],7,[7,8,9,[4,5]]];
//saare subarrya ke elements ko concatenate krke ek mein hi de dega
const real_array = array.flat(Infinity);
console.log(real_array);


console.log(Array.isArray("yohooo")); //check krta hai
console.log(Array.from("YOHoooo")); //convert krdeta hai string to another array
console.log(Array.from({name: "hejfr"})) //yhaan object bnaya gya toh yehh convert nhii kr pa rha khud se from string to array



const sc1 = 23
const sc2 = 45
const sc3 = 56
console.log(Array.of(sc1,sc2,sc3)) //yehh elements se array bnaya 



// NOTE

const rnd = [243,45,2456,35,1,234] //isko number nhii string conider kr rha h so sort ho rha on baiss of pehla element...not cool
//rnd.sort()
//to sort on the basis of number
rnd.sort((a,b) => a-b); //this sorts in ascending order


/* the comparator funcction (a,b) => a-b
    yhaa a-b -> negative => a pehle
    b - a -> positive => b pehle
    a - b = 0 => don't need a change in the order */
console.log(rnd);