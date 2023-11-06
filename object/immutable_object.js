// Extensible : 확장가능한지 여부
const person = {
  name: "가은",
  year: 2002,
  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(Object.isExtensible(person));
// ture
// 객체를 생성했을 때 기본 Extensible 값은 ture
person["like"] = "home";
console.log(person);
// { name: '가은', year: 2002, age: [Getter/Setter], like: 'home' }

Object.preventExtensions(person);
console.log(Object.isExtensible(person));
// false
person["drink"] = "coffee";
console.log(person);
// { name: '가은', year: 2002, age: [Getter/Setter], like: 'home' } -> 추가 X

delete person["like"];
console.log(person);
// { name: '가은', year: 2002, age: [Getter/Setter] } -> 삭제는 가능

// Seal : 봉인 여부
const person2 = {
  name: "가은",
  year: 2002,
  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(Object.isSealed(person2));
// false

Object.seal(person2);
console.log(Object.isSealed(person2));
// true

person2["like"] = "home";
console.log(person2);
// { name: '가은', year: 2002, age: [Getter/Setter] } -> 추가 X
delete person2["name"];
console.log(person2);
// { name: '가은', year: 2002, age: [Getter/Setter] } -> 삭제 X

Object.defineProperty(person2, "name", {
  value: "사람",
});
console.log(Object.getOwnPropertyDescriptor(person2, "name"));
// { value: '사람', writable: true, enumerable: true, configurable: false }
Object.defineProperty(person2, "name", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(person2, "name"));
// { value: '사람', writable: false, enumerable: true, configurable: false }
// seal은 configurable: false 와 동일
// configurable: false 여도 value와 writable 변경 가능 -> writable:false로 하면 value, writable 둘 다 변경 X

// Freezed : 읽기 외 모든 기능 불가능
const person3 = {
  name: "가은",
  year: 2002,
  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(Object.isFrozen(person3));
// false

Object.freeze(person3);

person3["like"] = "home";
console.log(person3);
delete person3["name"];
console.log(person3);
// { name: '가은', year: 2002, age: [Getter/Setter] }
// { name: '가은', year: 2002, age: [Getter/Setter] }
// 변경 불가

// Object.defineProperty(person3, "name", {
//   value: "사람",
// });
// TypeError: Cannot redefine property: name

console.log(Object.getOwnPropertyDescriptor(person3, "name"));
// { value: '가은', writable: false, enumerable: true, configurable: false }

//
const person4 = {
  name: "가은",
  year: 2002,
  conutry: {
    name: "대한민국",
  },
};
Object.freeze(person4);
console.log(Object.isFrozen(person4));
// true
console.log(Object.isFrozen(person4.conutry));
// false
// 상위 객체를 freeze 하여도 하위 객체까지 freeze 되지는 않는다
// Extensible, Seal도 동일
