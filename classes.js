// let n = "Institute";
class Parent {
  n = 345;

  constructor(insName) {
    console.log("Constructor called");
    this.insName = insName;
    this.funA = this.funA.bind(this);
  }

  funA() {
    console.log("Institute Name::", this.insName);
  }

  funB = () => {
    console.log("fun B");
    this.funA();
  };
}

class Child extends Parent {
  constructor(name) {
    super(name);
    console.log("Constructor called in Child Class");
  }
  funC = () => {
    console.log("Fun C", this.n);
    this.funA();
  };
}

const ch1 = new Child("Pillar");
ch1.funC();
// const p1 = new Parent("Pillar");
// const p2 = new Parent("NIU");
// console.log(p1);

// p1.funB();
// p2.funB();
