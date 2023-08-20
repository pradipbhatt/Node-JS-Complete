// Function having no name is called anonomous Function
// var func=fucntion(){}

var person = function () {
  console.log("Hello this is anonomous function which is called by  person variable");
  const a=10;
  const b=20;
  c=a+b;
  console.log("The sum of \t "+a+" \t and "+b+" \t is \t "+c);
};

person(); //calling the persom function


// Anonomous function with parameter
var add=function(a,b){
    var c=a+b;
    console.log("The sum of \t "+a+" \t and "+b+" \t is \t "+c);
}
add(20,20);  //passing function with arguments