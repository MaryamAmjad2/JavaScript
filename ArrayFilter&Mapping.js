let a=[1,2,13,46,2,,99,3,455,67,22]
a=a.filter(greaterThan10)
function greaterThan10(x){
    if( x>10){
return x
    }
    else{

    }
}
console.log(a)

b=a.map(MultiplyBY2)
function MultiplyBY2(y){
    y=y*2
    return y
}
console.log(b)