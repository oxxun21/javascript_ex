function solution(a, b, c) {
  let answer = "YES",
    max;
  let arr = [a, b, c];
  max = Math.max(a, b, c);
  const maxOther = arr.filter((i) => i !== max);
  const otherAdd = maxOther[0] + maxOther[1];
  if (max > otherAdd) {
    answer = "NO";
  }
  return answer;
}

console.log(solution(13, 33, 17));
console.log(solution(6, 7, 11));

/////////////////////////////////////////
function solution(a, b, c) {
  let answer = "YES",
    max;
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (sum - max <= max) answer = "NO";
  return answer;
}

console.log(solution(13, 33, 17));
console.log(solution(6, 7, 11));
