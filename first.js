//  dataTypes          data
// integer   12345
// String    "12345" or '12345'
// float     1.2234
// double    1.222222222222
// Boolean   true or false

//  initialization

// a = 12345;

// explanation

// a-> variable
// 12345-> data type--> integer

// *****CONST LET VAR *****

// ***CONST****

const a = 12345; // complete initialization
// a = "Ritesh";  i) we can not change the value
//   ii) we can not redeclare the variable
// var a = "Ritesh" // redeclaration

// ***LET****

let b = "Ritesh"; //i) we can change the value
// let b = 4.5;  // ii) we can not redeclare

// console.log(b);

// ***VAR****
var c = true; //i) we can change the value
var c = false; //ii) we can redeclare the varaible with var keyword only.
// console.log(c);


//***** SCOPE *****
function add() {
  var n1 = 30;
  console.log(n1);
}

// add();

// ****BLOCK SCOPE*****

let num1 = 4000;
let num2 = 600;

if (num1 > num2) {
  var company_Name = "GOOGLE";
  console.log("IF Block");
} else {
  console.log("ELSE Block");
}

console.log(company_Name);
