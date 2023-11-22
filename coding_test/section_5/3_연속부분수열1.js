function solution(m, arr) {
  let answer = 0;
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      num += arr[j];
      if (num === m) {
        answer++;
        num = 0;
      }
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
/////////////////////////////////////////
function solution(m, arr) {
  let answer = 0;
  let lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }

  return answer;
}
