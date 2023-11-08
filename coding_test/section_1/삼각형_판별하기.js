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
