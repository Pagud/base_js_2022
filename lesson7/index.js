// const myArray = [1, () => console.log("123"), "string"];

// console.log(myArray);
// console.log(typeof myArray);
// console.log(Array.isArray(myArray));

// // const newArray = new Array(5);
// newArray[6] = 1;
// console.log(newArray);

// const user = {
//     id: 1,
//     name: 'Vasya',
//     data: [1, 2, 3, 4],
// };

// const users = [
//     {id: 1, name: "Vasya" },
//     {id: 2, name: "Olga" },
//     {id: 3, name: "Lena" },
//     {id: 4, name: "Petya" },
//     {id: 5, name: "Gennadiy" },
// ];

// Многомерные массивы
// const myArray = [[(1, 2)], [3, 4], [5, 6]];

// console.log(myArray[0] [1]);

// неправильные индексы

// const myArr = [1, 2, 3, 4, 5];

// myArr[1000] = 10;

// console.log(myArr);

// const myArr = ["один", "два", "три", "четыре", "пять"];

// myArr.push("шесть", "семь"); //добавляет эллемент в конец массива
// myArr.unshift("ноль"); // добавляет эллемент в начало
// myArr.shift(); //удаляет элемент и начала массива
// myArr.pop(); // удаляет элемент в конце

// const reverseArraay =  myArr.reverse().push("ноль");

// console.log(myArr);

// const str = [1, 2, 4];
// str:index0f()
// console.log(myArr.includes(1));

// Полезные методы массива

//find

// const myArr = ["оидин", "два", "три", "четыре"];

// const users = [
//     { id: 1, name: "Vasya" },
//     { id: 2, name: "Olga" },
//     { id: 3, name: "Igor" },
//     { id: 4, name: "Lena" },
//     { id: 5, name: "Petya" },
//   ];

// const foundItem = users.find((user) => user.id === 1);

// console.log(foundUser);
// const users = [
//   { id: 1, name: "Vasya", isAdmin: false },
//   { id: 2, name: "Olga", isAdmin: false  },
//   { id: 3, name: "Igor", isAdmin: false },
//   { id: 4, name: "Lena", isAdmin: true},
//   { id: 5, name: "Petya", isAdmin: false },
// ];

// const notAdminUsers = users.filter((user) => !user.isAdmin )

// console.log(notAdminUsers);

// метод map

// const users = [
//   { id: 1, name: "Vasya", isAdmin: false },
//   { id: 2, name: "Olga", isAdmin: false  },
//   { id: 3, name: "Igor", isAdmin: false },
//   { id: 4, name: "Lena", isAdmin: true },
//   { id: 5, name: "Petya", isAdmin: false },
// ];

// const modifiendUsers = users.map((users) => {
//     return {ID: users.id, userName: users.name }
// });

// console.log(modifiendUsers);

// forEach
const users = [
  { id: 1, name: "Vasya", isAdmin: false },
  { id: 2, name: "Olga", isAdmin: false },
  { id: 3, name: "Igor", isAdmin: false },
  { id: 4, name: "Lena", isAdmin: true },
  { id: 5, name: "Petya", isAdmin: false },
];
