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
 let arr = [' vanya', 'Sasha', 'olya',]

 // міняєм те що є
 arr[0] = 'kolya';
 console.log(arr)


// додаєм нове значення
arr[3] = 'vanya';
console.log(arr)


// методи масива 
