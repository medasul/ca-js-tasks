console.group(' Classes ');
{ 
    console.log('1. Sukurti klasę Automobilis');
    //- sukurti konstruktorių, su 3 argumentais:
   // - marke, modelis, kaina
 
   class Car {
  brand;
  price;
  model;
    constructor(brand, price, model) {
     
       this.brand = brand;
       this.price = price;
      this.model = model;
   
    }
    priceLower(a)
    {this.price -= a}
}

console.log('--------------------------');
console.log('2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:');

   const car1 = new Car ('toyota', 2000, 'Prius');
   const car2 = new Car ('Volkswagen', 600 , 'Golf');
   const car3 = new Car ('Bmw' ,10000, 'X5');

   console.log('--------------------------');
console.log('3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai:');

console.log(car1, car2, car3);

console.log('--------------------------');
console.log('4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):');

console.log('----------------Model:');
//modeliai:
 console.log(car1.model);
 console.log(car2.model);
 console.log(car3.model);

 console.log('-------------------Brand:');
//markes:
 console.log(car1.brand);
 console.log(car2.brand);
 console.log(car3.brand);

console.log('-------------------Price:');
//kainos:
 console.log(car1.price);
 console.log(car2.price);
 console.log(car3.price);


console.log('--------------------------');
console.log('5. Padidinkite Automobilis objektų kainas šimtu.');


car1.price = car1.price + 100;
car2.price = car2.price + 100;
car3.price = car3.price + 100;

console.log('---------------New Price:');
//kainos:
 console.log(car1.price);
 console.log(car2.price);
 console.log(car3.price);

 console.log('--------------------------');
console.log('5. Sumažinkite 2 Automobilio kaina 200e.');


car2.priceLower(200);
console.log(car2);

}
console.groupEnd();

