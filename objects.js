let batch9 = {
  studentName: "Kamal",
  subjectId: 123,
  cities: ["Noida", "Delhi", "Dehradun"],
  funA: () => {
    let company = "GOOGLE";
    console.log(batch9.studentName, company, "in Object function");
  },
  book: {
    bookId: 1,
    bookName: "REACTJS",
    issueDate: "06-11-2022",
    returnDate: "13-11-2022",
  },
};

// console.log(batch9.studentName);
// console.log(batch9.subjectId);

// batch9.funA();

// console.log(batch9.book.issueDate);

// Object Destructuring

const { studentName, subjectId, cities, funA } = batch9;
const { bookId, bookName, issueDate } = batch9.book;
// console.log(studentName);
// console.log(subjectId);
// console.log(cities);

// console.log(bookId);
// console.log(bookName);
// funA();

// let studentName = "Kamal";
// let studentId = "K10";
// let schoolName = "DPS";
// let subject = "JS";

// let studentName = "Prateek";
// let studentId = "P20";
// let schoolName = "GD Goenka";
// let subject = "MAths";

const objKeys = Object.keys(batch9);
const objValues = Object.values(batch9);
// console.log(objKeys);
// console.log(objValues);

let objOne = {
  0: "Ritesh",
  1: 123,
  2: true,
  xyz: "GOOGLE",
};

// console.log(objOne[0]);
// console.log(objOne.xyz);

// for (let i = 0; i <= 3; i++) {
//   console.log(objOne[i]);
// }

// const funObject = (keys) => {
//   console.log(batch9[keys]);
// };

// funObject("book");

let newObj = { ...batch9 };

// newObj = { ...batch9, company: "FACEBOOK", companyId: "FB101" };

newObj.studentName = "Abhi";
console.log(newObj);
console.log(batch9);
