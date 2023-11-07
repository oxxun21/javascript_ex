var numberOne = 20;
function levelOne() {
  console.log(numberOne);
}
// levelOne();
// 20

function levelOne() {
  var numberOne = 40;
  console.log(numberOne);
}
// levelOne();
// 40
// console.log(numberOne);
// 20

function levelOne() {
  var numberOne = 40;
  function levelTwo() {
    var numberTwo = 99;
    console.log(numberOne);
    // 40
    console.log(numberTwo);
    // 99
  }
  levelTwo();
  console.log(numberOne);
  // 40
}
levelOne();
console.log(numberOne);
// 20
// console.log(numberTwo);
// ReferenceError: numberTwo is not defined

// lexical scope : 선언된 위치가 상위 스코프를 정함 *js*
// <-> dynamic scope: 실행한 위치가 상위 스코프를 정함
var numberThree = 3;
function functionOne() {
  var numberThree = 100;
  functionTwo();
}
function functionTwo() {
  console.log(numberThree);
  // 3
}
functionOne();

var i = 999;
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i = ${i}`);
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// i = 10
// var 키워드가 스코프가 생기는 경우는 함수를 선언했을 때 뿐

i = 999;
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i = ${i}`);
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// i = 999
// let, const는 함수 레벨 및 블록 레벨 스코프
