/*
  Užduotis reikia atlikti 2 kartus
    * su while ciklu
    * su for ciklu
*/

const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

console.groupCollapsed('WHILE');
{
  console.groupCollapsed('1. Sukurkite ciklą kuris 5 kartus atspausdintų "Sveikas Pasauli"');
  {
    let i = 0; 
    while (i < 10) {
      console.log('i:', i);
      i++; }
  }
  console.groupEnd();
  console.groupCollapsed('2. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <');
  {
    let i = 1; 
    while (i <6 ) {
            console.log(i);
      i++; }
  }
  console.groupEnd();
  console.groupCollapsed('3. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <');
  {
    let i = 3; 
    while (i <8 ) {
            console.log(i);
      i++; }
  }
  console.groupEnd();
  console.groupCollapsed('4. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <');
  {
    let i = -3; 
    while (i <3 ) {
            console.log(i);
      i++; }
  }
  console.groupEnd();
  console.groupCollapsed('5. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <=');
  {

  }
  console.groupEnd();
  console.groupCollapsed('6. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <=');
  {

  }
  console.groupEnd();
  console.groupCollapsed('7. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <=');
  {

  }
  console.groupEnd();
  console.groupCollapsed('8. Sukurkite ciklą kuris atspausdintų nuo 2 iki -3. Naudojant >');
  {

  }
  console.groupEnd();
  console.groupCollapsed('9. Sukurkite ciklą kuris atspausdintų nuo -5 iki -10. Naudojant >');
  {

  }
  console.groupEnd();
  console.groupCollapsed('10. Sukurkite ciklą kuris atspausdintų nuo 2 iki 1. Naudojant >');
  {

  }
  console.groupEnd();
  console.groupCollapsed('11. Sukurkite ciklą kuris atspausdintų nuo 2 iki -3. Naudojant >=');
  {

  }
  console.groupEnd();
  console.groupCollapsed('12. Sukurkite ciklą kuris atspausdintų nuo -5 iki -10. Naudojant >=');
  {

  }
  console.groupEnd();
  console.groupCollapsed('13. Sukurkite ciklą kuris atspausdintų nuo 2 iki 1. Naudojant >=');
  {

  }
  console.groupEnd();
  console.groupCollapsed('14. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Naudojant žingsnį +2');
  {

  }
  console.groupEnd();
  console.groupCollapsed('15. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Tikrinant ar kintamasis yra lyginis. Naudokite liekanos operatorių');
  {
    let i = 2; 
    while (i <=10 ) {
        if (i %2 == 0) {
            console.log(i);}
      i++; }

  }
  console.groupEnd();
  console.groupCollapsed('16. Sukurkite ciklą kuris atspausdintų 4, 1, -2, -5, -8. Naudojant žingsnį -3');
  {

  }
  console.groupEnd();
  console.groupCollapsed('17. Sukurkite ciklą kuris atspausdintų 3, 0, -3, -6, -9. Tikrinant ar kintamojo liekana dalinant iš 3 yra lygi 0?');
  {

  }
  console.groupEnd();
  console.groupCollapsed('18. Sukurkite ciklą kuris atspausdintų 2, 0, -2, -4, -6. Naudojant kintamojo liekaną');
  {

  }
  console.groupEnd();
  console.groupCollapsed('19. Sukurkite ciklą kuris atspausdintų 2, -1, -4, -7, -10. Naudojant kintamojo liekaną');
  {  let i=2;
    while(i> -11)
    { let j=i+1;
      if(j%3 == 0)
      {console.log(i);
           };
           i--;
       
         }
 
  }
  console.groupEnd();
  console.groupCollapsed('20. Atspausdinkite <numbers> masyvo elementus nuo pirmo iki paskutinio');
  {
    let i = 2;
    while (i >= -10) {
    if (i % 1 == 0) {
      console.log(i); }
    i -= 3;
    }
  }
  console.groupEnd();
  console.groupCollapsed('21. Atspausdinkite <numbers> masyvo elementus nuo 3 iki paskutinio');
  {
    let i = 2;
    while ( i< numbers.length) {
      console.log(numbers[i]); 
    i ++;
    }
  }
  console.groupEnd();
  console.groupCollapsed('22. Atspausdinkite <numbers> masyvo elementus nuo 2 iki prieš paskutinio');
  {
    const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    let i = 1;
    while ( i< numbers.length-1) {
      console.log(numbers[i]); 
    i ++;
    }
  }
  console.groupEnd();
  console.groupCollapsed('23. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki pirmo');
  {
    const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    let i = numbers.length-1;
    while ( i>=0) {
      console.log(numbers[i]); 
    i --;
    }
  }
  console.groupEnd();
  console.groupCollapsed('24. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki antro');
  {

  }
  console.groupEnd();
  console.groupCollapsed('25. Atspausdinkite <numbers> masyvo elementus nuo prieš paskutinio iki trečio');
  {
    const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    let i = numbers.length-2;
    while ( i>=2) {
      console.log(numbers[i]); 
    i--;
    }
  }
  console.groupEnd();
  console.groupCollapsed('26. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę');
  {
    const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    let i = 0;
    while ( i<= numbers.length-1) {
      console.log(numbers[i]); 
    i = i+2;
    }

  }
  console.groupEnd();
  console.groupCollapsed('27. Atspausdinkite <numbers> masyvo kas trečią elementą iš kairės į dešinę');
  {
    const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    let i = 0;
    while ( i<= numbers.length-1) {
      console.log(numbers[i]); 
    i = i+3;
    }
  }
  console.groupEnd();
  console.groupCollapsed('28. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę, pradedant trečiu');
  {
    const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    let i = 2;
    while ( i<= numbers.length-1) {
      console.log(numbers[i]); 
    i = i+2;
    }
  }
  console.groupEnd();
  console.groupCollapsed('29. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės');
  {
    const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    let i = numbers.length-1;
    while ( i>= 0) {
      console.log(numbers[i]); 
    i = i-2;
    }
  }
  console.groupEnd();
  console.groupCollapsed('30. Atspausdinkite <numbers> masyvo kas trečią elementą iš dešinės');
  {
    const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    let i = numbers.length-1;
    while ( i>= 0) {
      console.log(numbers[i]); 
    i = i-3;
    }
  }
  console.groupEnd();
  console.groupCollapsed('31. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės, pradedant prieš paskutiniu');
  { const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    let i=numbers.length-2;
    while ( i>= 0) {
      console.log(numbers[i]); 
    i = i-2;
    }
  }
  console.groupEnd();
}
console.groupEnd();
