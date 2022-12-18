// const funA = (a) => {
//   //   console.log(a);
//   //   let v2 = a();
//   // return a;

//   const innerFunction = () => {
//     return "inner Function " + a;
//   };

//   return innerFunction;
// };

// const v1 = funA(56);
// let v2 = v1();
// console.log(v2);
// console.log(v1);
// const v2 = v1();

// console.log(v1);

// map(() => {});
// const a=()=>{
//     console.log("Callback Function")
// }

// callback hell

const funA = () => {
  console.log("quick start");
  setTimeout(() => {
    console.log("After 2 seconds funA");
    const funB = () => {
      setTimeout(() => {
        console.log("after funA 2 seconds");
      }, 2000);
      const funC = () => {
        setTimeout(() => {
          console.log("after funb 1 seconds");
        }, 1000);
      };
      funC();
    };
    funB();
  }, 2000);

  // const funB = () => {

  // };
};

funA();
