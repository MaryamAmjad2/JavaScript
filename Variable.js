//Var is global so avoid using var 
var x=30;
x='hello';
console.log(x);  //Works completly fine


// //const is short for constant which means you cant change value of const variable
// const a=2;
// a=3;
// console.log(a);   //will generate error

//let allows us to reassign values
let b = 100;
b =200;   //works totally fine
console.log(b);