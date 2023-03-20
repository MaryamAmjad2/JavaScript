//Loops
//Try printing your Name 10 time

//Using While Loop
 let i=0
 while(i<10){
    console.log(`Maryam ${i}`)
    i++
 }
 //Sum of 100 even number
 let x=0
 let sum=0
 while(x<100){
    if(x%2!=0){
      sum=sum+x  
    }
    x++
 }
 console.log(sum)


 //Do While
 let y=5
 do{
    console.log(`Running ${y}`)
    y--
 }while(y>0)


 //For Loop 
 //Print table of 2
 for(let z=1;z<=10;z++){
    let pro=2*z
    console.log(`2 x ${z}=${pro}`)
 }