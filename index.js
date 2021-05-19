// Arrow function
const sqrt = (number) => Math.sqrt(number);

console.log(sqrt(4));

// normal function

function sqrtNum(number) {
  console.log(Math.sqrt(number));
}

sqrtNum(4);

// classes
class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}
class Person extends Human {
  constructor() {
    super();
    this.name = "Tony";
    // this.gender = "female";
  }
  printName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printName();
person.printGender();
