// ЗАДАНИЯ СО *
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
console.log ('Result of task 1*' );
let arg_11 = 17;
let arg_21 = 18;
let arg_31 = 61;
let func_1 = (arg_11, arg_21, arg_31) => {
    if (arg_11 < arg_21) {
        return('You dont have access cause your age is ' + arg_11 + ' Its less then need');
    } else if (arg_11 >= arg_21 && arg_11 < arg_31) {
        return('Welcome!');
    } else if (arg_11 >= arg_31) {
        return('Keep calm and look Culture channel');
    } else {return('Technical work')}
    }
console.log(func_1 (arg_11, arg_21, arg_31));


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
let arg_12 = 17;
let arg_22 = 18;
let arg_32 = 61;
console.log ('Result of task 2*' );
let func_2 = (arg_12, arg_22, arg_32) => {
    if (typeof(arg_12) != 'number' || typeof(arg_22) != 'number' || typeof(arg_32) != 'number') {
        return('Data type contains an error');
    } else if (arg_12 < arg_22) {
        return('You dont have access cause your age is ' + arg_12 + ' Its less then need');
    } else if (arg_12 >= arg_22 && arg_12 < arg_32) {
        return('Welcome!');
    } else if (arg_12 >= arg_32) {
        return('Keep calm and look Culture channel');
    } else {return('Technical work')}
    }
console.log(func_2 (arg_12, arg_22, arg_32));


// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
let arg_13 = '17';
let arg_23 = '18';
let arg_33 = '61';
console.log ('Result of task 3*' );
let func_3 = (arg_13, arg_23, arg_33) => {
    if (typeof(arg_13) == 'string' && typeof(arg_23) == 'string' && typeof(arg_33) == 'string') { // проверяю формат аргументов
        arg_13 = arg_13++;                                                                   // меняю формат аргумента на числовой
        arg_23 = arg_23++;
        arg_33 = arg_33++;
        }                                                    
    if (arg_13 < arg_23) {                                                                   // здесь продолжаю все стандартные проверки
    return('You dont have access cause your age is ' + arg_13 + ' Its less then need');
    } else if (arg_13 >= arg_23 && arg_13 < arg_33) {
    return('Welcome!');
    } else if (arg_13 >= arg_33) {
   return('Keep calm and look Culture channel');
    }
    else return('Technical work')
    }
console.log(func_3 (arg_13, arg_23, arg_33));