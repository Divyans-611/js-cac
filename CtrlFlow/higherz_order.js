// for of

[{},{},{}] //array of objs

const arr = [1,2,4,5,6]
for(const idxVal of arr){
    //console.log(idxVal)
}

const greetings = "Hello Worldd"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}


//MAPS -> object -> holds key-value pair...

const map = new Map()
map.set('IN',"India")
map.set('UK',"United Kingdom")
map.set('USA',"United States of Americaa")
map.set('IN',"India") // agar same entry do baar le li to bhi nahi aayega....map doesnt allow multiple entries in it...

for(const i of map.keys()){ //keys() funcn call will print keys from the map
    console.log(i)
}

for(const j of map.values()){//prints the values for the map
    console.log(j)
}