

console.groupCollapsed('----- js-revision ------ ');
{

//------------------------------------ 1 Dalis ------------------------------------ 

//1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
/*- name
- surname
- age
- height
- weight
- sex*/

const people = [
    {
        name: 'Marija',
        surname: 'Marijytė',
        age: 18,
        height: 165,
        weight: 80,
        sex: 'female'
    },
    {
        name: 'Lėja',
        surname: 'Lėjilienė',
        age: 41,
        height: 170,
        weight: 70,
        sex: 'female'
    },
    {
        name: 'Jonas',
        surname: 'Jonauskas',
        age: 17,
        height: 181,
        weight: 89,
        sex: 'male'
    },
    {
        name: 'Marijonas',
        surname: 'Marijonauskas',
        age: 30,
        height: 220,
        weight: 88,
        sex: 'male'
    },
    {
        name: 'Justė',
        surname: 'Justienė',
        age: 16,
        height: 179,
        weight: 75,
        sex: 'female'
    },
    {
        name: 'Miglė',
        surname: 'Miglaitė',
        age: 13,
        height: 169,
        weight: 100,
        sex: 'female'
    },
    {
        name: 'Gytis',
        surname: 'Gytytavičius',
        age: 75,
        height: 195,
        weight: 120,
        sex: 'male'
    },
    {
        name: 'Vitalijus',
        surname: 'Vitalikavičius',
        age: 35,
        height: 170,
        weight: 78,
        sex: 'male'
    },
];
console.groupCollapsed('1 Dalis ');
{
    //2. Panaudojant array.forEach:
    console.group('\nPanaudojant array.forEach: ');
    {
        // - Atspausdinti kiekvieną elementą
        console.log(" \n %cAtspausdinti kiekvieną elementą: \n", "color:red ")
        people.forEach((person) => { console.log(person); });

        // - Atspausdinti kiekvieno elemento pilną vardą
        console.log(" \n %cAtspausdinti kiekvieno elemento pilną vardą: \n", "color:red ")
        people.forEach((person, i) => { console.log(`${i + 1}. ${person.name} ${person.surname}`); });

        // - Atspausdinti kiekvieno elemento kūno masės indeksą
        console.log(" \n %cAtspausdinti kiekvieno elemento kūno masės indeksą: \n", "color:red ")
        people.forEach((person, i) => {
            let bmi = Number((person.weight / ((person.height / 100) ** 2)).toFixed(2));
            if (bmi >= 18.5 && bmi <= 24.9) { console.log(`${i + 1}. %c${bmi} - (healthy bmi) `, "color: green") }
            else { console.log(`${i + 1}. %c${bmi} - (unhealthy bmi) `, "color: red") };
        });

    }
    console.groupEnd();

    //3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
    console.group('\nPanaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones: ');
    {
        //- kurių vardas ilgesnis nei 6 simboliai
        console.log(" \n %cŽmonės, kurių vardas ilgesnis nei 6 simboliai: \n", "color:red ")
        const nameLongerThan6Symbols = people.filter(person => person.name.length > 6);
        nameLongerThan6Symbols.forEach(person => { console.log(person); }
        );
        //- kurių svoris didesnis nei 80kg
        console.log(" \n %cŽmonės, kurių svoris didesnis nei 80kg: \n", "color:red ")
        const peopleHeavierThan80kg = people.filter(person => person.weight > 80);
        peopleHeavierThan80kg.forEach(person => { console.log(person); }
        );
        //- kurie aukštesni nei 185cm
        console.log(" \n %cŽmonės, kurie aukštesni nei 185cm: \n", "color:red ")
        const peopleTallerThan185cm = people.filter(person => person.height > 185);
        peopleTallerThan185cm.forEach(person => { console.log(person); })

    }
    console.groupEnd();
    //4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
    console.group('\nPanaudojant array.map atrinkti į naują masyvą ir po to atspausdinti: ');
    {
        // - ūgius
        console.log(" \n %c Ūgius: \n", "color:red ")

        const peopleHeights = people.map(({ height }) => height);
        console.log(peopleHeights);
        //- svorius
        console.log(" \n %c Svorius: \n", "color:red ")
        const peopleWeights = people.map(({ weight }) => weight);
        console.log(peopleWeights);

        // - ūgius, svorius ir amžius : [{height, weight, age}, ...]
        console.log(" \n %c Ūgius, svorius ir amžius : [{height, weight, age}, ...]: \n", "color:red ")
        const peopleHeightWeightAge = people.map(({ height, weight, age }) => ({
            height: height,
            weight: weight,
            age: age
        }
        ));
        console.log(peopleHeightWeightAge);

        // - KMI indeksus
        console.log(" \n %c KMI indeksus: \n", "color:red ")
        const bmi1 = people.map(({ weight, height }) => Number((weight / ((height / 100) ** 2)).toFixed(2)));
        console.log(bmi1);

        // - KMI indeksus ir amžius
        console.log(" \n %c KMI indeksus ir amžius: \n", "color:red ")
        const bmiAndAge = people.map(({ weight, height, age }) => ({
            bmi: Number((weight / ((height / 100) ** 2)).toFixed(2)),
            age: age,
        }));
        console.log(bmiAndAge);

    }
    console.groupEnd();

    // 5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
    console.group('\nPanaudojant array.reduce suskaičiuoti ir po to atspausdinti: ');
    {
        // - svorių vidurkį
        console.log(" \n %c Svorių vidurkį: \n", "color:red ")

        const peopleWeight = people.reduce((prevSum, { weight }) => prevSum + weight, 0)
        const peopleAvgWeight = Number((peopleWeight / people.length).toFixed(2));
        console.log(peopleAvgWeight);

        // - ūgio vidurkį
        console.log(" \n %c Ūgio vidurkį: \n", "color:red ")
        const peopleHeight = people.reduce((prevSum, { height }) => prevSum + height, 0)
        const peopleAvgHeight = Number((peopleHeight / people.length).toFixed(2));
        console.log(peopleAvgHeight);

    }
    console.groupEnd();
}
console.groupEnd();
//------------------------------------ 2 Dalis ------------------------------------ 
console.groupCollapsed('2 Dalis ');
{
    //0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
    // Person klasėje: 
    class Person {
        name;
        surname;
        age;
        height;
        weight;
        sex
        constructor({ name, surname, age, height, weight, sex }) {
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.height = height;
            this.weight = weight;
            this.sex = sex;
        }

        //- sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
        get getBMI() {
            return Number((this.weight / ((this.height/100) **2).toFixed(2)));
        }

        // - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
        toString() {
            return `Person: ${this.name} ${this.surname}, age: ${this.age}, height: ${this.height}, weight: ${this.weight}, sex: ${this.sex}`;
        }
    }

    ///bmi funkcija 2-5 uzd.
    function calculateBMI(w, h)
    {return Number((w / ((h/100) **2).toFixed(2)));}

    console.log(" \n %c Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą: \n", "color:red ")
    console.log("Testing created Class 'Person' :")

    console.dir(Person);

    console.dir(new Person(people[0]));

    let arrayy = [];
    people.forEach((_person, i) => {
        arrayy.push(new Person(people[i]))
    });
    console.dir(arrayy)

    //   1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg 
    console.log(" \n %c Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg : \n", "color:red ")
    const womenYoungAndNotHeavy = people.filter(({sex, age, weight}) => sex === 'female' && age < 20 && weight > 70);
    console.dir(womenYoungAndNotHeavy)

    // 2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5
    console.log(" \n %c Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5: \n", "color:red ")
    
    const menOlderAndLowBMI = people.filter(({sex, age, weight, height}) => sex === 'male' && age >25 && calculateBMI(weight, height) < 18.5);
    console.dir(menOlderAndLowBMI)
   

    //3. Atrinkti vaikus, su antsvoriu (KMI > 30)
    console.log(" \n %c Atrinkti vaikus, su antsvoriu (KMI > 30): \n", "color:red ")
    const kidsHighBMI = people.filter(({age, weight, height}) =>  age <18 && calculateBMI(weight, height) >30);
    console.dir(kidsHighBMI)

    //4. Atrinkti pensininkus, su antsvoriu (KMI > 30)
    console.log(" \n %c Atrinkti pensininkus, su antsvoriu (KMI > 30): \n", "color:red ")
    const oldPeopleHighBMI = people.filter(({age, weight, height}) =>  age >60 && calculateBMI(weight, height) >30);
    console.dir(oldPeopleHighBMI)

    //5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]
    console.log(" \n %c Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]: \n", "color:red ")
    const unhealthyBmiPeople = people.filter(({ weight, height}) =>  
     calculateBMI(weight, height) >25 ||calculateBMI(weight, height) <18.5 );
    console.dir(unhealthyBmiPeople)
}
console.groupEnd();
}
console.groupEnd();
