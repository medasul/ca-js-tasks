const people = [
    {
      name: 'Jonas',
      surname: 'Jonaitis',
      sex: 'male',
      age: 26,
      income: 1200,
      married: false,
      hasCar: false
    },
    {
      name: 'Severija',
      surname: 'Piktutytė',
      sex: 'female',
      age: 26,
      income: 1300,
      married: false,
      hasCar: true
    },
    {
      name: 'Valdas',
      surname: 'Vilktorinas',
      sex: 'male',
      age: 16,
      income: 0,
      married: false,
      hasCar: false
    },
    {
      name: 'Virginijus',
      surname: 'Uostauskas',
      sex: 'male',
      age: 32,
      income: 2400,
      married: true,
      hasCar: true
    },
    {
      name: 'Samanta',
      surname: 'Uostauskienė',
      sex: 'female',
      age: 28,
      income: 1200,
      married: true,
      hasCar: true
    },
    {
      name: 'Janina',
      surname: 'Stalautinskienė',
      sex: 'female',
      age: 72,
      income: 364,
      married: false,
      hasCar: false
    }
  ];
  console.group('1. Atspausdinkite visus žmones eilutėmis');
  {
    function printInLines(arr)
        {
            arr.forEach(el => {
                console.log(el);
            });
        }

    printInLines(people);
  }
  console.groupEnd();
  
  console.group('2. Atpausdinkite visus žmonių vardus ir pavardes, atskirtus brūkšneliu');
  {
    function printNameSurname(arr)
    {
        arr.forEach(el => {
            console.log(`${el.name}-${el.surname}`);
        });
    }

    printNameSurname(people);
  }
  console.groupEnd();
  
  console.group('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
  {
    function printNameSurnameStatus(arr)
    {
        arr.forEach(el => {
            console.log(`${el.name} ${el.surname}  \n married (true/false): %c${el.married}`, 'color: red');
        });
    }

    printNameSurnameStatus(people);
  }
  console.groupEnd();
  
  console.group('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
  {
    function printSexAndIncome(arr)
    {
        arr.forEach((el, i) => {
            console.log(`${i+1}. ${el.sex} income - %c${el.income}`, 'color: red');
        });
    }

    printSexAndIncome(people);
  }
  console.groupEnd();
  
  console.group('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
  {
    function printNameSurnameSex(arr)
    {
        arr.forEach(el => {
            console.log(`${el.name} ${el.surname} is %c${el.sex}`, 'color: red');
        });
    }

    printNameSurnameSex(people);
  }
  console.groupEnd();
  
  console.group('6. Atspausdinkite visus vyrus');
  {
    function printMales(arr)
    { return arr.sex === 'male';
    }
 console.log('\n Visi vyrai:')
    console.table(people.filter(printMales));
  }
  console.groupEnd();
  
  console.groupCollapsed('7. Atspausdinkite visas moteris');
  {
    // ...sprendimas ir spausdinimas
  }
  console.groupEnd();
  
  console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
  {
    // ...sprendimas ir spausdinimas
  }
  console.groupEnd();
  
  console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
  {
    // ...sprendimas ir spausdinimas
  }
  console.groupEnd();
  
  console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
  {
    // ...sprendimas ir spausdinimas
  }
  console.groupEnd();
  
  console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
  {
    // ...sprendimas ir spausdinimas
  }
  console.groupEnd();
  
  console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
  {
    // ...sprendimas ir spausdinimas
  }
  console.groupEnd();
  
  console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
  {
    // ...sprendimas ir spausdinimas
  }
  console.groupEnd();