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

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  // ... code
}
console.groupEnd();