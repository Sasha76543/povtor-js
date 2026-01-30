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
FirstFor: for(let num = 0; num <6; num++) {
    for (let size = 0; size <4; size++) {
        if(size === 6){
            break FirstFor;
        }
        console.log(size)
    }
}
//коли 5 раз прокручується перший for а він так
//  прокручується що рахується в консолі 5 раз від 0 до 3 по другому for
// і як воно прокрутилося 5 раз то воно потім зупиняється
