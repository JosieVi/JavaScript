// Домашнее задание по JS HW_2

// 1. Написать скрипт, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1.
console.log('Task 1.');

let baseForExp = 2;
for (let powerForExp = 1; powerForExp <= 10; powerForExp++) {
    console.log(`${baseForExp} ^ ${powerForExp} = ${Math.pow(baseForExp, powerForExp)}`);
}



// 1*. Преобразовать задачу № 1 в функцию, принимающую на вход степень, в которую будет возводиться число 2.
console.log('\n' + 'Task 1*.');

const calcExp = function(...powerForExp) {
    powerForExp.forEach(i => {
        if (!isNaN(i) && i >= 1) {
            for (let j = 1; j <= i; j++) {
                console.log(`${baseForExp}^${j} = ${Math.pow(baseForExp, j)}`);
            }
        } else {
            if (!isNaN(i) && i <= 0) console.log(`Power '${i}' for exponentiation is not correct`); 
            else console.log(`Power '${i}' for exponentiation is not an integer`); 
     }
    }) 
}

calcExp(1,3,-1,'2','aa','',0);



// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, 
// чтобы в первой строчке выводилось :), во второй :):) и так далее.
console.log('\n' + 'Task 2.');

let smileForDublicate = ':)'
let smileForOutput = smileForDublicate;

for (let i = 1; i <= 5; i++) {
    console.log(smileForDublicate.repeat(i));
    // или 2 вариант (но изменить условие: i < 5):
    // console.log(smileForOutput);
    // smileForOutput += smileForDublicate;
  }



// 2*. Преобразовать задачу № 2 в функцию, принимающую на вход строку,
// которая будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
console.log('\n' + 'Task 2*.');

const showString = (stringForDublicate, numberOfRows) => {
    if (typeof(stringForDublicate) == 'string' && typeof(numberOfRows) == 'number' && numberOfRows > 0 && stringForDublicate) {
        console.log(`String ${stringForDublicate} in ${numberOfRows} rows:`);
        for (let i = 1; i <= numberOfRows; i++) {
            console.log(stringForDublicate.repeat(i));
        }

    } else {
        if (stringForDublicate == '' || numberOfRows == 0) console.log('Error: value is empty')
        else console.log('Error: value is not correct')
    } 
 };

 showString('^V^',5);
 showString('^V^',1);
 showString('',5);
 showString('^V^',0);
 showString('^V^',-2);
 showString(5,1);



// 3**.  Написать функцию, которая принимает на вход слово, считает и выводит в консоль, сколько в слове гласных, и сколько согласных букв.
// Пример в консоли: Слово (word) состоит из  (число) гласных и (число) согласных букв
console.log('\n' + 'Task 3**.');

const getWordStructure = function(...words) {
    words.forEach(word => {
        const vowels = 'aeiou'.split('');
        let vowel = 0;
        let consonant = 0;
        if (typeof(word) == 'string' && word) {
            for (let letter of word.toLowerCase()) { // Разбили слово на буквы. of указывает на то, что работаем с массивом. Если через in , то char[i] можно итерировать
                if (vowels.includes(letter)) vowel++;
                else if (letter >= 'a' && letter <= 'z') consonant++;                
            }
            if (consonant > 0 || vowel > 0) console.log(`The word '${word}' consists of ${vowel} vowels and ${consonant} consonants`);
            else console.log(`Error: value '${word}' is not correct`)            
        } else {
            if (word == '') console.log('Error: value is empty')            
        } 
        // или функция в одну строку:
        // console.log(`В слове ${word} ${(word.match(/[aeiouy]/gi)) ? (word.match(/[aeiouy]/gi)).length : 0 } гласных и ${(word.match(/[qwrtpsdfghjklzxcvbnm]/gi)) ? (word.match(/[qwrtpsdfghjklzxcvbnm]/gi)).length : 0} согласных  букв`)
    })
 };

 getWordStructure('case', 'Case', 'Check-list', 'tttt', 'aaaa', '**', '');



// 4**. Написать функцию, которая проверяет, является ли слово палиндромом.
console.log('\n' + 'Task 4**.');

const checkLetters = (word) => {     // Функция, проверяющая, что аргумент является строкой, состоящей из букв, и не включает символы и цифры. 
    if (typeof(word) == 'string' && word) {
        for (let i of word) {
            if (i.toLowerCase() >= 'a' && i.toLowerCase() <= 'z') return true;
            else return false;            
        }
    } else return false;    
}

const checkPalindrom = function(...words) {
    words.forEach(word => {
        if (typeof(word) == 'string' && word && word.length > 1 && checkLetters(word)) { 
            if (word.toLowerCase() == word.toLowerCase().split('').reverse().join('')) { 
                console.log(`Word '${word}' is a palindrom`);
            } else console.log(`Word '${word}' is not a palindrom`);            
        } else console.log(`Error: value '${word}' is not correct`);
    })
}

checkPalindrom('abba', 'Abba', 'afasdgas', '22','**', 'a', 0, '0', '', ' ', 22);


// или 2ой вариант:
function checkPalindrom2(word) {
    word = word.toLowerCase();
    for (let i=0, j=word.length-1; i < word.length, j >= 0; i++, j--) {
        if(word[i] !== word[j]) return false;        
    } return true;
}

console.log(checkPalindrom2('masha'));


// или 3ий вариант:
function checkPalindrom3(word) {
    word = word.toLowerCase();
    for (let i = 0; i <= word.length/2; i++) { // word.length/2 === Math.floor(word.length/2) округление до целого числа вниз (т.е. 4,9 = 4)        
        if(word[i] !== word[word.length-1-i]) return false;
    } return true;
}

console.log(checkPalindrom3('masha'));