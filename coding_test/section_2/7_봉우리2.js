function solution(arr) {
  let answer = 0;
  let n = arr.length;
  // 행 방향
  let dx = [-1, 0, 1, 0];
  // 열 방향
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 방향 좌표 탐색
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        // 가려는 방향
        let nx = i + dx[k]; // 가려는 행 좌표
        let ny = j + dy[k]; // 가려는 열 좌표
        // 가장자리 0
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
