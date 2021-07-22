class Car{
   constructor(Brand, Date){
      this._brand = Brand;
      this._date = Date;
   }
   get brand(){
      return this._brand
   }
   set brand(x){  
      this._brand = x.toUpperCase()
   }
}

let mycar = new Car("Volvo",1993)

console.log(mycar)

mycar.brand = "hyundai"

console.log(mycar)