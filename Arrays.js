//Arrays 

const arry =new Array(1,2,3,4,6)     //using constructor
console.log(arry)


//Js allows us to save multiple datatype in an array
const ar2 =['I','am',20,'years','old']
console.log(ar2)
//accesing one item 
console.log(ar2[1])
//adding to array
ar2[5]='Girl'      //This isnt a good approach as it require us to already know the lenth of the array
    
//instead use PUSH to add to the End
ar2.push('!')

//unshift  : to add to the Start of the array
ar2.unshift('Hello')

//POP    :  removes the last indexes value
ar2.pop()


//isArray  : to check if something is Array or Not
console.log(Array.isArray(ar2))

//indexOf: to check the index of a value
console.log(ar2.indexOf(20))
console.log(ar2)
