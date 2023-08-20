// var users=function(){
//     console.log("This is arrow function");
// }
// users();

//making above ananomous function as arrow function
var users=() => console.log("This is arrow function");

users(); //calling arrow function

//arrow function can be make with return type functoinname=(parameters)=>{return statements}
// const a=4;
// const b=5;
var add=(a,b)=>{console.log("The output is",a+b)};
add(3,3);//passing arguments while calling the function