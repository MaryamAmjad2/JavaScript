//Rest Operator 
//used when we dont want to predefined number of arguments passed
//like we want to sum 4 num, 5 num,6 num
//(...)
function sum(...args){
    console.log(args)

}
sum(2,3,3,4,4)       //args will be an array 
sum(2,3)