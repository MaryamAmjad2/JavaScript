/*Function with parameter
  variable insidre function () are called parameter
  values inside function call are arguments
*/
function add(x,y)/*parameter*/{   
    return x+y
}

console.log(add(3,4))//arguments
document.write("<h2> Function with 1 parameter</h2>")
//write a function that display table of given number
let n=prompt("Enter the number")
function table (x){
    for(let i=1;i<=10;i++){
        document.write(`${x} x ${i} = ${x*i}`)
        document.write("<br>")
    }
}

table(n)
document.write("<br>")
document.write("<h2> Function with 2 parameter</h2>")

//write a function that display table of given number upto given range
let num=prompt("Enter the number you wanna print Table of")
let limit=prompt("Enter table range")
function table2 (x,y){
    for(let i=1;i<=y;i++){
        document.write(`${x} x ${i} = ${x*i}`)
        document.write("<br>")
    }
}
table2(num,limit)