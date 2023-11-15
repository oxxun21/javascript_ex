function solution(test) {
  let answer = 0;

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

/////////////////////////////////////////
function solution(test) {
  let answer = 0;
  let m = test.length;
  let n = test[0].length;

  // 학생들 멘토,멘티 짝 모든 경우의 수
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      // 점수 확인
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          // 학생의 점수
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      // 모두 점수가 높아야함
      if (cnt === m) answer++;
    }
  }
  return answer;
}
