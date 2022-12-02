//EASY LEVEL;


//EASY LEVEL;

console.group('1. https://edabit.com/challenge/XdAR3KohR5w7rjrFg');
{
    function sumOfCubes(arr) {
        let a = 0;
        for (i = 0; i < arr.length; i++) {
            a = a + (arr[i] ** 3);
        }
        console.log(a);
    }

    sumOfCubes([3, 4, 5]);
    sumOfCubes([2]);
    sumOfCubes([]);

}

console.groupEnd();


console.group('2. https://edabit.com/challenge/h7LTMAFeNz79rXB2Y');
{
    function findLargestNums(arr) {
        let a = [];
        for (let i = 0; i < arr.length; i++) {
            let maxValue = arr[i].[0];
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i].[j] > maxValue) { maxValue = arr[i].[j]; }
            }
         a[i]=maxValue;}

        console.log(a);
    }

    findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);    // ➞ [7, 90, 2]

    findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]); //➞ [-34, -2, 7]

    findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]); // ➞ [0.7634, 9.32, 9]

}

console.groupEnd();





//taisoma
console.group('3. https://edabit.com/challenge/Gz27eKkMcLarzE5Rj');
{
    function sortByLength(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].length < arr[i - 1].length) {
                let j = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = j;
                i--;
            }
        }
        console.log(arr);

    }

    sortByLength(["Google", "Apple", "Microsoft"]);
    sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]);
    sortByLength(['Turing', 'Jung', 'Einstein']);
    sortByLength(['ddddd', 'cccc', 'bbb', 'a']);


}

/*let string1='';
      let beggining="[ '";
      let ending="' ]"
      let betweenTwo="', '"
       for(let i=0; i<arr.length; i++)
       { if(i===0){string1+= beggining+arr[i]}
         else if(i===arr.length-1) {string1+= betweenTwo+arr[i]+ending}
         else string1+= betweenTwo + arr[i];
   }
       console.log(string1);*/
console.groupEnd();
