// console.log("Hello world");

const x = 4;
var y = 5.5;
var z = x / y;
// y = 6.5;
// z = x + y;
// x = 5;
console.log(z);

// var x = "Hello world";
// var y = "Hello world";
// var z = `Hello world`;
// // Dan noi: "Xin chao"
// var t = "Dan noi: 'Xin chao'  ";
// var words = `Dan noi: "Stephanie noi: 'Hello world' " `;
// const r = "t";
// console.log(words);
// console.log(typeof words);
// console.log(typeof r);

// var x = true;
// var y = false;
// x = !x;
// y = !y;
// // ! = "no"
// // no + false --> true
// // no + true --> false
// console.log(x);
// console.log(y);

// var x = 5;
// var y = 6;
// if (x == 5 || y == 6) {
//     console.log("x is equal to 5");
// } else {
//     console.log("x is not equal to 5");
// }

// ARRAY
const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = [1, 2, 3, 4, 5, 6];
// const arr3 = [1, "hello", true];
// console.log(arr3[0]);
// console.log(arr3[1]);
// console.log(arr3[2]);
// console.log(arr[5]);

// Loops
// for (var index = 0; index < 3; index = index + 1) {
//     console.log(arr[index]);
// }

// for (ele of arr) {
//     console.log(ele);
// }

// var i = 0;
// while (i < 5) {
//     console.log(arr[i]);
//     i = i + 1;
// }

passedStudents = [];
reverse = [];
for (var i = passedStudents.length - 1; i >= 0; i--) {
    reverse.push(passedStudents[i]);
}
