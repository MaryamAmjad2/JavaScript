/*
used to assign values of array to variable

*/
let name=["Maryam","Hassan","Haider"]

let [v1,v2,v3]=name
console.log(v3)

//What if we add variables more than actual values in array
let [n1,n2,n3,n4]=name
console.log(n4)     //returns undefined


//we can solve the above problem by using default value
let [c1,c2,c3,c4="ALI"]=name


//Array inside Array Destructuring
let skill=["python","C#","Flutter",["HTML","CSS"]]
let [a,b,c,[d,e]]=skill
console.log(e)
//with Function
function bookDetail(){
    return["48 Laws of Power",200,"40$"]
}
let [bname,pages,price]=bookDetail()
console.log(pages)