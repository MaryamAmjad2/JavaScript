//(...)
//rest and spread are diffrentiated based on therir usage
//rest is used with parameter
//spread is used with any iteratable object


let ar=[1,2,3,4,]
console.log(...ar)


//can be used to concat arrays
let arr2=[...ar,5,6]
console.log(arr2)
let arr3=arr2.concat(ar)
console.log(arr3)

let arr4=[arr2,arr3]
console.log(arr4)