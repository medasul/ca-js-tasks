//easy 
console.group('1. https://edabit.com/challenge/XdAR3KohR5w7rjrFg');
{  console.log('\n-----Sum of Cubes------')
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
    console.log('\n-----Find the Largest Numbers in a Group of Arrays------')
    function findLargestNums(arr) {
        let a = [];
        for (let i = 0; i < arr.length; i++) {
            let maxValue = arr[i][0];
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] > maxValue) { maxValue = arr[i][j]; }
            }
         a[i]=maxValue;}

        console.log(a);
    }

    findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);    // ➞ [7, 90, 2]

    findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]); //➞ [-34, -2, 7]

    findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]); // ➞ [0.7634, 9.32, 9]

}

console.groupEnd();


console.group('3. https://edabit.com/challenge/Gz27eKkMcLarzE5Rj');
{ console.log('\n-----Sort an Array by String Length------')
    function sortByLength(arr) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length - i - 1; j++) {
            let a = arr[j]
            if (arr[j].length > arr[j + 1].length) {
              arr[j] = arr[j + 1];
              arr[j + 1] = a;
            }
          }
        }
        return arr;
      }

   console.log(sortByLength(["Google", "Apple", "Microsoft"]));
   console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));
   console.log(sortByLength(['Turing', 'Jung', 'Einstein']));
   console.log(sortByLength(['ddddd', 'cccc', 'bbb', 'a']));

}
console.groupEnd();

console.group('4. https://edabit.com/challenge/BFnsRqe8PFvEwcRNt ');
{ console.log('\n-----Pair Management------')
    
function makePair(a, b) {
	let arr = [a, b]
	return arr;
}

console.log(makePair(1, 2)) //➞ [1, 2]
console.log(makePair(51, 21)) //➞ [51, 21]
console.log(makePair(512124, 215)) //➞ [512124, 215]
}
console.groupEnd();

console.group('5. https://edabit.com/challenge/Q3n42rEWanZSTmsJm  ');
{ console.log('\n-----Find the Smallest and Biggest Numbers------')
    
function minMax(arr) {
    let min = max = arr[0];
    let arr1 = [];
    for(let i = 1;i<arr.length;i++) {
      if(arr[i]>max) max = arr[i];
      if(arr[i]<min) min = arr[i];
    }
    arr1[0]=min;
    arr1[1]=max;
    return arr1;
  }

console.log(minMax([1, 2, 3, 4, 5])) //➞ [1, 5]
console.log(minMax([2334454, 5])) // ➞ [5, 2334454]
console.log(minMax([1])) //➞ [1, 1]
}
console.groupEnd();

//medium

console.group('6. https://edabit.com/challenge/GLbuMfTtDWwDv2F73');
{ console.log('\n-----How Much is True?------')
    
function countTrue(arr) {
 // return arr.filter((el)=> el===true).length
 let num = 0;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === true){
			num++;
		}
	}
  return num;
}

console.log(countTrue([true, false, false, true, false])) // ➞ 2
console.log(countTrue([false, false, false, false])) // ➞ 0
console.log(countTrue([]) ) // ➞ 0
}
console.groupEnd();

console.group('7. https://edabit.com/challenge/3zAT89ZAxg4CAQqsZ ');
{ console.log('\n-----Find the Second Largest Number------')
    
function secondLargest(arr) {
  let largest = arr[0];
let secondLargest = arr[0];
for (let i = 1; i < arr.length; i++) {
  if ( i === 1 && arr[i]<arr[0]) (secondLargest = arr[i]);
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] >! largest) {
    secondLargest = arr[i];
  }
}
return secondLargest;

}

console.log(secondLargest([10, 40, 30, 20, 50])) // ➞ 40
console.log(secondLargest([25, 143, 89, 13, 105])) // ➞ 105
console.log(secondLargest([54, 23, 11, 17, 10]) ) //➞ 23
}
console.groupEnd();

console.group(' ');
{ console.log('\n-----Find the Smallest and Biggest Numbers------')
    

}
console.groupEnd();

/*

console.group(' ');
{ console.log('\n-----Find the Smallest and Biggest Numbers------')
    

}
console.groupEnd();
*/