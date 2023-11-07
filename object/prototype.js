const testObj = {};
console.log(testObj.__proto__);
// [Object: null prototype] {}
// __proto__ -> 모든 객체에 존재하는 프로퍼티, class 상속에서 부모 클래스에 해당되는 값

function Idol(name, year) {
  this.name = name;
  this.year = year;
}
console.log(Idol.prototype);
// {}
console.dir(Idol.prototype, {
  showHidden: true,
});
/* <ref *1> {
  [constructor]: [Function: Idol] {
    [length]: 2,
    [name]: 'Idol',
    [arguments]: null,
    [caller]: null,
    [prototype]: [Circular *1]
  }
} */
console.log(Idol.prototype.constructor === Idol);
// true
console.log(Idol.prototype.constructor.prototype === Idol.prototype);
// true
// -> circular reference 서로가 서로를 참조함

const yujin = new Idol("안유진", 2003);
console.log(yujin.__proto__);
// {}
console.log(yujin.__proto__ === Idol.prototype);
// true

console.log(testObj.__proto__ === Object.prototype);
// true

console.log(Idol.__proto__ === Function.prototype);
// true
console.log(Function.prototype.__proto__ === Object.prototype);
// true
console.log(Idol.prototype.__proto__ === Object.prototype);
// true

function Idol2(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
  };
}
const yujin2 = new Idol2("안유진", 2003);
const wonYoung2 = new Idol2("장원영", 2004);
console.log(yujin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yujin2.sayHello === wonYoung2.sayHello);
// false

console.log(yujin2.hasOwnProperty("sayHello"));
// true -> sayHello는 yujin2 만의 고유 프로퍼티임, 상속 X

// 프로토타입 체인으로 공유 시키기
function Idol3(name, year) {
  this.name = name;
  this.year = year;
}
Idol3.prototype.sayHello = function () {
  return `${this.name}이 인사를 합니다.`;
};
const yujin3 = new Idol3("안유진", 2003);
const wonYoung3 = new Idol3("장원영", 2004);
console.log(yujin3.sayHello());
console.log(wonYoung3.sayHello());
console.log(yujin3.sayHello === wonYoung3.sayHello);
// 안유진이 인사를 합니다.
// 장원영이 인사를 합니다.
// true
console.log(yujin3.hasOwnProperty("sayHello"));
// false -> 상속 받은 값

// static 함수 정의
Idol3.sayStaticeHello = function () {
  return `static method 정의 방법`;
};
// 인스턴스에는 이 선언 존재 X

// 오버라이드
function Idol4(name, year) {
  this.name = name;
  this.year = year;

  // 여기서 추가하면 오버라이드 됨
  this.sayHello = function () {
    return "instance method";
  };
  // instance method 출력
}
Idol4.prototype.sayHello = function () {
  return "prototype method";
};
const yujin4 = new Idol4("안유진", 2003);
console.log(yujin4.sayHello());
// prototype method

// JS는 프로토타입 값이나 프로토 값 변경 가능 -> 상속받는 클래스를 변경할 수 있음(인스턴스 생성 후에도 가능)
// getPrototypeOf , setPrototypeOf
// 인스턴스 __proto__ 변경 vs 함수 prototype 변경

function Idol5(name, year) {
  this.name = name;
  this.year = year;
}
Idol5.prototype.sayHello = function () {
  return `${this.name} sayHello`;
};

function FemaleIdol(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name} dance`;
  };
}
const yujin5 = new Idol5("안유진", 2003);
const wonYoung5 = new FemaleIdol("장원영", 2004);
console.log(yujin5.__proto__);
// { sayHello: [Function (anonymous)] }
console.log(yujin5.__proto__ === Idol5.prototype);
// true
console.log(Object.getPrototypeOf(yujin5) === Idol5.prototype);
// true
console.log(yujin5.sayHello());
// 안유진 sayHello
console.log(wonYoung5.dance());
// 장원영 dance
// console.log(wonYoung5.sayHello());
// TypeError: wonYoung5.sayHello is not a function

// setPrototypeOf -> 생성된 객체의 상속 체인 변경
Object.setPrototypeOf(wonYoung5, Idol5.prototype);
console.log(wonYoung5.sayHello());
// 장원영 sayHello
console.log(wonYoung5.constructor === FemaleIdol);
// false -> prototype을 변경했기 때문에
console.log(Object.getPrototypeOf(wonYoung5) === FemaleIdol.prototype);
// false
console.log(FemaleIdol.prototype === Idol5.prototype);
// false -> FemaleIdol의 prototype과 wonYoung5 객체와의 연결만 끊긴 것

FemaleIdol.prototype = Idol5.prototype;
const yujin6 = new Idol5("안유진", 2003);
console.log(Object.getPrototypeOf(yujin6) === FemaleIdol.prototype);
// true
console.log(FemaleIdol.prototype === Idol5.prototype);
// true
// 프로토타입을 직접 변경해버리면 함수에서 new 키워드로 인스턴스를 생성할 때 변경된 프로토타입을 그대로 상속받기 때문에 Object.getPrototypeOf(yujin6) / FemaleIdol.prototype / Idol5.prototype 값들이 전부 같아짐
