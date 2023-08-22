//console is global object which is predefined object 
//__dirname   (file ko path lae get garna ko lagi)
//__filename
//require  
//buffer,   (temporary value include garcha value pass gareko lae store garcha)
//module,
//exports,

console.log(__dirname); //gives path of current directory
console.log(__filename); //gives path of current file
//require is used to import module

var main= require('./pradip.js');  //file require
var pradip= require ('./Anonomous.js');



// BUffer i sused to store temporary value during working


console.log(pradip.name);