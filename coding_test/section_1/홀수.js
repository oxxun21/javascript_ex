function solution(arr) {
  let answer = [];
  const odd = arr.filter((i) => i % 2 === 1);
  const add = odd.reduce((a, c) => a + c, 0);
  answer.push(add);
  const min = Math.min(...odd);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
