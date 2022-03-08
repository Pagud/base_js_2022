
// const myVar1 = 10
// const myVar2 = 10
// if (myVar1 > myVar2){
//     console.log(`верно! ${myVar1} больше ${myVar2}`);
// }
// else if (myVar1 < myVar2 ) {
//     console.log(`${myVar1} меньше ${myVar2}`);
// }
// else{
//     console.log("end");
// }
// let result = myVar1 > myVar2 ? console.log(true) : console.log(false); // тернарный оператор

// // конструкция switch

// const userRole = "admin";

// const userRole = 'normal_user';

// switch(userRole){
//     case "student":
//         console.log("текущий пользователь - student");
//     case "admin":
//     console.log("текущий пользователь - admin");
//     break;
//     case "normal_user":
//         console.log("текущий пользователь - normal_user");
//         break;
// default:
//     console.log("нет такого типа пользователя");
//     break;
// }

// логические операторы
// && - логическое И - возвращает первое значение FALS
// || - логическое ИЛИ  -  возвращает первое значение TRUE
// ! - логическое не

// console.log(1 || 0);
// console.log(1 && 2 && "строка" && 0 && 1);

// console.log((1 && 2) || (4 && 0));

// логическое НЕ
// 1. JS приводит значение после ! к булиевому типу
// 2. меняет полученны тип на противоположный 
// const myVar = !!5;

// console.log(myVar);

// console.log(null || 0 ||  "" || undefined);

// console.log('яблоко' && true && null && 1);

// console.log(0 || (true && '123') || null);

// console.log((0 && true) || ('123' && null));

// console.log(!0 && !!1);

// console.log(!(null || (!"апельсин" && true)));

///Практика

//Задача 1

// const intervalOne = 5123;
// const intervalTwo = 2;
// const intervalThree = 8;

// if (intervalOne > intervalTwo && intervalOne > intervalThree) {
//   console.log(`${intervalOne} - самый большой отерзок`);
// } else if (intervalTwo > intervalOne && intervalTwo > intervalThree) {
//   console.log(`${intervalTwo} - самый большой отерзок`);
// } else if (intervalThree > intervalOne && intervalThree > intervalTwo) {
//   console.log(`${intervalThree} - самый большой отерзок`);
// }

// const currentTemp = -30;

// if (currentTemp <= -30) {
//     console.log("оставайтесь дома");
// }
// else if (currentTemp > -30 && currentTemp <= -10){
//     console.log("сегодня холодно");
// }
// else if (currentTemp > -10 && currentTemp <= 5){
//     console.log("не холодно");
// }
// else if(currentTemp > 15 && currentTemp <= 25){
//     console.log("очень тепло");
// }
// else if (currentTemp > 25 && currentTemp < 35){
    
// }else{
//     console.log("пекло");

// Цикл While DO While
// let myVar = 0
// while (myVar >= 0 && myVar <= 10){
//     console.log((myVar += 1));
// }

// do {
//     console.log((myVar += 1));
// } while(false);


// FOR

// const myVar = 10;
// for (let i = 0; i <= myVar; i++){
//     console.log(i);
//     if(i === 5) break;


// let carAmount = 60; // N
// const minCarsAmount = 10; // M





// вывести в консоль заданную строку N раз

//const iterationText = "Итерация";

// while

//  const limit = 5;
// // let counter = 1;
// // while(counter <= 5) {
// //     console.log(`${iterationText} - ${counter}`);
// //     counter++;
// // }

// // do {
// //     console.log(`${iterationText} - ${counter}`);
// //     counter++
// // } while (counter <= limit);

// // FOR
//  for (let counter = 1; <= limit; counter++){
//      console.log(`$iterationText - ${counter}`);
//  }


// Автомобили

// let carAmount = 60;
// const minCarsAmount = 10;

// for (let day = 1; carAmount > minCarsAmount; day++){
//     carAmount /= 2;
//     if (carAmount < minCarsAmount){
//         console.log(`на ${day} день`);
//         break;
//     }
// }
const startYear = 1800;
const endYear = 2020;

let leapYearsAmount = 0;
// const firstSpaceTripYear = 1961;

// for(let counter = startYear; counter <= endYear; counter++){
//     if (counter === firstSpaceTripYear){
//         console.log(`${firstSpaceTripYear} - первый полёт в космос`)
//         console.log(`Колличество итераций - ${counter - startYear}`);
//         break;
//     }
// }

for (let year = startYear; year <= endYear; year++); {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        console.log(year);
        leapYearsAmount += 1;
    }
}
if (year === endYear){
    console.log(`Количество високосных лет - ${leapYearsAmount}`);
    console.log(`Количество итераций - ${year - startYear}`);
}








