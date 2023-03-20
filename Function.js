/*
Two Type of Function
 1.Pre defined
 2.User defined
*/

function tableof(x){
    document.write(`<h3>Table of ${x}</h3>`)
    for(let i=1;i<=10;i++){
        document.write(`${x} x ${i}=${x*i}`)
        document.write('<br>')
    }
}
tableof(12)
document.write(`<h3>Sum of Two Number</h3>`)


function add(x,y){
    return x+y
}
document.write(add(4,4))

document.write(`<h3>Sum of any Numbers</h3>`)
function addWithRest(...x){
    return x+
}
document.write(addWithRest(2,3,4))