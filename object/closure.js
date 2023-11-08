// 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합
// 상위 함수보다 하위 함수가 더 오래 살아있는 경우

// function getNum() {
//   var num = 5;
//   function innerGetNum() {
//     return num;
//   }
//   return innerGetNum();
// }
// console.log(getNum());
// 5

function getNum() {
  var num = 5;
  function innerGetNum() {
    return num;
  }
  return innerGetNum;
}
const runner = getNum();
console.log(runner);
// [Function: innerGetNum]
console.log(runner());
// 5

// 데이터 캐싱 시
function cacheFun(newNum) {
  // 계산이 매우 오래걸린다고 가정
  var num = 10 * 10;
  function innerCacheFun(newNum) {
    return num * newNum;
  }
  return innerCacheFun;
}
const runner2 = cacheFun();
console.log(runner2(10));

function cacheFun2() {
  var num = 99;

  function incremet() {
    num++;
    return num;
  }
  return incremet;
}
const runner3 = cacheFun2();
console.log(runner3());

// 정보 은닉
function Person(name, year) {
  this.name = name;
  var _year = year;
  this.sayHello = function () {
    return `Hello, ${this.name}-${_year}`;
  };
}
const yuJin = new Person("안유진", 2003);
console.log(yuJin.sayHello());
// Hello, 안유진-2003
console.log(yuJin._year);
// undefined
