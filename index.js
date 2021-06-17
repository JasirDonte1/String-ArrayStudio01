const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.


//Use a template literal to print the original and modified string in a descriptive phrase.

let strFront = str.substr(0,3); 
let strBack = str.slice(2);
let newStr = strBack + strFront;
console.log(newStr);

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
const reloc = Number(input.question("enter the number of letters that will be relocated\n"));

if(reloc > str.length){
  console.log("Number entered is greater than length of string");
  strFront = str.substr(0,3);
  strBack = str.slice(2); 
  newStr = strBack + strFront;
  console.log(newStr);
}else{
  strFront = str.substr(0,reloc);
  strBack = str.slice(reloc); 
  newStr = strBack + strFront;
  console.log(newStr);
}
//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
