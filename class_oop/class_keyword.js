class Person {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayName() {
    return `Hello, ${this.name}`;
  }
}

// class Person {
//   프로퍼티 정의 안해도됨
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

const gaeun = new Person("가은", 2002); // -> 인스턴스
console.log(gaeun);
// Person { name: '가은', year: 2002 }
console.log(gaeun.name);
// 가은
console.log(gaeun.sayName());
// Hello, 가은
console.log(typeof Person);
// function
console.log(typeof gaeun);
// object
