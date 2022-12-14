// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
    function mulArrBy2(arr) {
         return arr.map(x => x*2);   
    }
        console.log({
            numbers,
            result: mulArrBy2(numbers)
        });
    }
    console.log('---');
    console.groupEnd();
    console.log();

    console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
    console.log('---');
    {
        function powerArrBy2(arr) {
            return arr.map(x => x**2);
        }
        console.log({
            numbers,
            result: powerArrBy2(numbers)
        });
    }
    console.log('---');
    console.groupEnd();
    console.log();

    console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
    console.log('---');
    {
        function mulArrElementsByIndex(arr) {
            
            return  arr.map((x, index) => x*index);
        }
        console.log({
            numbers,
            result: mulArrElementsByIndex(numbers)
        });
    }
    console.log('---');
    console.groupEnd();
    console.log();

    console.group('4. Atrinkti tiktai teigimų elementų masyvą');
    console.log('---');
    {
        function filterPositives(arr) {
           
           return arr > 0;

        }
        const filterPositive = numbers.filter(filterPositives);
        console.log({
            numbers,
            result: filterPositive
        });
    }
    console.log('---');
    console.groupEnd();
    console.log();

   
    console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
    console.log('---');
    {
        function filterNegatives(arr) {
           
            return arr < 0;
 
         }
         const filterNegative = numbers.filter(filterNegatives);
         console.log({
             numbers,
             result: filterNegative
         });
         
    }
    console.log('---');
    console.groupEnd();
    console.log();

    console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
    console.log('---');
    {
      
            function filterEquals(arr) {
           
                return arr % 2 === 0;
     
             }
             const filterEqual = numbers.filter(filterEquals);
             console.log({
                 numbers,
                 result: filterEqual
             });
    }
    console.log('---');
    console.groupEnd();
    console.log();

    console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
    console.log('---');
    {
            function filterOdds(arr) {
           
                return arr % 2 !== 0;
     
             }
             const filterOdd = numbers.filter(filterOdds);
             console.log({
                 numbers,
                 result: filterOdd
             });
    }
    console.log('---');
    console.groupEnd();
    console.log();

    console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
    {
        function arrAbsoluteValues(arr) {
            if (arr < 0) { return arr* -1; }
            else if (arr >= 0) { return arr; };
        }
 numbers.map(arrAbsoluteValues)
        console.log('---');
        console.log({
            numbers,
            result: numbers.map(arrAbsoluteValues)
        });
        console.log('---');
    }
    console.groupEnd();
    console.log();

    console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
    console.log('---');
    {
            function powArrElementsByIndex(arr) {
            
                return  arr.map((x, index) => x**index);
            }
            console.log({
                numbers,
                result: powArrElementsByIndex(numbers)
            });
    
    }
    console.log('---');
    console.groupEnd();
    console.log();

    console.group('10. Atrinkti tik natūralių skaičių masyvą');
    console.log('---');
    {
            function filterNaturals(arr) {
           
                return arr % 1 === 0;
     
             }
             const filterOdd = numbers.filter(filterNaturals);
             console.log({
                 numbers,
                 result: filterOdd
             });
       
    }
    console.log('---');
    console.groupEnd();
    console.log();

    console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
    console.log('---');
    {
            function absArrElements(arr) {
                return arr.map(x => Math.round(x));   
           }
               console.log({
                   numbers,
                   result: absArrElements(numbers)
               });
    }
    console.log('---');
    console.groupEnd()

    console.group('12. Atrinkti kas antrą elementą');
    console.log('---');
    {
            function filterEverySecond(arr) {
           
                    return arr.filter((x, i) => i % 2 === 0);
         
                 }
               
                 console.log({
                     numbers,
                     result: filterEverySecond(numbers)
                 });

    }
    console.log('---');
    console.groupEnd();

    console.group('13. Atrinkti kas penktą elementą');
    console.log('---');
    {
        function filterEveryFifth(arr) {

                return arr.filter((x, i) => i % 5 === 0);
     
             }
           
             console.log({
                 numbers,
                 result: filterEveryFifth(numbers)
             });
    }
    console.log('---');
    console.groupEnd();

/*
    console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
    console.log('---');
    {
        function printArr(arr) {
            let string = '';
            let s1 = '[';
            let s2 = '] => ';

            for (let i = 0; i<arr.length; i++)
                 {console.log(string=s1 + i + s2 + arr[i]); }
                
        }
        printArr(numbers);
    }
    console.log('---');
    console.groupEnd();

    console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
    console.log('---');
    {
        function sumArr(arr) {
            let sum=0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        }

         console.log({
           numbers,
           result: sumArr(numbers)
         });
    }
    console.log('---');
    console.groupEnd()

    console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
    console.log('---');
    {
        function avgArr(arr) {
            let sum=0;
            let avg;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            avg = sum/arr.length;
            return avg;
        }

         console.log({
           numbers,
          result: avgArr(numbers)
         });
    }
    console.log('---');
    console.groupEnd()

    console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
    console.log('---');
    {
        function arrMax(arr) {
            let numberMax=arr[0];
            for (let i = 1; i < arr.length; i++) {
                if(arr[i]>numberMax) numberMax = arr[i];
            }
            return numberMax;
        }

         console.log({
          numbers,
           result: arrMax(numbers)
         });
    }
    console.log('---');
    console.groupEnd()

    console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
    console.log('---');
    {
        function arrMin(arr) {
            let numberMin=arr[0];
            for (let i = 1; i < arr.length; i++) {
                if(arr[i]<numberMin) numberMin = arr[i];
            }
            return numberMin;
        }

         console.log({
           numbers,
           result: arrMin(numbers)
         });
    }
    console.log('---');
    console.groupEnd();
   */