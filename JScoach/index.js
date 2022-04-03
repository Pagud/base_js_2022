// const a = 1;
// if (a === 0) {
//     console.log("Верно")
// } else {
//     console.log("Неверно")
// };

// a === 0 ? console.log("Верно"): console.log("Неверно");

// ДОМАШНЯЯ ПРАКТИКА

// 1 Вывести в терминал строку “Hello World!”

// console.log("Hello World!");

// 2 Создать переменную для каждого типа данных

// const age = 10; // числа
// console.log(age);

// let name = "Ivan"; // строки
// console.log(name);

// let isUser = false; // boolean
// let isNotUser = true; //boolean

// let nameUser = null; // null
// console.log(nameUser)

// let userName; // undefiend
// console.log(userName);

// object
// let user = {
//     name: "Ivan",
//     age: "18",
// };
// console.log(user);

// тип simbol используется для создания уникальных переменных то же что и строка или число

//тип bigint может большие цыфры больше и меньше 52 степени

// 3 Вывести ее тип через оператор typeof и функцию typeof
// console.log(typeof 42); //NaN
// console.log(typeof 'Ivan');
// console.log(typeof true);
// console.log(typeof null); //объект
// console.log(typeof asfddsgs); //undefiend

// Попробовать изменить переменную объявленную через const
// const age = 10;
// let age = 11

// Попробовать изменить переменную с типом object объявленную через const

// const user = {
//     name: "Dima",
//     age: 33,
// };
// user.name = "Olesya";
// console.log(user.name);

// Попробовать изменить переменную с типом object объявленную через let

// let user = {
//     name: "Dima",
//     age: 33
// };
// user = "Olesya";
// console.log(user);

// var user = {
//     name: "Dima",
//     age: 33,
// };
// user = "Olesya";
// console.log(user);

// Дайте ответ, что будет в результате выполнения данных ниже примеров. С объяснением, почему это так.

// "кот" > "код"  true
// "2" + 2 * "2"  24 //конкатенация
// undefined == null true равны (правило) только при не строгом сравнении
// undefined != null  //false сравнение разных типов
// null == 0 //fals правило null тоько null
// 2 > "3" // false 2 меньше чем 3
// null - false + true //1
// 1 / "l" // 1
// "2" * "3" //6
// 4 + 5 + "O" //9O //конкатенация
// "l" + 4 + 5 //145 //конкатенация
// "4" - 2 // 2
// "4" - "4x" // NaN
// “23” == 23 // true
// null == false // false
// " -4 "/ 0 + 1 // -infinity
// null + 1 // 1
// undefined + null // NaN запомнить!!!
// 1 === “1” //false //сравнение типов (строгое равенство)
// “2” > 10 // false
// NaN == undefined //false

// console.log(typeof('Ivan' / 4)); //number так как есть знак / который приводит строкку к числу

// Работа с if-else

//  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const a = 1;
//     if (a === 0) {
//     console.log("верно")
// }
// else {
//     console.log("неверно")
// };

//  Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const a = 1;
// if (a > 0) {
//     console.log("Верно")
// } else {
//     console.log("Невеоно")
// };

// Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const a = 1;
// if (a < 0) {
//     console.log("Верно")
// } else {
//     console.log("Неверно")};

// Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const a = 1
// if (a >= 0) {
//     console.log("верно")
// } else {
//     console.log("неверно")
// };

// Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const a = 1
// if (a <= 0) {
//     console.log("верно")
// } else {
//     console.log("неверно")
// };

// Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

// const a = 1;
// if (a !== 0) {
//     console.log("верно")
// } else {
//     console.log("неверно")
// };

// Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

// const a = 'test';
// if (a === 'test'){
//     console.log('верно')
// } else {
//     console.log('неверно')
// };

// Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.

// const a = 1;
// if (a === '1'){
//     console.log('верно')
// } else {
//     console.log('неверно')
// };

// Работа с логическими переменными

// Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

//1
// const test = "1";
// if (test){
//     console.log('верно')
// } else {
//     console.log('неверно')
// };

//2
// const test = 0;
// if (!test){
//     console.log('верно')
// } else {
//     console.log('неверно')
// };

// Работа с && (и) и || (или)
// Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// const a = 1;
// if (a > 0 && a < 5){
//     console.log('верно')
// } else {
//     console.log('неверно')
// };

// Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = 3;
// if (a == 0 || a == 2) {
//     a += 7
// } else {
//     a /= 10
// };
// console.log(a)

// Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

// const a = 1;
// const b = 3;
// if (a <= 1 && b >= 3){
//     console.log(a + b)
// } else {
//     console.log(a - b)
// };

// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// const a = 3;
// const b = 7;
// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//     console.log('верно')
// } else {
//     console.log('неверно')
// };

// На switch-case

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

// const num = 1;
// let result = "";
// switch (num) {
//   case 1:
//     result = "зима";
//     break;
//   case 2:
//     result = "Весна";
//     break;
//   case 3:
//     result = "лето";
//     break;
//   case 4:
//     result = "осень";
//     break;
//     default: "num не существуе";
//     break;
// }
// console.log(result);

// ПРАКТИКА ИЗ ЛЕКЦИЙ

// const intervalOne = 1222;
// const intervalTwo = 33;
// const intervalThree = 10;

// if(intervalOne > intervalTwo && intervalOne > intervalThree) {
//     console.log(`${intervalOne} самый длинны отрезок`);
// } else if (intervalTwo > intervalOne && intervalTwo > intervalThree) {
//     console.log (`${intervalTwo} самый длинный отрезок`);
// } else if (intervalThree > intervalOne && intervalThree > intervalTwo) {
//     console.log(`${intervalThree} самый большой отрезок`)
// };

// const temperature = -5;
// if (temperature < -30) {
//     console.log('оставайтесь дома')
// } else if (temperature === -30 || temperature <= -10) {
//     console.log('сегодня холодно')
// } else if(temperature === 10 || temperature <= 5) {
//     console.log('не холодно')
// } else if(temperature === 5 || temperature <= 15) {
//     console.log('тепло')
// } else if(temperature === 15 || temperature <= 25) {
//     console.log('очень тепло')
// } else if(temperature === 25 || temperature <= 35) {
//     console.log('жарко')
// } else if(temperature >= 35) {
//     console.log('пекло')
// };

// const newUser = { // найти задачу
//   name: "Pasha",
//   role: "student",
//   birthDate: "23.03.1989",
// };
// let result = "";
// switch (newUser) {
//   case 1:
//     result = "name";
//     break;
//   case 2:
//     result = "role";
//     break;
//   case 3:
//     result = "birthDate";
//     break;
// }
// console.log(newUser);

// Циклы while и for

// Выведите столбец чисел от 1 до 100.
// let myVar = 1
// while (myVar <= 99) {
//     console.log(myVar);
//     myVar+=1
// }

// let myVar = 11
// while (myVar <= 33) {
//     console.log(myVar);
//     myVar += 1
// };

//  Выведите столбец чисел от 11 до 33.
// for(let i = 11;i <= 33; i++) {
//     console.log(i);
// }

// Выведите столбец четных чисел в промежутке от 0 до 100.
// for (let i = 2; i <= 100; i++){
//     if(i % 2 == 0) {
// console.log(i)
//     };
// }

// вывести строку N раз

// const n = 2;
// for(let i = 0; i <= n; i++){
//     console.log(i)
// };

// let newStr = 10;
// while (newStr >= 10 && newStr <= 40) {
//   console.log(newStr);
//   newStr += 1;
// }

// const limit = 12;
// let newStr = 1;
// // while (newStr <= 10) {
// //   console.log(`${limit} - ${newStr}`);
// //   newStr++;
// // }

// do {
//     newStr++
//     while(newStr <= limit)
//     console.log(`${limit} - ${newStr}`);
// }

// let str = 0; // спросить почему 55??
// for (let i = 1; i <= 10; i++) {
//   str += i;
// }
// console.log(str);
// потому что идет сложение итераций
// 0+1
// 1+2
// 3+3
// 6+4
// 10+5
// ...

// Ежедневно количество доступных автомобилей в салоне уменьшается в два раза. Выяснить, на какой день продаж, количество доступных к покупке авто станет меньше M, если известно, что в первый день продаж всего было N автомобилей.

// let carAmount = 500;
// const minCarsAmount = 10;

// for (let day = 1; carAmount > minCarsAmount; day++) {
//   carAmount /= 2;
//   if (carAmount < minCarsAmount) {
//     console.log(`на ${day} день`);
//     break;
//   }
// }

// сделать с пашей тяжело для понимания записать видео! (подгядывать нет смысла)

// Проанализировав временной промежуток начиная  с 1800 и до 2020 года найти и вывести в консоль:
// Год первого полета человека в космос и количество итераций которое потребовалось для поиска.
// Количество високосных годов принадлежащих данному отрезку и количество итераций которое потребовалось для поиска.

