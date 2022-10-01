// Task 2*
// Дан массив объектов. Каждый объект является идентификационной карточкой человека. 
// Нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.
// Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании

const fs = require('fs')
let json = fs.readFileSync('/Users/z3/Desktop/QA_Ksendzov/JS_HW_3/task2.json', 'utf8');
let infoOfPeople = JSON.parse(json);

// Первый вариант:
const infoOfPeopleUnique = () => {
    for (let i = 0; i < infoOfPeople.length; i++) {
        for (let j = infoOfPeople.length - 1; j > i; j--) {
            if (infoOfPeople[i]['name'] === infoOfPeople[j]['name']) infoOfPeople.splice(j, 1)
        }
    }
    infoOfPeople.forEach(i => console.log(i));
}

//infoOfPeopleUnique();

// Anatoliy
//const fs = require('fs')
let user = JSON.parse(fs.readFileSync('task2.json'))
console.log(user)

function uniqueFunc1() {
    let unique1 = [];
    user.forEach(el => {
        if(!unique1.includes(JSON.stringify(el))) unique1.push(JSON.stringify(el))
    })
    return unique1.map(el => JSON.parse(el)) // unique1.length

}
//console.log(uniqueFunc1())

let unique = Array.from(new Set(user.map((item) => JSON.stringify(item)))).map((item) => JSON.parse(item)); 
    // преобразовываем в массив назад
    // создаем map из данных преобразованных с стригу
    // SET работает быстрее массива
console.log(unique)

