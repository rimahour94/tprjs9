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
  
  };
  
  funA();