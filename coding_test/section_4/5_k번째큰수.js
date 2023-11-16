function solution(n, k, card) {
  let answer;

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

/////////////////////////////////////////
function solution(n, k, card) {
  let answer;
  let tmp = new Set(); // 중복 수 제거
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        // 3개씩 모두 더함
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  // 가장 큰 수 부터 정렬
  let a = Array.from(tmp).sort((a, b) => b - a);
  // k 번째 수 골라냄
  answer = a[k - 1];

  return answer;
}
