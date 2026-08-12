const myNums = [1,2,3,4,5,67,8,9,10,11]
// const newNums = myNums.filter( (num) => {
//     return (num > 4)
// } ) /////filter ke andar bhi callback funcn hi daal dete hain...
// console.log(newNums) //this will give us all numbers greater than 4 in the arr

const newNums = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums)