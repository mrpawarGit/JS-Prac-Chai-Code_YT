let value = 4;
let negValue = -value;

console.log(value); 
console.log(negValue)
console.log()

console.log(2+2); //addition
console.log(3-2); //subtraction
console.log(2*2); //multiplication
console.log(4/2); //division
console.log(4**2); //power // 2^2
console.log(10%3); //mod

console.log(1 + "2");
console.log(1 + "2" + 2);
console.log("1" + "2");
console.log(1 + 2 + "2");

console.log(+true)
console.log(+false)
console.log(false)

//------------------

let gameCounter = 1;
console.log(gameCounter++);
console.log(++gameCounter);

//---*---*---*---
//Left Shift (<<) Operators
//Right Shift (>>) Operators
console.log();
console.log(5<<2);
console.log()

let x = 9; // 00000000000000000000000000000101 in 32-bit binary
let result = x << 2; //32*2 // 00000000000000000000000000010100 in 32-bit binary, which is 20 in decimal
console.log(result);
// Each shift to the left effectively multiplies the number by 2.

// TT - 1:34:57