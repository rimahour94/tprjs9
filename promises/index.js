const collegeData = require("../apiData/index.json");
// console.log(collegeData.length);
const pr = new Promise((resolve, reject) => {
  console.log("quick start");
  let arr = [];
  setTimeout(() => {
    if (collegeData.length !== 0) {
      resolve(collegeData);
    } else {
      reject("Data not found");
    }
  }, 3000);

  console.log("end ");
});

const funPromises = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let obj = {
        name: "Ritesh",
        empId: "ri100",
      };
      reject(
        `My name is ${obj.name}, my empid is ${obj.empId} and i am from ${data[5].collegeName} college`
      );
    }, 2000);
  });
};

// const pr1 = funPromises("DU");

// pr.then((res) => {
//   console.log(res, "success");
//   let pr1 = funPromises(res);
//   pr1
//     .then((res1) => {
//       console.log(res1);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }).catch((err) => {
//   console.log(err, "failure");
// });

// pr1
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const getDetails = async () => {
  try {
    const res = await pr;
    const res1 = await funPromises(res);
    console.log(res1);
  } catch (err) {
    console.log(err);
  }
};

getDetails();
