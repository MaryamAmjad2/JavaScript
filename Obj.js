const Person={
    name:'Maryam',
    age:20,
    edu:'Undergraduate of Bachelors',
    country:'Pakistan',
    address:{street:'2 main st',
city:'Attock'}
}
console.log(Person.name)
console.log(Person.address.city)


//Pulling Stuff out from Obj
const {name,age}=Person

     //OR
const myname=Person.name
console.log(myname)


//Directly add more property to Object
Person.email='maryam@gmail.com'
console.log(Person)
