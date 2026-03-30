// let message = "Hello sasha"
// let number = "6"

// if(number>1){
//     console.log (message)
// } else {
//     console.log ("Не виконано")
// }


// let num = 0;
// while (num < 9){
//     console.log(num);
//     num--
// }
// for(let num = 0; num < 5; num++ ){
// console.log(num)
// if (num == 2) break;
// }
// ;


// zadacha 1 вивести в консоль від 1 до 5
// let num = 1
// while (num < 6){
//     console.log(num);
//     num++
// }

// for(let num = 1; num < 6; num++){
//     console.log(num)
// }



//zadacha 3
// for (let num = 0; num < 3; num++) {
//     console.log(`Число: ${num}`)
// }
// препеписати оце зверху на while
         
// let num = 0
// while(num < 3){
//     console.log(`Число: ${num}`)
//     num++
// }

// zadacha 4
// FirstFor: for(let num = 0; num <6; num++) {
//     for (let size = 0; size <4; size++) {
//         if(size === 6){
//             break FirstFor;
//         }
//         console.log(size)
//     }
// }
//коли 5 раз прокручується перший for а він так
//  прокручується що рахується в консолі 5 раз від 0 до 3 по другому for
// і як воно прокрутилося 5 раз то воно потім зупиняється


// UNdefined -неопридільоний тіп 
//  let userName;

//  console.log(typeof userName);

//  console.log(userName)
 //в консолі висвітеця значення undefind



 //null также як i Undefind має одне значення,   
 //тілки null оприділине  воно має значення null 
 
//  let userName = null;
//  console.log(userName)

 //приклад
//  let block = document.querySelector('.block')
//  console.log(block)
 //в консолі буде null

 /*
boolean - це булєвий або логічний тип 
може принумати тільки два значення 
true(правда) або false (не прадва)
*/

// let willYouMarryMe = true 
// if (willYouMarryMe) {
//     console.log(':)');
// } else {
//     console.log(':(');
// }

/*
якщо значення буде true то в консолі буде веселий смайлик
якщо значення буде false то в консолі буде сумний смайлик
*/

// також можна використовута з оператором зрівняння
//  let trueOrFalse = 58 < 18;
//  console.log(trueOrFalse)
 // коли значення правильне то буде true
 // якщо не правильне то буде false

 /*
Number це тип даних який представляє 
значення цілих чисел і десяткових дробів
 */

// let userAge = 20
// let userHeight = 1.83
// console.log(userAge)
// console.log(typeof userAge)
// console.log(userHeight)
// console.log(typeof userHeight);



//також є значення infinity це значення 
// ми можем получити якщо поділим на ноль


//NaN це означає шо десь в рішені є помилка 
// let getNan= 'sasha' / 10
// console.log(getNan)
// console.log(typeof getNan)
// в консолі буед значення Nan


/*
BigInt в javaScript  ти даних number який
не може содержати число білтше чим
9007199254740991 або менше чим -9007199254740991
*/

// const bigInteger = 121312342432543252342n;
// console.log(typeof bigInteger)
// в консолі буде bigint


//String
//використовується з кавичками ""''``

// let userName ="Sasha"
// console.log(typeof userName)

// let userNameV2 ='Sasha'
// console.log(typeof userNameV2)
// let userNameV3 = `sasha`
// console.log(typeof userNameV3)


// let userAge = 15;
// let userAgeInfo = `Возраст: ${userAge}`;
// console.log(userAgeInfo)



//Object

// let userInfo = {
//     name: "Sasha",
//     age: 15
// }
// console.log(userInfo)
// console.log(typeof userInfo);


//Symbol

// let id = Symbol("id")
// console.log(typeof id)

//Function 
// let funcVariable = function name(params) {
     //тут бдуе код для функції 
// }
// console.log(typeof funcVariable);



// let userAge = 36;
// let userInfo = "Sasha ${userAge}";
// не правильний варінат 


// let userHeight = 145 / 0;
// console.log(userHeight)
//неправильне бо буде infinity

// let userName;
// console.log(typeof userName)
//напрвильно бо буде andefined

// let userSize = "45" / "8"
// console.log(typeof userSize)
// правильно вернеться тип даних number



//Функції
// function імя(параметри){
//     код функції
// }


// function showMessage(){
//     console.log('сообщенія')
// }

// showMessage();
// оце знизу showMesage з дужками це щоб запустити код в функції

//зовнішня переміна 

// let message;
 
// function showMessage(){
//     message = "soobchenia"
// }
// showMessage()
// console.log(message)

//параметри(аргументи)

// function calcSum(numOne, numTwo) {
//     console.log(`Переміна numOne:${numOne}`)
//     console.log(`Переміна numTwo:${numTwo}`)

//     let numSum = numOne + numTwo

//     console.log(`Summa:${numSum}`)
// }

// calcSum(1, 2)



//Функція колбеки
// function calcSum(numOne, numTwo, more, less){
//     let numSum = numOne + numTwo;

//     if (numSum > 3) {
//         more();
//     } else {
//         less();
//     }
// }

// function showMoreMessage() {
//     console.log('big chem 3')
// }

// function sowlessMessage() {
//     console.log('small chem 3')
// }
// calcSum(1, 5, showMoreMessage, sowlessMessage)


// return возравщає значення функції і зупинення її

// ФУнкціональне вираження

// let showMessage = function () {
//     console.log('Hello');
// };

// showMessage()


// СТрєлочні 

// let getMEssahe = (text, name) => {
//     let message = text + ',' + name + '!';
//     return message
// }

// console.log(getMEssahe('hello', 'vasya'))



// dz
// jd()
//  function jd() {
//     console.log('j')
// }

// if(2 > 1) {
//     function gf(){
//         console.log('k')
//     }
//       gf();
// }


// function showNUmber(num) {
//     console.log(num)
//     setTimeout(showNUmber, 1000, ++num);
// }
// setTimeout(showNUmber, 1000, 1)
// Так як показано зверху
// за таким принципом можна зробити секундомір


// function showNumber(num) {
//     console.log(num);
//     let timed = setTimeout(showNumber, 1000, ++num)
//     if (num ===6) {
//         clearTimeout(timed)
//     }
// }
// setTimeout(showNumber, 1000, 1)

//clearTimeout зупиняє дію setTmeout

// ------------------------------------------------------------------------------------
// Масиви

// let arrOne = [
//     'vanya',
//     'olya',
//     'sasha'
// ];
//або
// let arrOn= ['vanya', 'olya', 'sasha',]  

//разлічні типи масиву
// let arrTwo = [
//     "Kolya",
//     {
//         type: "35",
//         age: 36
//     },
//     true,
//     function () {
//         console.log('Hello, I am Kolya');
//     }
// ];



// багатомірні масиви
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// полученія масива 

// let arrOne = [
//     'Vanya',
//     'Sasha',
//     'olya',
// ]

// console.log(arrOne[1]); //Sasha
// console.log(arrOne[5]) //undefined
// що починається з 0

// Якщо вказаати позицію якої
//  немає то буде unfined


// довжина масива. Свойство Length

// let arrOne = [' vanya', 'Sasha', 'olya',]
// console.log(arrOne)
// console.log(arrOne.length)
//length поакуже скільки елементів в масиві

//доступ до масива 
/*
масив це є об'єкт і веде себе як об'єкт.
Наприклад, копіюється по силкі
 */

// let arr = [' vanya', 'Sasha', 'olya',]
// console.log(arr)

// let arrNew = arr

// arrNew.lenght = 2;

// console.log(arr)
// ці дії укоротять масив на два значення

// ізмєнєнія масива 
//  let arr = [' vanya', 'Sasha', 'olya',]

 // міняєм те що є
//  arr[0] = 'kolya';
//  console.log(arr)


// додаєм нове значення
// arr[3] = 'vanya';
// console.log(arr)


// методи масива 

// метод push - добавляє елемент в кінці масива

// let arr = ['vanya', 'sasha', 'olya',];
// arr.push('vasya');
// console.log(arr);

// arr.push('dima', 'katya');
// console.log(arr);

//метод shift - удаляє елемент в початку,
// так что вторий стає прешим і т.д.

// let arr = ['vanya', 'sasha', 'olya',];
// arr.shift()
// console.log(arr)

// Метод unshifht - добавляє елемень в початок масива

// let arr = ['vanya', 'sasha', 'olya',]
// arr.unshift('vasya');
// console.log(arr)

// arr.unshift('Dima', 'katya');
// console.log(arr)


/*
методи push/pop виполняються бистро,
а мєтоди shift/unshift повільно
*/

// удалєнія/додавання/ізмєнєнія конкретних елементів

// let arr = ['vanya', 'Sasha', 'olya',];

// delete arr[1];
// console.log(arr) 
// console.log(arr[1])
// console.log(arr.lenght)

// метод splice. Позволяє добавляти, удаляти і заміняти елементи

// удаляєм елемент
// let arrOne = ['vanya', 'Sasha', ' olya',];
// починаєм з першої позиції (Sasha), удаляєм один елемент
// arrOne.splice(1,1)
// console.log(arrOne)


// удаляєм елемент і повертаєм його в переміну
// let arrTwo = ['vanya', 'Sasha', 'olya',]
// let removed = arrTwo.splice(1, 1);
// console.log(removed)


// заміняєм елементи
// let arrThree = ['vanya', 'Sasha', 'olya',]
// починаєм з нульовою позиції (Vanya), заміним один елемент
// arrThree.splice(0, 1, 'kolya')
// console.log(arrThree)


// додаєм елемент
// let arrFour = ['vanya', 'Sasha', 'olya',]
// починаєм з першої позиції (Sasha), добавляєм два елементи 
// arrFour.splice(1, 0, 'kolya', 'masha')
// console.log(arrFour)


// удаляєм елемент
//  let arrFive = ['vanya', 'Sasha', 'olya',]
//  починає з останьої позиції(olya), удаляєм один елемент
// arrFive.splice(-1, 1)
// console.log(arrFive) 



// метод slice
// создає новий масив, в якому копіюється часть або весь масив

// Копіюється часть масива
//  let arrOne = ['vanya', 'Sasha', 'olya',];

//  починаєтья з першої позиції 'Sasha'
// до другої позиції 'olya' (не включая)
// let arrTwo = arrOne.slice(1, 2)
// console.log(arrTwo)

// починає з пред останьої позиції 'Sasha'
// до останьої 'olya' (не включая)
// let arrThree = arrOne.slice(-2, -1);
// console.log(arrThree)

// копіюється вест масив 
// let arrFour = arrOne.slice();
// console.log(arrFour)


// Мотад concat
// Создає нові масиви, в який копіюються дані з інших масивів
// і додаткові значення(в кінці масива)
// синтаксис arr.contact(arg1, arg2...)

// let arrOne = ['Vanya', 'Sasha', 'Olya',];
// let arrTwo = arrOne.concat('Petya')
// console.log(arrTwo)


//Пошук в масиві

// Методи iandexOf/lastIndexOf i includes
// аналоги строковим методам
/* 
1. arr.indexOf(item, from) шукає item, починає з індекса from
і повератає індекс, на якому був знайдений шуканий
елемент, в противному випадку -1
2. arr.lastIndexOf(item, from) - то же сам, но шукає з справа на літу
3. arr.include(item, from) - шукає item, починає з індекса from,
   і повертає true, якщо пошук успішний
*/


// let arr = ['Vanya', 'Sasha', 'Olya',]

//indexOf
// console.log(arr.indexOf('Sasha'))
// console.log(arr.indexOf('Vasya'))
// console.log(arr.indexOf('Sasha', 2))

//includes
// console.log(arr.includes('Sasha'))
// console.log(arr.includes('Vasya'))
// console.log(arr.includes('Sasha', 2));


// пошук в масиві 

// find i findIndex
// пошук в масиві об'єктів з опридільоними условіями

/*
 Синтаксис
 let result = arr.find(function(item, index, array){
    якщо true - повертається в тєкущий елемент і перебор преривається
    якщо ітерція оказалась непраивльною, повертається undefind
 })
*/

// let arr =[
// { name: 'Vasya', age: 36 },
// { name: 'Kolya', age: 18 },
// { name: 'Olya', age: 'не скажу'},
// ]

// let resultOne = arr.find(function (item, index, array){
//     return item.age === 18
// })

//оце знизу це стрєлочна функція 
//let resultOne = arr.find(item => item.age ===18);
// console.log(resultOne)


// findIndex
// let resultTwo = arr.findIndex(item => item.age ===18);
// console.log(resultTwo)


// Пошук в маисві 

// filter
// метод шукає всі елементи, на яких функція колбек верне true

/*
 let result = arr.filter(function(item, index, array){
    якщо true - елемент добавляється до результату, і перебор продовжується
    повератає пустий масив в випадку якщо нічого не найдено
})
*/

// let arr =[
// { name: 'Vasya', age: 36 },
// { name: 'Kolya', age: 18 },
// { name: 'Olya', age: 'не скажу'},
// ]

// let result = arr.filter(function (item, index, array) {
//     return item.age >= 18
// })
// console.log(result)



// Сортіровка масива

// метод Sort(fn)
// сортирує масив на місці, зміняє в ньому порядок елементів

// сортіровка слов
// let arrOne = ['Sasha', 'Vanya', 'Olya'];
// console.log(arrOne.sort())

// сортіровка чисел
// let arrTwo = [8, 22, 1,]
// console.log(arrTwo.sort())

//по замовчуваню елементи копіюються як строки
// для строк прімєняється лексикографічний порядок
// і дійсно виходе = що "8" > "22"
// console.log("8" > "22")

// функція сортіровки
// function compereNumeric(a, b) {
//     console.log(`Порівнюєм ${a} і ${b}`)
//     if (a > b) return 1
//     if (a == b) return 0
//     if (a < b) return -1

    //return a -b
// }
//console.log(arrTwo.sort((a, b) => a - b))

// console.log(arrTwo.sort(compereNumeric))


// Сортіровка масивів

// метод reverse
// міняє порядок елементів в масиві на обратний

// let arrOne = ['Vanay', 'Sasha', 'Olya'];
// console.log(arrOne.reverse())


// Преобразованіє масивів

// метод  map
// визиває функцію для каждого елемента масива 
// і повертає масив результатів виконання цієї функції
/*
let result = arr.map(function(item, index, array){
         повертає нове значення замість елемента 
})
*/

// let arr = ['Vanya', 'Sasha', 'Olya',];

// let result = arr.map(function (item, index, array) {
//     return item[0] //тут повертаєм першу букву кожного елемента
// })
// Let result = arr.map(item => item[0])
// console.log(arr) 
// console.log(result)

// item - це каждий елемент масива 
// index - це ключ масива, його розміщення
// array - це сам масив


// Метод split i join
/*
метод split преобразовує строку в
масив по заданому раздєлітєлю
синтаксис: str.split(delim)
*/

// let str = 'Vanya,Sasha,Olya'

// let arr = str.split(',')
// console.log(arr)


// можна огранічитися кол-во об'єктів 
// які попадуть в масив 

// let arrTwo = str.split(',', 2)
// console.log(arrTwo)



/*
метод split преобразовує строку в
масив з заданим раздєлітєльом
синтаксис: str.join(glue)
*/

// let arr = ['Vanya', 'Sasha', 'Olya',]
// let srt = arr.join(',')
// console.log(srt)


// отримання строк з масиву 
// let arrTwo = ['Vanya', 'Sasha', 'Olya',]
// console.log(String(arrTwo))


// при використовувані join ми можем указаати який буде розділітєль
// між словами, а оце в отримані строк з масиву розділітєль буде тільки кома 



// Перевірка Array.isArray()

/*
Нагадування, масиви не образують один тип даних,
Вони основані на об'єктах
*/

// let obj = {}
// let arr = []

// console.log(typeof obj)
// console.log(typeof arr)

// Як нам узнати де масив а де нєт?

// if (Array.isArray(arr)){
// console.log('Це масив')
// } else {
//     console.log('Це не масив')
//     }


// Перебор елементів
// let arr = ['Vanya', 'Sasha', 'Olya',]
// console.log(arr.lenght)

// цикл FOR
// for (let i=0; i < arr.lenght; i++) {
//     console.log(arr[i])
// }


// цикл FOR...OF
// МОжна використовувати для вивода значеній 
// let arr = ['Vanya', 'Sasha', 'Olya',]

// for (let arrItem of arr) {
//     console.log(arrItem)
// }



// метод перебора forEach
// Виконує функцію для кожного елемента масива
/*
arr.forEach(function (item, indedx, array){
        .....робити шось з item
})
 */

// let arr = ['Vanya', 'Sasha', 'Olya',]

// arr.forEach(function (item, index, array) {
//     console.log(`${item} находиться на ${index}, позиції в ${array}`)
// })

/*
   Среєлочна функція 
arr.forEach((item, index, array) {
console.log(`${item} находиться на ${index} позиції в ${array})
})
*/


// метод reduce/reduceRight

// let arrOne = [1, 2, 3, 4]
// let reduceValueOne = arrOne.reduce(function (previousValue, item, index, array){
//     return item + previousValue
// }, 0)
// console.log(reduceValueOne)

/*
Shag 1
previousValue = 0
item = 1
suma = 1

Shag 2
previousValue = 1
item = 2
suma = 3

Shag 3
previousValue = 3
item = 3
suma = 6

Shag 4
previousValue = 6
item = 4
suma = 10
*/
// let arrTwo = ['Vanya', 'Sasha', 'Olya',]
/*
Якщо не указати начальне значення, то воно буде 
дорівнювати першому елементу маисва(previousValue=Vanya)
А робота метода почнеться з другого елемента (item=Sasha)
*/
 
// let reduceValueTwo = arrTwo.reduce(function (previousValue, item, index, array){
//     console.log(previousValue)
//     console.log(item)
//     return `${item}, ${previousValue}`
// })
// console.log(`Користувач: ${reduceValueTwo}`)


// метод reduceRight працює так само тільки проходе зліва на право








// Домашка 
// 1
// яке число(дліну) ми получим?
// let arr = ['Vanya', 'Sasha', 'Olya',]
// let newArr = arr
// newArr.push('Petya')
// console.log(arr)
// console.log(arr.lenght)
// пише шо unfinded


// 2
// let arr = ['Vanya', 'Sasha',]
// arr.push('Olya');
// let removed = arr.splice(0, 1)
// arr.unshift('Masha', 'Pasha')
// console.log(removed)
// console.log(arr)


// 3 
// Удалити елемент Саша і вивести його в переміну
// let arr = ['Vanya', 'Sasha', 'Olya',]
// let removed = arr.splice(1, 1)
// console.log(removed)

// 4
// Зробити з строки масив
// let str = 'Vanya,Sasha,Olya'
// let arr = str.split(',')
// console.log(arr)

// 5
// Чому буде дорівнювати в началє роботи метода 
// let arr = [9, 2, 8,]
// let reduceValue = arr.reduce(function (previousValue, item, index, array) {
//     console.log(previousValue)
// })

// Бути дорівнювати 9



//! ------------------------------------------------------------------------------------------------------------------------------------------------------
//! ОБ'ЄКТИ


// Створення об'єкта 

// let userInfo = new Object() // синтаксис "конструктор об'єкта"
// let userInf  = {} // синтаксис "літерал об'єкта"

// Свойства об'єкта. Ключ + значення

// let userInfo = {
//    name: "Vasya", // свойства об'єкта
//    age: 30, // Остання (вiсячая) кома
// };

// console.log(userInfo)  //щоб получити весь об'єкт
// console.log(userInfo.name); //щоб получити конкретне значення


// Імєнi свойствa

// ім'я з двух або більше слова
// let userInfo = {
//     name:"Vasya",
//     age: 30,
//     "likes javascript": true,
// };
// console.log(userInfo.name)
// console.log(userInfo["likes javascript"])


// вичисляєме або передаваєме ім'я

// вичисляєм ім'я
// let firstPart = "likes"
// let userInfo = {
//     name: "Vasya",
//     age: 30,
//     [firstPart + "javascript"]: true,
// };
// console.log(userInfo["likes javascript"]);


// передаєм ім'я
// let firstPart = "likes"
// let userInfo = {
//     name: "Vasya",
//     age: 30,
//     [firstPart]: true,
// };
// console.log(userInfo[firstPart])


// Прімущество квадратних скобок
// let key = "name"
// console.log(userInfo[key])


// В качестві імені може бути строка або символ 

// let userInfo = {
//    0: "Vasya",
// }
// console.log(userInfo[0])
// console.log(userInfo["0"]);


// Тип даних Symbol

// Создаєм символ id з опісаніям (іменем) "id"
// let id = Symbol("id")
// let userInfo = {
//     name: "Vasya",
//     age: 30, 
//     [id]: "якесь значення"
// };
// console.log(userInfo)

// Основні прімєнєніє символів
// 1. "Зкритя" свойства об'єктів
//   Символічне свойство не появиться в for...in
// 2. Використання системних символів 
//    Symbol.iterator, Symbol.toPrimitive і т.д.


// Вложеність

// let userInfo = {
//     name: "Vasya",
//     age: 30,
//     address: {
//         city: "Uzhhorod",
//         street: "Freedom",
//     }
// }
// console.log(userInfo)
// console.log(userInfo.address);
// console.log(userInfo.address.city)


// Свойства з переміної 
// function makeUserInfo(name, age) {
//     return {
//         name: name,
//         age: age,
        // ...інші свойства 
//     }
// }
// let user = makeUserInfo("Vasya", 30)
// console.log(user)


// ізмєнєнія об'єкта

// добавлєнія свойства 
// let userInfo = {
//     name: "Vasya"
// }
// console.log(userInfo)

// userInfo.age = 30

// console.log(userInfo)

// userInfo['likes javascript'] = true

// console.log(userInfo)

// userInfo.address = {
//     city: "Uzhorod",
//     street: "Freedom"
// };

// console.log(userInfo)


// видалення свойства

// let userInfo = {
//     name: "Vasya",
//     age: 30,
//     "likes javascript": true
// }
// console.log(userInfo);

// delete userInfo.age 

// console.log(userInfo)

// delete userInfo["likes javascript"]

// console.log(userInfo)


// ізмєнєнія свойства 

// let userInfo = {
//     name: "Vasya",
//     age: 30,
// }
// console.log(userInfo)

// userInfo.age = 18

// console.log(userInfo)

// ізміняти можна даже в константі
// const userInfo = {
//     name: "Vasya",
//     age: 30,
// }
// console.log(userInfo)

// userInfo.age = 18

// console.log(userInfo)



// Копіювання об'єкта 

// при копіювані об'єкта в другу преміну 
// сам об'єкт не дублірується, а копірується силка на нього

// let userInfo = {
//     name: "Vasya",
//     age: 30,
// }
// console.log(userInfo)

// let user = userInfo

// console.log(user)

// user.age = 18

// console.log(userInfo)


// дублірованіє об'єктов (object.assign)

// Синтаксис
// Object.assign(куда(об'єкт), що(свойства №1), що(свойства №2), ...)

// let userInfo = {
//     name: "Vasya",
//     age: 30,
// }

// let user = Object.assign({}, userInfo)

// user.age = 18

// console.log(userInfo)
// console.log(user)


// також за допомогою Object.assign можна додавати свойства в об'єкт

// let userInfo = {
//     name: "Vasya",
//     age: 30,
// }
// Object.assign(userInfo, { ['likes javascript']: true, city: "Uzhhorod"})
// console.log(userInfo)


// Провєрка существованія свойства 

// let userInfo = {
//     name: "Vasya",
//     age: 30,
// }
// console.log(userInfo.age)
// Якщо немає такого совйтсва тов консолі буде undefind

// if (userInfo.age) { //true або false
//     console.log(userInfo.age)
// }


// опциональна провєрка 

// let userInfo = {
//     name: "Vasya",
//     age: 30,
//     address: {
//         city: "Uzhhorod",
//         street: "Freedom"
//     }
// }
// console.log(userInfo?.address?.street)
0

// оператор in

// let userInfo = {
//     name: "Vasya",
//     age: 30,
//     address: {
//         city: "uzhhorod",
//         street: "Freedom",
//     }
// }
// if ("name" in userInfo) {
//     console.log(userInfo.name)
// }



// цикл for_in

// для перебора всіх свойств об'єкта використовується цикл for..in
// цей цикл відрізняється від вивченого раніше цикла for(;;)

// for (let key in object) {
    // тіло цикла виконується для кожного свойства об'єкта
// }

// let userInfo = {
//     name: "Vasya",
//     age: 30,
//     address: {
//         city: "Uzhorod",
//         street: "Freedom",
//     }
// }

// for (let key in userInfo) {
    // ключі
//     console.log(key); // naem, age, address
    // значення ключів
//     console.log(userInfo[key]) // Vasya, 30, Object
// }

// for (let key in userInfo.address) {
    //ключі
//     console.log(key) // city, street
    // значення ключів
//     console.log(userInfo.address[key]) // Uzhorod, freedom
// }


// Методи об'єкта 

// let userInfo = {
//     name: "Vasya",
//     age:30,
//     address: {
//         city: "Uzhhorod",
//         street: "Freedom",
//     },
//     showInfo() {
//         console.log(`${userInfo.name}, ${userInfo.age} років. Адрес: г.${userInfo.address.city}, вул.${userInfo.address.street}`)
//     }
// }
// userInfo.showInfo()



// використовування "this"

// let userInfo = {
//     name: "Vasya",
//     age: 30,
//     address: {
//         city: "Uzhorod",
//         street: "Freedom",
//     },
//     showInfo() {
//         console.log(`${this.name}, ${this.age} років. Адрес: г.${this.address.street}`)
//           console.log(`${userInfo.name}, ${userInfo.age} років. Адрес: г.${userInfo.address.street}`)
//     }
// }
// userInfo.showInfo()

// let user = userInfo
// userInfo = null
// user.showInfo() 


// Функція конструкторк

/*
Обичний синтаксис створення об'єкта{...} позволяє создати
тільки один об'єкт. Но за часто нам треба создати множество 
однотипних об'єктів, таких як пользоватєлі, едементи меню і т.д.
Це можна зробити при допозі функції - конскруктора і оператора "new"
*/
/*
функції - конструктори являються обичними функціями
но є два правила:
1. імя функції - конструктора повині починатися з великою букви
2. Функції - конструктор повина визиватися за допомогою оператор "new"
*/

// function UserInfo(name) {
    // this = {}; Создається пустий об'єкт (неявно)

    // this.name = name;
    // this.age = 30

    // return this; Повертає об'єкт (неявно)
// }

// console.log(new UserInfo('Vasya'));
// console.log(new UserInfo('Lena'))





// Домашка
// 1
// const userInfo = {
//     name: "Vasya",
//     age: 30
// }
// було не правильно записано, запис був без коми

// 2
// let userInfo = {
//     name: "Vasya",
//     age: 30,
//     "58": 'Значення свойства'
// }
// console.log(userInfo[58])
// в консолі буде "Значення свойства"

// 3
// let userInfo = {
//     name: "Vasya",
//     age:30
// }
// let user = userInfo
// user.age = 45

// console.log(userInfo.age)
// в консолі буде 45

// 4
//  let userInfo = {
//     name: "Vasya",
//     age:30,
//     showInfo() {
//         console.log(`${this.name}`)
//     }   
// }
// let user = userInfo
// userInfo = null
// user.showInfo()
// в консолі буде тільки ім'я "Vasya"

// 5
// let userInfo = {
//     name: "Vasya",
//     age:30,
// }
// for (const key in userInfo) {
//     const value = userInfo[key]
//     console.log(value)
// }
// в консолі буде "Vasya" "30"

// 6
// let userInfo = {
//     name: "Vasya",
//     age:30,
//     address: {
//         city: "Uzhhorod"
//     }
// }
// for (const key in userInfo.address) {
//     console.log(userInfo.address[key])
// }
// в консолі буде "Uzhhorod"

// 7
// const userInfo = {
//     name: "Vasya", 
//     age: 30,
//     "likes js": true
// }
// console.log(userInfo["likes js"])
// запис був записаний не правильно, треба було записати без точки і з []


// 8
// let userInfo = {

// }
// Object.assign(userInfo, {name: "Vasya", age: 30})
// console.log(userInfo)

// userInfo.name = "Lena"
// console.log(userInfo)

// delete userInfo.name
// console.log(userInfo)




//!------------------------------------------------------------------------------------------------------------------------------------
//оператор ...rest/...spread

// const number1 = [1, 2, 3, 4, 5]
// const number2 = [6, 7, 8]

// const allNumber = [...number1, ...number2, ]
//Це ми об'жнали два масива в один за допомогою spred оператора, ще можем поставити цифри в різних місцях

// Math.max(...number2)

// function sum(a, b, c) {
//     return a + b + c
// }
// sum(...number2)

// const obj1 = {
//     name: 'Anna',
//     x: 20
// }
// const obj2 = {
//     name: 'Boris',
//     y: 99
// }
// const newObjClonne1 = {...obj1}
//можна копіювати об'єкти за допомогою цього оператора
// const mergedObj = {...obj1, ...obj2}
// тут ми поєднували два об'єкта



// function sum(a, b, ...args) {
//     let result = a + b
//     for (let i = 0; i < args.length; i++) {
//         result += args[i]
//     }

//     return result
// }
// тут використовуєм для функції в якій не знаєм скільки об'єктів 





// DOM
// const windowWidth = window.innerWidth
// console.log(`Ширина вікна браузера: ${windowWidth}px`)

//  BOM

// Navigator
/*
за допомогою об'єкта navigator,
ми можем получити інформацію 
про браузер і операційну систему 
*/

// Браузер
// console.log(navigator.userAgent)

// if (navigator.userAgent.includes("Chrome")) {
//     console.log('Браузер Хром')
// } else if (navigator.userAgent.includes("Firefox")) {
//     console.log('Браузер Firefox')
// }
// платформа
// console.log(navigator.platform)


// location

/*
за допомогою об'єкта location ми можем
получити тєкущий URL або
перенаправити браузер по новому адресу
*/
// Получаєм URL
// console.log(location.href)
// міняєм URL
// location.href = "https://fls.guru"


// History
/*
об'єкт history позволяє
управляти історією браузера,
передвигатися по посіщьоним сторінкам
*/

// history.back()
// history.forward()



// Alert
// alert("Hello") 
// Це просто виведеться текств вікно

// Confirm
// const confirmResult = confirm("Хочеш навчу літати?")
// console.log(confirmResult)
// тут так само тільки тут дві кнопочки "OK" або "отмєна"

// Promt
// const promptResult = prompt("Хти ти по житю?")
// console.log(promptResult)
// Тут щей можна вести свій текст на відповідь



// DOM
// Навігація по документу

/*
Самі верхні елементи дерева 
доступні як совйтсва об'єкта document
*/
// const htmlElement = document.documentElement
// const headElement = document.head
// const bodyElement = document.body
// console.log(htmlElement)
// console.log(headElement)
// console.log(bodyElement)



// const bodyElement = document.body
// Перший і останій дочерній елемент
// const firstChildNode = bodyElement.firstChild
// const lastChildNode = bodyElement. lastChild

// console.log(firstChildNode)
// console.log(lastChildNode)


// отримуєм об'єкт body
// const bodyElement = document.body

// Колекція childNodex содерже список всіх елментів дітей
// включая текстові узлиd

// const childNodes = bodyElement.childNodes 
// console.log(childNodes)

// Для перевірки налічия дочерніх узлов 
// существує также спеціальна функція hasChildNodes
// показує всі елементи шо лежить в елементі body
// console.log(bodyElement.hasChildNodes())

/*
Як ми уже бачили,
childNodes похожий на масив. На самом дєлі це не масив,
а колекція - омобий перебираємий об'єкт - псевдомасив

Чим відлічаються від масивів:
1.Для перебора колекції ми можемо використовувати for...of
2.Методи масивів не будуть працювати, тому що
колекція - це не масив 
*/

// перебор колекції
// for (let node of childNodes) {
//     console.log(node) // покаже всі узли із колекції
// }


// отримуєм об'єкт body
// const bodyElement = document.body

// отримуєм колекцію дочірніх вузлів
// const childNodes = bodyElement.childNodesz

// перебор колекції
// for (let node of childNodes) {
//     console.log(node) //покаже всі узли із клекції
// }

// "Живі" колекції
/*
Почті всі DOM-колекції, за невеликим виключенням "живі".
Іншими словами, вони відображають поточне состоянія DOM
Якщо м и збережемо силку body.childNodes і добавим/удалим 
узли в DOM, то вони появляться в збереженій колекції автоматично
*/

// Тільки для читання
/*
DOM-колекції, і даже болєє - всі навігаційні свойства,
перечисляємі далі, доступні тільки для читання.
Ми не можем замінити один дочірній вузол на інший,
просто написав childNodes[i]....
Для видозмінення DOM потребуються інші методи
*/


// const bodyElement = document.body

// Сусідні і батьківсткі вузли
// const previousSiblingNode = bodyElement.previousSibling
// const nextSiblingNode = bodyElement.nextSibling
// const parentNode = bodyElement.parentNode

// console.log(previousSiblingNode)
// console.log(nextSiblingNode)
// console.log(parentNode)



1

// const bodyElement = document.body 

/*
Навігаційнй свойства, описані вище, відносятся 
до всіх вузлів в документах
В частності, в childNodes знаходяться і текстові вузли і 
вузли-елементи і вузли-коментарі, якщо вони є
*/

// отримуєм колекцію всіх дочірніх вузлів
// const childNodes = bodyElement.childNodes
// console.log(childNodes)

/*
Но для більшості задач текстові вузли і
вузли-коментарі нам не потрібні. Ми хочем маніпулювати
вузлами-елементами, котрі представляють собою і
формують структуру сторінки
*/

// Отримуєм колекцію всіх дочірніх елементів 
// const bodyChildren = bodyElement.children;
// console.log(bodyChildren)



// Навігація тільки по елементу 
// const bodyElement = document.body

// Перший і останій дочерні елементи 
// const firstChild = bodyElement.firstElementChild
// const lastChild = bodyElement.lastElementChild
// console.log(firstChild)
// console.log(lastChild)

// Сусідні і батьківські елементи 
// const previousSibling = bodyElement.previousElementSibling
// const nextSibling = bodyElement.nextElementSibling
// const parentElement = bodyElement.parentElement

// console.log(previousSibling)
// console.log(nextSibling)
// console.log(parentElement)



// пошук проізвольних елементів

// elem.querySelectorAll(CSS)
/*
Самий універсальний метод пошуку, він
повертає всі елементи всередені elem,
задовольняющі даному CSS-селектору.
Цей метод дєйствітєльно мощний,
тому що можна використовувати любий CSS-селектор
*/

// Пошук по селектору класа
// const elemsOne = document.querySelectorAll('.lesson__list')
// console.log(elemsOne)

// // Пошук по селектору тега 
// const elemsTwo = document.querySelectorAll('li')
// console.log(elemsTwo)

// // Пошук по змішаному слекторі тега і класа
// const elemsThree =
// document.querySelectorAll('li.lesson__item-list')
// console.log(elemsThree)

// // Пошук по тегу першого уровня вложеності 
// const elemsFour = 
// document.querySelectorAll('.lesson__list-li')
// console.log(elemsFour)

// // Пошук по декількам класам
// const elmsFive = 
// document.querySelectorAll('.lesson__list, .lesson__text')
// console.log(elmsFive)

// // Пошук по вложеним класам
// const elemsSix = 
// document.querySelectorAll('.lesson__list .lesson__text')
// console.log(elemsSix)

// // Пошук по ID
// const elemsSeven = 
// document.querySelectorAll('#listItem')
// console.log(elemsSeven)

// // Пошук по атрибуту
// const elemsEight = 
// document.querySelectorAll('[data-item]')
// console.log(elemsEight)

// // Пошук по атрибуту зі значенням 
//  const elemsNine = 
//  document.querySelectorAll('[data-item="85"]')
//  console.log(elemsNine)


// querySelectorAll - статична колекція

// Получена конкретного елемента колекції
// const elems = document.querySelectorAll('li')
// console.log(elems[2])


// for (const item of elems) {
// console.log(item)
// }
//  Пробігає по всім даним колекції і виводе їх в консоль
/*
elems.forEach(item => {
    console.log(item)
}) 
    */


// Шукати можна не тільки в document

// const subList = document.querySelectorAll('.lesson__sub-list')
// const subItems = subList[0].querySelectorAll('li')
// console.log(subItems)



// Неожиданий результат пошука

// const subList = 
// document.querySelectorAll('.lesson__sub-list')
// const listItems = 
// subList[0].querySelectorAll('.lesson__list . lesson__item-sub-list')
// console.log(listItems)
/*
В даному прикладі,
коли ми вибрали '.lesson__list . lesson__item-sub-list'
в контексті <ul> з класом "lesson__sub-list", елемент з класом 
".lesson__item-sub-list" були все рівно знайдені, хотя 
.lesson__list не являється потомком елемента в якому здійснювався 
пошук (".lesson__sub-list")

По замувчуваню, querySelectorAll() перевіряє тільки останій
елемент без учота контекста 
*/



// elem.querySelector(CSS)
//повертає перший елемент всередині elem, відповідающуму 
// даному CSS-селектору 

// const lessonList = document.querySelectorAll('.lesson__list')[0]
// const lessonList = document.querySelector('.lesson__list')
// console.log(lessonList)



// document.getElementByld(ID) i elem.getElemntsBy
/*
На даний момент, вони використовуються рідко,
так як querySlectorAll моеж їх замінити
но відміність все таки є
*/

// document.getElementByld(ID)
/*
Якщо у елемента є атрибут id,
то ми можем получити його виховом document.getElementByld(id),
де би він не знаходився
*/
// const elem = document.getElementByld('listItem')
// console.log(elem)

// 1. id - унікальний
// 2. Пошук тільки всередині document



// getElementsBy

/*
 elem.getElementsByTagName(tag)
 шукає елемент з даним тегом і повертає їх колекції.
 "'" замість тега, можна полічити всіх потомків
 */
// const elems = document.getElementsByTagName('li')
// console.log(elems)


/*
elem.getElementsByClassName(className)
повертає елементи, яка має даний CSS клас
*/
// const elems = document.getElementByClassName('lesson__item-list')
// console.log(elems)


// ПОлучаєм статичну колекцію
// const listStatic = document.querySelectorAll('.lesson__item-list')

// ПОлучаєм "живу" колекцію
// const listLive = document.getElementsByClassName('lesson__item-list')

// console.log(listStatic)
// console.log(listLive)


// Створюєм новий HTML об'єкт
// const lessonList = document.querySelector('.lesson__list')
// lessonList.insertAdjacentHTML(
//     "beforeend",
//     '<li class="lesson__item-list">Новий пункт</li>'
// )


// Пошук довільного елемента 
/*
Частіше всього використовується querySelectorAll,
всі інші викорстовуються в той випадок коли треба їхні унікальні возможності
наприклад колт треба отримати один об'єкт або получити "живу" колекцію
*/


// closest
/*
Метод elem.closest(css) шукає найближчого предка,
який відповідає CSS - селектору. Сам елемент
також включається в пошук
*/

// const elem = document.querySelector('.lesson__item-sub-list')
// const parentList = elem.closest('.lesson__list')
// console.log(parentList)

/*
Дуже корисний метод, часто використовуєтя для перевірки 
на существованія того або другого родітєля, або для того ізмєнєнія
родітєля конкретного елемента
*/


// Перевірка matchers

/*
Нічого не шукає, а провіряє, задовольняє лі
елемент CSS-селектору, і повертає true або false
*/

// const elems = document.querySelectorAll('.lesson__item-lisr')
// for (let elem of elems) {
//     if (elem.matchers(`[class$="lesson__item-list_red"]`)) {
//         console.log('Червоний')    
//     } else if (elem.matchers(`[class$="lesson__item-list_blie"]`)){
//         console.log('Синій')
//     }
// }


/*
Стоє добавити, що получив об'єкт тим або іним способом
ми можем примінити свойства навігації о яких говорили раніше
*/

const text = document.querySelector('.lesson__text')
const list = text.nextElementSibling
console.log(list)




