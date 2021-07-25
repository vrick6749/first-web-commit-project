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


function myFunc2(value){
   console.log(value)
}
function myFunc1(a,b, callback){
   callback(a+b)
}
myFunc1(1,4,myFunc2)