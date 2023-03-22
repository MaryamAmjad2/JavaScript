function add(x,y){
    return x+y
}
add(2,3)  //do not want to print 
let a=add(2,3)
console.log(a)

/*
if we dont use return in a function it returns undefined
 */
function addWithourReturn(x,y){
  x+y
}
let b =addWithourReturn(5,38)
console.log(b)   //undefined


//can output an array
function array(x,y){
    return[x,y] 
}
let c=array(3,4)
console.log(c)

