// //1.

// let getCubeOfNumber = (num) => num * num * num;
// console.log(getCubeOfNumber(2));

// //2.

// let getResult = (a, b, c) => (a + b) / c;
// console.log(getResult(2, 8, 5));

// //3.

// let DayByNumber = (num) => {
//   switch (num) {
//     case 1:
//       console.log("Понеділок");
//       break;
//     case 2:
//       console.log("Вівторок");
//       break;
//     case 3:
//       console.log("Середа");
//       break;
//     case 4:
//       console.log("Четвер");
//       break;
//     case 5:
//       console.log("П'ятниця");
//       break;
//     case 6:
//       console.log("Субота");
//       break;
//     case 7:
//       console.log("Неділя");
//       break;

//   }
// }
// DayByNumber(5);

//4.

// let findFactorial = (num) => num != 1 ? num * findFactorial(num - 1) : 1;


// // console.log(findFactorial(4));


// let findFactorial = (num) => {
//    if (num < 0) {
//     return -1;
//    } else if (num == 0) {
//     return 1;
//     } else {
//       return (num * findFactorial(num - 1));
//     }
   
// }

// console.log(findFactorial(4));


//5.

// let timeConverter = (h, m, s) => {
//   const hour = 3600;
//   const minute = 60;
//   s = (h * hour) + (m * minute) + s;
//   return s;
// }

// console.log(timeConverter(1, 50, 59));

//6.

// let secondConverter = (seconds) => {
//     if (seconds > 86399) {
//         result = 'Більше одного дня!';
//     } else {
//         let hour = Math.floor(seconds / 3600);
//         seconds = seconds - hour * 3600;
//         let minute = Math.floor(seconds / 60);
//         seconds = seconds - minute * 60;
//         result = `${hour}:${minute}:${seconds}`; 
//     } 
//     return result;
// }
// console.log(secondConverter(9999));

//7.
// 1) The arrow function allows a developer to accomplish the same result with fewer lines of code and approximately half the typing.
// Curly brackets aren’t required if only one expression is present. If there’s only one argument, then the parentheses are not required either.
// 2) Unlike regular functions, arrow functions do not have their own this. The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.
// 3) Regular functions created using function declarations or expressions are constructible and callable. Since regular functions are constructible, they can be called using the new keyword.
// However, the arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword.
// 4) Arrow functions can never have duplicate named parameters, whether in strict or non-strict mode.
