// JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가 정의 시점에 평가
// *하지만 this는 바인딩이 객체가 생성되는 시점에 결정

const testFunction = function () {
  return this;
};
console.log(testFunction());
// <ref *1> Object [global] ~~
console.log(testFunction() === global);
// true

const yuJin = {
  name: "안유진",
  year: 2003,
  sayHello: function () {
    return `Hello, ${this.name}`;
  },
};
console.log(yuJin.sayHello());
// Hello, 안유진

function Person(name, year) {
  this.name = name;
  this.year = year;
  this.sayHello = function () {
    return `Hello, ${this.name}`;
  };
}
const yuJin2 = new Person("안유진", 2003);
console.log(yuJin2.sayHello());
// Hello, 안유진

// Person.prototype.dance = function () {
//   return `${this.name} dance`;
// };
// console.log(yuJin2.dance());
// 안유진 dance
// -> 프로토타입에 함수를 정의해도 this 키워드는 실행하는 객체로 맵핑 됨

Person.prototype.dance = function () {
  function dance2() {
    return `${this.name} dance`;
  }
  return dance2();
};
console.log(yuJin2.dance());
// undefined dance
// 객체의 메서드 (최상위 레벨)에 함수를 선언하면 this는 자동으로 실행하는 대상 객체로 맵핑
// -> 그 외 위치에다 함수를 선언하게 되면 함수의 this는 무조건 global 객체에 맵핑

// 1. 일반 함수로 호출 -> this는 최상위 객체(global/window)를 가리킴
// 2. 메서드로 호출 -> 호출된 객체를 가리킴
// 3. new 키워드를 사용해서 객체 생성 -> 객체를 가리킴

// apply, call, bind
function returnName() {
  return this.name;
}
console.log(returnName());
// undefined

const yuJin3 = {
  name: "안유진",
};
console.log(returnName.call(yuJin3));
// 안유진
// 컴마를 기반으로 아규먼트를 순서대로 넘김
console.log(returnName.apply(yuJin3));
// 안유진
// 아규먼트를 리스트로 입력해야 함

function multiply(x, y, z) {
  return `${this.name} / 결과: ${x * y * z}`;
}
console.log(multiply.call(yuJin3, 3, 4, 5));
// 안유진 / 결과: 60
console.log(multiply.apply(yuJin3, [3, 4, 5]));
// 안유진 / 결과: 60
// call과 apply는 실행하는 순간 바로 함수 실행

const laterFunction = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunction);
// [Function: bound multiply]
console.log(laterFunction());
// 안유진 / 결과: 60
// bind는 this를 바인딩 해놓고 나중에 실행 가능
