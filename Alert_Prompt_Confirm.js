/**Alert   : Shows an alert pop up Message 
   Prompt  : Shows message,input text,
   Confirm : Shows a message to confirm with OK
             Like when we delete something
      
             

   Note : User must interact with these function to further continue
   if users hits cancel that NULL will be stored
 */
alert("Welcome to our Page")
let age=prompt("Enter your age ")
if(age!=null){
document.write('<h2> Your Age is :</h2>')
document.write(age)
}
else{
    alert("Kindly Enter Age")
}


//By default values for propmt 
name=prompt("Enter Your Name","Maryam")
document.write('<h2> Your Name is :</h2>')
document.write(name)



//Confirm
document.write('<h2> Confirm Functiom</h2>')
let resp=confirm("Are you sure You wanna Delete Age and Name")
if(resp==true){
    age=null
    name=null
}
else{
    document.write(this.name)
}
document.write('<h4> Your Name is :</h4>')
document.write(name)
document.write('<h4> Your Age is :</h4>')
document.write(age)
