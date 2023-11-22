function solution(m, arr) {
  let answer = 0;
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (arr[i] < m) answer++;
    for (let j = i + 1; j < arr.length; j++) {
      num += arr[j];
      if (num <= m) {
        answer++;
      }
    }
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
/////////////////////////////////////////
function solution(m, arr) {
  let answer = 0;
  let lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}
