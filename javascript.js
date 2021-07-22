class Car{
   constructor(Brand, Date){
      this.brand = Brand;
      this.Date = Date;
   }
}

let mycar = new Car("Volvo",1993)

console.log(mycar)

mycar.brand = "Hyundai"

console.log(mycar)