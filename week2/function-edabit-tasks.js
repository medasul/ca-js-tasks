console.groupCollapsed('----------function-edabit-tasks-----------');
{  

console.log("\n %c********** EASY LEVEL************\n", "color:red")

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

console.log("\n %c********** MEDIUM LEVEL************\n", "color:red")

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

console.group('8. https://edabit.com/challenge/Dq8kbbsLYyG9are5Z');
{ console.log('\n-----Total Volume of All Boxes------')

function totalVolume(...boxes) {
  let sum=0;
	for (let i=0; i<boxes.length; i++) {
		sum+=boxes[i][0] * boxes[i][1] * boxes[i][2];
	}
	console.log(sum);
}
totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) //➞ 63
totalVolume([2, 2, 2], [2, 1, 1]) //➞ 10
totalVolume([1, 1, 1]) //➞ 1
}
console.groupEnd();

console.group('9. https://edabit.com/challenge/PWqkt9HiLcJSr6QEY');
{ console.log('\n-----Sum of Number Elements in an Array------')
   
function numbersSum(arr) {
let sum=0;
	for(let i=0; i<=arr.length; i++){
		if(typeof arr[i] === "number")
			sum+=arr[i];
	}
console.log(sum);	}

numbersSum([1, 2, "13", "4", "645"]) //➞ 3
numbersSum([true, false, "123", "75"]) //➞ 0
numbersSum([1, 2, 3, 4, 5, true]) //➞ 15

}
console.groupEnd();

console.group('10. https://edabit.com/challenge/RiyXDZNZAD4fj9xfJ');
{ console.log('\n-----Clone an Array------')
    
function clone(array) {
  let copy = array.slice();
  array.push(copy);
  console.log( array);
}

clone([1, 1])// ➞ [1, 1, [1, 1]]
clone([1, 2, 3])// ➞ [1, 2, 3, [1, 2, 3]]
clone(["x", "y"]) //➞ ["x", "y", ["x", "y"]]

}
console.groupEnd();

console.group('11. https://edabit.com/challenge/3Efavz8YmSBia4p8s ');
{ console.log('\n-----Index Multiplier------')
    
function indexMultiplier(arr) {
	let sum=0;
	for(let i=0; i<arr.length; i++){
		sum+=arr[i]*i;
	}
	console.log(sum);
}

indexMultiplier([1, 2, 3, 4, 5]) //➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)
indexMultiplier([-3, 0, 8, -6]) //➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)
}
console.groupEnd();
///
console.group('12. https://edabit.com/challenge/uXf7RQ5am84tup7mQ ');
{ console.log('\n-----Rock, Paper, Scissors------')
    
function rps(p1, p2) {
	if(p1===p2) {console.log( "It's a draw")}
	else if(p1==="Scissors" && p2==="Paper") {console.log( "The winner is p1")}
	else if(p1==="Paper" && p2==="Rock") {console.log( "The winner is p1")}
  else if(p1==="Rock" && p2==="Scissors") {console.log( "The winner is p1")}
	else {console.log( "The winner is p2")}
}


rps("Rock", "Paper") //➞ "The winner is p2"
rps("Scissors", "Paper")// ➞ "The winner is p1"
rps("Paper", "Paper") //➞ "It's a draw"
}
console.groupEnd();

console.group('12. https://edabit.com/challenge/xXJLZry3vYd4erPct');
{ console.log('\n-----Positive Count / Negative Sum------')
    
function countPosSumNeg(arr) {
	if (arr.length == 0) 
      {return console.log([]); };
	let count = 0;
  let sum= 0
	for (let i=0; i<arr.length; i++) {
		if (arr[i] > 0) {count++;}
     else sum += arr[i];
	}
	console.log([count,sum]);
}

countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34])// ➞ [7, -252]
countPosSumNeg([91, -4, 80, -73, -28])// ➞ [2, -105]
countPosSumNeg([])// ➞ []
}
console.groupEnd();

console.group('13. https://edabit.com/challenge/9fpBX9AFizhDeFk8R');
{ console.log('\n-----A Long Long Time------')
    
function longestTime(h, m, s) {
	let hours = h*3600;
	let minutes = m*60;
	let seconds = s

	if(hours>minutes && hours > seconds){
		console.log(h)}
	else if(minutes>hours && minutes>seconds){
    console.log(m)}
	else { console.log(s)}
	
}

longestTime(1, 59, 3598) //➞ 1
longestTime(2, 300, 15000)// ➞ 300
longestTime(15, 955, 59400) //➞ 59400
}
console.groupEnd();

console.group('14. https://edabit.com/challenge/HzxTqSHLmRC3zEfXb');
{ console.log('\n-----Neutralisation------')
    
function neutralise(a, b) {
	stringAB = ''
	for (i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {stringAB += '0'} 
    else {stringAB += a[i]}
	}
	 console.log(stringAB)
}

neutralise("--++--", "++--++") //➞ "000000"
neutralise("-+-+-+", "-+-+-+") //➞ "-+-+-+"
neutralise("-++-", "-+-+") //➞ "-+00"
}
console.groupEnd();

console.log("\n %c********** HARD LEVEL************\n", "color:red")

console.group('15. https://edabit.com/challenge/jtAvQyyDpFA2EaCcj ');
{ console.log('\n-----Finding Common Elements------')
    
function commonElements(arr1,arr2) {
  let arr=[];
  let a=0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (a>0) {
        if (arr1[i]===arr2[j]&&arr[a-1]!==arr1[i]) {
          arr[a]=arr1[i];
          a++;
        } 
      }
      else{ 
        if (arr1[i]===arr2[j]) {
          arr[a]=arr1[i];
          a++;
        }
      }
      
    }
  }
  console.log(arr);
  
}

commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) //➞ [3]
commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) //➞ [1, 3, 4, 7]
commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) //➞ [1, 2, 4, 5]
commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) //➞ []
}
console.groupEnd();

console.group('16. https://edabit.com/challenge/eCPim4XcssdZdvs32  ');
{ console.log('\n----- Numbers in Strings------')
    
function numInStr(arr) {
	array=[];
	for (let i=0; i<arr.length; i++){
			for (let j=0; j<arr[i].length; j++){
					if(arr[i][j]>= '0' && arr[i][j] <= '9'){
							array.push(arr[i]);
							break;
					}	}}
	console.log(array);	
}


numInStr(["1a", "a", "2b", "b"])// ➞ ["1a", "2b"]
numInStr(["abc", "abc10"]) //➞ ["abc10"]
numInStr(["abc", "ab10c", "a10bc", "bcd"])// ➞ ["ab10c", "a10bc"]
numInStr(["this is a test", "test1"]) //➞ ["test1"]
}
console.groupEnd();

console.group('17. https://edabit.com/challenge/ixdXLyopP7c4aPXqx ');
{ console.log('\n-----Check If the Brick Fits through the Hole------')
    
function doesBrickFit(a,b,c, a1, b1) {
	if(a*b <= a1*b1 || b*c <= a1*b1 || b*a <= a1*b1 || a*c <= a1*b1)
   {console.log(true)}
   else console.log(false);
}


doesBrickFit(1, 1, 1, 1, 1) //➞ true
doesBrickFit(1, 2, 1, 1, 1) //➞ true
doesBrickFit(1, 2, 2, 1, 1) //➞ false
}
console.groupEnd();
}
console.groupEnd();