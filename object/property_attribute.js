// 1. 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
// 2. 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티 (ex .getter/setter)

const person = {
  name: "가은",
  year: 2002,
};

console.log(Object.getOwnPropertyDescriptor(person, "name"));
// { value: '가은', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(person, "year"));
// { value: 2002, writable: true, enumerable: true, configurable: true }

// value: 실제 프로퍼티 값
// writable: 값을 수정할 수 있는지 여부, false로 설정하면 프로퍼티 값 수정 불가
// enumerable: 열거가 가능한지 여부, for..in loop 등 사용 가능하면 true

// configurable: 프로퍼티 어트리뷰트의 재정의가 가능한지 여부, false 경우 프로퍼티 삭제나 어트리뷰트 변경 금지 *writable이 true인 경우 값 변경과 writable 변경은 가능*

console.log(Object.getOwnPropertyDescriptors(person));
// {
//   name: { value: '가은', writable: true, enumerable: true, configurable: true },
//   year: { value: 2002, writable: true, enumerable: true, configurable: true }
// }

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

console.log(person2);
// { name: '가은', year: 2002, age: [Getter/Setter] }
console.log(person2.age);
// 21
person2.age = 22;
console.log(person2.age);
console.log(person2.year);
// 22
// 2001

console.log(Object.getOwnPropertyDescriptor(person2, "age"));
// {
//   get: [Function: get age],
//   set: [Function: set age],
//   enumerable: true,
//   configurable: true
// }

person2.height = 164;
console.log(person2);
// { name: '가은', year: 2001, age: [Getter/Setter], height: 164 }
console.log(Object.getOwnPropertyDescriptor(person2, "height"));
// { value: 164, writable: true, enumerable: true, configurable: true }

// 프로퍼티 어트리뷰트를 직접 설정 가능
Object.defineProperty(person2, "height", {
  value: 164,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(person2);
// { name: '가은', year: 2001, age: [Getter/Setter], height: 164 }
console.log(Object.getOwnPropertyDescriptor(person2, "height"));
// { value: 164, writable: true, enumerable: true, configurable: true }

Object.defineProperty(person2, "height", {
  value: 164,
  // writable: true,
  // enumerable: true,
  // configurable: true,
});
console.log(person2);
console.log(Object.getOwnPropertyDescriptor(person2, "height"));
// { value: 164, writable: false, enumerable: false, configurable: false }

console.log("---------------");

// writable
person2.height = 180;
console.log(person2);

Object.defineProperty(person2, "height", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(person2, "height"));
// { value: 180, writable: false, enumerable: true, configurable: true }
person2.height = 172;
console.log(person2);
// { name: '가은', year: 2001, age: [Getter/Setter], height: 180 }
// 값 변경 X

console.log("---------------");

// enumerable
console.log(Object.keys(person2));
// [ 'name', 'year', 'age', 'height' ]
for (const key in person2) {
  console.log(key);
}
// name
// year
// age
// height

Object.defineProperty(person2, "name", {
  enumerable: false,
});

console.log(Object.keys(person2));
// [ 'year', 'age', 'height' ]
// name enumerable이 false가 되었기 때문에 열거 X
console.log(person2.name);
// 가은 -> 값은 존재함

console.log("---------------");

// configurable
Object.defineProperty(person2, "height", {
  writable: true, // *writable이 true인 경우 값 변경과 writable 변경은 가능*
  configurable: false,
});

// Object.defineProperty(person2, "height", {
//   enumerable: false,
// });
// TypeError: Cannot redefine property: height

Object.defineProperty(person2, "height", {
  value: 164,
});
console.log(Object.getOwnPropertyDescriptor(person2, "height"));
// { value: 164, writable: true, enumerable: true, configurable: false }

// Object.defineProperty(person2, "height", {
//   writable: false,
// });
// Object.defineProperty(person2, "height", {
//   writable: true,
// });
// TypeError: Cannot redefine property: height
// writable: false가 되면 다시 변경 불가
