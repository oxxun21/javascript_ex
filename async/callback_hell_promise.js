// function waitAndRun() {
//   setTimeout(() => {
//     console.log("1번 콜백");
//     setTimeout(() => {
//       console.log("2번 콜백");
//       setTimeout(() => {
//         console.log("3번 콜백");
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }
// waitAndRun();

////////////////////////////////////
// const timeoutPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("완료");
//   }, 2000);
// });

// timeoutPromise.then((res) => {
//   console.log("---then---");
//   console.log(res);
// });

////////////////////////////////////
// const getPromise = (sec) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("완료");
//     }, sec * 1000);
//   });

// getPromise(1)
//   .then((res) => {
//     console.log("---first then---");
//     console.log(res);
//     return getPromise(3);
//   })
//   .then((res) => {
//     console.log("---second then---");
//     console.log(res);
//   });

////////////////////////////////////
const getPromise = (sec) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("에러");
    }, sec * 1000);
  });

// getPromise(3)
//   .then((res) => {
//     console.log("---first then---");
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log("---first catch---");
//     console.log(res);
//   })
//   .finally(() => {
//     console.log("--- finally ---");
//   });

////////////////////////////////////
Promise.all([getPromise(1), getPromise(4), getPromise(2)]).then((res) => {
  console.log(res);
});
