let type="hi" 
console.log(typeof type)    //will return String 
 type=23  
 console.log(typeof type)     // will return number

//Two type of type catsing.
//1 >    Implict (automatic) 
//2 >    Explicit(using type casting function)

let a= 4+null;
console.log(a)     //Js will automatically typecast null to number 0

let b= 5+undefined
console.log( b)    //returns NaN

let c="4"+7+3
console.log(c)    // JS Converts 7 to String


let d="4" - 7
console.log(d)    // JS Converts 7 to String 

let e ="1"*"2"*"3"
console.log(e)


let h ="Hello"*"2"
console.log(h)   //returns NaN(Not a Number)



//type Casting with Function
//1.String()
//2.Number()
//3.Booleam()


//Number to String
let a1=2
a1=String(a1)
console.log(typeof a1)

//Boolean to String
let a2=true
a2=String(a2)
console.log(typeof a2)


let x="2"
x=Number(x)
console.log(typeof x)

let x2="Maryam"
x2=Number(x2)
console.log(typeof x2)     //Will return Number cause JS takes NaN as NUmber too


let x3=true
x3=Number(x3)
console.log(typeof x3)
console.log(x3)     //returns 1

//Boolean


let y1="hh"
y1=Boolean(y1)
console.log(typeof y1)  //other than "" converts all to true
console.log(y1) 


let y=1     //other than 0 converts all number to true
y=Boolean(y)
console.log(typeof y)
console.log(y)      // returns true 
