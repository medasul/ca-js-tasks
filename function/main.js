console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    function elementFirst(array) {
        return array[0];
    }

    const rez1 = elementFirst([7, 5, 9]);
    const rez2 = elementFirst(['vienas', 'du', 'trys']);

    console.log({ rez1, rez2 });

}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
    function deleteElementFirst(array) {
        let firstElement = array[0];
        delete array[0];
        for (let i = 1; i < array.length; i++) { array[i - 1] = array[i]; }
        array.length = array.length - 1;
        return firstElement;
    }

    //  const numberrs = [1, 2 , 5, 7, 9];

    const rez1 = deleteElementFirst([7, 5, 9]);
    const rez2 = deleteElementFirst(['vienas', 'du', 'trys']);
    //  console.log('numbers before removal: ' , numberrs)
    // rez1 = deleteElementFirst(numberrs);
    // console.log('after: ' , numberrs );
    //console.log('removed first element: ' , rez1);


    console.log({ rez1, rez2 });

}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{

    function ElementLast(array) {
        let lastElement = array[array.length - 1];
        array[array.length - 1];
        array.length = array.length - 1;
        return lastElement;
    }

    const rez1 = ElementLast([7, 5, 9]);
    const rez2 = ElementLast(['vienas', 'du', 'trys']);
    console.log({ rez1, rez2 });

    // const numberrs = [1, 2 , 5, 7, 9];
    //console.log('numbers before removal: ' , numberrs)
    // rez1 = ElementLast(numberrs);
    // console.log('after: ' , numberrs );
    //console.log('removed last element: ' , rez1);
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
    function deleteElementLast(array) {
        let lastElement = array[array.length - 1];
        array.length = array.length - 1;
        return lastElement;
    }

    const rez1 = deleteElementLast([7, 5, 9]);
    const rez2 = deleteElementLast(['vienas', 'du', 'trys']);
    console.log({ rez1, rez2 });

    // const numberrs = [1, 2 , 5, 7, 9];
    //console.log('numbers before removal: ' , numberrs)
    // rez1 = deleteElementLast(numberrs);
    // console.log('after: ' , numberrs );
    //console.log('removed first element: ' , rez1);

}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
    function arrayIndexAmount(array) {
        return array.length;
    }

    const rez1 = arrayIndexAmount([7, 5, 9, 9, 5]);
    const rez2 = arrayIndexAmount(['vienas', 'du', 'trys']);
    console.log({ rez1, rez2 });
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    function arrayLastIndex(array) {
        return array.length - 1;
    }

    const rez1 = arrayLastIndex([7, 5, 9, 9, 5]); ///ats 4
    const rez2 = arrayLastIndex(['vienas', 'du', 'trys']); ///ats 2
    console.log({ rez1, rez2 });
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    function arrayIndex(array) {
        for (let i = 0; i <= array.length - 1; i++)
         { console.log(i); }
    }

    arrayIndex([7, 5, 9, 5, 9]);
    console.log('next array');
    arrayIndex(['vienas', 'du', 'trys', 'keturi']);

}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    function arrayValue(array) {
        for (let i = 0; i <= array.length-1; i++)
         { console.log(array[i]); }
    }

    arrayValue([7, 5, 9, 5, 9]);
    console.log('next array');
    arrayValue(['vienas', 'du', 'trys', 'keturi']);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
    function arrayIndexAndValue(array) {
        for (let i = 0; i <= array.length-1; i++)
         { console.log('[' , i , '] => ', array[i]); }
    }

    arrayIndexAndValue([7, 5, 9, 5, 9]);
    console.log('next array');
    arrayIndexAndValue(['vienas', 'du', 'trys', 'keturi']);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    function arrayValueReverse(array) {
        for (let i = array.length-1; i >= 0; i--)
         { console.log(array[i]); }
    }

    arrayValueReverse([7, 5, 9, 5, 9]);
    console.log('next array');
    arrayValueReverse(['vienas', 'du', 'trys', 'keturi']);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    function arrayIndexOneLine(array) {
        const space= " ";
        let string1='';
        for (let i = 0; i <=array.length-1; i++)
         {  if(i!=0) { string1+= space + i}
            else string1+= + i;
             };
             console.log(string1);
    }

    arrayIndexOneLine([7, 5, 9, 5, 9]);
    console.log('next array:');
    arrayIndexOneLine(['vienas', 'du', 'trys', 'keturi']);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
    function arrayValueOneLine(array) {
    const space= " ";
    let string2='';
    for (let i = 0; i <=array.length-1; i++)
     {  if(i!=0) { string2=string2 + space + array[i]}
        else string2=string2 + array[i];
         };
         console.log(string2);
}

arrayValueOneLine([7, 5, 9, 5, 9]);
console.log('next array:');
arrayValueOneLine(['vienas', 'du', 'trys', 'keturi']);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
    function arrayIndexAndValueOneLine(array) {
        const space= " ";
        const leftBracket = "[";
        const rihtSide = "]=>"

        
    }
    
    arrayIndexAndValueOneLine([7, 5, 9, 5, 9]);
    console.log('next array:');
    arrayIndexAndValueOneLine(['vienas', 'du', 'trys', 'keturi']);
    }

console.groupEnd();