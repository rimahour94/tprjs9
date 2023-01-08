const funA = () => {
  let a = 20;
  return (funB = () => {
    let b = 30;
    console.log(a + b);
  });
};

let v1 = funA();
v1();
