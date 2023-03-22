/*same as rest operator allows you to take as many arguments

*/
function show(){
   console.log( arguments)
}
show(2,3,4)     //retuen key :Value
show(2,3)
show(2,3,4,5,6,7,8)
show()   //return 

//Make an ADD function that returns sum of all given arguments
function addALL(){
    arguments
    if(arguments.length==0){
        console.log("Please Enter Some arguments")
    }
    else{
        let sum=0
        for(let i=0;i<arguments.length;i++){
            sum=sum+arguments[i]
        }
        console.log(sum)
    }

}
addALL(2,3)
addALL(2,3,4,5,6,7,8)
addALL() 

//can assign function to a variable 
//Note :
//dont use ()
let addition=addALL
addition(1,2)
