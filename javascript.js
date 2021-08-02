// class Car{
//    constructor(Brand, Date){
//       this._brand = Brand;
//       this._date = Date;
//    }
//    get brand(){
//       return this._brand
//    }
//    set brand(x){  
//       this._brand = x.toUpperCase()
//    }
// }

// let mycar = new Car("Volvo",1993)

// console.log(mycar)

// mycar.brand = "hyundai"

// console.log(mycar)


// setTimeout(myFunc,5000);
// console.log("Hello")
// function myFunc(){
//    console.log("Hi")
// }








//  let button = document.getElementById("mybttn")
//    button.addEventListener("click", function(){
//       console.log("Hello")
//    })
//  console.log(button)
// let string = ["w","O","R","O","o", "R"]
// console.log(stringconverter("PoppppPPY"))

// function stringconverter(string){
// let stringarr = string.split("")
// let newstring = []

// for (let i in stringarr){stringarr[i]=== stringarr[i].toUpperCase()? newstring.push(" ", stringarr[i]):newstring.push(stringarr[i])}
// return newstring.join("").trim()
// }

// PROMISES

// let promize = new Promise((resolve, reject)=>{
//     let a = 1+2
//     if(a == 2){
//         resolve('succcess')
//     } else{
//         reject('Failed')
//     }
// })
// promize.then((message)=>{
//     console.log(`this is the resolve `+ message)
// }).catch((message)=>{
//     console.log(`This is the catch ` +message)
// })

// console.log(promize)


const userLeft = false;
const userWatchingCatMeme= true;

function watchTutorialCallback(callback, errorCallback){
    if (userLeft){
        errorCallback({
            name: 'User Left',
            message:`:(`
        })
    } else if(userWatchingCatMeme){
        errorCallback({
            name:"User Watching Cat Meme",
            message:"WebDevSimply <Cat"
        })
    } else{
        callback("Thumbs Up")
    }
}

watchTutorialCallback((message)=>{console.log('success: '+ message)},(error)=> {
    console.log(error.name + ' ' +error.message)
})






// class Person {
//     constructor(name, age){
//         this._name= name,
//         this._age = age
//     }
//     fullname(){
//        console.log( this._name)
//     }
// }

// let student1 = new Person("John", 3)

// student1.fullname()
