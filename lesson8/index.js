// как скопировать объект

// const myObject = {name: 'Vasya'};
// const myObject2 = Object.assing({}, myObject);

// myObject2.name = "petya";
// console.log(myObject, myObject2);

// второй способ

// const myObject = {name: 'Vasya'};
// //const myObject2 = Object.assing({name: 20}, myObject);
// const myObject2 = { ...myObject};

// const{ name } = myObject2;

// console.log(name);

// console.log(myObject, myObject2);

// const myArray = [5, 4, 2 ,6];
// const myArray2 = [10, 12, 8];

// const newArray = [... myArray, ...myArray2];
// console.log(newArray);

// найти что это!!
// const myFucn = (arg1, arg2, ...args) => {
//     console.log("ARG1",arg1);
//     console.log("ARG2",arg2);
//     console.log("ARGS",args);

// };myFucn(5, 2, 4, 7, 10, 20);

// const myArray = [2, 5, 10];
// for(let element of myArray) {

//     console.log(element);
// }

// const myObject = { name: "vasya", age: 20, gender: "male" };
// const newArr = [];
// for (let key in myObject) {
//   newArr.push(myObject[key]);
// }
// console.log(newArr);

// console.log(this);

// const myObject = {
//   name: "Vasya",
//   callName: function () {
//       console.log(this);
//     console.log(this.name);
//   },
// };

// myObject.callName();

// const newObject + {
//     name :"Petya",
//     obj: myObject,

// }
// newObject.obj.callName()

// const myObject = {
//   name: "Opaliha",
//   namber: 123123,
//   callName: function () {
//       console.log(this.name);
//     console.log(this);
//   },
// };
// myObject.callName();

// Метод аплай

// const myObject = {
//   name: "Vasya",
//   callName: function () {
//     console.log(this.name);
//   },
// };

// const newObject = {
//   name: "Petya",
// };

// myObject.callName.call(newObject);

// const say = function (phrase, phrase2) {
//     console.log(`${this.name}: ${phrase}`);
//     console.log(phrase2);
//   };

//   const myObject = {
//     name: "Vasya",
//   };

//   const newObject = {
//     name: "Petya",
//   };

//   const argsArray = ["Привет", "phrase"];

//   say.apply(myObject, argsArray);

//   // say.call(newObject, "И тебе привет!", "phrase");
//   const boundFunc = say.bind(newObject, "И тебе привет!", "phrase");
//   boundFunc();

// const myCity = {
//   name: "Moscow",
//   population: 10000000,
//   showName: function () {
//     console.log(this.name);
//   },
//   showPopulation: function () {
//     console.log(this.population);
//   },

//   changeKeyValue: function (key, newValue) {
//     switch (key) {
//       case "name":
//         this.name = newValue;
//         return;
//       case "population":
//         this.population = newValue;
//         return;
//       default:
//         console.log("Ключ не найден");
//         return;
//     }
//   },
// };
// const newCity = {
//     name: "NN",
//     population: 1500000,
//   };

//   myCity.showName.call(newCity);
//   myCity.showPopulation.call(newCity);
//   myCity.changeKeyValue.call(newCity, "name", "NY");
//   myCity.changeKeyValue.apply(newCity, ["population", 5000]);

//   const boundFunc = myCity.changeKeyValue.bind(newCity, "name", "LA");
//   boundFunc();

//   console.log(newCity)

// замыкание

// const myFunc = () => {
//   const myVar = 5;

//   return (param) => {
//     console.log(myVar + param);
//   };
// };

// myFunc() (123124);

//карирование 

// const myFunc = (a) => {
//     return (b) => {
//         return (c) =>{
//             return a + b + c;
//         };
//     };
// };

// console.log(myFunc(2)(3)(10));


// const myFunc = () => {
//     const height = 10;
    
//     return(length, width) => {
//         console.log(length * width * height);
//     };
// };
// myFunc()(1, 4);


