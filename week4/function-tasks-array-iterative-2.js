console.groupCollapsed('---------function-tasks-array-iterative-2---------');
{
const students = [
    {
      name: 'Panatėja',
      surname: 'Sulindytė',
      faculty: 'Informatikos fakultetas',
      course: 2,
      modules: [
        {
          title: 'Operacinės sistemos',
          credits: 6,
          marks: [10, 7, 7, 6, 9]
        },
        {
          title: 'Algoritmų analizė',
          credits: 9,
          marks: [8, 8, 6, 4, 6]
        },
        {
          title: 'Tikimybės ir Statistika',
          credits: 6,
          marks: [9, 7, 8, 9, 6]
        },
        {
          title: 'Inžinerinis projektas',
          credits: 3,
          marks: [10, 8, 9, 8]
        },
        {
          title: 'Kompiuterių architektūra',
          credits: 6,
          marks: [6, 8, 7, 8, 8]
        }
      ]
    },
    {
      name: 'Serbentautas',
      surname: 'Bordiūras',
      faculty: 'Informatikos fakultetas',
      course: 1,
      modules: [
        {
          title: 'Matematika',
          credits: 6,
          marks: [7, 6, 9, 10, 8]
        },
        {
          title: 'Duomenų struktūros',
          credits: 6,
          marks: [7, 8, 9, 4, 8]
        },
        {
          title: 'Skaitmeninė logika',
          credits: 6,
          marks: [6, 8, 10, 9, 9]
        },
        {
          title: 'Objektinis programavimas',
          credits: 6,
          marks: [10, 8, 9, 8, 8]
        },
        {
          title: 'Fizika',
          credits: 6,
          marks: [6, 7, 8, 8, 8]
        }
      ]
    },
    {
      name: 'Laptokas',
      surname: 'Klavianskas',
      faculty: 'Informatikos fakultetas',
      course: 1,
      modules: [
        {
          title: 'Matematika',
          credits: 6,
          marks: [9, 8, 10, 9, 10]
        },
        {
          title: 'Duomenų struktūros',
          credits: 6,
          marks: [9, 9, 10, 10, 8]
        },
        {
          title: 'Skaitmeninė logika',
          credits: 6,
          marks: [10, 10, 10, 9, 10]
        },
        {
          title: 'Objektinis programavimas',
          credits: 6,
          marks: [9, 8, 9, 10, 10]
        },
        {
          title: 'Fizika',
          credits: 6,
          marks: [8, 9, 8, 10, 8]
        }
      ]
    },
    {
      name: 'Skaistė',
      surname: 'Kolbaitė',
      faculty: 'Chemijos fakultetas',
      course: 2,
      modules: [
        {
          title: 'Organinė chemija',
          credits: 6,
          marks: [9, 9, 10, 9, 8]
        },
        {
          title: 'Inžinerinės medžiagos',
          credits: 3,
          marks: [10, 10, 10, 9, 9]
        },
        {
          title: 'Entalpija ir Entropija',
          credits: 6,
          marks: [9, 9, 9, 9]
        },
        {
          title: 'Polimerų atmainos ir produktai',
          credits: 9,
          marks: [10, 9, 8, 10, 7]
        },
        {
          title: 'Pramoninė chemija',
          credits: 6,
          marks: [9, 10, 10, 10, 9]
        }
      ]
    },
    {
      name: 'Cilindras',
      surname: 'Katalizatorius',
      faculty: 'Chemijos fakultetas',
      course: 2,
      modules: [
        {
          title: 'Organinė chemija',
          credits: 6,
          marks: [6, 8, 9, 4, 8]
        },
        {
          title: 'Inžinerinės medžiagos',
          credits: 3,
          marks: [9, 8, 7, 8, 10]
        },
        {
          title: 'Entalpija ir Entropija',
          credits: 6,
          marks: [7, 8, 9, 10, 6]
        },
        {
          title: 'Polimerų atmainos ir produktai',
          credits: 9,
          marks: [8, 9, 6, 4]
        },
        {
          title: 'Pramoninė chemija',
          credits: 6,
          marks: [8, 7, 9, 5, 9]
        }
      ]
    },
    {
      name: 'Grandinius',
      surname: 'Varžauskas',
      faculty: 'Elektros ir elektronikos fakultetas',
      course: 1,
      modules: [
        {
          title: 'Matematika',
          credits: 6,
          marks: [8, 9, 9, 9, 9]
        },
        {
          title: 'Elektos grandinės',
          credits: 6,
          marks: [8, 7, 9, 9, 10]
        },
        {
          title: 'Elektros tinklai',
          credits: 6,
          marks: [9, 9, 8, 8, 10]
        },
        {
          title: 'Braižyba',
          credits: 6,
          marks: [6, 8, 9, 8, 7]
        },
        {
          title: 'Fizika',
          credits: 6,
          marks: [9, 9, 9, 10, 8]
        }
      ]
    },
  ];
  
  
  console.group('1. Atspausdinti visus Informatikos fakulteto studentus');
  {

   function IT(array)
    {
        let studentsIT = array.filter( (obj) => obj.faculty == "Informatikos fakultetas");
        studentsIT.forEach(student => { 
            console.log(`${student.name} ${student.surname}`); 
        });
        
    }

   IT(students);
    
  }
  console.groupEnd();
  
  console.group('2. Atspausdinti visus Chemijos fakulteto studentus');
  {
    function chemistry(array)
    {
        let studentsChemistry = array.filter( (obj) => obj.faculty == "Chemijos fakultetas");
        studentsChemistry.forEach(student => { 
            console.log(`${student.name} ${student.surname}`); 
        });
    }

    chemistry(students);
  }
  console.groupEnd();
  
  console.group('3. Atspausdinti visus Elektros ir elektronikos fakulteto studentus');
  {
    function El(array)
    {
        let studentsEl = array.filter( (obj) => obj.faculty == "Elektros ir elektronikos fakultetas");
        studentsEl.forEach(student => { 
            console.log(`${student.name} ${student.surname}`); 
        });
    }

    El(students);
  
  }
  console.groupEnd();
  
  console.group('4. Atspausdinti tik pirmo kurso studentus');
  {
    function firstCourseStudents(array)
    {
        let firstCourse = array.filter( (obj) => obj.course === 1);
        firstCourse.forEach(student => { 
            console.log(`${student.name} ${student.surname}`); 
        });
        if(firstCourse.length === 0) {console.log ("Nėra pirmojo kurso studentų")}
    }

    firstCourseStudents(students); 
   }
  console.groupEnd();
  
  console.group('5. Atspausdinti tik antro kurso studentus');
  {
    function secondCourseStudents(array)
    {
        let secondCourse = array.filter( (obj) => obj.course === 2);
        secondCourse.forEach(student => { 
            console.log(`${student.name} ${student.surname}`); 
        });
        if(secondCourse.length === 0) {console.log ("Nėra antrojo kurso studentų")}
    }

    secondCourseStudents(students);  
  }
  console.groupEnd();
  
  console.group('6. Atspausdinti tik trečio kurso studentus');
  {
    function thirdCourseStudents(array)
    {
        let thirdCourse = array.filter( (obj) => obj.course === 3);
        thirdCourse.forEach(student => { 
            console.log(`${student.name} ${student.surname}`); 
        });
        if(thirdCourse.length === 0) {console.log ("Nėra trečiojo kurso studentų")}

    }

    thirdCourseStudents(students);  
  }
  console.groupEnd();
  
  console.group('7. Atspausdinti tik ketvirto kurso studentus');
  {
    function fourthCourseStudents(array)
    {
        let fourthCourse = array.filter( (obj) => obj.course === 4);
        fourthCourse.forEach(student => { 
            console.log(`${student.name} ${student.surname}`); 
        });
        if(fourthCourse.length === 0) {console.log ("Nėra ketvirtojo kurso studentų")}

    }

    fourthCourseStudents(students);  
  }
  console.groupEnd();
  
  console.group('8. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius');
  {
    function studentAvg(array)
    {
      array.forEach(student => {
        let allAvg = 0;
        let count = 0;
        student.modules.forEach(mod => {
         let sumMark = mod.marks.reduce((ac, v) => ac + v, 0);
         allAvg = allAvg + sumMark;
         count= count + mod.marks.length;
        });
        allAvg = allAvg / count;
        console.log(`${student.name} ${student.surname} \nBendras vidurkis: %c${allAvg.toFixed(2)}`, 'color: red');
     });
    }

    studentAvg(students);
  }
  
  console.group('9. Atspausdinti visų Informatikos fakulteto studentų vidurkius');
  
    {
      function studentITAvg(array)
    {
        const ans = array.filter(a => a.faculty == "Informatikos fakultetas");
        ans.forEach(student => {
          let allAvg = 0;
          let count = 0;
          student.modules.forEach(mod => {
           let sumMark = mod.marks.reduce((ac, v) => ac + v, 0);
           allAvg = allAvg + sumMark;
           count= count + mod.marks.length;
          });
          allAvg = allAvg / count;
          console.log(`${student.name} ${student.surname} \nBendras vidurkis: %c${allAvg.toFixed(2)}`, 'color: red');
       });
      }
  
      studentITAvg(students);
  }
  console.groupEnd();
  
  console.group('10. Atspausdinti visų Chemijos fakulteto studentų vidurkius');
  {
    function studentChemistryAvg(array)
    {
        const ans = array.filter(a => a.faculty == "Chemijos fakultetas");
        ans.forEach(student => {
          let allAvg = 0;
          let count = 0;
          student.modules.forEach(mod => {
           let sumMark = mod.marks.reduce((ac, v) => ac + v, 0);
           allAvg = allAvg + sumMark;
           count= count + mod.marks.length;
          });
          allAvg = allAvg / count;
          console.log(`${student.name} ${student.surname} \nBendras vidurkis: %c${allAvg.toFixed(2)}`, 'color: red');
       });
      }
  
      studentChemistryAvg(students);
  }
  console.groupEnd();
  
  console.group('11. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
  {
    function studentElAvg(array)
    {
        const ans = array.filter(a => a.faculty == "Elektros ir elektronikos fakultetas");
        ans.forEach(student => {
          let allAvg = 0;
          let count = 0;
          student.modules.forEach(mod => {
           let sumMark = mod.marks.reduce((ac, v) => ac + v, 0);
           allAvg = allAvg + sumMark;
           count= count + mod.marks.length;
          });
          allAvg = allAvg / count;
          console.log(`${student.name} ${student.surname} \nBendras vidurkis: %c${allAvg.toFixed(2)}`, 'color: red');
       });
      }
  
      studentElAvg(students);
  }
  console.groupEnd();

}
console.groupEnd();