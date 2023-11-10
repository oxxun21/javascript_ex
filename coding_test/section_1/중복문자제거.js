function solution(s) {
  let answer = [...new Set(s)].join("");
  return answer;
}
console.log(solution("ksekkset"));
