// let x= {
//     firstname:"John",
//     lastName:"Doe",
//     age:14,
//     id:1233,
//     fullname: function(){
//         return this.firstname + " " + this.lastName
//     }
// }



// console.log(`Welcome ${x.firstname} ${x.lastName}`)
// let car = ["BMW", "Mercedes", "Toyota"]
// for(let i=0; i<car.length; i++){
//     console.log(car[i])
// }

// let person ={
//     firstname: "Rick",
//     lastname: "Vazquez",
//     age:27
// }

// let x = 0
// while(x<5){
//     console.log("ME")
//     x++
// } 


// disisafunc=()=>{
//     console.log("Hello")
// }

// disisafunc()

// class Peerson{
//     constructor(firstname,lastname,age){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }
// }

// let Peerson1= new Peerson("Carl", "Saunders", 14)

// console.log(Peerson1)

// let x = Peerson1

// x.age = 3
// console.log(x)
// console.log(Peerson1)

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname
//     }
//     get fullname(){
//         let _fullname= `${this.firstname} ${this.lastname}`
//         return _fullname
//     }
// }

// let x = new Person("Laura", "Cataldi")

// console.log(x.fullname)

// let x = [1,2,3,4,"string1","string2","string3"]

// console.log(typeof(x[5]))
// let x = -15

// let xstringsplit= x.toString().split("")
// xstringsplit.length > 0 ? console.log(xstringsplit): console.log("Yikes");


// let x =163888
// function myfunc(a,b){
//     return a+b
// }

// while (x>9){
// let y = x.toString().split("").map(x => parseInt(x)).reduce(myfunc)
// x=y
// }

// console.log(typeof(x))
let v = [13,2,5,1]
let x = [121,3,25,1]

let container = []
let y = x.map(a=> Math.round((Math.sqrt(a))));

y.forEach( ynumber => v.includes(ynumber)? container.push(1): container.push(0)) 

container.includes(0)? false : true

