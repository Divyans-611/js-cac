//IIFE (Immediately Invoke Function Expressions) -> jaise hi function likha usko uhdr hi turant execute krwaana h

function chaii(){
    console.log("dB connected...")
}
// chaii() -> isse to likh kr ccall kiya gya h function ....isko immediate nhi bolege

//immediate invoke krne ke liye jo func declare kiye h  uskp usi time call krdo


(function chai(){
    console.log("dB connected...")
})(); //yhi bnanaya yhi call krdiya...IIFE...isko rokna kha n nho pta toh semicolon lgate h

//also invoking functions using arrow fxn
( () => {
    console.log("dB Connected again...")
}) ();

//passing some parameter in the arrow func
( (name) => {
    console.log(`dB Connected again...for ${name}`)
}) ('cheeku');
