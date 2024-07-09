const accountID = 123456;
let accountEmail = "mayur@gmail.com";
var accountPass = "12345";
accountCity = "Pune";
let accountState;

console.log(accountID);

/*
accountID=223;
const can't be modified
*/

//The difference between the two is that you can not assign 
//a new value to a variable that was created with const.

/*
- prfer not to use 'var'
- beacause of issue in block scope and functional scope
- use 'let' & 'const'
*/

console.table([accountID,accountEmail,accountPass,accountCity,accountState]);