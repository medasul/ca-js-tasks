
console.groupCollapsed('---- functions-tasks-3.js [užduotys 28-32] ----');
{

    console.group("28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'");
    {
        function strReverse(str) {
            let ans = "";

            for (let i = str.length - 1; i >= 0; i--) {
                ans += str[i];
            }

            console.log(ans);
        }
        console.log('---');
        strReverse('viens du trys');
        strReverse('as tave myliu');
        strReverse('Bairis seniuk');
        console.log('---');
    }
    console.groupEnd();
    console.log();


    // 29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)
    //  mama -> false
    //  mamam -> true
    //  123321 -> true
    //  123456 -> false
    console.group("29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)");
    {
        function isPalyndrome(str) {
            let ans = "";

            for (let i = str.length - 1; i >= 0; i--) {
                ans += str[i];
            }
            ;
            if (str !== ans) return false;
            else return true;
        }
        console.log('---');
        console.log({
            'mama': isPalyndrome('mama'),
            'mamam': isPalyndrome('mamam'),
            '123321': isPalyndrome('123321'),
            '123456': isPalyndrome('123456'),
        })
        console.log('---');
    }
    console.groupEnd();
    console.log();

    // 30. Sukurkite funkciją, kuri taiso pastraipos klaidas:
    //  Pirma sakinio raidė didžioji
    //  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
    //  Bet kokį kiekį tapų pakeičia vienu tarpu
    //    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.
    console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
    {
        function reduceEmptySpaces(p) {
            p = p.replace(/ \./g, '. ').replace(/ ,/g, ', ').replace(/ \?/g, '? ').replace(/ !/g, '! ').replace(/\s+/g, ' ');
            return p;
        }

        function splitIntoSentences(p) {
            let sentences = p.split(/[.!?]/g);
            let sentenceArray = [];
            let ans = '';

            sentences.map(sentence => { sentenceArray.push(sentence.trim().charAt(0).toUpperCase() + sentence.trim().slice(1).toLowerCase()); });

            for (let i = 0; i < sentences.length; i++) {
                ans += sentenceArray[i];
                if (i < sentences.length - 1) { ans += p[p.indexOf(sentences[i]) + sentences[i].length] + " "; }
            }

            return ans;
        }

        function fixParagraph(p) {
            let a = reduceEmptySpaces(p);
            let rez = splitIntoSentences(a);

            console.log(rez);
        }

        const paragraph = '    labas , as jonas . Tave      vadina Kęstu? Taip ir žinojau  !    ';
        console.log(paragraph);
        console.log(`%cSutvarkytas:`, "color:red");
        const fixedParagraph = fixParagraph(paragraph);


        console.log('---');
    }
    console.groupEnd();
    console.log();

    // 31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą:
    //  labas, aš esu grybas -> ['labas', 'aš', 'esu', 'grybas']
    console.group("31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą");
    {
        function splitSentence(sentence) {
            let ans = sentence.split(/[,.?! ]/g).filter(word => word !== '');
            return ans;
        }
        console.log('---');
        console.log({
            'Labas aš Jonas': splitSentence('Labas aš Jonas'),
            'Kėgliai yra gerai': splitSentence('Kėgliai yra gerai'),
        })
        console.log('---');
    }
    console.groupEnd();
    console.log();


    // 32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį
    //  Ši funkcija turi grąžinti masyvą sudarytą iš atskirtų dalių:
    //  explode('Man patinka sniegas', ' ');  -> ['man', 'patinka', 'sniegas'];  
    //  explode('home/about/13', '/');        -> ['home', 'about', '13'];  
    console.group("32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį");
    {
        function explode(str, separator) {
            return str.split(separator);
            
        }
         console.log('---');
         console.log({
           "'Man patinka sniegas', ' '": explode('Man patinka sniegas', ' '),
           "'home/about/13', '/'": explode('home/about/13', '/'),
         })
         console.log('---');
    }
    console.groupEnd();

}
console.groupEnd();