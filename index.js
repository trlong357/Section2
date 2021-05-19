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

//ES 7
class Human2 {
  gender = "male";

  printGender = () => console.log(this.gender);
}

class Person2 extends Human2 {
  name = "tony";

  printName = () => console.log(this.name);
}

const person2 = new Person2();
person2.printGender();
person2.printName();

//Spread | Rest

const number = [1, 2, 3, 4, 5];
const newNumber = [...number, 6];
console.log(newNumber);

const newPerson = {
  ...person2,
  age: 28,
};
console.log(newPerson);

const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 3, 4, 5));

// Destructuring

[num1, , num3] = number;
console.log(num1, num3);

const { name } = person2;
console.log(name);
