//EASY LEVEL;
//taisoma
console.group('1. https://edabit.com/challenge/Gz27eKkMcLarzE5Rj');
{
    function sortByLength(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].length < arr[i - 1].length) {
                let j = arr[i];
                arr[i] = arr[i-1];
                arr[i - 1] = j;
            i--;}
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

