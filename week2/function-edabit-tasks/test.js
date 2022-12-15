
// js test file

console.group('2. (test)  https://edabit.com/challenge/h7LTMAFeNz79rXB2Y');
{
    function findLargestNums(arr) {
        let a = [];
        for (let i = 0; i < arr.length; i++) {
            let maxValue = arr[i][0];
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] > maxValue) { maxValue = arr[i][j]; }
            }
            a[i] = maxValue;
        }

        console.log(a);
    }

    findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);    // ➞ [7, 90, 2]

    findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]); //➞ [-34, -2, 7]

    findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]); // ➞ [0.7634, 9.32, 9]

}