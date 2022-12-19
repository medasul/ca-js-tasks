console.group('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
class Player {
    name;
    age;
    height;
    weight;
    constructor (name, age, height, weight){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    }
    
    get Age() {
		return `${this.name} is age ${this.age}`;}
	get Height() {
		return `${this.name} is ${this.height}cm`;}
	get Weight() {
		return `${this.name} weighs ${this.weight}kg`;}
      }

  p1 = new Player("David Jones", 25, 175, 75);
  console.log(p1.Age) //➞ "David Jones is age 25"
  console.log(p1.Height) //➞ "David Jones is 175cm"
  console.log(p1.Weight) //➞ "David Jones weighs 75kg"

}
console.groupEnd();

console.group('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {
   
    constructor (x, y){
      this.x = x;
      this.y = y;
      }

    add(x, y) {
      return x+y;
    };
    subtract(x, y) {
      return x-y;
    };
    multiply(x, y) {
      return x*y;
    };
    divide(x,y) {
      return x/y;
    };
  }

  let calculator = new Calculator()
 console.log( calculator.add(10, 5))      //  ➞ 15
 console.log(calculator.subtract(10, 5)) // ➞ 5
 console.log(calculator.multiply(10, 5)) //➞ 50
 console.log(calculator.divide(10, 5))   //➞ 2
}
console.groupEnd();

console.group('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor (firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      }

    get nameSurname(){
      return `${this.firstname} ${this.lastname}`;  
    }
    get email(){
      return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`  
    }
  }
  
  let emp1 =new Employee("John", "Smith")
  console.log(emp1.nameSurname) //➞ "John Smith"
  
  let emp2 =new Employee("Mary",  "Sue")
  console.log(emp2.email) //➞ "mary.sue@company.com"
  
 let emp3 =new Employee("Antony", "Walker")
  console.log(emp3.firstname) //➞ "Antony"

}
console.groupEnd();

console.group('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
      
    compare(person) {
      if (this.age > person.age) 
              {return `${person.name} is younger than me.`;}
      else if (this.age < person.age) 
              {return `${person.name} is older than me.`;}
      else return `${person.name} is the same age as me.`;
    }
  }

  let p1 = new Person("Samuel", 24)
  let p2 = new Person("Joel", 36)
  let p3 = new Person("Lily", 24)

  console.log(p1.compare(p2)) //➞ "Joel is older than me."
  console.log(p2.compare(p1)) // ➞ "Samuel is younger than me."
  console.log(p1.compare(p3)) //➞ "Lily is the same age as me."
}
console.groupEnd();

console.group('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{

  class Circle{
    constructor (r){
      this.r = r;
    }
 
    get area(){
      return Math.PI * (this.r ** 2);
    }

    get perimeter(){
      return 2 * Math.PI * this.r;
    }
  } 

  let circy = new Circle(11)
  console.log(circy.area)   // Should return 380.132711084365

  let circy1 = new Circle(4.44)
 console.log(circy1.perimeter) // Should return 27.897342763877365
}
console.groupEnd();

console.group('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {

    constructor(fname,lname){

      this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
      this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
    }

    get fullname() {
      return `${this.fname} ${this.lname}`;
    }
    get initials() {
      return `${this.fname[0]}.${this.lname[0]}`;
    }
  }

  a1 = new Name("john", "SMITH");
  console.log(a1.fname) // ➞ "John"
  console.log(a1.lname) // ➞ "Smith"
 console.log( a1.fullname) // ➞ "John Smith"
  console.log(a1.initials) // ➞ "J.S"
}
console.groupEnd();

console.group('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{

  function sweetestIcecream(arr) {
    let ans=0;
    const flav = {
      Plain: 0,
      Vanilla: 5,
      ChocolateChip: 5,
      Strawberry: 10,
      Chocolate: 10};
     
      for (let i = 0; i<arr.length ; i++){
        if ((flav[arr[i].flavor]+arr[i].sprinkles) > ans) 
           {ans = flav[arr[i].flavor]+arr[i].sprinkles;}
      }
      return ans;
    }
  

  class IceCream {
    constructor(flavor, sprinkles) {
      this.flavor = flavor
      this.sprinkles = sprinkles
   }
  }

let ice1 = new IceCream("Chocolate", 13)         // value of 23
let ice2 = new IceCream("Vanilla", 0)           // value of 5
let ice3 = new IceCream("Strawberry", 7)        // value of 17
let ice4 = new IceCream("Plain", 18)             // value of 18
let ice5 = new IceCream("ChocolateChip", 3)      // value of 8

console.log( sweetestIcecream([ice1, ice2, ice3, ice4, ice5]))  // ➞ 23
console.log( sweetestIcecream([ice3, ice1]))  // ➞ 23
console.log( sweetestIcecream([ice3, ice5]))  // ➞ 17
}
console.groupEnd();

console.group('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  class OnesThreesNines{
    constructor (number){
      this.number = number;
    }
 
    get ones(){
      return (  (this.number- this.number% 1) /1 );    }

    get threes(){
      return (  (this.number- this.number% 3) /3 );    }

    get nines(){
      return (  (this.number- this.number% 9) /9 );    }
  } 

  let n1 = new OnesThreesNines(5)
console.log(n1.nines) //➞ 0
console.log(n1.ones) //➞ 5
console.log(n1.threes) //➞ 1
}
console.groupEnd();

console.group('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  class User {
    static userCount = 0;

     constructor(username){
      this.username = username;
      User.userCount++;
    }
  }
  
  u1 = new User("johnsmith10");
console.log( User.userCount ); // ➞ 1

u2 = new User("marysue1989");
console.log( User.userCount ); // ➞ 2

u3 = new User("milan_rodrick");
console.log( User.userCount ); // ➞ 3

console.log( u1.username ); //➞ "johnsmith10"
console.log( u2.username ); //➞ "marysue1989"
console.log( u3.username ); //➞ "milan_rodrick"
}
console.groupEnd();

console.group('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  class Book {
title;
 author;
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    get title() {
      return `Title: ${this.title}`;
    }
    get author() {
      return `Author: ${this.author}`;
    }
  }
  
  let PP = new Book("Pride and Prejudice", "Jane Austen");
  let H = new Book("Hamlet", "William Shakespeare");
  let WP = new Book("War and Peace", "Leo Tolstoy");

console.log(PP.title)
console.log(H.author," - ",  H.title)
console.log(WP.author)


}

console.groupEnd();