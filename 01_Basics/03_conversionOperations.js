let score = 33;
console.log(score);   

console.log(typeof(score));
console.log(typeof score);

//checking datatype - can use both ways
let score2 = "55";
console.log(typeof(score2));
console.log();


//converting num to string
let str = Number(score2);
console.log(typeof(str));
console.log(typeof(score2));
console.log(str+2);
console.log(score2+2);
console.log();
//Number(score2);
//console.log(typeof(score2));

//there is no strict check in javascript so some times
//NaN means Not a Number can be shown as number as follows

let roll = "123AB";
let sudoNum = Number(roll);
console.log(typeof sudoNum);//it will print the type is number but 123AB is not actually a number

let num = null;
let numnum = Number(num);
console.log(typeof num);
console.log(typeof numnum);
console.log(numnum);//it will print 0
console.log();//it will print 0

let isTrue = true;
console.log(typeof isTrue);

let isTrue2 = Number(isTrue);
console.log(typeof isTrue2);
console.log(isTrue2); //after conversions 'true will be 1' & 'false wiil be 0'.

//time line of video - 1:09:45



