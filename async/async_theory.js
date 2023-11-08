// 동기
// function longWork() {
//   const now = new Date();
//   const milliseconds = now.getTime();
//   const afterTwoSeconds = milliseconds + 2 * 1000;

//   while (new Date().getTime() < afterTwoSeconds) {}
//   console.log("끝");
// }

// console.log("Hello");
// longWork();
// console.log("World");
// Hello
// 끝
// World

// 비동기
function longWork() {
  setTimeout(() => {
    console.log("끝");
  }, 2000);
}

console.log("Hello");
longWork();
console.log("World");
// Hello
// World
// 끝
