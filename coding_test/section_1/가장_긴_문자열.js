function solution(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < s.length; i++) {
    if (max < s[i].length) {
      max = s[i].length;
      answer = s[i];
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
