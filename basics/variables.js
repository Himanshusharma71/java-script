console.log("variables in java-script");
const Name="Himanshu sharma";// this value cannot be changed 
let accountId=9004;
let accountState;//this show value undefine
/*
Prefer not to user var variable because the issue of block scope and functional scope
*/
var accountPasword="himanshu12@12";
account_city="jhansi"//this is not allowed;
// Printing of all these
//if we want to print the single value at a time 
console.log(Name);//by this the value of name is print
//IF WE WANT TO PRINT ALL VALUE IN A SINGLE COMMAND OD CONSOLE 
console.table([Name,accountId,accountPasword,accountState]);//by using this method the values is print and create a table with index value