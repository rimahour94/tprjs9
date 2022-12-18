// let arr = [2, 3, 5, 7, 8, 9, 12];

// task 1-> create a perameterize function get square of each element in the array
//   expected Output:- [4,9,25,49,64,81,144]

//  task 2-> create a perameterize function get sum of all the emlements in the array
//  expected Output:- sum of all elements: 55

//  task 3-> create a function and take two parameters and search  the emlement in the array
//  expected Output:- searchElement(arr,7)
//            ---->    number is present in the array

// index    0   1   2   3   4   5   6

// console.log(arr[3]);
// console.log(arr[5]);
// console.log(arr[6]);

// Syntax for loop
// for( initialization; condition; increment/decrement ){

// }

// let i=0 ; if(2<23)

// loop execution

// i=0;  0 < 7; "hi" i=1
// i=1;  1<7; "hi"; i=2
// i=2;  2<7;  "hi"; i=3
// i=3;  3<7; "hi";  i=4
// i=4; 4<7;   "hi"; i=5
// i=5; 5<7;   "hi"; i=6
// i=6; 6<7;  "hi"; i=7
// i=7; 7<7;  -------

// for (let i = 0; i < arr.length; i++) {
// console.log(arr[i]);

// }

// const [a, b, z, d, e, f, g] = arr;

// console.log(a, b, g, f, z);

// arr = [...arr, "Ritesh", "XYZ"];

// console.log(arr);

// inbuild methods

//Array functions- map   filter   forEach    reduce    sort  slice
// string method- split
let arr = [2, 3, 4, 0, 18];
// index   0  1  2  3  4  5   6
let sqArray = arr.map((elem, i) => {
  // console.log(elem, "at", i);
  //   let sq = elem * elem;
  //   return sq;

  if (elem % 2 == 0) {
    return elem;
  }
});

// console.log(sqArray);

const filteredArr = arr.filter((a) => {
  return a != 0;
});

// console.log(filteredArr);

// const newArray = arr.forEach((x) => {
//   return x;
// });

// console.log(newArray);
let arr1 = [2, 3, 4, 0, 18];

let add = arr1.reduce((sum, num) => {
  return sum + num;
}, 10);

// console.log(add);

// sum=10   sum=10+2   sum=12
// sum=12   sum=12+3

const namesArr = ["kamal", "raman", "abhijeet", "prateek", "john"];
// index             0         1         2          3         4
// const sortedArray = namesArr.sort((a, b) => {
//   return -1 * a.localeCompare(b);
// });

// console.log(sortedArray);

const slicedArray = namesArr.slice(0, 3);

console.log(slicedArray);

let str = "ritesh$abhijeet%prateek@26-11-2022";
// expected Output  ["ritesh","abhijeet","prateek"]
const splitArr = str.split(/[$%@-]+/);

console.log(splitArr);
