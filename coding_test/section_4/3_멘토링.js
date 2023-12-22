function solution(test) {
  let answer = 0;

  // 학생 짝의 모든 경우의 수
  for (let i = 0; i <= test[0].length; i++) {
    for (let j = 0; j <= test[0].length; j++) {
      let cnt = 0;
    }
  }

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

/////////////////////////////////////////
function solution(test) {
  let answer = 0;
  let m = test.length;
  let n = test[0].length;

  // 첫시도
  // 학생들 멘토,멘티 짝 모든 경우의 수
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // 관찰하려는 순서쌍 : (i,j)
      let cnt = 0;
      // 점수 확인
      // 배열 탐색

      // 배열마다 i이 j보다 인덱스상에서 앞에 위치하는지 check
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          // 학생의 점수
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }

        // pi = test[k].indexOf(i);
        // pj = test[k].indexOf(j);
        if (pi < pj) cnt++;
      }
      // 모두 점수가 높아야함
      if (cnt === m) answer++;
    }
  }
  return answer;
}

// 종이랑 펜을 항상 옆두고,,

/**
*
배열의 모든 짝을 다 돌아야된다.
배열 안에서 비교를 해야된다.
-> 어떻게 비교하지?
-> 규칙에 맞나?
-> 3 이 1보다 항상 앞에 있나??
-> 항상 앞이면?? 맞는 경우 -> 3번으로
-> 항상 앞에 있지 않으면?? 아닌 경우 -> 4번으로
배열 다 돌았을 때 등수가 맞으면 answer ++
-> 등수가 맞다는 조건을 어떻게 세우지??
아니면 answer에 아무짓도 안한다.
**/

// 이문제를 한 한시간 봤을때

// 위 문제의 단순한 버전
// [3, 4, 1, 2]

// 1.
// 멘토링의 조건 : 더 잘하면 됨
// n과 arr을 입력 받았을 때 n번 학생이 arr에서 멘토링이 가능한 순서쌍을 모두 출력하세요
// input  3, [1,3,4,2]
// output (3,4) (3,2)

// 2.
// T와 n을 입력 받고 T : 시행횟수 n은 학생 번호
// T번 arr을 입력받음
// 배열별로 가능한 멘토링 순서쌍을 출력하세요.
// 단 순서쌍이 없는 경우는 입력으로 들어오지 않아요
// input 4, 3
// [1,2,3,4] -> (3,4)
// [1,3,2,4] -> (3,2) (3,4)
// [3,1,2,4] -> (3,1) (3,2) (3,4)
// [3,2,4,1] -> (3,2) (3,4) (3,1)

// 3.
// arr을 입력받았을때, 멘토링이 가능한 모든 순서쌍을 출력하세요
// [1,2,3,4] => (1,2) (1,3) (1,4) (2,3) (2,4) (3,4)

// 위 문제들 풀때 멘토링 순서쌍 어떻게 찾을래?
// 비교할 숫자 하나보다 다 뒤에 있나 없나.
// 인덱스 말고 없어

// 문제의 단순화를 한번 해보자.
