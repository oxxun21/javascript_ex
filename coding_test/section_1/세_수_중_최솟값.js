function solution(a, b, c) {
  let answer;
  answer = Math.min(a, b, c);
  return answer;
}

console.log(solution(2, 5, 1));

/////////////////////////////////////////
function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(6, 5, 11));
