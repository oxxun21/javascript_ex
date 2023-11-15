// function solution(n, arr) {
//   let answer = 0,
//     max = 0;
//   let numarr = [];
//   for (let i = 0; i < n; i++) {
//     numarr = arr[i]
//       .toString()
//       .split("")
//       .map((i) => Number(i));
//     for (let x of numarr) {
//       max += x;
//     }
//     answer = Math.max(answer, max);
//     max = 0;
//     numarr = [];
//   }
//   return answer;
// }

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

/////////////////////////////////////////
function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10; // 10으로 나눈 나머지로 한자리씩 쪼갤 수 있음
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

/////////////////////////////////////////
function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, c) => a + Number(c), 0);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}
