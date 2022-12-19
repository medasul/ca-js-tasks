console.groupCollapsed('---------object-tasks-------------------');
{
console.group('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    function sortDrinkByPrice(drink){
        return drink.sort((a,b)=> a.price - b.price)
       }

       drinks = [
        {name: "lemonade", price: 50},
        {name: "lime", price: 10}
      ];

      drinks1 =[
        { name: 'peach', price: 99 }, 
        { name: 'lemonade', price: 90 },
        { name: 'lime', price: 43 }
    ];

      console.log(sortDrinkByPrice(drinks));
      console.log(sortDrinkByPrice(drinks1));

}
console.groupEnd();

console.group('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function addName(obj, name, value) {
        obj[name] = value;
        return obj;
      }

      console.log(
        addName({}, "Brutus", 300),
        addName({ piano: 500 }, "Brutus", 400),
        addName({ piano: 500, stereo: 300 }, "Caligula", 440)
        
        ) 

    
}
console.groupEnd();

console.group('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    function generation(a,b) {
        const obj = {
          '-3': { m: "great grandfather", f: "great grandmother" },
          "-2": { m: "grandfather", f: "grandmother" },
          "-1": { m: "father", f: "mother" },
          0: { m: "me!", f: "me!" },
          1: { m: "son", f: "daughter" },
          2: { m: "grandson", f: "granddaughter" },
          3: { m: "great grandson", f: "great granddaughter" },
        };
            return obj[a][b]
        }

        console.log(generation(2, "f")) //➞ "granddaughter"
        console.log(generation(-3, "m")) // ➞ "great grandfather"
        console.log(generation(1, "f")) //➞ "daughter"
}
console.groupEnd();

console.group('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{

    function maximumScore(tileHand) {
        let sum = 0;
        for (let i = 0; i < tileHand.length; i++){
          sum += tileHand[i].score
        }
        return sum;
      }

    console.log(
    maximumScore([
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 }
      ])) //➞ 28
      
     console.log( 
        maximumScore([
        { tile: "B", score: 2 },
        { tile: "V", score: 4 },
        { tile: "F", score: 4 },
        { tile: "U", score: 1 },
        { tile: "D", score: 2 },
        { tile: "O", score: 1 },
        { tile: "U", score: 1 }
      ])) //➞ 15
}
console.groupEnd();

console.group('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
    function calculateDifference(obj, x) {
       const valueARR=Object.values(obj);
        let objsum = 0;
        for (let i = 0; i < valueARR.length; i++) {
            objsum += valueARR[i];
        }

        return objsum-x;
    }

    console.log(calculateDifference({ "baseball bat": 20 }, 5));
    console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
    console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400))
    ///ats: 15; 11; 1

}
console.groupEnd();

console.group('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    function toArray(obj) {
       return Object.entries(obj);
       
    }
    console.log(toArray({ a: 1, b: 2 }));
    console.log(toArray({ shrimp: 15, tots: 12 }));
    console.log(toArray({}));

}
console.groupEnd();

console.group('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
    function inkLevels(obj) {
        return Math.min(obj.cyan, obj.magenta, obj.yellow)
    }

    console.log(
        inkLevels({
            "cyan": 23,
            "magenta": 12,
            "yellow": 10
        }));
    console.log(
        inkLevels({
            "cyan": 432,
            "magenta": 543,
            "yellow": 777
        }));
    console.log(
        inkLevels({
            "cyan": 700,
            "magenta": 700,
            "yellow": 0
        }));

    ///ans: 10; 432;0
}
console.groupEnd();

console.group('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    function calculateLosses(obj, name, value) {
        let array2 = Object.values(obj);
        if (array2.length === 0) {
            return "Lucky you!"
        }
        else {
            let maxScore = 0;
            obj[name] = value;
        for (let i = 0; i <array2.length; i++) {
            maxScore += array2[i];}
        return maxScore;} 
       }

        const stolenItems1 = {
            tv: 30,
            skate: 20,
            stereo: 50,
          } //➞ 100
          
          const stolenItems2 = {
            painting: 20000,
          } //➞ 20000
          
          const stolenItems3 = {} //➞ "Lucky you!"

          console.log(calculateLosses(stolenItems1));
          console.log(calculateLosses(stolenItems2));
          console.log(calculateLosses(stolenItems3));
    }


console.groupEnd();
}
console.groupEnd();