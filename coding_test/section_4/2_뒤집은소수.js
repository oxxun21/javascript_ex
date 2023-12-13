// function isPrime(num) {
//   for (let i = 2; i <= parseInt(num / 2); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//     return true;
//   }
// }
// function solution(arr) {
//   let answer = [];
//   let reverseArr = [];
//   for (let x of arr) {
//     reverseArr.push(parseInt(x.toString().split("").reverse().join("")));
//   }
//   for (let i = 0; i < reverseArr.length; i++) {
//     if (isPrime(reverseArr[i])) {
//       answer.push(reverseArr[i]);
//     }
//   }

//   return answer;
// }

// let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr));

/////////////////////////////////////////
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(num / 2); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let num = Number(x.toString().split("").reverse().join(""));
    if (isPrime(num)) answer.push(num);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

// /////////////////////////////////////////
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(num / 2); i++) {
    // i <= parseInt(Math.sqrt(num))
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t; // 뒤집기
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

/////////////////////////////////////////
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split("").reverse().join(""));
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}
