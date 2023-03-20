//Just print first 5 multiple of 2
for(let z=1;z<=10;z++){
    if(z==6){
        break
    }
    let pro=2*z
    document.write(`2 x ${z}=${pro}`)
    document.write('<br>')
 }


 //Print 1-10 counting and skip 2 4 6
 document.write('<h1>Example of Continue</h1>')
 document.write('<br>')
 for (let i =1;i<=10;i++){
    if(i==2 || i==4 ||i==6){
        continue
    }
    document.write(i)
    document.write('<br>')
 }



 //Nested Loop
 for (let i=0;i<10;i++){
    for (let j=i;j<10;j++){
        document.write("*")
        
    }
    document.write('<br>')
 }
 