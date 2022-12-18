//  Callback Task

const funA = (obj) => {
  obj.name = "Ritesh";
  console.log(obj.name, "name added");
  setTimeout(() => {
    const funB = () => {
      obj = { ...obj, city: "Noida" };
      console.log(obj.city, "city added");
      setTimeout(() => {
        const func = () => {
          obj = { ...obj, rollno: 123 };
          console.log(obj.rollno, "roll no added");

          setTimeout(() => {
            const funD = () => {
              console.log(obj);
            };
            funD();
          }, 2000);
        };
        func();
      }, 2000);
    };
    funB();
  }, 2000);
};

funA({});
