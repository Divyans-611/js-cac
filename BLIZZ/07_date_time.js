let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)


// let createDate = new Date(2026,0,6)

let createDate = new Date("01-14-2026") //mm/dd/yyyy
console.log(createDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000));



let newDate  = new Date()
console.log(newDate);
console.log(newDate.getDay());


//output of date time ko hamlog customized way mein dikhaa skte hain like thiss
newDate.toLocaleString('default',{
    weekday: "long",
})