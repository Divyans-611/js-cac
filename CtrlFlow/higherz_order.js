// for of

[{},{},{}] //array of objs

const arr = [1,2,4,5,6]
for(const idxVal of arr){
    //console.log(idxVal)
}

const greetings = "Hello Worldd"
for(const greet of greetings){
   // console.log(`Each char is ${greet}`)
}


//MAPS -> object -> holds key-value pair...

const map = new Map()
map.set('IN',"India")
map.set('UK',"United Kingdom")
map.set('USA',"United States of Americaa")
map.set('IN',"India") // agar same entry do baar le li to bhi nahi aayega....map doesnt allow multiple entries in it...

//console.table(map)
// for(const tbl of map){
//     console.table(tbl)
// }

// for(const i of map.keys()){ //keys() funcn call will print keys from the map
//     console.log(i)
// }

// for(const j of map.values()){//prints the values for the map
//     console.log(j)
// }

//FOR NORMAL OBJECTS WE DO NOT USE THIS, INSTEAD WHAT WE USE IS -> FOR IN loop

const myObj = {
    js : "Javascript",
    cpp : "C++",
    py : "Python",
    swift : "Swift by Apple"
}
for(const key in myObj){
    //console.log(key)
}

//for the values part...
for(const key in myObj){
    //console.log(`${key} stands for ${myObj[key]}`)
}

//forEach loop -> uses a callback functionn -> rerturn krke dega fir jo marzii krdo uss valuee ke saath

const coding = ["app","js","cpp","rb"]
coding.forEach( function (item) {
    console.log(item)
} )

