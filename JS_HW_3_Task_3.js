const { randomInt } = require("crypto");
const { futimesSync } = require("fs");
const { get } = require("http");

// Task 3**
const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]
 
  

// //   1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
// //   **Пример:**
// //   Предприятие 1 (45 сотрудников)
// //   - Отдел тестирования (10 сотрудников)
// //   - Отдел маркетинга (20 сотрудников)
// //   - Администрация (15 человек)
// //   Предприятие 2 (75 сотрудников)
// //   - Отдел разработки (50 сотрудников)
// //   - Отдел маркетинга (20 сотрудников)
// //   - Отдел охраны труда (5 сотрудников)
// //   Предприятие 3 (нет сотрудников)
// //   - Отдел аналитики (нет сотрудников)
// console.log(`\n Task 3.1.`);

// for (let i in enterprises) {
//         let countOfWorkers = 0;
//         enterprises[i].departments.forEach(element => countOfWorkers += element.employees_count);
//         if (countOfWorkers != 0) console.log(`${enterprises[i].name} (${countOfWorkers} сотрудников)`);
//         else console.log(`${enterprises[i].name} (нет сотрудников)`);
//         for (let j in enterprises[i].departments) {
//             if (enterprises[i].departments[j].employees_count != 0) console.log(`- ${enterprises[i].departments[j].name} (${enterprises[i].departments[j].employees_count} сотрудников)`);
//             else console.log(`- ${enterprises[i].departments[j].name} (нет сотрудников)`);
//         }
// }

// Anatoliy
const employeesCountHelper = function (number) {
  lastNumber = number.toString().split('').pop();
  //if (lastNumber && number) {
    //if (lastNumber ==)
  //}
}



const getStructure = function(company) {
  company.forEach(comp => {
    let depts = [];
    let count = 0
    depts.push(comp.name);
    if (comp.departments) {
      comp.departments.forEach(dept => {
        count += dept.employees_count;
        depts.push(` - ${dept.name} ${employeesCountHelper(dept.employees_count)}`)
      })
      depts[0] += `(${employeesCountHelper(count)})`
    }

    console.log(depts.join(`\n\ `)) // join собирает из массива обратно строку. Что находится между кавычками - будет разделителем
  });
};

//getStructure(enterprises)



// //   2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).
// //  **Пример:**
// //   getEnterpriseName(4) // Предприятие 1
// //   getEnterpriseName("Отдел маркетинга") // Предприятие 2
// console.log(`\n Task 3.2.`);

// const getEnterpriseName = (...enterpriseNames) => {
//     enterpriseNames.forEach(i => {
//         if ((!isNaN(i) && i >= 1) || (typeof(i) == 'string' && i && i.length > 1)) {  
//             enterprises.forEach(elementOfEnterprise => {
//                 elementOfEnterprise.departments.forEach(elementOfDepartment => {
//                     if (elementOfDepartment.name.includes(i) || elementOfDepartment.id == i) console.log(`${elementOfDepartment.name} находится в ${elementOfEnterprise.name}`);
//                 });
//             })  ;     
//         } else console.log(`Error: value ${i} is not correct`);
//     });
// }

// getEnterpriseName('Отдел маркетинга', 'Отдел аналитики', '4', '')

// Anatoliy
const getEnterpriseByDepartment = function (val) {
  let enterprise; // сюда упадет ссылка на объект
  enterprises.forEach(ent => {
    let department // ретурн из вор ич сложно сделать, поэтому ивпользуем доп.переменную
    if (ent.departments) {
      department = ent.departments.find(dept => {return dept.id === val || dept.name === val}) // ищем по циклу нужный департамент и иссылку на него вкладываем в department

    }
    if (department) enterprise = ent; // возвращаем ссылку на обхект, если найдется депаратмент
  })
  return enterprise ? enterprise.name : `Нет организации с id == ${val} или именем == ${val}` // лучше, когда у функции есть ретурн, а не выводить через консоль
} 
//console.log(getEnterpriseByDepartment(6))


  
// //   3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
// //   **Пример:**
// //   addEnterprise("Название нового предприятия")
// console.log(`\n Task 3.3.`);

// const addEnterprise = (...newEnterpriseNames) => {
//     newEnterpriseNames.forEach(i => {
//         if ((typeof(i) == 'string' && i && i.length > 1)) {
//             let newEnterpriseId = enterprises.length + 1;
//             enterprises.forEach(elementOfEnterprise => newEnterpriseId += elementOfEnterprise.departments.length);
//             let obj = {                
//                     id: newEnterpriseId,
//                     name: i,
//                     departments: []
//             };
//             enterprises.push(obj);            
//         }
//         console.log(`'${i}' have been added.`);
//   });
// }

// addEnterprise('Предприятие 4', 'Предприятие 5');
// console.log(`Final list of enterprises :`);
// enterprises.forEach(i => console.log(i));

// Anatoliy
// utils
const getNewId = function(company) {
  let maxID = 0;
  company.forEach(comp => {
    if (maxID < comp.id) maxID = comp.id
    if(comp.departments) {
      comp.departments.forEach(dept => {
        if(maxID <dept.id) maxID = dept.id
      })
    }
  })
  return maxID + 1
}

const addEnterprise = function(name) {
  enterprises.push({
    id: getNewId(enterprises),
    name: name,
    departments: []
  })
}
addEnterprise('Testers')
console.log(enterprises)


// //   4. Написать функцию, которая будет добавлять отдел в предприятие. 
// //   В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
// //   **Пример:**
// //   addDepartment(1, "Название нового отдела")
// console.log(`\n Task 3.4.`);

// const addDepartment = (idEnterprise, nameNewDepartment) => {
//   enterprises.forEach(elementOfEnterprises => {
//     if (elementOfEnterprises.id == idEnterprise) {
//       let newDepartmentId = null;
//       switch (elementOfEnterprises.departments.length) {
//         case 0:
//           newDepartmentId = 1 + elementOfEnterprises.id;
//           break;
//         default:
//           newDepartmentId = 1 + elementOfEnterprises.departments[elementOfEnterprises.departments.length - 1].id;
//           break;
//         }
//       elementOfEnterprises.departments[elementOfEnterprises.departments.length] = {id: newDepartmentId, name: nameNewDepartment, employees_count: Math.floor(Math.random() * 11)};
//       console.log(`${nameNewDepartment} have been added in ${elementOfEnterprises.name}.`);
//     };
    
//   });
// }

//     addDepartment(5, 'Отдел тарифообразования');
//     addDepartment(11, 'Отдел анализа и отчетности');
//     addDepartment(11, 'Диспетчерская');
//     console.log(`\n Final list of enterprises :`);
//     enterprises.forEach(i => console.log(i));

// Anatoliy
const getEnterprise = function(val) {
  let  enterprise = enterprises.find(el => el.id === val || el.name === val)

  return enterprise ? enterprise : false
}

const addDepartment = function(entId, name, count = 0) {
  const enterprise = getEnterprise(entId)
  if(enterprise) enterprise.departments.push({
    id: getNewId(enterprises),
    name: name,
    employees_count: count,
  })
}
addDepartment(11, 'QA', 3)
//console.log(enterprises[3])



// //   5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
// //   **Пример:**
// //   editEnterprise(1, "Новое название предприятия")
// console.log(`\n Task 3.5.`);

// const editEnterprise = (idEnterprise, newNameEnterprise) => {
//   enterprises.forEach(elementOfEnterprises => {
//     if (elementOfEnterprises.id == idEnterprise) {
//       console.log(`${elementOfEnterprises.name} was changed to ${newNameEnterprise}.`);
//       elementOfEnterprises.name = newNameEnterprise;
//     }    
//   });
// }

// editEnterprise(5, 'Предприятие 2_new');
// editEnterprise(12, 'Предприятие 5_new');
// console.log(`\n Final list of enterprises :`);
// enterprises.forEach(i => console.log(i));

// Anatoliy
const editEnterprise = function(val, name) {
  const enterprise = getEnterprise(val)
  if(enterprise) enterprise.name = name;
  else throw new Error ('No such enterprise') // Такая ошибка не даст скомпилировать код
}
editEnterprise(11, 'Devs')




// //   6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
// //   **Пример:**
// //   editDepartment(7, "Новое название отдела")
// console.log(`\n Task 3.6.`);

// const editDepartment = (idEnterprise, newNameDepartment) => {
//   enterprises.forEach(elementOfEnterprises => {
//     elementOfEnterprises.departments.forEach(elementOfDepartments => {
//       if (elementOfDepartments.id == idEnterprise) {
//         console.log(`${elementOfDepartments.name} was changed to ${newNameDepartment}.`);
//         elementOfDepartments.name = newNameDepartment;
//       }
//     });
//   }) ;
// }

// editDepartment(6, 'Отдел разработки_new');
// editDepartment(12, 'Отдел анализа и отчетности_new');
// console.log(`\n Final list of enterprises :`);
// enterprises.forEach(i => console.log(i));

// Anatoliy
const getDepartment = function(val) {
  let department;
  enterprises.array.forEach(el => {
    enterprises.forEach((company) => {
      const dept = company.departments.find() ///????
    })
    
  });
}

const editDepartment = function(val, name) {
  const department = getDepartment(val);
  if(department) department.name = name;
  else throw new Error ('No such enterprise') 
 }
 editDepartment(12, 'AQA')
 console.log(enterprises[3])




// //   7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
// //   **Пример:**
// //   deleteEnterprise(1)
// console.log(`\n Task 3.7.`);

// const deleteEnterprise = (idEnterprise) => {
//   for (let i in enterprises) {
//     if (enterprises[i].id == idEnterprise) {
//       console.log(`${enterprises[i].name} was deleted`);
//       enterprises.splice(i, 1);
//     }
//   };
// }

// deleteEnterprise(1);
// console.log(`\n Final list of enterprises :`);
// enterprises.forEach(i => console.log(i));

// Anatoliy
const deleteEnterprise = function(val) {
  const index = enterprises.findIndex(el => el.id === val)
  enterprises.splice(index, 1)
  
}
deleteEnterprise(9)
console.log(enterprises)



// //   8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. 
// //   Удалить отдел можно только, если в нем нет сотрудников.
// //   **Пример:**
// //   deleteDepartment(3)
// console.log(`\n Task 3.8.`);

// const deleteDepartments = (idDepartments) => {
//   for (let i in enterprises) {
//     for (let j in enterprises[i].departments) {
//       if (enterprises[i].departments[j].id == idDepartments) {
//         switch (enterprises[i].departments[j].employees_count) {
//           case 0: 
//             console.log(`${enterprises[i].departments[j].name} in ${enterprises[i].name} was deleted`);
//             enterprises[i].departments.splice(j, 1);
//             break;
//           default: 
//             console.log('You cannot delete a department that has employees');
//             break;
//         }        
//       }
//     }    
//   }
//   console.log('Final list of enterprises:')
//   enterprises.forEach(i => console.log(i));
// }

// deleteDepartments(10);

// Anatoliy
const deleteDepartment = function(val) {
  enterprises.forEach(e => {
    let index = e.departments.findIndex(D => d.id === val && dd.employees_count === 0) //???
  })
}


// //   9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
// //   В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
// //   **Пример:**
// //   moveEmployees(2, 3);
// console.log(`\n Task 3.9.`);

// const moveEmployees = (idDepartment, idDepartmentNew) => {
//   enterprises.forEach(elementOfEnterprise => {
//     elementOfEnterprise.departments.forEach(elementOfDepartment => {
//       if (elementOfDepartment.id == idDepartment) {
//         elementOfEnterprise.departments.forEach(elementOfDepartmentNew => {
//           if (elementOfDepartmentNew.id == idDepartmentNew) {
//             console.log(`Employees in the amount of ${elementOfDepartment.employees_count} were transferred from a ${elementOfDepartment.name} in the ${elementOfEnterprise.name} to ${elementOfDepartmentNew.name}`);
//             elementOfDepartmentNew.employees_count += elementOfDepartment.employees_count;
//             elementOfDepartment.employees_count = 0;          
//           }
//         });
//       }
//     });
//   });
//   console.log('Final list of enterprises:')
//   enterprises.forEach(i => console.log(i));
// }

// moveEmployees(6, 7);

// Anatoliy
const moveEmployees = function(currentId, newId) {
  const current = getDepartment(currentId);
  const newDept = getDepartment(newId);
  if(current && newDept && getEnterpriseByDepartment(currentId) === getEnterpriseByDepartment(newId)) { // проверяем, что перемещение внутри одного предприятия
    newDept.employees_count += current.employees_count;
    current.employees_count = 0;
  } else throw new Error ('Something went wrong')
}
moveEmployees(2,3)
console.log(enterprises[0])
