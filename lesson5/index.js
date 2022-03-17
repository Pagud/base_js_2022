// function decloratiom - обьявление функции
// function Expression - функциональное выражение
// arrow function - стрелочна функция

// function showMessage() {
//     console.log('hellow');
// }
// showMessage();

// const user = 'Vasya';

// function greetUser(name){
//     console.log(`Привет, ${name}`);
// }
// greetUser(user);

// const user = {
//     name: "Vasya",
//     age: 18,
//   };
  
//   function checkAccess(age) {
//     if (age < 18) {
//       showDeniedMsg();
//     } else {
//       showAllowedMsg();
//     }
//   }
  
//   function showAllowedMsg() {
//     console.log("Доступ разрешен");
//   }
  
//   function showDeniedMsg() {
//     console.log("Доступ запрещен");
//   }
  
//   checkAccess(user.age);
  
//   function calcVaule (a, b) {
//       const result = a + b;
//       return result;
//   }
//   const result = calcVaule(3, 5);
//   console.log(result);

// const user = {
//     name: "Vasya",
// };
// const greetMsg = 'Привет';
// function getNAme(user) {
//     return user.name || 'гость'
// }
// function sayHi(text, name = getNAme()) {
// console.log(`${text}, ${name}!`);
// }
// sayHi(greetMsg, getNAme(user));


// function showMsg() {
// const myVar = 1;
//     console.log(myVar);
// }
// showMsg();

// console.log(myVar);

// Практака 22 слайд
// Первая задача
// const calcPower = function (num, power = 1) {
//     if (typeof num !== 'number');{
//     const errorMsg = "Некоректные аргументы";
//     return errorMsg;
//     }
//     return num ** power;
//     }
// const result = calcPower(2, 3);
// console.log(result);

// Третяя задача

// const myArray = [];
// const calcAveragValue = function (arr) {
//     if (!arr. length){
//         return "Пустой массив";
//     }
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
// return sum / arr.length;
// };

// console.log(calcAveragValue(myArray))

// Стрелочные функции 

// const calcVaule = (a, b) => a + b;

// const result = calcVaule(3, 5);
// console.log(result);

