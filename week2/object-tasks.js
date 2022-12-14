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

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{

}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{

}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{

}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{

}
console.groupEnd();