console.groupCollapsed('-------------- functions-tasks-2- ----------------------');
    {

// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
    function mulArrBy2(arr) {
        let arr2 = [];
     for (let i = 0; i < arr.length; i++) {
           arr2[i] = arr[i] * 2;
       ///  return arr2 = arr.map(x => x*2);   
        }; 
        return arr2;
    }
        console.log({
            numbers,
            result: mulArrBy2(numbers)
        });
        console.log(numbers);
    }
    console.log('---');
    console.groupEnd();
    console.log();

    console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
    console.log('---');
    {
        function powerArrBy2(arr) {
            let arr2 = [];
            for (let i = 0; i < arr.length; i++) {
                arr2[i] = arr[i] ** 2;
            }
            return arr2;
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
            let arr2 = [];
            for (let i = 0; i < arr.length; i++) {
                arr2[i] = arr[i] * i;
            }
            return arr2;
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
            let arr2 = [];
           let j=-1;
            for (let i = 0; i < arr.length; i++) {
                j++;
                if (arr[i] > 0) { arr2[j] = arr[i]; }
                else j--;
            }
            return arr2;
        }
        console.log({
            numbers,
            result: filterPositives(numbers)
        });
    }
    console.log('---');
    console.groupEnd();
    console.log();

   
    console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
    console.log('---');
    {
        function filterNegatives(arr) {
            let arr2 = [];
            let j=-1;
            for (let i = 0; i < arr.length; i++) {
                j++;
                if (arr[i] < 0) { arr2[j] = arr[i]; }
                else j--;
            }
            return arr2;
        }
         console.log({
           numbers,
           result: filterNegatives(numbers)
         });
    }
    console.log('---');
    console.groupEnd();
    console.log();

    console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
    console.log('---');
    {
        function filterEquals(arr) {
            let arr2 = [];
            let j=-1;
            for (let i = 0; i < arr.length; i++) {
                j++;
                if (arr[i] % 2 === 0) { arr2[j] = arr[i]; }
                else j--;
            }
            return arr2;
        }
         console.log({
          numbers,
           result: filterEquals(numbers)
         });
    }
    console.log('---');
    console.groupEnd();
    console.log();

    console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
    console.log('---');
    {
        function filterOdds(arr) {
            let arr2 = [];
            let j=-1;
            for (let i = 0; i < arr.length; i++) {
                j++;
                if (arr[i] % 2 != 0) { arr2[j] = arr[i]; }
                else j--;
            }
            return arr2;
            }
        
         console.log({
           numbers,
           result: filterOdds(numbers)
         });
    }
    console.log('---');
    console.groupEnd();
    console.log();

    console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
    {
        function arrAbsoluteValues(arr) {
            let arr2 = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < 0) { arr2[i] = arr[i] * -1; }
                else if (arr[i] >= 0) { arr2[i] = arr[i]; };
            }
            return arr2;
        }

        console.log('---');
        console.log({
            numbers,
            result: arrAbsoluteValues(numbers)
        });
        console.log('---');
    }
    console.groupEnd();
    console.log();

    console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
    console.log('---');
    {
        function powArrElementsByIndex(arr) {
            let arr2 = [];
            for (let i = 0; i < arr.length; i++) {
                arr2[i] = arr[i] ** i;
            }
            return arr2;
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
            let arr2 = [];
            let j=-1;
            for (let i = 0; i < arr.length; i++) {
                j++;
                if (arr[i] % 1 === 0) { arr2[j] = arr[i]; }
                else j--;
            }
            return arr2;
        }
         console.log({
           numbers,
           result: filterNaturals(numbers)
         });
    }
    console.log('---');
    console.groupEnd();
    console.log();

    console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
    console.log('---');
    {
        function absArrElements(arr) {
            let arr2 = [];
            for (let i = 0; i < arr.length; i++) {
                arr2[i] = Math.round(arr[i]);
            }
            return arr2;
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
            let arr2 = [];
            let j=-1;
            for (let i = 0; i < arr.length; i+=2) {
                j++;
                arr2[j] = arr[i];
            }
            return arr2;
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
            let arr2 = [];
            let j=-1;
            for (let i = 0; i < arr.length; i+=5) {
                j++;
                arr2[j] = arr[i];
            }
            return arr2;
        }
         console.log({
           numbers,
           result: filterEveryFifth(numbers)
         });
    }
    console.log('---');
    console.groupEnd();


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
}
console.groupEnd();
   